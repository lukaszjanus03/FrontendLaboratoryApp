'use client'
import { useState, useEffect } from "react";
import { getAuth, updateProfile } from "firebase/auth";
// Importy Firestore
import { doc, getDoc, setDoc } from "firebase/firestore";
import { app, db } from "@/app/lib/firebase"; 
import { useAuth } from "@/app/lib/AuthContext";
// Import Toast (Bajer 1)
import { toast } from "react-hot-toast";

export default function ProfilePage() {
    const { user } = useAuth();
    const auth = getAuth(app);
    
    // Stany formularza
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    
    // Stan adresu
    const [address, setAddress] = useState({
        street: "",
        city: "",
        zipCode: ""
    });

    // Blokowanie pól do czasu pobrania danych
    const [loading, setLoading] = useState(true);

    // --- Odczyt danych (useEffect) ---
    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                // 1. Ustaw dane z Auth
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
                    console.error("Błąd pobierania dokumentu: ", e);
                    toast.error("Nie udało się pobrać danych profilowych.");
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

    // --- Zapis danych (onSubmit) z TOASTAMI ---
    const onSubmit = async (e) => {
        e.preventDefault();
        
        // 1. Pokaż loader
        const loadingToast = toast.loading("Zapisywanie zmian...");

        try {
            // A. Aktualizacja profilu Auth
            await updateProfile(auth.currentUser, {
                displayName: displayName,
                photoURL: photoURL,
            });

            // B. Zapis adresu do Firestore
            await setDoc(doc(db, "users", user.uid), {
                address: {
                    city: address.city,
                    street: address.street,
                    zipCode: address.zipCode
                }
            }, { merge: true });

            console.log("Zapisano dane dla ID: ", user.uid);
            
            // 2. Sukces - zamień loader na zielony komunikat
            toast.success("Profil zaktualizowany pomyślnie!", { id: loadingToast });
            
        } catch (error) {
            console.error("Błąd zapisu: ", error);
            // 3. Błąd - zamień loader na czerwony komunikat
            toast.error(`Błąd zapisu: ${error.message}`, { id: loadingToast });
        }
    };

    if (!user) return null;

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200 mt-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-2">Edycja Profilu</h2>

            <form onSubmit={onSubmit} className="space-y-6">
                {/* Sekcja Auth */}
                <div className="grid grid-cols-1 gap-4">
                    <h3 className="font-semibold text-gray-700">Dane logowania</h3>
                    <div>
                        <label className="block text-xs uppercase font-bold text-gray-500 mb-1">Email (read-only)</label>
                        <input type="text" value={user.email} disabled className="w-full border p-2 rounded bg-gray-100 text-gray-500 cursor-not-allowed" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Nazwa wyświetlana</label>
                        <input 
                            type="text" 
                            value={displayName} 
                            onChange={(e) => setDisplayName(e.target.value)}
                            disabled={loading}
                            className="w-full border p-2 rounded focus:ring-2 focus:ring-violet-500 outline-none disabled:opacity-50" 
                        />
                    </div>
                </div>

                {/* Sekcja Firestore (Adres) */}
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
                                className="w-full border p-2 rounded focus:ring-2 focus:ring-violet-500 outline-none disabled:opacity-50" 
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
                                className="w-full border p-2 rounded focus:ring-2 focus:ring-violet-500 outline-none disabled:opacity-50" 
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
                                className="w-full border p-2 rounded focus:ring-2 focus:ring-violet-500 outline-none disabled:opacity-50" 
                            />
                        </div>
                    </div>
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full px-6 py-3 bg-violet-600 text-white rounded hover:bg-violet-700 font-medium transition disabled:bg-gray-400"
                >
                    {loading ? "Ładowanie danych..." : "Zapisz zmiany"}
                </button>
            </form>
        </div>
    );
}