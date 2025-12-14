'use client'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";
import { app } from "@/app/lib/firebase"; 
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/app/lib/AuthContext";

export default function RegisterForm() {
  const { user } = useAuth();
  const auth = getAuth(app);
  const router = useRouter();
  
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Jeśli użytkownik jest już zalogowany, nie pokazuj formularza (Zadanie 2)
  if (user) {
    return (
        <div className="text-center mt-10">Jesteś już zalogowany.</div>
    );
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const email = e.target["email"].value;
    const password = e.target["password"].value;
    const confirmPassword = e.target["confirmPassword"].value;

    // Walidacja haseł
    if (password !== confirmPassword) {
        setError("Hasła muszą być identyczne.");
        setLoading(false);
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         console.log("User registered!");
         // Wysyłanie weryfikacji
         sendEmailVerification(userCredential.user)
          .then(() => {
            console.log("Email verification sent!");
            // Przekierowanie z parametrem email, żeby go wyświetlić na stronie weryfikacji
            router.push(`/user/verify?email=${email}`);
          });
      })
      .catch((err) => {
        setLoading(false);
        // Obsługa błędów (Zadanie 6)
        console.dir(err);
        if (err.code === 'auth/email-already-in-use') {
            setError("Ten adres email jest już zajęty. Spróbuj się zalogować.");
        } else if (err.code === 'auth/weak-password') {
            setError("Hasło jest za słabe (min. 6 znaków).");
        } else {
            setError(err.message);
        }
      });
  };

  return (
    <div className="flex justify-center items-center h-full mt-10">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">Rejestracja</h1>
          
          {/* Warunkowy alert o błędzie (Zadanie 2/6) */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded text-sm border border-red-200">
                {error}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" name="email" required className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-violet-500 outline-none" />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Hasło</label>
                <input type="password" name="password" required className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-violet-500 outline-none" />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Powtórz hasło</label>
                <input type="password" name="confirmPassword" required className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-violet-500 outline-none" />
            </div>
            <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-violet-600 text-white py-2 rounded hover:bg-violet-700 transition disabled:opacity-50"
            >
                {loading ? "Rejestrowanie..." : "Utwórz konto"}
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Masz już konto? <Link href="/user/signin" className="text-violet-600 font-bold">Zaloguj się</Link>
          </p>
        </div>
    </div>
  );
}