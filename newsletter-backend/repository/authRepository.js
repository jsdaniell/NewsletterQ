import { db } from '../config/firebase.js'

export default async function validateToken(token){
    const tokens = await db.collection('tokens').get()

    const tokensData = tokens.docs.map((doc) => doc.data())

    const validToken = tokensData.find((tokenData) => tokenData.token === token)

    return validToken
}