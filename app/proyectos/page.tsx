import CarteraSelector from '@/components/CarteraSelector'

export default function ProyectosPage() {
  return (
    <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-10 w-full">
      <p className="text-xs uppercase tracking-widest text-red-600 font-semibold mb-2">Análisis de la cartera de inversiones territoriales</p>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Cartera de proyectos</h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-2xl mb-6">
        La inversión en Mejillones no viene de una sola fuente: son 4 carteras que operan en paralelo, con distinta
        gobernanza y escala. &ldquo;Huella Local&rdquo; es la que prioriza y ejecuta la Mesa de Convergencia — la
        cartera pública (BIP), la del MOP y la privada (SEA) son independientes de esa gestión.
      </p>
      <CarteraSelector />
    </main>
  )
}
