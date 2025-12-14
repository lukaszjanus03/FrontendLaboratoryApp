'use client';
import { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "@/app/lib/firebase";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function VerifyEmail() {
    const auth = getAuth(app);
    const params = useSearchParams();
    // Pobieramy email z paska adresu, bo po wylogowaniu context użytkownika zniknie
    const email = params.get("email");

    useEffect(() => {
        // Automatyczne wylogowanie po wejściu na tę stronę (Zadanie 4)
        signOut(auth).then(() => {
            console.log("Użytkownik wylogowany do weryfikacji.");
        });
    }, [auth]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-4 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-violet-100 max-w-md">
                <h1 className="text-2xl font-bold text-violet-700 mb-4">Weryfikacja Email</h1>
                <p className="text-gray-600 mb-6">
                    Na Twój adres email <strong>{email}</strong> został wysłany link weryfikacyjny.
                    Kliknij go, aby aktywować konto.
                </p>
                <div className="p-4 bg-yellow-50 text-yellow-800 text-sm rounded mb-6 border border-yellow-200">
                    ⚠️ Zostałeś automatycznie wylogowany ze względów bezpieczeństwa.
                </div>
                <Link href="/user/signin" className="px-6 py-2 bg-violet-600 text-white rounded hover:bg-violet-700 transition">
                    Wróć do logowania
                </Link>
            </div>
        </div>
    );
}