import { CARTERA_MOP } from '@/lib/carteraMOP'
import { formatCLP } from '@/lib/format'

export default function CarteraMOPGrid() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CARTERA_MOP.map(obra => (
          <div key={obra.nombre} className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                {obra.direccion}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug mb-2">{obra.nombre}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{obra.descripcion}</p>
            <p className="text-sm font-semibold tabular-nums text-gray-900 dark:text-gray-100">{formatCLP(obra.monto)}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 dark:text-gray-500">
        Visor Territorial del MOP y Sistema Nacional de Inversiones. Macro-proyectos que escapan a la capacidad
        financiera directa del municipio.
      </p>
    </div>
  )
}
