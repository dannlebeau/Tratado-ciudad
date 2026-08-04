export type AreaPladeco = {
  id: string
  nombre: string
  nIniciativas: number
  presupuesto: string
  porcentaje: string
}

// Desglose presupuestario de la Cartera de Iniciativas de Inversión del
// PLADECO 2023-2033 (163 iniciativas, M$79.047.939 en total): el instrumento
// "paraguas" de la planificación local. Es distinta de la cartera BIP (registro
// histórico con RS ya otorgada, lib/carteraPublica.ts): esta es la matriz
// estratégica completa, incluyendo lo que todavía no se ha postulado.
export const AREAS_PLADECO: AreaPladeco[] = [
  { id: 'urbano-territorial', nombre: 'Urbano Territorial y Vivienda', nIniciativas: 37, presupuesto: 'M$27.979.205', porcentaje: '35,40%' },
  { id: 'ambiental', nombre: 'Área Ambiental', nIniciativas: 22, presupuesto: 'M$11.811.499', porcentaje: '14,94%' },
  { id: 'patrimonio', nombre: 'Área Patrimonio', nIniciativas: 8, presupuesto: 'M$9.184.325', porcentaje: '11,62%' },
  { id: 'salud', nombre: 'Área Salud y Vida Sana', nIniciativas: 17, presupuesto: 'M$7.255.889', porcentaje: '9,18%' },
  { id: 'educacion', nombre: 'Área Educación', nIniciativas: 7, presupuesto: 'M$6.330.000', porcentaje: '8,01%' },
  { id: 'cultura', nombre: 'Área Cultura', nIniciativas: 6, presupuesto: 'M$4.392.666', porcentaje: '5,56%' },
  { id: 'social', nombre: 'Área Social', nIniciativas: 19, presupuesto: 'M$4.205.987', porcentaje: '5,32%' },
  { id: 'desarrollo-productivo', nombre: 'Área Desarrollo Productivo', nIniciativas: 8, presupuesto: 'M$3.954.400', porcentaje: '5,00%' },
  { id: 'seguridad', nombre: 'Área Seguridad', nIniciativas: 25, presupuesto: 'M$2.795.358', porcentaje: '3,54%' },
  { id: 'institucional', nombre: 'Área Institucional', nIniciativas: 4, presupuesto: 'M$568.610', porcentaje: '0,72%' },
  { id: 'turismo', nombre: 'Turismo (PLADETUR)', nIniciativas: 10, presupuesto: 'M$570.000', porcentaje: '0,71%' },
]

export const AREAS_PLADECO_TOTAL = { nIniciativas: 163, presupuesto: 'M$79.047.939', porcentaje: '100%' }

export type EtapaProyectoPladeco = { nombre: string; monto: string }

export type ProyectoPladeco = {
  areaId: string
  nombre: string
  descripcion?: string
  montoTexto?: string
  etapas?: EtapaProyectoPladeco[]
}

