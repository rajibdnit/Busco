import React from 'react'
export default function SearchPanel(){
  return (
    <div className="flex gap-2 items-center flex-1">
      <input className="px-3 py-2 rounded-xl" placeholder="From: Central Station" />
      <input className="px-3 py-2 rounded-xl" placeholder="To: City Square" />
      <input className="px-3 py-2 rounded-xl hidden md:block" type="date" />
      <button className="btn-primary ml-2">Search</button>
    </div>
  )
}
