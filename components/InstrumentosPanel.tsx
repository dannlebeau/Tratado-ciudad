'use client'
import { useState } from 'react'
import { INSTRUMENTOS_SECTORIALES, INSTRUMENTOS_NO_EXISTENTES } from '@/lib/instrumentos'
import InstrumentoCard from './InstrumentoCard'
import InstrumentoCardFaltante from './InstrumentoCardFaltante'

type Vista = 'vigentes' | 'no-existe'

export default function InstrumentosPanel() {
  const [vista, setVista] = useState<Vista>('vigentes')

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => setVista('vigentes')}
          aria-pressed={vista === 'vigentes'}
          className={`rounded-2xl p-6 sm:p-8 min-h-40 sm:min-h-56 flex flex-col justify-between text-left transition-colors ${
            vista === 'vigentes'
              ? 'bg-emerald-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-widest opacity-80">Instrumentos</span>
          <span>
            <span className="block text-2xl sm:text-3xl font-black tracking-tight">Vigentes</span>
            <span className="text-sm opacity-80">{INSTRUMENTOS_SECTORIALES.length} instrumentos</span>
          </span>
        </button>

        <button
          onClick={() => setVista('no-existe')}
          aria-pressed={vista === 'no-existe'}
          className={`rounded-2xl p-6 sm:p-8 min-h-40 sm:min-h-56 flex flex-col justify-between text-left transition-colors ${
            vista === 'no-existe'
              ? 'bg-red-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-widest opacity-80">Instrumentos</span>
          <span>
            <span className="block text-2xl sm:text-3xl font-black tracking-tight">No existe</span>
            <span className="text-sm opacity-80">{INSTRUMENTOS_NO_EXISTENTES.length} instrumentos</span>
          </span>
        </button>
      </div>

      <div className="mt-6">
        {vista === 'vigentes' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INSTRUMENTOS_SECTORIALES.map(instrumento => (
              <InstrumentoCard key={instrumento.id} instrumento={instrumento} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INSTRUMENTOS_NO_EXISTENTES.map(instrumento => (
              <InstrumentoCardFaltante key={instrumento.id} instrumento={instrumento} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
