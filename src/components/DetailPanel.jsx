import React from 'react'
export default function DetailPanel({trip}){
  if(!trip) return null
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h4 className="font-semibold">Selected trip: {trip.route}</h4>
      <div className="text-sm text-gray-600">Departure: {trip.depart} • Arrival: {trip.arrive}</div>
      <div className="mt-3 text-sm">Duration: {trip.duration} • Transfers: {trip.transfers}</div>
    </div>
  )
}
