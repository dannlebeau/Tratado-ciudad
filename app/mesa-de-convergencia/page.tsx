import MesaConvergencia from '@/components/MesaConvergencia'

export default function MesaDeConvergenciaPage() {
  return (
    <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-10 w-full">
      <p className="text-xs uppercase tracking-widest text-red-600 font-semibold mb-2">Financiamiento y ejecución</p>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Mesa de Convergencia</h1>
      <MesaConvergencia />
    </main>
  )
}
