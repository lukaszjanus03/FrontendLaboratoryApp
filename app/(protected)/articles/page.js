'use client';
import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/app/lib/firebase"; // Import bazy
import { useAuth } from "@/app/lib/AuthContext";
import MambaTable from "@/app/components/MambaTable"; // Używamy tego samego komponentu!

export default function ArticlesPage() {
  const { user } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const headers = ["Tytuł", "Data", "Treść"];

  useEffect(() => {
    const fetchArticles = async () => {
      if (!user) return;
      try {
        // Pobierz artykuły gdzie user == moje ID
        const q = query(collection(db, "articles"), where("user", "==", user.uid));
        const snapshot = await getDocs(q);
        
        // Przerób dane z bazy na format tabeli
        const formatted = snapshot.docs.map(doc => {
            const d = doc.data();
            const dateStr = d.date?.toDate ? d.date.toDate().toLocaleDateString() : "Brak daty";
            
            return {
                id: doc.id,
                cells: [
                    d.title || "Bez tytułu",
                    dateStr,
                    (d.content?.substring(0, 50) || "") + "..."
                ]
            };
        });
        setData(formatted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [user]);

  if (loading) return <div className="p-10 text-center">Ładowanie...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-violet-700 mb-4">Moje Artykuły</h1>
      <p className="text-gray-500 mb-8">Dane pobrane z Firebase Firestore.</p>
      
      {data.length > 0 ? (
          <MambaTable headers={headers} data={data} />
      ) : (
          <div className="p-4 bg-yellow-50 text-yellow-800 border border-yellow-200 rounded">
              Brak artykułów. Dodaj je w konsoli Firebase (kolekcja `articles`, pole `user`: {user?.uid}).
          </div>
      )}
    </div>
  );
}