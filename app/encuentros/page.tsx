import EncuentrosTimeline from '@/components/EncuentrosTimeline'

export default function EncuentrosPage() {
  return (
    <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-10 w-full">
      <p className="text-xs uppercase tracking-widest text-red-600 font-semibold mb-2">¿Cómo?</p>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Los 4 Encuentros</h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-2xl mb-8">
        El Acuerdo de Ciudad se construye en cuatro encuentros participativos, cada uno respondiendo una pregunta
        que avanza el proceso desde el diagnóstico hasta los compromisos concretos.
      </p>
      <EncuentrosTimeline />
    </main>
  )
}
