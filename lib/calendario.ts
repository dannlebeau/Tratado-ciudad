export type SemanaCalendario = {
  numero: number
  inicio: Date
  fin: Date
  tipo: 'encuentro' | 'libre'
  encuentro?: number
}

const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
]

// Ancla: 7 de septiembre de 2026, inicio de la semana del Encuentro 1. El
// proceso corre en bloques de 7 días consecutivos y sin quiebres desde ahí
// hasta el 10 de enero de 2027 (fin de la semana del Encuentro 4): 126 días =
// 18 semanas exactas. Las semanas de encuentro vienen de lib/encuentros.ts:
// 1 = 7-13 sep, 2 = 19-25 oct, 3 = 16-22 nov, 4 = 4-10 ene (2027).
const INICIO = new Date(2026, 8, 7)
const TOTAL_SEMANAS = 18
const SEMANA_A_ENCUENTRO: Record<number, number> = { 1: 1, 7: 2, 11: 3, 18: 4 }

export const CALENDARIO: SemanaCalendario[] = Array.from({ length: TOTAL_SEMANAS }, (_, i) => {
  const numero = i + 1
  const inicio = new Date(INICIO)
  inicio.setDate(INICIO.getDate() + i * 7)
  const fin = new Date(inicio)
  fin.setDate(inicio.getDate() + 6)
  const encuentro = SEMANA_A_ENCUENTRO[numero]
  return { numero, inicio, fin, tipo: encuentro ? 'encuentro' : 'libre', encuentro }
})

export const SEMANAS_ENCUENTRO_TOTAL = Object.keys(SEMANA_A_ENCUENTRO).length
export const SEMANAS_LIBRES_TOTAL = TOTAL_SEMANAS - SEMANAS_ENCUENTRO_TOTAL

export function formatRango(inicio: Date, fin: Date): string {
  const mismoMes = inicio.getMonth() === fin.getMonth() && inicio.getFullYear() === fin.getFullYear()
  const mismoAnio = inicio.getFullYear() === fin.getFullYear()
  if (mismoMes) {
    return `${inicio.getDate()} al ${fin.getDate()} de ${MESES[inicio.getMonth()]}`
  }
  const finConAnio = mismoAnio ? '' : ` de ${fin.getFullYear()}`
  return `${inicio.getDate()} de ${MESES[inicio.getMonth()]} al ${fin.getDate()} de ${MESES[fin.getMonth()]}${finConAnio}`
}

export function formatMesAnio(fecha: Date): string {
  return `${MESES[fecha.getMonth()]} ${fecha.getFullYear()}`
}
