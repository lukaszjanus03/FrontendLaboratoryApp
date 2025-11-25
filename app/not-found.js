import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h2 className="text-6xl font-extrabold text-slate-200 mb-4">404</h2>
      <p className="text-xl text-slate-600 mb-8">Ups! Nie znaleziono takiej strony.</p>
      <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">
        Wróć do strony głównej
      </Link>
    </div>
  );
}