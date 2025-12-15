'use client'
import { useState, useEffect } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { app, db } from "@/app/lib/firebase"; 
import { useAuth } from "@/app/lib/AuthContext";
import { toast } from "react-hot-toast";

export default function ProfilePage() {
    const { user } = useAuth();
    const auth = getAuth(app);
    
    // Stany formularza
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState(""); // <-- To tu było, ale nie miało inputa
    
    // Stan adresu
    const [address, setAddress] = useState({
        street: "",
        city: "",
        zipCode: ""
    });

    const [loading, setLoading] = useState(true);

    // --- Odczyt danych ---
    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                // 1. Ustaw dane z Auth (Nazwa i Zdjęcie)
                setDisplayName(user.displayName || "");
                setPhotoURL(user.photoURL || "");

                // 2. Pobierz adres z Firestore
                try {
                    const docRef = doc(db, "users", user.uid);
                    const snapshot = await getDoc(docRef);

                    if (snapshot.exists()) {
                        const data = snapshot.data();
                        if (data.address) {
                            setAddress({
                                city: data.address.city || "",
                                street: data.address.street || "",
                                zipCode: data.address.zipCode || ""
                            });
                        }
                    }
                } catch (e) {
                    console.error("Błąd: ", e);
                    toast.error("Nie udało się pobrać danych.");
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchData();
    }, [user]);

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddress(prev => ({ ...prev, [name]: value }));
    };

    // --- Zapis danych ---
    const onSubmit = async (e) => {
        e.preventDefault();
        const loadingToast = toast.loading("Zapisywanie zmian...");

        try {
            // A. Aktualizacja Auth (Nazwa i Zdjęcie)
            await updateProfile(auth.currentUser, {
                displayName: displayName,
                photoURL: photoURL, // <-- Teraz to zadziała, bo dodamy input
            });

            // B. Zapis adresu do Firestore
            await setDoc(doc(db, "users", user.uid), {
                address: {
                    city: address.city,
                    street: address.street,
                    zipCode: address.zipCode
                }
            }, { merge: true });

            toast.success("Profil zaktualizowany!", { id: loadingToast });
        } catch (error) {
            console.error(error);
            toast.error(`Błąd: ${error.message}`, { id: loadingToast });
        }
    };

    if (!user) return null;

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200 mt-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-2">Edycja Profilu</h2>

            <form onSubmit={onSubmit} className="space-y-6">
                
                {/* --- SEKCJA DANE LOGOWANIA --- */}
                <div className="grid grid-cols-1 gap-4">
                    <h3 className="font-semibold text-gray-700">Dane użytkownika</h3>
                    
                    {/* PODGLĄD AVATARA */}
                    <div className="flex items-center gap-4 mb-2">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-violet-200 bg-gray-100">
                             {/* Jeśli jest photoURL, pokaż obrazek, jeśli nie - placeholder */}
                             <img 
                                src={photoURL || "https://ui-avatars.com/api/?name=" + (displayName || "User")} 
                                alt="Avatar" 
                                className="w-full h-full object-cover"
                                onError={(e) => {e.target.src="https://ui-avatars.com/api/?name=User"}} // Fallback jak link nie działa
                             />
                        </div>
                        <div className="text-sm text-gray-500">
                            Tak wyglądasz w aplikacji
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Email (zablokowany)</label>
                        <input type="text" value={user.email} disabled className="w-full border p-2 rounded bg-gray-100 text-gray-500 cursor-not-allowed" />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium mb-1">Nazwa wyświetlana</label>
                        <input 
                            type="text" 
                            value={displayName} 
                            onChange={(e) => setDisplayName(e.target.value)}
                            disabled={loading}
                            className="w-full border p-2 rounded focus:ring-2 focus:ring-violet-500 outline-none" 
                        />
                    </div>

                    {/* --- PRZYWRÓCONE POLE PHOTO URL --- */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Link do zdjęcia (URL)</label>
                        <input 
                            type="text" 
                            value={photoURL} 
                            onChange={(e) => setPhotoURL(e.target.value)}
                            disabled={loading}
                            placeholder="https://przyklad.pl/moje-zdjecie.jpg"
                            className="w-full border p-2 rounded focus:ring-2 focus:ring-violet-500 outline-none" 
                        />
                        <p className="text-xs text-gray-400 mt-1">Wklej bezpośredni link do obrazka (np. z Imgur lub Google Photos).</p>
                    </div>
                </div>

                {/* --- SEKCJA ADRES (FIRESTORE) --- */}
                <div className="pt-4 border-t border-gray-100">
                    <h3 className="font-semibold text-gray-700 mb-4">Adres zamieszkania</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Ulica</label>
                            <input 
                                type="text"
                                name="street"
                                value={address.street} 
                                onChange={handleAddressChange}
                                disabled={loading}
                                className="w-full border p-2 rounded focus:ring-2 focus:ring-violet-500 outline-none" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Miasto</label>
                            <input 
                                type="text" 
                                name="city"
                                value={address.city} 
                                onChange={handleAddressChange}
                                disabled={loading} 
                                className="w-full border p-2 rounded focus:ring-2 focus:ring-violet-500 outline-none" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Kod pocztowy</label>
                            <input 
                                type="text" 
                                name="zipCode"
                                value={address.zipCode} 
                                onChange={handleAddressChange}
                                disabled={loading} 
                                className="w-full border p-2 rounded focus:ring-2 focus:ring-violet-500 outline-none" 
                            />
                        </div>
                    </div>
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full px-6 py-3 bg-violet-600 text-white rounded hover:bg-violet-700 font-medium transition shadow-lg shadow-violet-200"
                >
                    {loading ? "Ładowanie..." : "Zapisz zmiany"}
                </button>
            </form>
        </div>
    );
}