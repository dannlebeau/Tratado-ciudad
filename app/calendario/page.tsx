import CalendarioSemanas from '@/components/CalendarioSemanas'

export default function CalendarioPage() {
  return (
    <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-10 w-full">
      <p className="text-xs uppercase tracking-widest text-red-600 font-semibold mb-2">Planificación</p>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Calendario de semanas</h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-2xl mb-6">
        Del 7 de septiembre de 2026 al 10 de enero de 2027 en bloques de 7 días: cuáles semanas son de Encuentro y
        cuáles quedan libres para preparación, gestión de proyectos o imprevistos.
      </p>
      <CalendarioSemanas />
    </main>
  )
}
