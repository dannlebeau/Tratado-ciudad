export type EtapaCronograma = {
  mes: string
  duracion: string
  titulo: string
}

// Cronograma del proceso de Acuerdo de Ciudad, mayo → diciembre. Las etapas de
// los 4 Encuentros se reagendaron a semanas específicas (ver lib/encuentros.ts
// para el detalle por encuentro).
export const CRONOGRAMA: EtapaCronograma[] = [
  { mes: 'Mayo', duracion: '2 meses', titulo: 'Búsqueda de financiamiento' },
  { mes: 'Julio', duracion: '1 mes', titulo: 'Firma compromiso autoridades locales / empresas locales' },
  { mes: 'Septiembre', duracion: '2ª semana', titulo: 'Etapa Encuentro 1' },
  { mes: 'Octubre', duracion: '3ª semana', titulo: 'Etapa Encuentro 2' },
  { mes: 'Noviembre', duracion: '3ª semana', titulo: 'Etapa Encuentro 3' },
  { mes: 'Diciembre', duracion: '2ª semana', titulo: 'Etapa Encuentro 4' },
  { mes: 'Diciembre', duracion: 'Fin de mes', titulo: 'Cierre proceso Acuerdo' },
]
