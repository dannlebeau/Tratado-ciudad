export type EstadoProyecto = 'Desarrollo' | 'Financiado' | 'Ejecución' | 'Entregado' | 'Cerrado' | 'En Cartera' | 'Por confirmar'
export type Ubicacion = 'Mejillones' | 'Hornitos' | 'Michilla' | 'Comunal'

export type Proyecto = {
  numero?: number
  nombre: string
  descripcion?: string
  ubicacion: Ubicacion
  estado: EstadoProyecto
  fuenteFinanciamiento?: string
  montoTexto?: string
  esCarteraFutura?: boolean
}

// Cartera público-privada de la Mesa de Convergencia por el Desarrollo Local de
// Mejillones (Fundación Huella Local). Es UNA de varias carteras de inversión
// que operan sobre la comuna (ver /proyectos para las demás: BIP, MOP,
// privada/SEA) — no "la" cartera de proyectos de Mejillones.
//
// Combina dos fuentes: el numero de pin y la ubicacion vienen del mapa del
// proceso (Mapa Mejillones / Mapa Hornitos, presentación "Mejillones 2050");
// el estado, la fuente de financiamiento y el monto vienen de la Tabla N°12
// "Síntesis Cartera Pública-Privada" (informe "Cartera_proyectos"), que es la
// fuente más reciente y donde ambas se solapan se prioriza esta última. Los
// proyectos sin pin en el mapa (estudios, programas) quedan sin `numero` y con
// ubicacion "Comunal". El estado solo se marca cuando una fuente lo confirma
// explícitamente; el resto queda "Por confirmar" a propósito antes que
// inventarlo.
export const PROYECTOS: Proyecto[] = [
  {
    numero: 1,
    nombre: 'Provisión e Instalación 3 Sombreaderos',
    descripcion: 'Plaza de la Cultura',
    ubicacion: 'Mejillones',
    estado: 'Entregado',
  },
  {
    numero: 2,
    nombre: 'Mejoramiento Plaza Agustín Miranda Sapiaín (ex Plaza Luis Cuadra)',
    ubicacion: 'Mejillones',
    estado: 'Entregado',
    fuenteFinanciamiento: 'FNDR',
  },
  {
    numero: 3,
    nombre: 'Mejoramiento 3 plazas, sector Emilio Vidts',
    ubicacion: 'Mejillones',
    estado: 'Ejecución',
    fuenteFinanciamiento: 'FNDR',
    montoTexto: '$320.999.000',
  },
  {
    numero: 4,
    nombre: 'Reposición Plaza de Armas de Mejillones',
    ubicacion: 'Mejillones',
    estado: 'Financiado',
    fuenteFinanciamiento: 'FNDR',
    montoTexto: '$2.196.994.940',
  },
  {
    numero: 5,
    nombre: 'Construcción Circuito Recreativo, comuna de Mejillones',
    descripcion: 'Sector Estadio',
    ubicacion: 'Mejillones',
    estado: 'En Cartera',
    fuenteFinanciamiento: 'Por definir',
  },
  {
    numero: 6,
    nombre: 'Prefactibilidad Construcción Terminal de Buses',
    ubicacion: 'Mejillones',
    estado: 'Desarrollo',
    fuenteFinanciamiento: 'FNDR',
    montoTexto: '$3.232.569.800',
  },
  {
    numero: 7,
    nombre: 'Construcción Sede Social Junta de Vecinos N°11',
    ubicacion: 'Mejillones',
    estado: 'Desarrollo',
    fuenteFinanciamiento: 'FNDR',
    montoTexto: '$348.755.000',
  },
  {
    numero: 8,
    nombre: 'Conservación Sede Social Centro de Madres Kolping',
    ubicacion: 'Mejillones',
    estado: 'Desarrollo',
    fuenteFinanciamiento: 'Circular 33 (C-33)',
  },
  {
    numero: 9,
    nombre: 'Conservación Sede Social Centro de Madres Simone de Adduard',
    ubicacion: 'Mejillones',
    estado: 'Desarrollo',
    fuenteFinanciamiento: 'Circular 33 (C-33)',
  },
  {
    numero: 10,
    nombre: 'Conservación Sede Social, Hornitos',
    ubicacion: 'Hornitos',
    estado: 'Desarrollo',
    fuenteFinanciamiento: 'Circular 33 (C-33)',
    montoTexto: '$100.000.000',
  },
  {
    numero: 11,
    nombre: 'Diseño proyecto integral de Normalización y Mejoramiento Recinto Estadio Municipal',
    ubicacion: 'Mejillones',
    estado: 'Por confirmar',
    esCarteraFutura: true,
  },
  {
    numero: 12,
    nombre: 'Pavimentación y Alumbrado Público',
    descripcion: 'Michilla (3 km. aprox.)',
    ubicacion: 'Michilla',
    estado: 'Por confirmar',
    esCarteraFutura: true,
  },
  {
    nombre: 'Mejoramiento Plaza de Los Profesores',
    ubicacion: 'Mejillones',
    estado: 'Cerrado',
    fuenteFinanciamiento: 'PMU',
    montoTexto: '$7.136.000',
  },
  {
    nombre: 'Diagnóstico Territorial Mejillones',
    ubicacion: 'Comunal',
    estado: 'Entregado',
    fuenteFinanciamiento: 'Asistencia Técnica',
    descripcion: 'Estudio finalizado',
  },
  {
    nombre: 'Construcción Centro de Excelencia Operacional Portuaria',
    ubicacion: 'Comunal',
    estado: 'Desarrollo',
    fuenteFinanciamiento: 'Privado (Convenio Ultraport)',
    descripcion: 'Formulado mediante asistencia técnica',
  },
  {
    nombre: 'Elaboración kit de herramientas identidades territoriales',
    descripcion: 'Caso Mejillones',
    ubicacion: 'Comunal',
    estado: 'Entregado',
    fuenteFinanciamiento: 'MINCAP',
    montoTexto: '$14.982.000',
  },
  {
    nombre: 'Instalación de Sombreaderos',
    ubicacion: 'Comunal',
    estado: 'En Cartera',
    fuenteFinanciamiento: 'Por definir',
    descripcion: 'Mitigación climática y confort urbano',
  },
  {
    nombre: 'Plan Mejillones 2050',
    ubicacion: 'Comunal',
    estado: 'Desarrollo',
    fuenteFinanciamiento: 'Estratégico',
    descripcion: 'Instrumento rector a largo plazo',
  },
]

export const UBICACIONES: Ubicacion[] = ['Mejillones', 'Hornitos', 'Michilla', 'Comunal']
