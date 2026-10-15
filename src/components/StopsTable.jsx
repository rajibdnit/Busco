import React from "react";

const sample = [
  { id:1, name:"Central Station", code:"CS-01", lat:12.9716, lon:77.5946 },
  { id:2, name:"Market St", code:"MK-03", lat:12.9732, lon:77.5961 },
  { id:3, name:"City Square", code:"SQ-09", lat:12.9768, lon:77.5984 },
];

export default function StopsTable(){
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Stops</h3>
        <input placeholder="Search stops..." className="border rounded-xl px-3 py-2" />
      </div>

      <table className="min-w-full text-sm">
        <thead className="text-left text-gray-500">
          <tr><th className="p-2">Name</th><th className="p-2">Code</th><th className="p-2">Location</th><th className="p-2">Actions</th></tr>
        </thead>
        <tbody>
          {sample.map(s => (
            <tr key={s.id} className="border-t">
              <td className="p-2">{s.name}</td>
              <td className="p-2">{s.code}</td>
              <td className="p-2">{s.lat.toFixed(4)}, {s.lon.toFixed(4)}</td>
              <td className="p-2">
                <button className="px-2 py-1 rounded border mr-2">Edit</button>
                <button className="px-2 py-1 rounded bg-red-500 text-white">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
