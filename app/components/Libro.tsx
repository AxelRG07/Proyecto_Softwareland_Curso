"use client"

import React, { useState } from 'react'

export default function Libro() {
    const listaImagenes = [
        'vercel.svg',
        'spidercat.jpg',
        'file.svg'
    ]
    const [imgActual, setImgActual] = useState(0);

    return (
        <div className='flex flex-col gap-2 justify-center items-center'>
            <h1 className='text-2xl font-bold text-center text-gray-700'>Album</h1>

            <img src={listaImagenes[imgActual]} alt="imagen" className='w-30 h-30 rounded-2xl' />

            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
            onClick={() => setImgActual(imgActual < listaImagenes.length - 1 ? imgActual + 1 : 0)}>
                Siguiente
            </button>
        </div>
    )
}
