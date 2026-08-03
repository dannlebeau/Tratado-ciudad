import { CARTERA_SEA, ALIANZAS_LOCALES, type CategoriaMegaproyecto } from '@/lib/carteraPrivada'

const CATEGORIAS: CategoriaMegaproyecto[] = ['Energía', 'Minería y Litio', 'Logística e Infraestructura']

const COLOR_CATEGORIA: Record<CategoriaMegaproyecto, string> = {
  'Energía': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  'Minería y Litio': 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  'Logística e Infraestructura': 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
}

export default function CarteraPrivadaGrid() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-1">
          Megaproyectos industriales y energéticos (Cartera SEA)
        </h3>
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">
          Proyectos privados aprobados por el Servicio de Evaluación Ambiental. Montos en millones de dólares (MMUS$).
        </p>
        <div className="space-y-6">
          {CATEGORIAS.map(categoria => {
            const proyectos = CARTERA_SEA.filter(p => p.categoria === categoria)
            if (proyectos.length === 0) return null
            return (
              <div key={categoria}>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${COLOR_CATEGORIA[categoria]}`}>
                  {categoria}
                </span>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {proyectos.map(p => (
                    <div key={p.nombre} className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug mb-1">{p.nombre}</h4>
                      {p.descripcion && <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{p.descripcion}</p>}
                      <p className="text-sm font-semibold tabular-nums text-gray-900 dark:text-gray-100">
                        {p.montoMMUS ? `US$ ${p.montoMMUS} millones` : 'Monto no publicado'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-1">
          Alianzas estratégicas locales
        </h3>
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">
          Asistencia técnica: la industria financia directamente estudios y diseño de proyectos públicos.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ALIANZAS_LOCALES.map(a => (
            <div key={a.nombre} className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">
                {a.empresa}
              </span>
              <h4 className="mt-2 text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug">{a.nombre}</h4>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{a.descripcion}</p>
              {a.montoTexto && (
                <p className="mt-2 text-sm font-semibold tabular-nums text-gray-900 dark:text-gray-100">{a.montoTexto}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
