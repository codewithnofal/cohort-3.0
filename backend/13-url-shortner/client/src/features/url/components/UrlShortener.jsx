import { Link2, ArrowRight } from "lucide-react";
import UrlList from "./UrlList";
import { useState } from "react";
import { api } from "../../../config/api";

export default function UrlShortener() {
  const [url, setUrl] = useState(null);
  const [links, setLinks] = useState();

  console.log(url);

  const getAllUrlData = async () => {
    const res = await api.get("/url/getall");
    console.log(res.data);
    setLinks(res.data?.urls);
  };

  const deleteUrl = async (code) => {
    const res = await api.delete(`/url/delete/${code}`);
    getAllUrlData();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await api.post("/url/create", { url: url });
    console.log(res.data);

    setUrl("");

    getAllUrlData();
  };

  return (
    <div className="min-h-screen bg-[#ffffff] px-4 py-16 font-sans">
      <div className="mx-auto w-full max-w-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1f1ef] text-xl">
            🔗
          </div>
          <h1 className="text-3xl font-bold tracking-tight  text-[#191919] sm:text-4xl">
            Shorten your link
          </h1>
          <p className="mt-2 text-sm text-[#787774]">
            Paste a long URL and get a clean, shareable short link in seconds.
          </p>
        </div>

        {/* Input card */}
        <div className="rounded-2xl border border-[#e9e9e7] bg-white p-2 shadow-[0_1px_2px_rgba(15,15,15,0.06)]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 sm:flex-row"
          >
            <div className="flex flex-1 items-center gap-2 rounded-xl border border-[#e9e9e7] bg-[#fcfcfb] px-3 py-2.5 transition-colors focus-within:border-[#b8b8b5]">
              <Link2 className="h-4 w-4 shrink-0 text-[#9b9a97]" />
              <input
                onChange={(e) => setUrl(e.target.value)}
                value={url}
                type="text"
                placeholder="Paste your long URL here…"
                className="w-full bg-transparent text-sm text-[#191919] placeholder:text-[#9b9a97] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#191919] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 active:opacity-80"
            >
              Shorten
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Helper text */}
        <p className="mt-4 text-center text-xs text-[#9b9a97]">
          Example: https://example.com/very/long/url → short.ly/abc123
        </p>

        <UrlList
          setLinks={setLinks}
          links={links}
          getAllUrlData={getAllUrlData}
          deleteUrl={deleteUrl}
        />
      </div>
    </div>
  );
}
