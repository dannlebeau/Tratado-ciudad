import { type InstrumentoSectorial } from '@/lib/instrumentos'

export default function InstrumentoCard({ instrumento }: { instrumento: InstrumentoSectorial }) {
  return (
    <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug">{instrumento.nombre}</h3>
        {instrumento.sigla && (
          <span className="shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
            {instrumento.sigla}
          </span>
        )}
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{instrumento.alcance}</p>
      <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">{instrumento.areasInversion}</p>
      <ul className="space-y-1.5">
        {instrumento.infraestructuraEstudios.map((item, i) => (
          <li key={i} className="text-xs text-gray-500 dark:text-gray-400 flex gap-1.5">
            <span className="text-red-600 dark:text-red-400 shrink-0">–</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
