import { db } from '../config/firebase.js'

export async function insertEmail(name, email) {
    await db.collection('emails').add({
        name: name,
        email: email
    })
}

export async function getEmails() {
    let emails = []
    let snapshot = await db.collection('emails').get()

    for await (let doc of snapshot.docs) {
       emails.push(doc.data())
    }
    
    return emails
}