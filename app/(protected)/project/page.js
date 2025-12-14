'use client';
import MambaTable from "@/app/components/MambaTable";

export default function ProjectPage() {
  // Nagłówki tabeli
  const headers = ["ID", "Produkt", "Kategoria", "Cena", "Stan"];
  
  // Przykładowe dane "na sztywno" do testów
  const data = [
    { id: 1, cells: ["001", "Laptop Gamingowy", "Elektronika", "4500 zł", "Dostępny"] },
    { id: 2, cells: ["002", "Mysz Bezprzewodowa", "Akcesoria", "120 zł", "Dostępny"] },
    { id: 3, cells: ["003", "Monitor 24 cale", "Elektronika", "600 zł", "Brak"] },
    { id: 4, cells: ["004", "Klawiatura Mech.", "Akcesoria", "350 zł", "Dostępny"] },
    { id: 5, cells: ["005", "Kabel HDMI 2m", "Kable", "40 zł", "Brak"] },
    { id: 6, cells: ["006", "Słuchawki USB", "Audio", "200 zł", "Dostępny"] },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-violet-700 mb-2">Projekt: Temat 3</h1>
      <p className="text-gray-500 mb-8">
        Tabela z sortowaniem (kliknij nagłówek) i zwijaniem wierszy (kliknij minus).
      </p>

      <MambaTable headers={headers} data={data} />
    </div>
  );
}