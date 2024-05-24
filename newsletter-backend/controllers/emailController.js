import { getEmails, insertEmail } from '../repository/emailRepository.js'

const EmailController = {
    getEmails: async (req, res) => {
        try {
            const result = getEmails()

            res.json(result.rows)
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