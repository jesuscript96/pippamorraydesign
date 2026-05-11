import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-gray-200">
      <Header />
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16">
        <Outlet />
      </main>
      <footer className="py-12 text-center text-xs text-gray-400 tracking-widest">
        &copy; {new Date().getFullYear()} PIPPA MORRAY DESIGN WORKSHOP
      </footer>
    </div>
  );
}
