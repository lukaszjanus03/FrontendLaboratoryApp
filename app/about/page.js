import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg border border-gray-100">
      <h1 className="text-3xl font-bold text-violet-700 mb-6">O Projekcie</h1>
      
      <div className="space-y-4 text-gray-600">
        <p>
          Aplikacja została zrealizowana w ramach laboratorium <strong>Programowanie Frontend</strong> .
        </p>
        <p>
          Celem projektu było stworzenie responsywnej aplikacji webowej w technologii <strong>Next.js</strong> z wykorzystaniem usług <strong>Firebase</strong>.
        </p>

        <h2 className="text-xl font-semibold text-slate-800 pt-4">Zaimplementowane funkcjonalności:</h2>
        <ul className="list-disc list-inside space-y-1 ml-2">
            <li>System logowania i rejestracji (Firebase Auth).</li>
            <li>Ochrona ścieżek (Routing).</li>
            <li>Integracja z bazą danych Firestore (Zapis/Odczyt profilu i artykułów).</li>
            <li>Własny komponent tabeli z sortowaniem i zwijaniem wierszy (Temat 3).</li>
            <li>Pełna responsywność (Mobile/Tablet/Desktop).</li>
        </ul>

        <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="text-sm uppercase font-bold text-gray-400 mb-2">Autor</h3>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center text-xl">👨‍💻</div>
                <div>
                    <p className="font-bold text-slate-800">Łukasz Janus</p>
                    <p className="text-sm text-gray-500">Student Informatyki</p>
                </div>
            </div>
        </div>
      </div>

      <div className="mt-8">
        <Link href="/" className="text-violet-600 hover:underline">
            &larr; Wróć do strony głównej
        </Link>
      </div>
    </div>
  );
}