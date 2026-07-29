import { CRONOGRAMA } from '@/lib/cronograma'

export default function Cronograma() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
      {CRONOGRAMA.map((etapa, i) => (
        <div key={etapa.mes} className="relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">
              {etapa.mes}
            </span>
          </div>
          <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-3 h-full">
            {etapa.duracion && (
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-1">{etapa.duracion}</p>
            )}
            <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{etapa.titulo}</p>
          </div>
          {i < CRONOGRAMA.length - 1 && (
            <span className="hidden lg:block absolute top-[7px] left-full w-3 h-px bg-gray-300 dark:bg-gray-700" />
          )}
        </div>
      ))}
    </div>
  )
}
