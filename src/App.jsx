import React, { useState } from "react";
import SearchPanel from "./components/SearchPanel";
import ResultsList from "./components/ResultsList";
import MapPreview from "./components/MapPreview";
import DetailPanel from "./components/DetailPanel";

export default function App(){
  const [selected, setSelected] = useState(null);
  const sampleTrips = [
    { id:1, route:"Route 12", depart:"08:15", arrive:"08:42", duration:"27m", transfers:1, fare:"$2.50" },
    { id:2, route:"Route 8", depart:"08:22", arrive:"08:51", duration:"29m", transfers:0, fare:"$2.50" },
    { id:3, route:"Route 5", depart:"08:30", arrive:"08:59", duration:"29m", transfers:0, fare:"$2.50" }
  ];
  return (
    <div className="min-h-screen bg-surface p-6 font-sans">
      <header className="bg-gradient-to-r from-primary to-accent text-white p-4 rounded-xl flex items-center gap-4">
        <div className="font-bold">Busco</div>
        <SearchPanel />
        <div className="ml-auto flex gap-2">
          <button className="px-3 py-2 rounded-xl border border-white/20">Admin</button>
        </div>
      </header>

      <main className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <ResultsList trips={sampleTrips} selected={selected} onSelect={setSelected} />
          <DetailPanel trip={selected || sampleTrips[0]} />
        </div>

        <aside className="space-y-4">
          <MapPreview />
          <div className="panel bg-white p-4 rounded-xl shadow">
            <h4 className="font-semibold mb-2">Admin</h4>
            <div className="flex gap-2">
              <button className="btn-primary">Stops</button>
              <button className="btn-primary">Import</button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}
