import crypto from 'crypto';

export async function stringToHash(password) {
    const hash = crypto.createHash('sha256', process.env.HASH_KEY)

    hash.update(password)

    const hashAsString = hash.digest('hex')

    return hashAsString
}
    