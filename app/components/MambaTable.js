'use client';
import { useState, useMemo } from 'react';

// Proste strzałki do sortowania (zamiast ikon SVG, żeby było czytelniej w kodzie)
const IconSortDefault = () => <span className="opacity-30 ml-1">↕</span>;
const IconSortUp = () => <span className="text-violet-600 ml-1">↑</span>;
const IconSortDown = () => <span className="text-violet-600 ml-1">↓</span>;

export default function MambaTable({ headers, data }) {
  // Stan sortowania
  const [sortConfig, setSortConfig] = useState({ colIndex: null, direction: null });
  // Stan ukrytych wierszy (lista ID)
  const [hiddenIds, setHiddenIds] = useState([]);

  // --- 1. LOGIKA SORTOWANIA ---
  const sortedData = useMemo(() => {
    let items = [...data];
    if (sortConfig.direction !== null && sortConfig.colIndex !== null) {
      items.sort((a, b) => {
        const aVal = a.cells[sortConfig.colIndex];
        const bVal = b.cells[sortConfig.colIndex];
        // Proste porównywanie tekstów i liczb
        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return items;
  }, [data, sortConfig]);

  const handleSort = (index) => {
    let direction = 'asc';
    if (sortConfig.colIndex === index) {
      // Cykl: Rosnąco -> Malejąco -> Brak
      if (sortConfig.direction === 'asc') direction = 'desc';
      else if (sortConfig.direction === 'desc') direction = null; 
    }
    setSortConfig({ colIndex: direction ? index : null, direction });
  };

  // --- 2. LOGIKA UKRYWANIA ---
  const toggleRow = (id) => {
    setHiddenIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const showGroup = (ids) => {
    setHiddenIds(prev => prev.filter(id => !ids.includes(id)));
  };

  // --- 3. RENDEROWANIE Z GRUPOWANIEM (To jest klucz do zaliczenia Tematu 3) ---
  const renderRows = () => {
    const rows = [];
    let hiddenGroup = []; // Bufor na ukryte wiersze obok siebie

    sortedData.forEach((row) => {
      if (hiddenIds.includes(row.id)) {
        hiddenGroup.push(row.id); // Dodaj do grupy ukrytych
      } else {
        // Jeśli przed tym wierszem była grupa ukrytych -> wstaw jeden przycisk
        if (hiddenGroup.length > 0) {
          const group = [...hiddenGroup];
          rows.push(
            <tr key={`restore-${group[0]}`} className="bg-violet-50 border-b border-violet-100">
              <td colSpan={headers.length + 1} className="p-3 text-center">
                <button onClick={() => showGroup(group)} className="text-xs font-bold text-violet-700 uppercase border border-violet-300 px-3 py-1 rounded hover:bg-violet-600 hover:text-white transition">
                  Przywróć {group.length} ukryte wiersze
                </button>
              </td>
            </tr>
          );
          hiddenGroup = []; // Wyczyść bufor
        }

        // Renderuj normalny wiersz
        rows.push(
          <tr key={row.id} className="border-b hover:bg-gray-50 transition">
            {row.cells.map((cell, i) => (
              <td key={i} className="p-4 text-sm text-gray-700">{cell}</td>
            ))}
            <td className="p-4 text-right">
              <button onClick={() => toggleRow(row.id)} className="text-gray-400 hover:text-red-500 font-bold p-2" title="Ukryj">
                 ➖
              </button>
            </td>
          </tr>
        );
      }
    });

    // Jeśli na samym końcu tabeli są ukryte wiersze
    if (hiddenGroup.length > 0) {
        rows.push(
            <tr key="restore-last" className="bg-violet-50 border-b border-violet-100">
              <td colSpan={headers.length + 1} className="p-3 text-center">
                <button onClick={() => showGroup(hiddenGroup)} className="text-xs font-bold text-violet-700 uppercase border border-violet-300 px-3 py-1 rounded hover:bg-violet-600 hover:text-white transition">
                  Przywróć {hiddenGroup.length} ukryte wiersze
                </button>
              </td>
            </tr>
          );
    }

    return rows;
  };

  return (
    <div className="overflow-x-auto bg-white shadow rounded-lg border border-gray-200">
      <table className="w-full text-left">
        <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-bold tracking-wider">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="p-4 cursor-pointer hover:bg-gray-200 select-none" onClick={() => handleSort(i)}>
                <div className="flex items-center">
                  {h} 
                  {/* Wyświetlanie odpowiedniej strzałki */}
                  {sortConfig.colIndex === i ? (sortConfig.direction === 'asc' ? <IconSortUp/> : (sortConfig.direction === 'desc' ? <IconSortDown/> : <IconSortDefault/>)) : <IconSortDefault/>}
                </div>
              </th>
            ))}
            <th className="p-4 text-right w-20">Akcja</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
}