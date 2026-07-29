import { FINANCIAMIENTO, FINANCIAMIENTO_TOTAL } from '@/lib/financiamiento'
import { formatCLP } from '@/lib/format'
import EstadoBadge from './EstadoBadge'

export default function FinanciamientoTabla() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="text-left text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide">
            <th className="py-2 pr-4 font-medium">Estado</th>
            <th className="py-2 pr-4 font-medium text-right">N° iniciativas</th>
            <th className="py-2 pr-4 font-medium text-right">Aporte mesa</th>
            <th className="py-2 font-medium text-right">Inversión pública</th>
          </tr>
        </thead>
        <tbody>
          {FINANCIAMIENTO.map(fila => (
            <tr key={fila.estado} className="border-t border-gray-100 dark:border-gray-800">
              <td className="py-2.5 pr-4"><EstadoBadge estado={fila.estado} /></td>
              <td className="py-2.5 pr-4 text-right tabular-nums text-gray-700 dark:text-gray-300">{fila.nIniciativas}</td>
              <td className="py-2.5 pr-4 text-right tabular-nums text-gray-700 dark:text-gray-300">{formatCLP(fila.aporteMesa)}</td>
              <td className="py-2.5 text-right tabular-nums text-gray-700 dark:text-gray-300">{formatCLP(fila.inversionPublica)}</td>
            </tr>
          ))}
          <tr className="border-t-2 border-gray-200 dark:border-gray-700 font-semibold text-gray-900 dark:text-gray-100">
            <td className="py-2.5 pr-4">Total general</td>
            <td className="py-2.5 pr-4 text-right tabular-nums">{FINANCIAMIENTO_TOTAL.nIniciativas}</td>
            <td className="py-2.5 pr-4 text-right tabular-nums">{formatCLP(FINANCIAMIENTO_TOTAL.aporteMesa)}</td>
            <td className="py-2.5 text-right tabular-nums">{formatCLP(FINANCIAMIENTO_TOTAL.inversionPublica)}</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">A {FINANCIAMIENTO_TOTAL.fecha}.</p>
    </div>
  )
}
