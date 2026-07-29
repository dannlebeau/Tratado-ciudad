export type FilaFinanciamiento = {
  estado: 'Desarrollo' | 'Financiado' | 'Ejecución' | 'Entregado' | 'Cerrado'
  nIniciativas: number
  aporteMesa: number
  inversionPublica: number
}

// Financiamiento público y privado a diciembre 2025.
export const FINANCIAMIENTO: FilaFinanciamiento[] = [
  { estado: 'Desarrollo', nIniciativas: 6, aporteMesa: 300_814_353, inversionPublica: 5_144_043_000 },
  { estado: 'Financiado', nIniciativas: 1, aporteMesa: 52_864_000, inversionPublica: 2_196_994_940 },
  { estado: 'Ejecución', nIniciativas: 1, aporteMesa: 15_000_000, inversionPublica: 320_999_000 },
  { estado: 'Entregado', nIniciativas: 2, aporteMesa: 15_000_000, inversionPublica: 261_127_996 },
  { estado: 'Cerrado', nIniciativas: 1, aporteMesa: 7_136_000, inversionPublica: 0 },
]

export const FINANCIAMIENTO_TOTAL = {
  fecha: 'Diciembre 2025',
  nIniciativas: 11,
  aporteMesa: 390_814_353,
  inversionPublica: 7_923_164_936,
}

// Costos del proceso de Acuerdo de Ciudad en sí (distinto del financiamiento de
// la cartera de proyectos de la Mesa de Convergencia de arriba).
export const COSTOS_PROCESO = {
  presupuestoTotal: 80_000_000,
  recaudadoPct: 71.2,
  faltante: 30_000_000,
}
