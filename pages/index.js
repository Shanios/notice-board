import { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout";
import NoticeCard from "../components/NoticeCard";
import Swal from "sweetalert2";
import {
  Bell,
  AlertTriangle,
  FolderOpen,
  Plus,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [notices, setNotices] = useState([]);

  const fetchNotices = async () => {
    const res = await fetch("/api/notices");
    const data = await res.json();
    setNotices(data);
  };

  useEffect(() => {
    fetchNotices();
  }, []);

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
      {/* Heading */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-slate-800">
            Dashboard
          </h1>

          <p className="text-slate-500 mt-2">
            Manage all notices from one place.
          </p>

        </div>

        <Link
          href="/add"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl shadow"
        >
          <Plus size={20} />
          New Notice
        </Link>

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

          <p className="text-4xl font-bold mt-2">
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

          <p className="text-4xl font-bold mt-2">
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

          <p className="text-4xl font-bold mt-2">
            {stats.categories}
          </p>

        </div>

      </div>

      {/* Notices */}

      <h2 className="text-3xl font-bold text-slate-800 mb-6">
        Recent Notices
      </h2>

      {notices.length === 0 ? (
        <div className="bg-white rounded-2xl shadow p-20 text-center">

          <div className="text-7xl mb-4">
            📄
          </div>

          <h2 className="text-3xl font-bold text-slate-800">
            No Notices Yet
          </h2>

          <p className="text-slate-500 mt-3">
            Click <strong>New Notice</strong> to create your first notice.
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