"use client"
import { useState } from 'react'

export default function FormEmail() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    async function onSubmit() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        try {
            const r = await fetch('http://localhost:3001/email/register-email', {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify({
                    email,
                    name
                }),
            })

            if (r.status !== 200) {
                throw new Error('Erro ao se inscrever, tente novamente mais tarde!')
            }

            setEmail('')
            setName('')

            toast.success('Inscrição realizada com sucesso!')
        } catch (error) {
            toast.error('Erro ao se inscrever, tente novamente mais tarde!')
        }
    }

    return <>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Digite seu nome" className="w-full p-2 rounded text-black" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite seu email" className="w-full p-2 rounded text-black" />
        <button onClick={onSubmit} className="bg-indigo-500 p-4 rounded min-w-full">Inscrever</button>
    </>
}