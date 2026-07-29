import Link from 'next/link'
import Cronograma from '@/components/Cronograma'
import CostosProceso from '@/components/CostosProceso'
import { PROYECTOS } from '@/lib/proyectos'

export default function Home() {
  return (
    <main className="flex-1">
      <section className="bg-slate-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <p className="text-xs uppercase tracking-widest text-red-300 font-semibold mb-3">Impulsando el bienestar territorial</p>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight">Mejillones</h1>
          <p className="text-4xl sm:text-6xl font-light tracking-tight text-white/60 -mt-2">2050</p>
          <p className="mt-6 max-w-xl text-slate-200">
            Acuerdo de Ciudad: una alianza entre Fundación Huella Local y Corporación Ciudades para construir,
            junto a la comunidad, el gobierno local y el sector privado, la ciudad que Mejillones quiere ser.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/encuentros" className="px-4 py-2 rounded-full bg-red-600 hover:bg-red-500 text-sm font-semibold transition-colors">
              Ver los 4 Encuentros
            </Link>
            <Link href="/proyectos" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-sm font-semibold transition-colors">
              Cartera de proyectos ({PROYECTOS.length})
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-sm font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-4">Cronograma del proceso</h2>
        <Cronograma />
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-sm font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-4">Costos del proceso</h2>
        <div className="max-w-md">
          <CostosProceso />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="rounded-xl bg-slate-700 text-white px-6 py-5 flex items-center justify-between flex-wrap gap-3">
          <p className="text-sm text-slate-200">
            Una gran ventaja: damos este paso en una ruta trazada. Desde 2022, la Mesa de Convergencia ya suma más de 10 proyectos ejecutados o en diseño.
          </p>
          <Link href="/mesa-de-convergencia" className="shrink-0 px-4 py-2 rounded-full bg-red-600 hover:bg-red-500 text-sm font-semibold transition-colors">
            Conocer la Mesa de Convergencia
          </Link>
        </div>
      </section>

      <footer className="border-t border-gray-100 dark:border-gray-800 py-6">
        <p className="text-center text-sm font-semibold text-red-600">#cambiemoselmapa</p>
      </footer>
    </main>
  )
}
