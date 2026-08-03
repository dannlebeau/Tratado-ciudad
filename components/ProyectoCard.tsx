import { type Proyecto } from '@/lib/proyectos'
import EstadoBadge from './EstadoBadge'

export default function ProyectoCard({ proyecto }: { proyecto: Proyecto }) {
  return (
    <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
      <div className="flex items-start justify-between gap-2 mb-2">
        {proyecto.numero ? (
          <span className="w-6 h-6 shrink-0 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-semibold flex items-center justify-center">
            {proyecto.numero}
          </span>
        ) : (
          <span />
        )}
        <EstadoBadge estado={proyecto.estado} />
      </div>
      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug">{proyecto.nombre}</h3>
      {proyecto.descripcion && (
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{proyecto.descripcion}</p>
      )}
      {(proyecto.fuenteFinanciamiento || proyecto.montoTexto) && (
        <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">
          {proyecto.fuenteFinanciamiento}
          {proyecto.fuenteFinanciamiento && proyecto.montoTexto && ' · '}
          {proyecto.montoTexto}
        </p>
      )}
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-gray-400 dark:text-gray-500">{proyecto.ubicacion}</span>
        {proyecto.esCarteraFutura && (
          <span className="text-xs text-gray-400 dark:text-gray-500">Cartera 2026-2027</span>
        )}
      </div>
    </div>
  )
}
