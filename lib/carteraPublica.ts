export type ProyectoBIP = {
  nombre: string
  anios: string
  fuente: string
  monto: string
}

// Banco Integrado de Proyectos (BIP) del Ministerio de Desarrollo Social y
// Familia: revisión exhaustiva de iniciativas de inversión de Mejillones entre
// 2016 y 2026, con calificación RS (Recomendación Favorable). Es una cartera
// distinta de la que administra la Mesa de Convergencia / Fundación Huella
// Local (ver lib/proyectos.ts): esta es el registro histórico estatal
// completo, no filtrado por gestión de la Mesa. Los montos son M$ (miles de
// pesos) tal como figuran en la fuente ("Cartera_proyectos", Tabla N°11); un
// rango "a" indica que el proyecto tuvo más de una recomendación RS con
// distinto costo a lo largo de los años listados.
export const CARTERA_BIP: ProyectoBIP[] = [
  { nombre: 'Construcción Obras de Urbanización Macroloteo Fertilizante', anios: '2016', fuente: 'F.N.D.R.', monto: 'M$1.544.611' },
  { nombre: 'Construcción Relleno Sanitario, Comuna de Mejillones', anios: '2016 - 2018', fuente: 'F.N.D.R.', monto: 'M$1.811.205 a M$2.295.963' },
  { nombre: 'Construcción Infraestructura Portuaria Caleta Hornitos', anios: '2016, 2017, 2024, 2025', fuente: 'F.N.D.R. / Sectorial', monto: 'M$59.086 a M$2.700.040' },
  { nombre: 'Normalización del Hospital de Mejillones', anios: '2016 - 2021, 2023 - 2025', fuente: 'F.N.D.R.', monto: 'M$81.733 a M$856.903' },
  { nombre: 'Reposición Oficina del Registro Civil', anios: '2016', fuente: 'F.N.D.R.', monto: 'M$399.303' },
  { nombre: 'Mejoramiento Borde Costero, Sector Plaza de la Cultura', anios: '2016 - 2018', fuente: 'F.N.D.R. - Sectorial', monto: 'M$3.127.909 a M$4.009.395' },
  { nombre: 'Mejoramiento Ruta 1 Sector: Acceso Norte Mejillones - Michilla', anios: '2016 - 2022', fuente: 'Sectorial (MOP)', monto: 'M$373.397 a M$29.780.122' },
  { nombre: 'Reposición Cuartel 1° Compañía de Bomberos', anios: '2016 - 2018', fuente: 'F.N.D.R.', monto: 'M$971.953 a M$1.065.937' },
  { nombre: 'Construcción Plazas Diversos Sectores', anios: '2017, 2019', fuente: 'F.N.D.R. / Sectorial', monto: 'M$1.129.223 a M$1.284.823' },
  { nombre: 'Construcción Costanera Norte (Mejillones - Punta Chacaya)', anios: '2016 - 2018', fuente: 'Sectorial', monto: 'M$210.247 a M$219.456' },
  { nombre: 'Mejoramiento Plaza Comunitaria, Localidad Carolina de Michilla', anios: '2016, 2017', fuente: 'F.N.D.R.', monto: 'M$663.795 a M$701.593' },
  { nombre: 'Restauración Museo Municipal de Mejillones', anios: '2016, 2020 - 2023', fuente: 'F.N.D.R.', monto: 'M$129.667 a M$4.146.403' },
  { nombre: 'Construcción Diálisis Modular Hospital de Mejillones', anios: '2016 - 2019', fuente: 'F.N.D.R.', monto: 'M$1.097.585 a M$1.221.629' },
  { nombre: 'Construcción Juzgado de Letras (Común y Familia)', anios: '2017 - 2020, 2022 - 2024', fuente: 'Sectorial', monto: 'M$4.334.342 a M$10.782.570' },
  { nombre: 'Diagnóstico y Plan Maestro Barrio Casa de Máquinas', anios: '2018 - 2020', fuente: 'Sectorial', monto: 'M$75.546 a M$78.830' },
  { nombre: 'Mejoramiento Multicancha Luis Adduard', anios: '2022 - 2025', fuente: 'F.N.D.R.', monto: 'M$653.110 a M$694.253' },
  { nombre: 'Construcción Ciclovías Urbanas', anios: '2021 - 2025', fuente: 'Sectorial', monto: 'M$495.726 a M$2.669.333' },
  { nombre: 'Construcción Plaza Carol Urzúa (Barrio Pablo Neruda)', anios: '2022 - 2025', fuente: 'F.N.D.R.', monto: 'M$350.887 a M$446.165' },
  { nombre: 'Construcción Plaza La Sirenita', anios: '2022 - 2024', fuente: 'F.N.D.R.', monto: 'M$1.211.875 a M$1.334.528' },
  { nombre: 'Actualización Plan de Desarrollo Comunal (PLADECO)', anios: '2020 - 2023', fuente: 'F.N.D.R.', monto: 'M$94.708 a M$123.312' },
  { nombre: 'Mejoramiento Barrio Casa de Máquinas', anios: '2020 - 2025', fuente: 'Sectorial', monto: 'M$489.203 a M$930.929' },
  { nombre: 'Construcción Eje de Integración Sargento Gabriel Silva', anios: '2021, 2022', fuente: 'Sectorial', monto: 'M$45.519 a M$48.320' },
  { nombre: 'Reposición con Relocalización Tenencia Mejillones', anios: '2022 - 2025', fuente: 'F.N.D.R.', monto: 'M$140.569 a M$154.653' },
  { nombre: 'Mejoramiento Sistema Agua Potable Rural Carolina Michilla', anios: '2022 - 2025', fuente: 'Sectorial', monto: 'M$1.101.000 a M$2.877.724' },
  { nombre: 'Transferencia Habitabilidad Primaria Sectores Precarios', anios: '2021', fuente: 'F.N.D.R.', monto: 'M$357.854' },
  { nombre: 'Mejoramiento Ruta B-16 Acceso Sur Mejillones', anios: '2022 - 2025', fuente: 'Sectorial (MOP)', monto: 'M$450.500 a M$569.766' },
  { nombre: 'Diagnóstico Plan de Inversiones (PIIMEP)', anios: '2025', fuente: 'F.N.D.R.', monto: 'M$80.968' },
  { nombre: 'Construcción Edificio Consistorial', anios: '2024, 2025', fuente: 'F.N.D.R.', monto: 'M$749.981 a M$781.482' },
  { nombre: 'Construcción Macrourbanización Sector Barrio Cívico', anios: '2022, 2024, 2025', fuente: 'F.N.D.R.', monto: 'M$227.040 a M$249.788' },
  { nombre: 'Reposición Paseo Ferroviario Manuel Rodríguez', anios: '2023 - 2025', fuente: 'Sectorial', monto: 'M$77.817 a M$88.103' },
  { nombre: 'Mejoramiento Plaza Caleta Hornitos', anios: '2025', fuente: 'F.N.D.R.', monto: 'M$770.009' },
  { nombre: 'Mejoramiento Plaza de Armas de Mejillones', anios: '2025', fuente: 'F.N.D.R.', monto: 'M$2.244.257' },
]
