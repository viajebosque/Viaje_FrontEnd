import { useEffect, useState } from 'react';
import { apiGet } from './lib/api';

type Health = { status: string; env: string };

export default function App() {
  const [health, setHealth] = useState<Health | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiGet<Health>('/health')
      .then(setHealth)
      .catch((e) => setError(String(e)));
  }, []);

  return (
    <main style={{ fontFamily: 'system-ui', padding: '2rem' }}>
      <h1>Un Viaje por el Bosque</h1>
      <p>Frontend Vite + React + TS conectado.</p>
      <h2>Backend</h2>
      {health && <pre>{JSON.stringify(health, null, 2)}</pre>}
      {error && <p style={{ color: 'crimson' }}>Sin backend: {error}</p>}
    </main>
  );
}