// Iniciativas más detonantes y estratégicas de la cartera, solo para las áreas
// que el informe detalla en profundidad (Urbano Territorial, Ambiental,
// Patrimonio y Cultura, Salud, Seguridad). El resto de las áreas (Educación,
// Social, Desarrollo Productivo, Institucional, Turismo) solo cuentan con el
// desglose presupuestario de AREAS_PLADECO por ahora: no se detalla su
// contenido acá porque la fuente no lo desglosa.
export const PROYECTOS_PLADECO: ProyectoPladeco[] = [
  // Urbano Territorial y Vivienda
  {
    areaId: 'urbano-territorial',
    nombre: 'Estudio Plan Maestro para el Desarrollo Inmobiliario de Terrenos del FCAB',
    descripcion: 'Diseño estratégico básico y de gestión para reconvertir las antiguas fajas ferroviarias subutilizadas en el centro de la ciudad en viviendas integradas y equipamiento comunitario.',
    montoTexto: 'M$75.240',
  },
  {
    areaId: 'urbano-territorial',
    nombre: 'Estudio Plan Maestro y de Gestión para la Recuperación del Borde Costero Urbano en el Área Consolidada',
    descripcion: 'Herramienta técnica orientada a ordenar la costa central, promoviendo el espacio público y regulando los accesos recreativos.',
    montoTexto: 'M$75.240',
  },
  {
    areaId: 'urbano-territorial',
    nombre: 'Plan de Inversiones en Infraestructura de Movilidad y Espacio Público (PIIMEP)',
    descripcion: 'Estudio normativo y técnico obligatorio para acordar la cartera priorizada de obras de conectividad y movilidad activa a un horizonte de 10 años.',
    montoTexto: 'M$79.344',
  },
  {
    areaId: 'urbano-territorial',
    nombre: 'Estudios de Alternativas Habitacionales Sustentables',
    descripcion: 'Dos estudios de preinversión para diversificar las soluciones al déficit habitacional y apoyar el cierre de campamentos.',
    montoTexto: 'M$174.960',
    etapas: [
      { nombre: 'Línea de Transición y Arriendo', monto: 'M$87.480' },
      { nombre: 'Línea Unifamiliar Eficiente', monto: 'M$87.480' },
    ],
  },
  {
    areaId: 'urbano-territorial',
    nombre: 'Actualización de Catastro de Campamentos y Vivienda Informal',
    descripcion: 'Levantamiento social y físico para guiar las políticas de radicación y urbanización habitacional.',
    montoTexto: 'M$102.000',
  },
  {
    areaId: 'urbano-territorial',
    nombre: 'Mejoramiento del Alumbrado Público mediante Telegestión Smart',
    descripcion: 'Modernización lumínica integral de la ciudad bajo estándares de eficiencia y seguridad.',
    montoTexto: 'M$1.041.840',
  },
  {
    areaId: 'urbano-territorial',
    nombre: 'Saneamiento Sanitario e Infraestructura Rural',
    descripcion: 'Cierre de la brecha de servicios básicos en caletas y localidades rurales, eliminando progresivamente la dependencia de camiones aljibe.',
    montoTexto: 'M$1.987.000',
    etapas: [
      { nombre: 'Mejoramiento del Sistema de Agua Potable Rural en Carolina de Michilla', monto: 'M$1.101.000' },
      { nombre: 'Adquisición de Planta de Agua Potable Solar para Caleta Hornitos', monto: 'M$600.000' },
      { nombre: 'Saneamiento Sanitario de la Planta de Tratamiento de Michilla', monto: 'M$250.000' },
    ],
  },
  {
    areaId: 'urbano-territorial',
    nombre: 'Ciclovía Recreativa de 3,5 km en antiguas instalaciones del FCAB',
    descripcion: 'Proyecto de movilidad activa para reconvertir el patrimonio ferroviario en un corredor verde urbano.',
  },

  // Ambiental
  {
    areaId: 'ambiental',
    nombre: 'Plan Comunal de Gestión Integrada de Residuos Sólidos Domiciliarios (RSD)',
    descripcion: 'Diseño logístico, gobernanza del reciclaje y preparación de una cartera de inversiones asociada para el vertedero y puntos limpios de la comuna.',
  },
  {
    areaId: 'ambiental',
    nombre: 'Plan de Identificación y Puesta en Valor de Sitios de Interés Ambiental',
    descripcion: 'Hoja de ruta técnica para definir y proteger las zonas de alta biodiversidad en el borde costero y desierto de la comuna.',
  },
  {
    areaId: 'ambiental',
    nombre: 'Sistema de Registro, Actualización y Análisis de Información Ambiental de Interés Comunal',
    descripcion: 'Plataforma de monitoreo y fiscalización de variables ecológicas críticas.',
  },
  {
    areaId: 'ambiental',
    nombre: 'Proyectos demostrativos y de fomento',
    descripcion: 'Programa Piloto de Electromovilidad, Incubadora de Emprendimientos de Economía Circular y Prefactibilidad para la Red Pública de Monitoreo de la Bahía de Mejillones.',
  },

  // Patrimonio y Cultura
  {
    areaId: 'patrimonio',
    nombre: 'Rehabilitación del Edificio Ilustre Municipalidad de Mejillones (ICH)',
    descripcion: 'Restauración integral de la histórica infraestructura ubicada en Francisco Antonio Pinto 200.',
    montoTexto: 'M$3.500.000',
  },
  {
    areaId: 'patrimonio',
    nombre: 'Rehabilitación del Inmueble Correos de Chile (ICH, Calle Ongolmo 601)',
    descripcion: 'Recuperación de infraestructura patrimonial para fines comunitarios y culturales.',
  },
  {
    areaId: 'cultura',
    nombre: 'Construcción del Centro Cultural de Mejillones',
    descripcion: 'Programa de recintos para programación artística, con espacios de formación, difusión, exposiciones y salas de encuentro para agentes culturales comunales.',
    montoTexto: 'M$4.115.000',
    etapas: [
      { nombre: 'Etapa de Perfil', monto: 'M$25.000' },
      { nombre: 'Etapa de Anteproyecto', monto: 'M$90.000' },
      { nombre: 'Ejecución Física', monto: 'M$4.000.000' },
    ],
  },
  {
    areaId: 'patrimonio',
    nombre: 'Habilitación del Museo de Sitio de las Guaneras de Mejillones',
    descripcion: 'Centro de Visitantes y recorridos históricos guiados en las zonas de antiguas guaneras.',
  },
  {
    areaId: 'patrimonio',
    nombre: 'Mejoramiento del Barrio Casa de Máquinas',
    descripcion: 'Recuperación urbana y puesta en valor patrimonial del histórico entorno ferroviario.',
    montoTexto: 'M$522.220',
  },

  // Salud y Vida Sana
  {
    areaId: 'salud',
    nombre: 'Construcción de la Piscina Temperada Municipal',
    descripcion: 'Principal equipamiento recreativo y deportivo proyectado de la comuna.',
    montoTexto: 'M$3.395.000',
    etapas: [
      { nombre: 'Etapa de Prefactibilidad', monto: 'M$25.000' },
      { nombre: 'Etapa de Anteproyecto', monto: 'M$120.000' },
      { nombre: 'Ejecución Física', monto: 'M$3.250.000' },
    ],
  },
  {
    areaId: 'salud',
    nombre: 'Construcción de Servicio de Atención de Salud en Zona Rural',
    descripcion: 'Infraestructura y dotación de profesionales permanentes para atención primaria y domiciliaria en Hornitos y Michilla.',
    montoTexto: 'M$1.459.964',
  },
  {
    areaId: 'salud',
    nombre: 'Actualización del Estudio de Red de Salud',
    descripcion: 'Análisis del déficit de oferta y demanda del Hospital Comunitario.',
    montoTexto: 'M$71.000',
  },
  {
    areaId: 'salud',
    nombre: 'Estudio de Perfil de Usuarios del Hospital',
    descripcion: 'Diagnóstico de las principales patologías de la población asociadas a factores ambientales y etarios.',
    montoTexto: 'M$30.000',
  },

  // Seguridad
  {
    areaId: 'seguridad',
    nombre: 'Centro de Operaciones de Seguridad y Emergencia',
    descripcion: 'Edificio de ~150 m² que reúne central de radio, televigilancia, alarmas y oficinas de la Dirección de Seguridad Pública Municipal, fuera de la cota de inundación.',
    montoTexto: 'M$327.000',
    etapas: [
      { nombre: 'Etapa de Perfil', monto: 'M$12.000' },
      { nombre: 'Etapa de Ejecución', monto: 'M$315.000' },
    ],
  },
  {
    areaId: 'seguridad',
    nombre: 'Normalización y Mejoramiento de la Iluminación Pública',
    descripcion: 'Renovación del alumbrado público para mejorar la calidad lumínica y reducir zonas de riesgo.',
    montoTexto: 'M$1.010.135',
    etapas: [
      { nombre: 'Etapa de Perfil', monto: 'M$20.000' },
      { nombre: 'Etapa de Ejecución', monto: 'M$990.135' },
    ],
  },
  {
    areaId: 'seguridad',
    nombre: 'Sistemas de Alumbrado en Conectores Críticos',
    descripcion: 'Iluminación continua en tres conectores urbanos de alta circulación con riesgo peatonal.',
    montoTexto: 'M$701.981',
    etapas: [
      { nombre: 'Av. Fertilizantes - Módulo de Atención Primaria', monto: 'M$211.160' },
      { nombre: 'Av. Fertilizantes - Playa Rinconada', monto: 'M$251.955' },
      { nombre: 'Calle Serrano - Cementerio Municipal', monto: 'M$238.866' },
    ],
  },
  {
    areaId: 'seguridad',
    nombre: 'Adquisición de Equipamiento Móvil de Emergencia y Respuesta',
    descripcion: 'Equipamiento logístico y tecnológico para fortalecer la capacidad operativa de respuesta municipal ante catástrofes.',
    montoTexto: 'M$192.850',
    etapas: [
      { nombre: 'Vehículo para Puesto de Comando Móvil', monto: 'M$85.000' },
      { nombre: 'Centro Comunitario de Seguridad Móvil Multipropósito', monto: 'M$78.600' },
      { nombre: 'Sistema de Comunicación Autónomo para Emergencias', monto: 'M$29.250' },
    ],
  },
  {
    areaId: 'seguridad',
    nombre: 'Estudio de Geolocalización de Riesgos',
    descripcion: 'Levantamiento técnico de zonas vulnerables a tsunami y aluvión para informar los Instrumentos de Planificación Territorial (IPT).',
    montoTexto: 'M$14.000',
  },
]
