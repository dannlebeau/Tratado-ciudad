import { CALENDARIO, SEMANAS_ENCUENTRO_TOTAL, SEMANAS_LIBRES_TOTAL, formatRango, formatMesAnio } from '@/lib/calendario'

export default function CalendarioSemanas() {
  const grupos = new Map<string, typeof CALENDARIO>()
  for (const semana of CALENDARIO) {
    const clave = formatMesAnio(semana.inicio)
    if (!grupos.has(clave)) grupos.set(clave, [])
    grupos.get(clave)!.push(semana)
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-gray-100 dark:bg-gray-800 p-4 text-center">
          <p className="text-2xl font-black text-gray-900 dark:text-white">{CALENDARIO.length}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">semanas en total</p>
        </div>
        <div className="rounded-xl bg-red-50 dark:bg-red-900/20 p-4 text-center">
          <p className="text-2xl font-black text-red-600 dark:text-red-400">{SEMANAS_ENCUENTRO_TOTAL}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">semanas de encuentro</p>
        </div>
        <div className="rounded-xl bg-gray-100 dark:bg-gray-800 p-4 text-center">
          <p className="text-2xl font-black text-gray-900 dark:text-white">{SEMANAS_LIBRES_TOTAL}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">semanas libres</p>
        </div>
      </div>

      <div className="space-y-6">
        {Array.from(grupos.entries()).map(([mes, semanas]) => (
          <div key={mes}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">{mes}</h3>
            <div className="space-y-1.5">
              {semanas.map(semana => (
                <div
                  key={semana.numero}
                  className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 ${
                    semana.tipo === 'encuentro'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-800'
                  }`}
                >
                  <span className="text-sm">
                    <span className="font-semibold">Semana {semana.numero}</span>
                    <span className="opacity-80"> · {formatRango(semana.inicio, semana.fin)}</span>
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide shrink-0">
                    {semana.tipo === 'encuentro' ? `Encuentro ${semana.encuentro}` : 'Libre'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
