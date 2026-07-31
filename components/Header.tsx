'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/encuentros', label: 'Encuentros' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/instrumentos-sectoriales', label: 'Instrumentos Sectoriales' },
  { href: '/mesa-de-convergencia', label: 'Mesa de Convergencia' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-lg font-black tracking-tight text-gray-900 dark:text-white">Mejillones</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-red-600 text-white font-semibold">2050</span>
        </Link>
        <nav className="flex items-center gap-1 overflow-x-auto">
          {LINKS.map(link => {
            const activo = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                  activo
                    ? 'bg-red-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
