'use client'
import { useState } from 'react'
import { PROYECTOS, UBICACIONES, type Ubicacion } from '@/lib/proyectos'
import ProyectoCard from './ProyectoCard'

export default function ProyectosGrid() {
  const [ubicacion, setUbicacion] = useState<Ubicacion | null>(null)

  const proyectos = ubicacion ? PROYECTOS.filter(p => p.ubicacion === ubicacion) : PROYECTOS

  return (
    <div className="space-y-4">
      <nav className="flex flex-wrap gap-2">
        <button
          onClick={() => setUbicacion(null)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            ubicacion === null
              ? 'bg-red-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          Todos ({PROYECTOS.length})
        </button>
        {UBICACIONES.map(u => {
          const total = PROYECTOS.filter(p => p.ubicacion === u).length
          return (
            <button
              key={u}
              onClick={() => setUbicacion(ubicacion === u ? null : u)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                ubicacion === u
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {u} ({total})
            </button>
          )
        })}
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {proyectos.map(p => (
          <ProyectoCard key={p.numero} proyecto={p} />
        ))}
      </div>
    </div>
  )
}
