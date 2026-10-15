import React from "react";
import StopsTable from "./StopsTable";
import StopForm from "./StopForm";

export default function AdminDashboard(){
  return (
    <div className="p-4 space-y-4">
      <header className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Admin</h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <StopsTable />
        </div>
        <aside>
          <StopForm />
        </aside>
      </div>
    </div>
  )
}
