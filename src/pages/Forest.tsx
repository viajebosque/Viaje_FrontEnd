import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function Forest() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  async function handleSignOut() {
    await signOut();
    navigate('/', { replace: true });
  }

  return (
    <main className="forest">
      <header className="forest-top">
        <span>{user?.email}</span>
        <button onClick={handleSignOut}>Cerrar sesión</button>
      </header>
      <h1>Bienvenido al Bosque 🌲</h1>
      <p>Pantalla de inicio (/forest).</p>
    </main>
  );
}
