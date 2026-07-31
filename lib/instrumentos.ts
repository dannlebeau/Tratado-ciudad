export type InstrumentoSectorial = {
  id: string
  nombre: string
  sigla?: string
  alcance: string
  areasInversion: string
  infraestructuraEstudios: string[]
}

// Instrumentos de planificación sectorial vigentes en la comuna (fuente:
// "Síntesis de instrumentos sectoriales", elaboración propia). Es la "ruta
// trazada" con la que el Acuerdo de Ciudad se articula: no son iniciativas del
// proceso de Encuentros ni de la Mesa de Convergencia, sino los planes
// municipales/sectoriales previos sobre los que se apoya.
export const INSTRUMENTOS_SECTORIALES: InstrumentoSectorial[] = [
  {
    id: 'pladeco',
    nombre: 'Plan de Desarrollo Comunal',
    sigla: 'PLADECO',
    alcance: 'M$79.047.939. Contempla un total de 163 iniciativas',
    areasInversion: 'Se divide en 11 áreas. La de mayor peso financiero es Urbano Territorial y Vivienda (M$27.979.205)',
    infraestructuraEstudios: [
      'Plan Maestro para desarrollo de terreno del FCAB',
      'Recuperación del borde costero urbano',
      'Construcción macrourbanización sector barrio cívico',
      'Construcción de Piscina Temperada Municipal',
    ],
  },
  {
    id: 'pladetur',
    nombre: 'Plan de Desarrollo Turístico',
    sigla: 'PLADETUR',
    alcance: 'M$1.399.000. Contempla un total de 46 proyectos e iniciativas',
    areasInversion: 'Dividido en Plan Operativo de Desarrollo Turístico (24 proyectos) y Plan Operativo de Marketing (22 proyectos)',
    infraestructuraEstudios: [
      'Plan de Puesta en Valor del Borde Costero',
      'Habilitación de Caletas, paradores y senderos turísticos',
      'Habilitación de Oficinas de Información',
    ],
  },
  {
    id: 'seguridad',
    nombre: 'Plan Comunal de Seguridad',
    alcance: 'Cartera Operativa (Matriz de Planificación). Contempla componentes financiados por diversas fuentes (municipales y fondos públicos)',
    areasInversion: 'Enfocado en prevención y control',
    infraestructuraEstudios: [
      'Adquisición de Drones para patrullaje aéreo nocturno',
      'Ampliación red de televigilancia y voceo en plazas urbanas',
      'Adquisición de camionetas para patrullaje mixto con Carabineros',
    ],
  },
  {
    id: 'cultura',
    nombre: 'Plan Municipal de Cultura',
    alcance: 'Bandeja de actividades y programas. Articulado con financiamiento municipal y fondos del Ministerio de las Culturas',
    areasInversion: '8 programas base enfocados en infraestructuras, memoria y fomento artístico',
    infraestructuraEstudios: [
      'Habilitación y mejora de infraestructura ex-Escuela 19',
      'Gestiones y diseño para construcción de un Centro Cultural Comunitario',
      'Mejoramiento y ampliación de Sala de Grabación Municipal',
    ],
  },
  {
    id: 'cambio-climatico',
    nombre: 'Plan Acción Comunal de Cambio Climático',
    alcance: 'Hoja de Ruta de Transición. Posee perfiles de proyecto para postular a fondos SNI, FNDR y PMU',
    areasInversion: 'Medidas de resiliencia energética, electromovilidad y adaptación de infraestructura',
    infraestructuraEstudios: [
      'Electrificación gradual de la flota de vehículos municipales',
      'Instalación de Techos Solares en Edificios Públicos Municipales',
      'Sombra natural y artificial en espacios priorizados',
    ],
  },
  {
    id: 'piimep',
    nombre: 'Plan de Inversiones en Espacio Público',
    sigla: 'PIIMEP',
    alcance: 'Cartera de Obras Físicas (BIP 40035333-0). Con financiamiento para preinversión en el PLADECO por M$79.344',
    areasInversion: 'Proyectos asociados a áreas verdes, accesibilidad universal y movilidad activa',
    infraestructuraEstudios: [
      'Intervención de 20 plazas existentes con accesibilidad universal',
      'Construcción de 20 ciclo refugios distribuidos en la ciudad',
      'Ciclovía recreativa de 3,5 km en antiguas instalaciones del FCAB',
    ],
  },
]
