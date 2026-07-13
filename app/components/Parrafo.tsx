export default function Parrafo({ fuente, size, color }: { fuente: string, size: string, color?: string }) {
    return (
        <div>
            <p className={`${fuente} ${color} ${size} font-medium text-justify`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut atque recusandae libero asperiores. Magni soluta accusantium quae, sed neque optio, vitae repellendus dolores ex eius accusamus alias consequatur sit animi?
            </p>
        </div>
    );
}