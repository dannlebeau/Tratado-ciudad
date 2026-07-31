import { type InstrumentoFaltante } from '@/lib/instrumentos'

export default function InstrumentoCardFaltante({ instrumento }: { instrumento: InstrumentoFaltante }) {
  return (
    <div className="rounded-xl border border-dashed border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 p-5">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 leading-snug">{instrumento.nombre}</h3>
        {instrumento.sigla && (
          <span className="shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
            {instrumento.sigla}
          </span>
        )}
      </div>
      <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">Sin instrumento formal vigente en la comuna.</p>
    </div>
  )
}
