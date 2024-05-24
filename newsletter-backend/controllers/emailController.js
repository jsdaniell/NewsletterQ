import { db } from "../config/firebase.js"

const EmailController = {
    getEmails: async (req, res) => {
        // const documentsSnap = db.collection('emails').get()

        // const docResult = []

        // await documentsSnap.then((snapshot) => {
        //     snapshot.forEach((doc) => {
        //         docResult.push(doc.data())
        //     })

        //     res.json(docResult)
        //     return
        // })
    },
    registerEmail: async (req, res) => {
        const { email, name } = req.body;

        if(!name || !email) {
            res.status(400)
            res.json({ message: 'Preencha todos os campos!' })
            return
        }

        await db.collection('emails').add({
            email,
            name
        }).then(() => {
            res.json({ message: 'Email e nome cadastrado com sucesso!' })
            return
        })
    }
}

export default EmailController;