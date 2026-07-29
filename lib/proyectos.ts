export type EstadoProyecto = 'Desarrollo' | 'Financiado' | 'Ejecución' | 'Entregado' | 'Cerrado' | 'Por confirmar'
export type Ubicacion = 'Mejillones' | 'Hornitos' | 'Michilla'

export type Proyecto = {
  numero: number
  nombre: string
  descripcion?: string
  ubicacion: Ubicacion
  estado: EstadoProyecto
  esCarteraFutura?: boolean
}

// Cartera de proyectos de inversión público-privada, numerados como en el mapa
// del proceso (Mapa Mejillones / Mapa Hornitos). El estado solo se marca cuando
// el material de origen lo confirma explícitamente (fotos de "entregado" o
// renders de "en desarrollo"); el resto queda "Por confirmar" a propósito antes
// que inventar un estado.
export const PROYECTOS: Proyecto[] = [
  { numero: 1, nombre: 'Provisión e Instalación 3 Sombreaderos', descripcion: 'Plaza de la Cultura', ubicacion: 'Mejillones', estado: 'Entregado' },
  { numero: 2, nombre: 'Mejoramiento Plaza Agustín Miranda Sapiaín', ubicacion: 'Mejillones', estado: 'Entregado' },
  { numero: 3, nombre: 'Mejoramiento Áreas Verdes', descripcion: 'Sector Emilio Vidts', ubicacion: 'Mejillones', estado: 'Por confirmar' },
  { numero: 4, nombre: 'Mejoramiento Plaza de Armas', ubicacion: 'Mejillones', estado: 'Desarrollo' },
  { numero: 5, nombre: 'Construcción Circuito Recreativo', descripcion: 'Sector Estadio', ubicacion: 'Mejillones', estado: 'Por confirmar' },
  { numero: 6, nombre: 'Construcción Terminal de Buses', ubicacion: 'Mejillones', estado: 'Desarrollo' },
  { numero: 7, nombre: 'Construcción Sede Social Junta de Vecinos N°11', ubicacion: 'Mejillones', estado: 'Por confirmar' },
  { numero: 8, nombre: 'Conservación Sede Social Centro de Madres Kolping', ubicacion: 'Mejillones', estado: 'Por confirmar' },
  { numero: 9, nombre: 'Conservación Sede Social Centro de Madres Simone de Adduard', ubicacion: 'Mejillones', estado: 'Por confirmar' },
  { numero: 10, nombre: 'Conservación Sede Social', descripcion: 'Hornitos', ubicacion: 'Hornitos', estado: 'Por confirmar' },
  { numero: 11, nombre: 'Diseño proyecto integral de Normalización y Mejoramiento Recinto Estadio Municipal', ubicacion: 'Mejillones', estado: 'Por confirmar', esCarteraFutura: true },
  { numero: 12, nombre: 'Pavimentación y Alumbrado Público', descripcion: 'Michilla (3 km. aprox.)', ubicacion: 'Michilla', estado: 'Por confirmar', esCarteraFutura: true },
]

export const UBICACIONES: Ubicacion[] = ['Mejillones', 'Hornitos', 'Michilla']
