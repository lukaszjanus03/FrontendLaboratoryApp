'use client'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "@/app/lib/firebase"; 
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const auth = getAuth(app);
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    const email = e.target["email"].value;
    const password = e.target["password"].value;
    const confirmPassword = e.target["confirmPassword"].value;

    if (password !== confirmPassword) {
        setError("Hasła muszą być identyczne.");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         router.push('/'); // Po rejestracji idź na główną
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">Rejestracja</h1>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
                {error}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" name="email" required className="w-full border p-2 rounded" />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Hasło</label>
                <input type="password" name="password" required className="w-full border p-2 rounded" />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Potwierdź hasło</label>
                <input type="password" name="confirmPassword" required className="w-full border p-2 rounded" />
            </div>
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                Utwórz konto
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Masz już konto? <Link href="/user/signin" className="text-blue-600">Zaloguj się</Link>
          </p>
        </div>
    </div>
  );
}