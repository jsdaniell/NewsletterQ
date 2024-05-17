let emails = [];

const EmailController = {
    getEmails: (req, res) => {
        res.json(emails);
    },
    registerEmail: (req, res) => {
        const { email } = req.body;
        emails.push(email);
        res.json(emails);
    }
}

export default EmailController;