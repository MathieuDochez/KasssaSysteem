# KasssaSysteem

Kassa Systeem voor Veros Scouting Lint.

## Monorepo structuur

```text
apps/
  frontend/   # React + Vite
  backend/    # .NET Web API
packages/
  ui/         # gedeelde UI modules
  shared/     # gedeelde types/utilities
  config/     # gedeelde configuratie modules
```

## Frontend (publieke website)

React + Vite + React Router. Starten vanuit de root:

```bash
npm install
npm run frontend:dev
```

```text
apps/frontend/src/
  pages/       # Home, Bieren, Overig aanbod, Route, Foto's
  components/  # Header, Footer, BeerCard, Lightbox, ...
  data/        # tijdelijke statische data (bieren, aanbod, foto's, festivalinfo)
  services/    # catalog.js: enige plek waar de UI data ophaalt -> later API/database
  hooks/       # useAsync, useCountdown
```

De bier- en aanbodlijsten staan nu nog in `src/data/`. Zodra de backend een database
heeft, worden enkel de functies in `src/services/catalog.js` vervangen door API-calls.
