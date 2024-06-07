import { getEmails, insertEmail } from '../repository/emailRepository.js'

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
    }
}

export default EmailController;