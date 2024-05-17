import {db} from "../config/firebase.js"
let emails = [];

const EmailController = {
    getEmails: (req, res) => {
        const documentsEmails = db.collection('emails').get()

        const docResult = []

        documentsEmails.forEach(doc => {
            docResult.push(doc.data())
        })

        res.json(docResult)
        return
    },
    registerEmail: (req, res) => {
        const { email } = req.body;
        emails.push(email);
        res.json(emails);
    }
}

export default EmailController;