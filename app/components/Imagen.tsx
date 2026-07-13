export default function Imagen({ src, alt, width, height, rounded }: { src: string, alt: string, width: string, height: string, rounded: string }) {
    return (
        <div>
            <img src={src} alt={alt} className={`${width} ${height} ${rounded}`} />
        </div>
    );
}