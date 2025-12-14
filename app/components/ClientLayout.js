'use client'; // To pozwala na używanie useState (interakcje)

import { useState } from "react";
import Link from "next/link";
import { AuthProvider } from "@/app/lib/AuthContext";
import { Toaster } from "react-hot-toast";
import NextTopLoader from 'nextjs-toploader';

export default function ClientLayout({ children }) {
  // Stan do zarządzania widocznością menu na telefonie
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Funkcja zamykająca menu po kliknięciu w link (dla wygody usera)
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <NextTopLoader color="#7c3aed" height={3} showSpinner={false} />
      
      <AuthProvider>
        <div className="flex flex-1 min-h-screen relative">
          
          {/* --- SIDEBAR (NAWIGACJA) --- */}
          <aside className={`
            w-64 bg-gradient-to-b from-slate-900 via-slate-900 to-violet-900 text-white flex-col shadow-2xl transition-all duration-300
            ${isMobileMenuOpen ? 'flex fixed inset-y-0 left-0 z-50' : 'hidden'} 
            md:flex md:static
          `}>
            <div className="p-6 text-2xl font-bold tracking-wider border-b border-slate-700/50 flex justify-between items-center">
              <span>LAB APP</span>
              {/* Krzyżyk do zamykania menu (tylko na mobile) */}
              <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden text-slate-400 hover:text-white">
                ✕
              </button>
            </div>

            {/* Nav ma flex-col, abyśmy mogli użyć mt-auto dla sekcji "O Autorze" */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto flex flex-col">
              <Link href="/" onClick={closeMenu} className="block px-4 py-2 rounded hover:bg-white/10 transition">
                🏠 Strona domowa
              </Link>

              {/* Sekcja Użytkownik */}
              <div className="pt-4 pb-2 text-xs text-slate-400 uppercase font-semibold">Użytkownik</div>
              <Link href="/user/signin" onClick={closeMenu} className="block px-4 py-2 rounded hover:bg-white/10 transition">
                🔐 Logowanie
              </Link>
              <Link href="/user/register" onClick={closeMenu} className="block px-4 py-2 rounded hover:bg-white/10 transition">
                📝 Rejestracja
              </Link>

              {/* Sekcja Chroniona */}
              <div className="pt-4 pb-2 text-xs text-slate-400 uppercase font-semibold">Strefa Chroniona</div>
              <Link href="/user/profile" onClick={closeMenu} className="block px-4 py-2 rounded hover:bg-white/10 transition">
                👤 Profil
              </Link>
              <Link href="/user/signout" onClick={closeMenu} className="block px-4 py-2 rounded hover:bg-red-900/50 text-red-200 transition">
                🚪 Wyloguj
              </Link>

              {/* Sekcja Projekty */}
              <div className="pt-4 pb-2 text-xs text-slate-400 uppercase font-semibold">Projekty</div>
              <Link href="/project" onClick={closeMenu} className="block px-4 py-2 rounded hover:bg-white/10 transition text-violet-300 font-medium">
                📊 Temat 3 (Tabela)
              </Link>
              <Link href="/articles" onClick={closeMenu} className="block px-4 py-2 rounded hover:bg-white/10 transition text-green-300 font-medium">
                ☁️ Lab 9 (Artykuły)
              </Link>

              {/* --- LINK O AUTORZE (Na samym dole) --- */}
              <div className="mt-auto pt-6 border-t border-white/10">
                 <div className="pb-2 text-xs text-slate-400 uppercase font-semibold">Informacje</div>
                 <Link href="/about" onClick={closeMenu} className="block px-4 py-2 rounded hover:bg-white/10 transition text-blue-200">
                    ℹ️ O Autorze
                 </Link>
              </div>

            </nav>
          </aside>

          {/* Tło przyciemniające resztę strony, gdy menu jest otwarte na mobile */}
          {isMobileMenuOpen && (
            <div 
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
          )}

          {/* --- GŁÓWNA CZĘŚĆ EKRANU --- */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Nagłówek */}
            <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4 md:px-6 z-10">
              <div className="flex items-center gap-3">
                
                {/* PRZYCISK HAMBURGER (Widoczny tylko na mobile) */}
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded focus:outline-none"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                <div className="font-semibold text-gray-700">Panel Aplikacji</div>
              </div>
              
              <div className="flex gap-4 text-sm text-gray-500">
                <span className="hidden sm:inline">Witaj w aplikacji</span>
              </div>
            </header>

            {/* Treść */}
            <main className="flex-1 p-4 md:p-8 overflow-auto relative">
              {children}
            </main>

            {/* Stopka */}
            <footer className="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-500">
              &copy; 2024 Laboratorium Frontend
            </footer>
          </div>
        </div>

        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      </AuthProvider>
    </>
  );
}