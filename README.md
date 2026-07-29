# Mejillones 2050 — Acuerdo de Ciudad

Panel de seguimiento del proceso de Acuerdo de Ciudad de Mejillones: una alianza entre
[Fundación Huella Local](https://huellalocal.cl) y Corporación Ciudades, junto a la
Mesa de Convergencia (Municipalidad de Mejillones + 12 empresas del sector privado),
para construir junto a la comunidad la ciudad que Mejillones quiere ser hacia 2050.

Fase 1 de la plataforma: panel interno de seguimiento del proceso. Los datos (deriva­
dos de la presentación del proyecto) viven como TypeScript estático en `lib/`, sin
base de datos ni autenticación.

## Contenido

- `/` — resumen del Acuerdo de Ciudad, cronograma del proceso (mayo → diciembre) y
  avance del financiamiento del proceso.
- `/encuentros` — los 4 Encuentros participativos (diagnóstico → visión → imagen
  objetivo → compromisos), cada uno con su pregunta guía.
- `/proyectos` — cartera de proyectos de inversión público-privada en Mejillones,
  Hornitos y Michilla, filtrable por ubicación, más la tabla de financiamiento
  público y privado por estado (a diciembre 2025).
- `/mesa-de-convergencia` — quiénes financian y ejecutan: sector privado, gobierno
  local y el articulador de la alianza.

Algunos proyectos de la cartera quedan marcados como **"Por confirmar"**: el estado
solo se completa cuando la fuente de origen lo confirma explícitamente, en vez de
inventarlo.

## Stack

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4. Mismo stack que
el resto de los proyectos de Huella Local en este workspace.

## Desarrollo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Roadmap

**Fase 2** (no implementada aún): plataforma pública participativa — la comunidad
interactúa durante los encuentros en vivo (comentarios, votación de prioridades),
lo que requerirá persistencia real (base de datos) y, si se quiere un mapa
interactivo real, coordenadas geográficas para los proyectos de la cartera (hoy son
pines numerados sobre una imagen del proceso, no lat/lng).
