import { AREAS_PLADECO, AREAS_PLADECO_TOTAL, PROYECTOS_PLADECO } from '@/lib/carteraPladeco'

export default function CarteraPladecoPanel() {
  const areasConDetalle = new Set(PROYECTOS_PLADECO.map(p => p.areaId))

  return (
    <div className="space-y-8">
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse min-w-[560px]">
          <thead>
            <tr className="text-left text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide">
              <th className="py-2 pr-4 font-medium">Área de inversión</th>
              <th className="py-2 pr-4 font-medium text-right">N° iniciativas</th>
              <th className="py-2 pr-4 font-medium text-right">Presupuesto referencial</th>
              <th className="py-2 font-medium text-right">% del total</th>
            </tr>
          </thead>
          <tbody>
            {AREAS_PLADECO.map(area => (
              <tr key={area.id} className="border-t border-gray-100 dark:border-gray-800">
                <td className="py-2.5 pr-4 text-gray-900 dark:text-gray-100">
                  {area.nombre}
                  {areasConDetalle.has(area.id) && (
                    <span className="ml-2 text-[0.65rem] font-semibold px-1.5 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 align-middle">
                      con detalle
                    </span>
                  )}
                </td>
                <td className="py-2.5 pr-4 text-right tabular-nums text-gray-700 dark:text-gray-300">{area.nIniciativas}</td>
                <td className="py-2.5 pr-4 text-right tabular-nums text-gray-700 dark:text-gray-300">{area.presupuesto}</td>
                <td className="py-2.5 text-right tabular-nums text-gray-700 dark:text-gray-300">{area.porcentaje}</td>
              </tr>
            ))}
            <tr className="border-t-2 border-gray-200 dark:border-gray-700 font-semibold text-gray-900 dark:text-gray-100">
              <td className="py-2.5 pr-4">Total general</td>
              <td className="py-2.5 pr-4 text-right tabular-nums">{AREAS_PLADECO_TOTAL.nIniciativas}</td>
              <td className="py-2.5 pr-4 text-right tabular-nums">{AREAS_PLADECO_TOTAL.presupuesto}</td>
              <td className="py-2.5 text-right tabular-nums">{AREAS_PLADECO_TOTAL.porcentaje}</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
          Cartera de Iniciativas de Inversión, PLADECO 2023-2033. Las áreas marcadas &ldquo;con detalle&rdquo; tienen
          sus iniciativas más estratégicas desglosadas abajo; el resto solo cuenta con el desglose presupuestario
          agregado por ahora.
        </p>
      </div>

      {AREAS_PLADECO.filter(area => areasConDetalle.has(area.id)).map(area => (
        <div key={area.id}>
          <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-4">
            {area.nombre} <span className="font-normal normal-case">· {area.presupuesto}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROYECTOS_PLADECO.filter(p => p.areaId === area.id).map(p => (
              <div key={p.nombre} className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug">{p.nombre}</h4>
                {p.descripcion && <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{p.descripcion}</p>}
                {p.montoTexto && (
                  <p className="mt-2 text-sm font-semibold tabular-nums text-gray-900 dark:text-gray-100">{p.montoTexto}</p>
                )}
                {p.etapas && (
                  <ul className="mt-2 space-y-1 border-t border-gray-100 dark:border-gray-800 pt-2">
                    {p.etapas.map(e => (
                      <li key={e.nombre} className="flex items-center justify-between gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <span>{e.nombre}</span>
                        <span className="tabular-nums shrink-0">{e.monto}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
