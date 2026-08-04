'use client'
import { useState } from 'react'
import { PROYECTOS } from '@/lib/proyectos'
import { CARTERA_BIP } from '@/lib/carteraPublica'
import { CARTERA_MOP } from '@/lib/carteraMOP'
import { CARTERA_SEA, ALIANZAS_LOCALES } from '@/lib/carteraPrivada'
import { AREAS_PLADECO_TOTAL } from '@/lib/carteraPladeco'
import ProyectosGrid from './ProyectosGrid'
import FinanciamientoTabla from './FinanciamientoTabla'
import CarteraPublicaTabla from './CarteraPublicaTabla'
import CarteraMOPGrid from './CarteraMOPGrid'
import CarteraPrivadaGrid from './CarteraPrivadaGrid'
import CarteraPladecoPanel from './CarteraPladecoPanel'

type Cartera = 'huella-local' | 'publica' | 'mop' | 'privada' | 'pladeco'

const OPCIONES: { id: Cartera; titulo: string; subtitulo: string; total: number; activo: string; inactivo: string }[] = [
  {
    id: 'huella-local',
    titulo: 'Huella Local',
    subtitulo: 'Mesa de Convergencia',
    total: PROYECTOS.length,
    activo: 'bg-red-600 text-white',
    inactivo: 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700',
  },
  {
    id: 'publica',
    titulo: 'Pública',
    subtitulo: 'Banco Integrado de Proyectos',
    total: CARTERA_BIP.length,
    activo: 'bg-slate-700 text-white',
    inactivo: 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700',
  },
  {
    id: 'mop',
    titulo: 'MOP',
    subtitulo: 'Ministerio de Obras Públicas',
    total: CARTERA_MOP.length,
    activo: 'bg-blue-700 text-white',
    inactivo: 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700',
  },
  {
    id: 'privada',
    titulo: 'Privada',
    subtitulo: 'Cartera SEA y alianzas locales',
    total: CARTERA_SEA.length + ALIANZAS_LOCALES.length,
    activo: 'bg-amber-700 text-white',
    inactivo: 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700',
  },
  {
    id: 'pladeco',
    titulo: 'PLADECO',
    subtitulo: 'Plan de Desarrollo Comunal',
    total: AREAS_PLADECO_TOTAL.nIniciativas,
    activo: 'bg-emerald-700 text-white',
    inactivo: 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700',
  },
]

export default function CarteraSelector() {
  const [cartera, setCartera] = useState<Cartera>('huella-local')

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {OPCIONES.map(op => (
          <button
            key={op.id}
            onClick={() => setCartera(op.id)}
            aria-pressed={cartera === op.id}
            className={`rounded-2xl p-4 sm:p-5 min-h-28 sm:min-h-36 flex flex-col justify-between text-left transition-colors ${
              cartera === op.id ? op.activo : op.inactivo
            }`}
          >
            <span className="text-[0.65rem] font-semibold uppercase tracking-widest opacity-80">{op.subtitulo}</span>
            <span>
              <span className="block text-lg sm:text-xl font-black tracking-tight">{op.titulo}</span>
              <span className="text-xs opacity-80">{op.total} iniciativas</span>
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6">
        {cartera === 'huella-local' && (
          <div className="space-y-10">
            <ProyectosGrid />
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-4">
                Financiamiento público y privado
              </h2>
              <FinanciamientoTabla />
            </div>
          </div>
        )}
        {cartera === 'publica' && <CarteraPublicaTabla />}
        {cartera === 'mop' && <CarteraMOPGrid />}
        {cartera === 'privada' && <CarteraPrivadaGrid />}
        {cartera === 'pladeco' && <CarteraPladecoPanel />}
      </div>
    </div>
  )
}
