export type EtapaCronograma = {
  mes: string
  duracion: string
  titulo: string
}

// Cronograma del proceso de Acuerdo de Ciudad, mayo → diciembre.
export const CRONOGRAMA: EtapaCronograma[] = [
  { mes: 'Mayo', duracion: '2 meses', titulo: 'Búsqueda de financiamiento' },
  { mes: 'Julio', duracion: '1 mes', titulo: 'Firma compromiso autoridades locales / empresas locales' },
  { mes: 'Agosto', duracion: '1 mes', titulo: 'Etapa Encuentro 1' },
  { mes: 'Septiembre', duracion: '1 mes', titulo: 'Etapa Encuentro 2' },
  { mes: 'Octubre', duracion: '1 mes', titulo: 'Etapa Encuentro 3' },
  { mes: 'Noviembre', duracion: '1 mes', titulo: 'Etapa Encuentro 4' },
  { mes: 'Diciembre', duracion: '', titulo: 'Cierre proceso Acuerdo' },
]
