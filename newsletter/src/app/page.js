"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [email, setEmail] = useState('')

  function onSubmit() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    fetch('http://localhost:3001/email/register-email-on-newsletter', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        email: email
      }),
    })

    setEmail('')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="h-[28rem] p-5 w-2/3 bg-cyan-600 rounded-lg flex">
        <div className="relative flex justify-center items-center bg-indigo-500 flex-[2] min-h-full rounded">
          <Image src="https://cdn-icons-png.flaticon.com/512/4939/4939994.png
" alt="hero" layout="fill" objectFit="contain" className="rounded max-h-36 flex mt-20" />
        </div>
        <div className="flex-[3] px-16 min-h-full flex flex-col text-white justify-center items-center gap-5">
          <h1 className="text-2xl">Se inscreva para receber novidades</h1>
          <p className="text-lg">Nunca mais se esqueça de comprar seus insumos semanais com qualidade de vida!</p>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite seu email" className="w-full p-2 rounded text-black" />
          <button onClick={onSubmit} className="bg-indigo-500 p-4 rounded min-w-full">Inscrever</button>
        </div>
      </div>
    </main>
  );
}
