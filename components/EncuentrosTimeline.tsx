import { ENCUENTROS } from '@/lib/encuentros'

export default function EncuentrosTimeline() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {ENCUENTROS.map(e => (
        <div key={e.numero} className="rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="bg-red-600 text-white px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide opacity-80">Encuentro {e.numero} · {e.mes}</p>
            <p className="text-sm font-semibold mt-1 leading-snug">{e.pregunta}</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900">
            <p className="text-sm text-gray-600 dark:text-gray-300">{e.objetivo}</p>
            <ul className="mt-3 space-y-1">
              {e.contenido.map(c => (
                <li key={c} className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
