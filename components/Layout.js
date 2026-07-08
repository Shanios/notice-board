import Link from "next/link";
import { Bell, Plus } from "lucide-react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar */}

      <header className="bg-slate-900 shadow-lg">

        <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-8">

          <div className="flex items-center gap-4">

            <div className="bg-blue-600 p-3 rounded-xl">
              <Bell className="text-white" size={24} />
            </div>

            <div>

              <h1 className="text-3xl font-bold text-white">
                Notice Board
              </h1>

              <p className="text-slate-400">
                Manage institutional notices
              </p>

            </div>

          </div>



        </div>

      </header>

      <main className="max-w-7xl mx-auto p-8">

        {children}

      </main>

    </div>
  );
}