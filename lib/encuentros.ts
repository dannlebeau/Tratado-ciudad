export type Encuentro = {
  numero: 1 | 2 | 3 | 4
  pregunta: string
  mes: string
  objetivo: string
  contenido: string[]
}

export const ENCUENTROS: Encuentro[] = [
  {
    numero: 1,
    pregunta: '¿Cómo es la ciudad en que vivimos?',
    mes: 'Agosto',
    objetivo: 'Diagnóstico compartido del estado actual de Mejillones.',
    contenido: ['Diagnóstico cuantitativo', 'Diagnóstico cualitativo', 'Mesas de trabajo'],
  },
  {
    numero: 2,
    pregunta: '¿En qué ciudad queremos vivir?',
    mes: 'Septiembre',
    objetivo: 'Construcción colectiva de una visión de ciudad a largo plazo.',
    contenido: ['Visión de ciudad', 'Estrategias con miras a largo plazo'],
  },
  {
    numero: 3,
    pregunta: '¿Es esta la ciudad en que queremos vivir?',
    mes: 'Octubre',
    objetivo: 'Validación de la imagen objetivo y la cartera de proyectos priorizada.',
    contenido: ['Imagen objetivo', 'Imagen de ciudad', 'Cartera de proyectos'],
  },
  {
    numero: 4,
    pregunta: '¿En qué nos comprometemos para construir la ciudad que queremos?',
    mes: 'Noviembre',
    objetivo: 'Firma de compromisos concretos entre autoridades, empresas y comunidad.',
    contenido: ['Compromisos', 'Acuerdo de Ciudad'],
  },
]
