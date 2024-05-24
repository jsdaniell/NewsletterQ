import dbPostgres from '../config/postgres.js'

export async function insertEmail(name, email){
    const r = await dbPostgres.query('INSERT INTO emails (name, email) VALUES ($1, $2)', [name, email])

    return r
}

export async function getEmails(){
    const r = await dbPostgres.query('SELECT * FROM emails')

    return r
}