import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {!user && <a href="/api/auth/login">Login</a>}
      {user && (
        <div>
          <h1>Bine ai venit, {user.name}</h1>
          <p>Email: {user.email}</p>
          <a href="/profile">Profil</a><br />
          <a href="/api/auth/logout">Logout</a>
        </div>
      )}
    </div>
  );
}
