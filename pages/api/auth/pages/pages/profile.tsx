import { getSession } from '@auth0/nextjs-auth0';

export default function Profile({ user }: { user: any }) {
  return (
    <div>
      <h1>Profilul tău</h1>
      <p>Nume: {user.name}</p>
      <p>Email: {user.email}</p>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
}

export async function getServerSideProps(ctx: any) {
  const session = getSession(ctx.req, ctx.res);

  if (!session) {
    return { redirect: { destination: '/', permanent: false } };
  }

  return { props: { user: session.user } };
}
