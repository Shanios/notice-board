import { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
export default function NoticeForm({
  initialData = {},
  isEdit = false,
}) {
  const router = useRouter();
const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: initialData.title || "",
    body: initialData.body || "",
    category: initialData.category || "General",
    priority: initialData.priority || "Normal",
    publishDate: initialData.publishDate
      ? initialData.publishDate.substring(0, 10)
      : "",
    image: initialData.image || "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = isEdit
      ? `/api/notices/${initialData.id}`
      : "/api/notices";

    const method = isEdit ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

if (response.ok) {
  await Swal.fire({
    icon: "success",
    title: isEdit ? "Notice Updated" : "Notice Created",
    timer: 1500,
    showConfirmButton: false,
  });

  router.push("/");
} else {
  const data = await response.json();

  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: data.message || "Something went wrong.",
  });
}

setLoading(false);
};   // <-- THIS WAS MISSING

return (
    <div className="max-w-5xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10"
      >
        <div className="grid md:grid-cols-2 gap-6">

          {/* Title */}
          <div>
            <label className="block text-slate-800 font-semibold mb-2">
              Title
            </label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter notice title"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Publish Date */}
          <div>
            <label className="block text-slate-800 font-semibold mb-2">
              Publish Date
            </label>

            <input
              type="date"
              name="publishDate"
              value={form.publishDate}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-slate-800 font-semibold mb-2">
              Category
            </label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="Exam">Exam</option>
              <option value="Event">Event</option>
              <option value="General">General</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-slate-800 font-semibold mb-2">
              Priority
            </label>

            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="Normal">Normal</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>

        </div>

        {/* Description */}

        <div className="mt-7">
          <label className="block text-slate-800 font-semibold mb-2">
            Description
          </label>

          <textarea
            rows={6}
            name="body"
            value={form.body}
            onChange={handleChange}
            placeholder="Write your notice here..."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        {/* Image */}

        <div className="mt-7">
          <label className="block text-slate-800 font-semibold mb-2">
            Image URL (Optional)
          </label>

<input
  type="url"
  name="image"
  value={form.image}
  onChange={handleChange}
  placeholder="https://example.com/image.jpg"
  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
/>
        </div>

        {/* Buttons */}

        <div className="mt-10 flex justify-end gap-4">

          <button
            type="button"
            onClick={() => router.push("/")}
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100 transition"
          >
            Cancel
          </button>

<button
  type="submit"
  disabled={loading}
  className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white disabled:opacity-50"
>
  {loading
    ? "Please wait..."
    : isEdit
    ? "Update Notice"
    : "Create Notice"}
</button>

        </div>

      </form>
    </div>
  );
};