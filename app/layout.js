import "./globals.css";
import { AuthProvider } from "@/app/lib/AuthContext";
import Link from "next/link";

export const metadata = {
  title: "Frontend Lab",
  description: "Aplikacja laboratoryjna",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="bg-gray-50 text-slate-900 min-h-screen flex flex-col">
        <AuthProvider>
          <div className="flex flex-1 min-h-screen">
            
            {/* Pasek Boczny (Sidebar) */}
            <aside className="w-64 bg-slate-900 text-white flex flex-col hidden md:flex">
              <div className="p-6 text-2xl font-bold tracking-wider border-b border-slate-700">
                LAB APP
              </div>
              <nav className="flex-1 p-4 space-y-2">
                <Link href="/" className="block px-4 py-2 rounded hover:bg-slate-700 transition">
                   🏠 Strona domowa
                </Link>
                {/* Linki dostępne dla wszystkich */}
                <div className="pt-4 pb-2 text-xs text-slate-400 uppercase font-semibold">Użytkownik</div>
                <Link href="/user/signin" className="block px-4 py-2 rounded hover:bg-slate-700 transition">
                   🔐 Logowanie
                </Link>
                <Link href="/user/register" className="block px-4 py-2 rounded hover:bg-slate-700 transition">
                   📝 Rejestracja
                </Link>
                
                {/* Linki chronione (zobaczymy je później) */}
                <div className="pt-4 pb-2 text-xs text-slate-400 uppercase font-semibold">Strefa Chroniona</div>
                <Link href="/user/profile" className="block px-4 py-2 rounded hover:bg-slate-700 transition">
                   👤 Profil
                </Link>
              </nav>
            </aside>

            {/* Główna część ekranu */}
            <div className="flex-1 flex flex-col">
              {/* Nagłówek (Header) */}
              <header className="bg-white shadow h-16 flex items-center justify-between px-6">
                <div className="font-semibold text-gray-700">Panel Aplikacji</div>
                <div className="flex gap-4 text-sm">
                   {/* Tu w przyszłości będzie info o zalogowanym userze */}
                   <span>Witaj w aplikacji</span>
                </div>
              </header>

              {/* Treść strony (tutaj wchodzą page.js) */}
              <main className="flex-1 p-8 overflow-auto">
                {children}
              </main>

              {/* Stopka */}
              <footer className="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-500">
                &copy; 2024 Laboratorium Frontend
              </footer>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}