import { type EstadoProyecto } from '@/lib/proyectos'

const ESTILO: Record<EstadoProyecto, string> = {
  'Por confirmar': 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400',
  'En Cartera': 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400',
  Desarrollo: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  Financiado: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  Ejecución: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Entregado: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  Cerrado: 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
}

export default function EstadoBadge({ estado }: { estado: EstadoProyecto }) {
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${ESTILO[estado]}`}>
      {estado}
    </span>
  )
}
