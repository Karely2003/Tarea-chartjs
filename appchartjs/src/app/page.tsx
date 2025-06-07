import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <Link href='/MarcaProducto'>Ir al gráfico Pie de productos por marca</Link>
        <Link href='/ProductosCategoria'>Ir al gráfico Polar Area de productos por categoría</Link>
        <Link href='/TotalTProducto'>Ir al gráfico Radar de valor total por tipo</Link>

      </main>

    </div>
  );
}