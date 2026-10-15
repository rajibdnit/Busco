import React, { useState } from "react";

export default function StopForm(){
  const [form, setForm] = useState({ name:"", code:"", lat:"", lon:"", zone:"", wheelchair:false});
  const onChange = (k,v) => setForm({...form, [k]:v});
  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-3">
      <h3 className="font-semibold">Add / Edit Stop</h3>
      <input value={form.name} onChange={e=>onChange("name",e.target.value)} placeholder="Name" className="w-full p-2 border rounded-xl"/>
      <input value={form.code} onChange={e=>onChange("code",e.target.value)} placeholder="Code" className="w-full p-2 border rounded-xl"/>
      <div className="flex gap-2">
        <input value={form.lat} onChange={e=>onChange("lat",e.target.value)} placeholder="Latitude" className="flex-1 p-2 border rounded-xl"/>
        <input value={form.lon} onChange={e=>onChange("lon",e.target.value)} placeholder="Longitude" className="flex-1 p-2 border rounded-xl"/>
      </div>
      <input value={form.zone} onChange={e=>onChange("zone",e.target.value)} placeholder="Zone" className="w-full p-2 border rounded-xl"/>
      <label className="flex items-center gap-2"><input type="checkbox" checked={form.wheelchair} onChange={e=>onChange("wheelchair",e.target.checked)} /> Wheelchair accessible</label>
      <div className="flex gap-2">
        <button className="btn-primary">Save</button>
        <button className="px-3 py-2 border rounded-xl">Cancel</button>
      </div>
    </div>
  )
}
