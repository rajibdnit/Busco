import React from 'react'
export default function ResultsList({trips, selected, onSelect}){
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold">Available trips</h3>
      <div className="mt-3 space-y-3">
        {trips.map(t => (
          <div key={t.id} onClick={()=>onSelect(t)} className={`p-3 rounded-lg border ${selected?.id===t.id? 'ring-2 ring-primary':'border-gray-100'}`}> 
            <div className="flex justify-between">
              <div className="font-semibold">{t.route}</div>
              <div className="text-sm text-gray-600">{t.depart} → {t.arrive}</div>
            </div>
            <div className="text-sm text-gray-500 mt-1">{t.duration} • {t.transfers} transfers • {t.fare}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
