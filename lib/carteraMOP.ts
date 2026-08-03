export type ObraMOP = {
  nombre: string
  direccion: string
  descripcion: string
  monto: number
}

// Obras estatales estratégicas del Ministerio de Obras Públicas actualmente en
// ejecución y diseño en Mejillones (fuente: Visor Territorial del MOP y
// Sistema Nacional de Inversiones, vía "Cartera_proyectos"). El MOP ejecuta
// macro-proyectos que escapan a la capacidad financiera directa del
// municipio: es la cartera de mayor tonelaje financiero de la comuna, y
// distinta tanto del BIP municipal/regional (lib/carteraPublica.ts) como de la
// cartera de la Mesa de Convergencia (lib/proyectos.ts). Montos en pesos
// corrientes, no M$.
export const CARTERA_MOP: ObraMOP[] = [
  {
    nombre: 'Construcción Av. Costanera de Mejillones (Sector Industrial)',
    direccion: 'Vialidad',
    descripcion: 'Desde la Primera hasta la Quinta Industrial (Tramo DM 0.000 a DM 5.320). La obra pública de mayor envergadura en la comuna, destinada a soportar y optimizar el intenso flujo de carga logística del enclave portuario.',
    monto: 10875304000,
  },
  {
    nombre: 'Conservación Global Mixto Caminos Provincia de Antofagasta (Ruta B-12)',
    direccion: 'Vialidad',
    descripcion: 'Conservación básica del tramo entre el Km 35 y el Km 55, asegurando el nivel de servicio y la conectividad estructurante de la comuna con la ruta del desierto y Sierra Gorda.',
    monto: 4681627000,
  },
  {
    nombre: 'Construcción Infraestructura Portuaria Caleta Hornitos',
    direccion: 'Obras Portuarias (DOP)',
    descripcion: 'Clave para el desarrollo del turismo y el ordenamiento del borde costero norte de la comuna, dotando de infraestructura formal a la pesca artesanal y la recreación.',
    monto: 2700040000,
  },
  {
    nombre: 'Construcción Costanera Norte (Mejillones - Punta Chacaya)',
    direccion: 'Obras Portuarias',
    descripcion: 'Proyecto de borde costero que busca consolidar la accesibilidad y puesta en valor del litoral norte de la bahía.',
    monto: 1976000000,
  },
  {
    nombre: 'Edificio Consistorial de Mejillones (Etapa Diseño)',
    direccion: 'Arquitectura',
    descripcion: 'La Dirección de Arquitectura del MOP actúa como unidad técnica para diseñar el futuro centro cívico y administrativo de la comuna.',
    monto: 498000000,
  },
]
