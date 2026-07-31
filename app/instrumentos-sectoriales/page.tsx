import InstrumentosPanel from '@/components/InstrumentosPanel'

export default function InstrumentosSectorialesPage() {
  return (
    <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-10 w-full">
      <p className="text-xs uppercase tracking-widest text-red-600 font-semibold mb-2">La ruta trazada</p>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Instrumentos sectoriales</h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-2xl mb-6">
        Planes municipales y sectoriales de Mejillones con los que el Acuerdo de Ciudad se articula: no son
        iniciativas del proceso de Encuentros ni de la Mesa de Convergencia, sino la planificación previa sobre la
        que se construye. Toca cada lámina para ver el detalle.
      </p>
      <InstrumentosPanel />
    </main>
  )
}
