'use client'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/app/lib/firebase"; 
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function SignInForm() {
  const auth = getAuth(app);
  const router = useRouter();
  const params = useSearchParams();
  
  // Zadanie 8: Obsługa returnUrl (jeśli brak to wróć na główną)
  const returnUrl = params.get("returnUrl") || '/'; 
  
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const email = e.target["email"].value;
    const password = e.target["password"].value;

    // Logowanie Firebase
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         // Sukces - przekierowanie
         router.push(returnUrl);
      })
      .catch((error) => {
        setLoading(false);
        // Zadanie 8: Wyświetlenie błędu w formularzu
        const errorCode = error.code;
        console.error(errorCode);
        
        if (errorCode === 'auth/invalid-credential') {
            setError("Nieprawidłowy email lub hasło.");
        } else if (errorCode === 'auth/too-many-requests') {
            setError("Zbyt wiele nieudanych prób. Spróbuj później.");
        } else {
            setError("Wystąpił błąd logowania: " + error.message);
        }
      });
  };

  return (
    <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">Zaloguj się</h1>
          
          {/* Komunikat błędu */}
          {error && (
            <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
                <p className="font-bold">Błąd</p>
                <p>{error}</p>
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Adres Email</label>
                <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="np. admin@test.com"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Hasło</label>
                <input 
                    type="password" 
                    name="password" 
                    required 
                    className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="••••••••"
                />
            </div>
            <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2.5 rounded font-medium hover:bg-blue-700 transition disabled:bg-blue-300"
            >
                {loading ? "Logowanie..." : "Zaloguj się"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Nie masz konta? <Link href="/user/register" className="text-blue-600 hover:underline">Zarejestruj się</Link>
          </p>
        </div>
    </div>
  );
}