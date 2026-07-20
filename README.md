# Viaje_FrontEnd

Frontend Vite + React + TypeScript para **Un Viaje por el Bosque**. Usa Supabase (supabase-js, anon key) y consume el backend en Railway. Despliega en Vercel.

## Local

```bash
npm install
cp .env.example .env   # rellena VITE_SUPABASE_* y VITE_API_URL
npm run dev            # http://localhost:5173
```

## Ambientes

| Branch | Vercel     | Supabase   | Backend    |
|--------|------------|------------|------------|
| `dev`  | Preview/Dev | Viaje_Dev  | Railway Dev  |
| `main` | Production  | Viaje_Prod | Railway Prod |

Variables (`VITE_*`) se configuran en Vercel por ambiente. Ver `.env.example`.
