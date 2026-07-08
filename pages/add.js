import Layout from "../components/Layout";
import NoticeForm from "../components/NoticeForm";
import { FilePlus2 } from "lucide-react";

export default function AddNotice() {
  return (
    <Layout>
      <div className="mb-8 flex items-center gap-4">
        <div className="rounded-2xl bg-blue-600 p-4">
          <FilePlus2 className="text-white" size={32} />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Create Notice
          </h1>

          <p className="text-slate-500 mt-1">
            Publish a new notice for students and staff.
          </p>
        </div>
      </div>

      <NoticeForm />
    </Layout>
  );
}