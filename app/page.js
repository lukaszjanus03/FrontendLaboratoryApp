'use client';
import { useAuth } from "@/app/lib/AuthContext";
import Link from "next/link";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full">
      
      {/* --- WIDOK DLA ZALOGOWANEGO UŻYTKOWNIKA --- */}
      {user ? (
        <div className="max-w-4xl w-full bg-white p-8 rounded-2xl shadow-xl border border-violet-100 animate-in fade-in zoom-in duration-500">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-4">
              Witaj w Panelu Frontend! 👋
            </h1>
            <p className="text-lg text-slate-600">
              Zalogowano jako: <span className="font-semibold text-violet-700">{user.email}</span>
            </p>
          </div>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p className="text-xl font-medium border-l-4 border-violet-500 pl-4 bg-violet-50 py-2 rounded-r">
              O Projekcie
            </p>
            <p>
              Ta aplikacja została stworzona w ramach przedmiotu <strong>Laboratoria Programowania Frontend</strong>. 
              Projekt demonstruje nowoczesne podejście do tworzenia aplikacji webowych typu SPA/PWA.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-4 border rounded-lg hover:border-violet-300 transition hover:shadow-md">
                <h3 className="font-bold text-violet-700 mb-2">🛠️ Technologie</h3>
                <ul className="list-disc list-inside text-sm space-y-1 text-slate-600">
                  <li>Next.js (App Router)</li>
                  <li>Firebase (Auth & Firestore)</li>
                  <li>Tailwind CSS</li>
                  <li>React Hooks</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg hover:border-green-300 transition hover:shadow-md">
                <h3 className="font-bold text-green-700 mb-2">🚀 Funkcjonalności</h3>
                <ul className="list-disc list-inside text-sm space-y-1 text-slate-600">
                  <li>Pełna autentykacja użytkowników</li>
                  <li>Ochrona ścieżek (Protected Routes)</li>
                  <li>Zarządzanie stanem globalnym</li>
                  <li>Dynamiczna tabela danych (Temat 3)</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <Link href="/articles" className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition shadow font-medium">
                Przejdź do Artykułów
              </Link>
              <Link href="/project" className="px-6 py-3 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition font-medium">
                Zobacz Tabelę
              </Link>
            </div>
          </div>
        </div>
      ) : (
        
        /* --- WIDOK DLA NIEZALOGOWANEGO (MENU STARTOWE) --- */
        <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-2xl border border-slate-100 text-center animate-in slide-in-from-bottom-10 duration-700">
          <div className="mb-8">
            <div className="w-20 h-20 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl shadow-inner">
              🚀
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Laboratorium Frontend</h1>
            <p className="text-slate-500">
              Aby uzyskać dostęp do projektu i funkcjonalności, musisz się zalogować.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Link 
              href="/user/signin" 
              className="w-full py-3 px-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-violet-200"
            >
              Zaloguj się
            </Link>
            
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase">lub</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <Link 
              href="/user/register" 
              className="w-full py-3 px-4 bg-white border-2 border-slate-200 hover:border-violet-600 hover:text-violet-600 text-slate-700 font-bold rounded-lg transition-all"
            >
              Utwórz konto
            </Link>
          </div>

          <p className="mt-8 text-xs text-gray-400">
            Projekt zaliczeniowy Next.js + Firebase
          </p>
        </div>
      )}
    </div>
  );
}