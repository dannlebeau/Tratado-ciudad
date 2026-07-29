import { EMPRESAS, GOBIERNO_LOCAL, ARTICULADOR, MESA_CONVERGENCIA_RESUMEN } from '@/lib/mesaConvergencia'

export default function MesaConvergencia() {
  const r = MESA_CONVERGENCIA_RESUMEN
  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl">
        Desde {r.desde}, {ARTICULADOR} articula la Mesa de Convergencia en Mejillones: una alianza entre la fundación,
        {' '}{EMPRESAS.length} empresas y el Municipio que suma más de {r.proyectosEjecutadosODiseno} proyectos ejecutados o en diseño.
        {' '}{r.formula} {r.rolEnAcuerdo}
      </p>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-2">Sector privado</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {EMPRESAS.map(e => (
            <div key={e.nombre} className="rounded-lg bg-gray-50 dark:bg-gray-800 px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300">
              {e.nombre}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-2">Gobierno local</h3>
          <div className="rounded-lg bg-gray-50 dark:bg-gray-800 px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300">{GOBIERNO_LOCAL}</div>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-2">Articulador de la alianza</h3>
          <div className="rounded-lg bg-red-50 dark:bg-red-950/30 px-3 py-2.5 text-sm font-medium text-red-700 dark:text-red-300">{ARTICULADOR}</div>
        </div>
      </div>
    </div>
  )
}
