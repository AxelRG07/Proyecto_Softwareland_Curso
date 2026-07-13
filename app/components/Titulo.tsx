export default function Titulo({ fuente, size, color }: { fuente: string, size: string, color?: string }) {
    return (
        <div>
            <h1 className={`${fuente} ${color} ${size} font-bold text-center`}>
                Hola, coloca tu información y foto para tu portafolio
            </h1>
        </div>
    );
}