import { COSTOS_PROCESO } from '@/lib/financiamiento'
import { formatCLP } from '@/lib/format'

export default function CostosProceso() {
  const { presupuestoTotal, recaudadoPct, faltante } = COSTOS_PROCESO
  const recaudado = presupuestoTotal - faltante

  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm text-gray-500 dark:text-gray-400">Recaudado del presupuesto del proceso</span>
        <span className="text-2xl font-semibold text-gray-900 dark:text-white">{recaudadoPct}%</span>
      </div>
      <div className="h-3 w-full rounded-full bg-red-100 dark:bg-red-950/50 overflow-hidden">
        <div className="h-full rounded-full bg-red-600" style={{ width: `${recaudadoPct}%` }} />
      </div>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-400 dark:text-gray-500">
        <span>Presupuesto total: <span className="text-gray-600 dark:text-gray-300 font-medium">{formatCLP(presupuestoTotal)}</span></span>
        <span>Recaudado: <span className="text-gray-600 dark:text-gray-300 font-medium">{formatCLP(recaudado)}</span></span>
        <span>Faltante: <span className="text-gray-600 dark:text-gray-300 font-medium">{formatCLP(faltante)}</span></span>
      </div>
    </div>
  )
}
