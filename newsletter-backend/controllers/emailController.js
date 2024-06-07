import { getEmails, insertEmail } from '../repository/emailRepository.js'
import { Resend } from 'resend';


const EmailController = {
    getEmails: async (req, res) => {
        try {
            const result = await getEmails()

            res.status(200)
            res.json(result)
            return
        } catch (error) {
            res.status(500)
            res.json({ message: 'Erro ao buscar emails' })
            return
        }
    },
    registerEmail: async (req, res) => {
        const { email, name } = req.body;

        if (!name || !email) {
            res.status(400)
            res.json({ message: 'Preencha todos os campos!' })
            return
        }

        try {
            const existentEmails = await getEmails()

            const emailAlreadyExists = existentEmails.find((existentEmail) => existentEmail.email === email)

            if (emailAlreadyExists) {
                res.status(400)
                res.json({ message: 'Email já cadastrado!' })
                return
            }


            await insertEmail(name, email)

            res.status(201)
            res.json({ message: 'Email cadastrado com sucesso!' })
            return
        } catch (error) {
            res.status(500)
            res.json({ message: 'Erro ao cadastrar email' })
            return
        }
    },
    sendEmail: async (req, res) => {
        const { email, subject, message } = req.body;

        if (!email || !subject || !message) {
            return res.status(400).json({ message: 'Email, subject and message are required' });
        }


        try {

            const emails = await getEmails()

            const emailsAsStrings = emails.map((email) => email.email)

            const resend = new Resend('re_S4vsLutT_2RxvtXU7yPFcyL4QKYimv1JB');

            await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: "danieldigitalcollege@gmail.com",
                subject: subject,
                html: `<p>${message}!</p>`
            });

            res.json({ message: 'Email enviado com sucesso!' })
            return
        } catch (error) {
            res.status(500)
            res.json({ message: 'Erro ao enviar email' + error.message })
            return
        }
    }
}

export default EmailController;