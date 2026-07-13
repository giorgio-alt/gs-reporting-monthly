# GS Klub Monthly Dashboard

`v0.5.0 · modular migration`

Modularizovaná verze dashboardu Green Swan / GS Klub pro report 05/2026. Projekt vychází z původního standalone HTML dashboardu `v0.4.22` a převádí ho do udržitelné Vite struktury s oddělenými styly, daty, komponentami, sekcemi a assety.

## Instalace

```bash
pnpm install
```

Alternativně lze použít i `npm install`, pokud je v prostředí dostupné npm.

## Vývoj

```bash
pnpm dev
```

Lokální adresa se vypíše v terminálu. Dashboard je čistě statický frontend.

## Build

```bash
pnpm build
```

Výstup se vytvoří do složky `dist/` a lze ho publikovat jako statický HTML výstup.

## Kde upravovat obsah

- Metadata reportu a navigace: `src/data/report-meta.js`
- Kapitola 01 Dashboard: `src/data/dashboard.js`
- Kapitola 02 Výkon produktů: `src/data/products.js`
- Kapitola 03 Google Ads & Sklik: `src/data/ppc.js`
- Kapitola 04 META: `src/data/meta.js`
- Kapitola 05 Projekty: `src/data/projects.js`
- Společné formátování čísel: `src/data/formatters.js`

Aktuální migrace zachovává původní markup po kapitolách, aby se nezměnil vizuální výsledek. Další krok pro nové měsíce je postupně převádět jednotlivé tabulky z HTML fragmentů do strukturovaných polí a render helperů.

## Kde upravovat vzhled

- Základní proměnné: `src/styles/variables.css`
- Původní migrovaný styl: `src/styles/base.css`
- Layoutové doplňky: `src/styles/layout.css`
- Komponentové doplňky: `src/styles/components.css`
- Tabulky: `src/styles/tables.css`
- Lightbox: `src/styles/lightbox.css`

## Kde upravovat obrázky

Původní inline base64 obrázky byly vytažené do:

```text
public/assets/extracted/
```

Pro další verze používej cílové složky podle typu assetu:

```text
public/assets/logos/
public/assets/screenshots/dashboard/
public/assets/screenshots/products/
public/assets/screenshots/ppc/
public/assets/screenshots/meta/
public/assets/screenshots/clarity/
public/assets/screenshots/projects/
public/assets/meta-creatives/
public/assets/google-ads/
public/assets/sklik/
```

V datech a sekcích odkazuj obrázky jako `/assets/...`. Pro screenshoty a kreativy zůstává připravený univerzální lightbox.

## Jak vytvořit další měsíční report

1. Zkopíruj aktuální projekt nebo vytvoř novou větev.
2. Uprav `src/data/report-meta.js` na nový měsíc, název a verzi.
3. Vyměň čísla v příslušných `src/data/*.js` souborech.
4. Nahraj nové screenshoty do `public/assets/...`.
5. Zkontroluj lightbox náhledy u META, PPC, Sklik a Clarity.
6. Spusť `pnpm build` a publikuj obsah složky `dist/`.

## Verzování

- Patch: drobné opravy textů, čísel, obrázků nebo jedné sekce.
- Minor: větší změna layoutu, nová sekce nebo refaktor.
- Major: změna architektury nebo nový reportovací systém.

Tato migrace je označená jako `v0.5.0 · modular migration`.
