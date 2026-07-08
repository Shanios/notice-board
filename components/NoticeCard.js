import Link from "next/link";
import Image from "next/image";
import {
  CalendarDays,
  Pencil,
  Trash2,
  AlertTriangle,
  FolderOpen,
} from "lucide-react";

export default function NoticeCard({ notice, onDelete }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">

      {/* Top Border */}

      <div
        className={`h-2 ${
          notice.priority === "Urgent"
            ? "bg-red-500"
            : "bg-blue-600"
        }`}
      />

      <div className="p-6">

        {/* Header */}

        <div className="flex justify-between items-start">

          <div>

            <h2 className="text-2xl font-bold text-slate-800">
              {notice.title}
            </h2>

            <div className="flex gap-4 mt-3">

              <span className="flex items-center gap-2 text-slate-500 text-sm">

                <FolderOpen size={16} />

                {notice.category}

              </span>

              <span className="flex items-center gap-2 text-slate-500 text-sm">

                <CalendarDays size={16} />

                {new Date(
                  notice.publishDate
                ).toLocaleDateString()}

              </span>

            </div>

          </div>

          {notice.priority === "Urgent" && (

            <div className="flex items-center gap-2 bg-red-100 text-red-700 px-3 py-2 rounded-full">

              <AlertTriangle size={16} />

              <span className="font-semibold text-sm">
                Urgent
              </span>

            </div>

          )}

        </div>

        {/* Body */}

        <p className="text-slate-600 mt-6 leading-7">
          {notice.body}
        </p>
{/* Image */}

{notice.image && (
  <Image
    src={notice.image}
    alt={notice.title}
    width={800}
    height={400}
    className="mt-6 h-52 w-full rounded-xl object-cover"
  />
)}


        {/* Footer */}

        <div className="flex justify-end gap-3 mt-8">

          <Link
            href={`/edit/${notice.id}`}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl transition"
          >
            <Pencil size={18} />
            Edit
          </Link>

          <button
            onClick={() => onDelete(notice.id)}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition"
          >
            <Trash2 size={18} />
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}