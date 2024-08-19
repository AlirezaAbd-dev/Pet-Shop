import Home from '@/routes/home';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HomePage() {
  return <Home />;
}
