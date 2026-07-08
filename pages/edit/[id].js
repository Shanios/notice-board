import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SquarePen } from "lucide-react";

import Layout from "../../components/Layout";
import NoticeForm from "../../components/NoticeForm";

export default function EditNotice() {
  const router = useRouter();
  const { id } = router.query;

  const [notice, setNotice] = useState(null);

  useEffect(() => {
    if (!id) return;

    async function fetchNotice() {
      const res = await fetch(`/api/notices/${id}`);
      const data = await res.json();
      setNotice(data);
    }

    fetchNotice();
  }, [id]);

  if (!notice) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-72">
          <p className="text-slate-500 text-lg">
            Loading...
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mb-8 flex items-center gap-4">
        <div className="rounded-2xl bg-emerald-600 p-4">
          <SquarePen className="text-white" size={32} />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Edit Notice
          </h1>

          <p className="text-slate-500 mt-1">
            Update the notice information.
          </p>
        </div>
      </div>

      <NoticeForm
        initialData={notice}
        isEdit={true}
      />
    </Layout>
  );
}