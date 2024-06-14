import crypto from 'crypto';

export async function stringToHash(password) {
    const hash = crypto.createHash('sha256', process.env.HASH_KEY)

    hash.update(password)
    hash.digest('hex')

    return hash
}
    