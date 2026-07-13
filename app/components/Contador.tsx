"use client"

import { useState } from "react";

export default function Contador() {
    const [clicks, setClicks] = useState(0);

    return (
        <div className="flex gap-5 justify-center items-center">
            <h1 className="text-2xl font-bold text-center text-gray-700">
                Contador: {`${clicks}`}
            </h1>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => setClicks((clicks + 1))}>
                +
            </button>
        </div>
    );
}