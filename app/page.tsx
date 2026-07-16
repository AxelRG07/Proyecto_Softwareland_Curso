"use client";
import { useState } from "react";
import Titulo from "./components/Titulo";
import Parrafo from "./components/Parrafo";
import Imagen from "./components/Imagen";
import Contador from "./components/Contador";
import Libro from "./components/Libro";
import Fondo from "./components/Fondo";
import Sonner from "./components/Sonner";
import { Modal } from "./components/Modal";
import { Carrousel } from "./components/Carrousel";
import { TableDemo } from "./components/TableDemo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [fondo, setFondo] = useState(
    "bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%",
  );

  const listaFondos = [
    "bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%",
    "bg-radial-[at_50%_75%] from-pink-200 via-red-400 to-purple-900 to-90%",
    "bg-radial-[at_50%_75%] from-green-200 via-lime-400 to-emerald-900 to-90%",
    "bg-radial-[at_50%_75%] from-yellow-200 via-orange-400 to-red-900 to-90%",
  ];

  const cambiarFondo = () => {
    setFondo(listaFondos[Math.floor(Math.random() * listaFondos.length)]);
  };

  return (
    <div
      className={`flex flex-col flex-1 w-full items-center justify-center ${fondo}`}
    >
      <main className="flex flex-col w-2/3 gap-5 items-center justify-between p-16 shadow-xl bg-transparent rounded-lg">
        <Titulo fuente="italic font-sans" size="text-2xl" color="text-white" />
        <Link href="/registro">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Ir al Formulario de Registro
          </Button>
        </Link>
        <Parrafo
          fuente="not-italic font-mono"
          size="text-xl"
          color="text-gray-600"
        />
        <Imagen
          src="spidercat.jpg"
          alt="spider"
          width="w-75"
          height="h-45"
          rounded="rounded-4xl"
        />

        <Contador />

        <Libro />

        <Fondo cambiarFondo={cambiarFondo} />

        <Sonner />

        <Modal />

        <Carrousel />

        <TableDemo />
      </main>
    </div>
  );
}
