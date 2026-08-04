export type EtapaCronograma = {
  mes: string
  duracion: string
  titulo: string
}

// Cronograma del proceso de Acuerdo de Ciudad, mayo 2026 → enero 2027. Las
// etapas de los 4 Encuentros se reagendaron a semanas específicas (ver
// lib/encuentros.ts para el detalle por encuentro).
export const CRONOGRAMA: EtapaCronograma[] = [
  { mes: 'Mayo', duracion: '2 meses', titulo: 'Búsqueda de financiamiento' },
  { mes: 'Julio', duracion: '1 mes', titulo: 'Firma compromiso autoridades locales / empresas locales' },
  { mes: 'Septiembre', duracion: '7 al 13', titulo: 'Etapa Encuentro 1' },
  { mes: 'Octubre', duracion: '19 al 25', titulo: 'Etapa Encuentro 2' },
  { mes: 'Noviembre', duracion: '16 al 22', titulo: 'Etapa Encuentro 3' },
  { mes: 'Enero (2027)', duracion: '4 al 10', titulo: 'Etapa Encuentro 4' },
  { mes: 'Enero (2027)', duracion: 'Tras el Encuentro 4', titulo: 'Cierre proceso Acuerdo' },
]
