import Titulo from "./components/Titulo";
import Parrafo from "./components/Parrafo";
import Imagen from "./components/Imagen";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full items-center justify-center bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%">
      <main className="flex flex-col w-2xl gap-5 items-center justify-between p-16 shadow-xl bg-transparent rounded-lg">
        <Titulo
          fuente="italic font-sans"
          size="text-2xl"
          color="text-white"
        />
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
      </main>
    </div>
  );
}
