'use client'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "@/app/lib/firebase"; 
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function SignInForm() {
  const auth = getAuth(app);
  const router = useRouter();
  const params = useSearchParams();
  const returnUrl = params.get("returnUrl") || '/'; 
  
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const email = e.target["email"].value;
    const password = e.target["password"].value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         const user = userCredential.user;
         
         // ZADANIE 6: Sprawdzenie weryfikacji emaila
         if (!user.emailVerified) {
             signOut(auth); // Wyloguj natychmiast
             router.push(`/user/verify?email=${user.email}`); // Przekieruj do weryfikacji
         } else {
             // Jeśli zweryfikowany - wpuść do aplikacji
             router.push(returnUrl);
         }
      })
      .catch((err) => {
        setLoading(false);
        if (err.code === 'auth/invalid-credential') {
            setError("Nieprawidłowy email lub hasło.");
        } else if (err.code === 'auth/too-many-requests') {
            setError("Konto tymczasowo zablokowane. Spróbuj później.");
        } else {
            setError(err.message);
        }
      });
  };

  return (
    <div className="flex justify-center items-center h-full mt-10">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">Logowanie</h1>
          
          {error && (
            <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
                {error}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" name="email" required className="w-full border p-2 rounded focus:ring-2 focus:ring-violet-500 outline-none" />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Hasło</label>
                <input type="password" name="password" required className="w-full border p-2 rounded focus:ring-2 focus:ring-violet-500 outline-none" />
            </div>
            <button type="submit" disabled={loading} className="w-full bg-violet-600 text-white py-2 rounded hover:bg-violet-700 transition disabled:opacity-50">
                {loading ? "Logowanie..." : "Zaloguj się"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Nie masz konta? <Link href="/user/register" className="text-violet-600 hover:underline">Zarejestruj się</Link>
          </p>
        </div>
    </div>
  );
}