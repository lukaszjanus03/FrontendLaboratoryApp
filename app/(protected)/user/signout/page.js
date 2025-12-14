'use client'
import { signOut, getAuth } from "firebase/auth";
import { app } from "@/app/lib/firebase";
import { useRouter } from "next/navigation";

export default function SignOutPage() {
    const auth = getAuth(app);
    const router = useRouter();
    
    const handleLogout = () => {
        signOut(auth).then(() => {
            router.push("/");
        });
    };
    
    return(
        <div className="flex flex-col items-center justify-center p-8">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200 text-center max-w-sm">
                <h2 className="text-xl font-bold mb-4">Wylogowanie</h2>
                <p className="mb-6 text-gray-600">Czy na pewno chcesz się wylogować z aplikacji?</p>
                <button 
                    onClick={handleLogout}
                    className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                >
                    Wyloguj mnie
                </button>
            </div>
        </div>
    );
}