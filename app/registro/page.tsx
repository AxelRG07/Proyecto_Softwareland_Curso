import Link from "next/link";
import { Button } from "@/components/ui/button";
import FormRegistro from "../components/form/FormRegistro";

export default function Registro() {
  return (
    <div className="flex flex-col flex-1 w-full items-center justify-center bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%">
      <main className="flex flex-col w-2/3 gap-5 items-center justify-between p-16 shadow-xl bg-transparent rounded-lg">
        <FormRegistro />
        <Link href="/">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Volver al Inicio
          </Button>
        </Link>
      </main>
    </div>
  );
}
