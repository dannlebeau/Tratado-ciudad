import { CARTERA_BIP } from '@/lib/carteraPublica'

export default function CarteraPublicaTabla() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse min-w-[720px]">
        <thead>
          <tr className="text-left text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide">
            <th className="py-2 pr-4 font-medium">Iniciativa</th>
            <th className="py-2 pr-4 font-medium">Año(s) con RS</th>
            <th className="py-2 pr-4 font-medium">Fuente</th>
            <th className="py-2 font-medium text-right">Monto / costo total</th>
          </tr>
        </thead>
        <tbody>
          {CARTERA_BIP.map(p => (
            <tr key={p.nombre} className="border-t border-gray-100 dark:border-gray-800">
              <td className="py-2.5 pr-4 text-gray-900 dark:text-gray-100">{p.nombre}</td>
              <td className="py-2.5 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{p.anios}</td>
              <td className="py-2.5 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{p.fuente}</td>
              <td className="py-2.5 text-right tabular-nums text-gray-700 dark:text-gray-300 whitespace-nowrap">{p.monto}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
        Banco Integrado de Proyectos (BIP), Ministerio de Desarrollo Social y Familia. Revisión 2016 - 2026,
        iniciativas con calificación RS (Recomendación Favorable). Montos en M$ (miles de pesos).
      </p>
    </div>
  )
}
