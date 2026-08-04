export type CategoriaMegaproyecto = 'Energía' | 'Minería y Litio' | 'Logística e Infraestructura'

export type MegaproyectoSEA = {
  nombre: string
  categoria: CategoriaMegaproyecto
  montoMMUS?: number
  descripcion?: string
}

// Cartera de megaproyectos industriales y energéticos privados aprobados por
// el Servicio de Evaluación Ambiental (SEA) en Mejillones. Es la escala de
// inversión más grande de la comuna (miles de millones de dólares) y opera
// aparte de toda la inversión pública: no se coordina con la Mesa de
// Convergencia ni con el BIP/MOP. Montos en MMUS$ (millones de dólares) tal
// como figuran en la fuente ("Cartera_proyectos", sección 4.8.4.A); los
// proyectos sin monto individual publicado quedan sin `montoMMUS`.
export const CARTERA_SEA: MegaproyectoSEA[] = [
  { nombre: 'Sistema de Almacenamiento de Energía (BESS) Los Changos', categoria: 'Energía', montoMMUS: 281 },
  { nombre: 'Proyecto Alba', categoria: 'Energía', montoMMUS: 450, descripcion: 'Reconversión termoeléctrica' },
  { nombre: 'Parque Fotovoltaico AR Changos Solar', categoria: 'Energía', montoMMUS: 280 },
  { nombre: 'Red de plantas solares menores (Pudu, Michilla, Angamos, Farol)', categoria: 'Energía' },
  { nombre: 'Proyecto Volta', categoria: 'Energía', descripcion: 'Planta de Hidrógeno y Amoníaco Verde' },
  { nombre: 'Aumento de Capacidad Planta de Litio Carmen', categoria: 'Minería y Litio', montoMMUS: 987 },
  { nombre: 'Proyecto Minero de Cobre Óxidos Marimaca', categoria: 'Minería y Litio', montoMMUS: 500 },
  { nombre: 'Proyecto Polo Sur, Minera Centinela', categoria: 'Minería y Litio', montoMMUS: 300 },
  { nombre: 'Plan de Desarrollo Michilla', categoria: 'Minería y Litio', montoMMUS: 235 },
  { nombre: 'Terminal de Mantención Mejillones del FCAB', categoria: 'Logística e Infraestructura', montoMMUS: 42 },
  { nombre: 'Modernización de redes de Fibra Óptica de Transmisión', categoria: 'Logística e Infraestructura' },
]

export type AlianzaLocal = {
  nombre: string
  empresa: string
  descripcion: string
  montoTexto?: string
}

// Alianzas estratégicas locales (modelo Huella Local: "Mesa de Inversión
// Pública"): la industria financia directamente la fase de preinversión y
// diseño de proyectos de impacto social, destrabando la etapa que a los
// municipios les toma años financiar. Distinto de la cartera SEA (arriba): acá
// el privado no construye su propio proyecto, sino que paga estudios/diseño
// para proyectos públicos.
export const ALIANZAS_LOCALES: AlianzaLocal[] = [
  {
    nombre: 'Diseño Centro de Excelencia Operacional Portuaria',
    empresa: 'Ultraport',
    descripcion: 'Financiamiento privado directo para fortalecer el capital humano local.',
  },
  {
    nombre: 'Estudio territorial Plan Mejillones 2050',
    empresa: 'Ultramar',
    descripcion: 'Financiamiento privado para el desarrollo del estudio de macro-planificación de la comuna.',
  },
  {
    nombre: 'Cowork Mejillones',
    empresa: 'Puerto Angamos',
    descripcion: 'Espacio de coworking construido por la empresa para uso de la comunidad.',
  },
]
