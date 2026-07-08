import { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout";
import NoticeCard from "../components/NoticeCard";
import Swal from "sweetalert2";
import {
  Bell,
  AlertTriangle,
  FolderOpen,
  Plus,
  Search,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [notices, setNotices] = useState([]);
  const [search, setSearch] = useState("");
const fetchNotices = async (searchText = "") => {
  const res = await fetch(
    `/api/notices?search=${encodeURIComponent(searchText)}`
  );

  const data = await res.json();
  setNotices(data);
};
useEffect(() => {
  const timer = setTimeout(() => {
    fetchNotices(search);
  }, 400);

  return () => clearTimeout(timer);
}, [search]);
const handleDelete = async (id) => {
  const result = await Swal.fire({
    title: "Delete Notice?",
    text: "You won't be able to recover it!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#dc2626",
    cancelButtonColor: "#64748b",
    confirmButtonText: "Yes, Delete",
  });

  if (!result.isConfirmed) return;

  const res = await fetch(`/api/notices/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    Swal.fire({
      icon: "success",
      title: "Deleted!",
      text: "Notice deleted successfully.",
      timer: 1500,
      showConfirmButton: false,
    });

    fetchNotices();
  }
};

  const stats = useMemo(() => {
    const urgent = notices.filter(
      (n) => n.priority === "Urgent"
    ).length;

    const categories = new Set(
      notices.map((n) => n.category)
    ).size;

    return {
      total: notices.length,
      urgent,
      categories,
    };
  }, [notices]);

  return (
    <Layout>
{/* Dashboard Header */}

<div className="mb-10">

  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

    {/* Left */}

    <div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">

        Notice Board

      </h1>

      <p className="mt-2 text-slate-500 text-lg">

        Create, manage and organize all institutional notices.

      </p>

    </div>

    {/* Right */}

    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

      {/* Search */}

      <div className="relative w-full sm:w-96">

        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search notices..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Button */}

      <Link
        href="/add"
        className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-blue-700"
      >
        <Plus size={20} />
        New Notice
      </Link>

    </div>

  </div>

</div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white rounded-2xl shadow p-6">

          <Bell
            className="text-blue-600 mb-4"
            size={34}
          />

          <h2 className="text-slate-500">
            Total Notices
          </h2>

         <p className="text-4xl font-extrabold text-slate-900 mt-2">
  {stats.total}
</p>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <AlertTriangle
            className="text-red-500 mb-4"
            size={34}
          />

          <h2 className="text-slate-500">
            Urgent Notices
          </h2>

<p className="text-4xl font-extrabold text-red-600 mt-2">
  {stats.urgent}
</p>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <FolderOpen
            className="text-green-600 mb-4"
            size={34}
          />

          <h2 className="text-slate-500">
            Categories
          </h2>

         <p className="text-4xl font-extrabold text-green-600 mt-2">
  {stats.categories}
</p>

        </div>

      </div>

      {/* Notices */}

      <div className="flex items-center gap-4 mb-8">

  <h2 className="text-3xl font-bold text-slate-800 whitespace-nowrap">
    Recent Notices
  </h2>

  <div className="h-px bg-slate-300 flex-1"></div>

</div>

    {notices.length === 0 ? (

  <div className="bg-white rounded-2xl shadow p-20 text-center">

    <div className="text-7xl mb-5">

      {search ? "🔍" : "📄"}

    </div>

    <h2 className="text-3xl font-bold text-slate-800">

      {search ? "No Matching Notices" : "No Notices Yet"}

    </h2>

    <p className="text-slate-500 mt-4">

      {search
        ? "Try searching with another title."
        : <>Click <strong>New Notice</strong> to create your first notice.</>}

    </p>

  </div>

) : (
        <div className="grid lg:grid-cols-2 gap-7">
          {notices.map((notice) => (
            <NoticeCard
              key={notice.id}
              notice={notice}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </Layout>
  );
}