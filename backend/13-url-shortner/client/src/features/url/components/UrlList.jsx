import { Copy, Trash2, MousePointerClick, CopyCheck } from "lucide-react";
import { useEffect, useState } from "react";

export default function UrlList({ getAllUrlData, setLinks, links, deleteUrl }) {
  const [copied, setCopied] = useState(null);
  const copyUrl = async (url, id) => {
    await navigator.clipboard.writeText(url);
    setCopied(id);

    setTimeout(() => {
      setCopied(null);
    }, 2000);

    
  };

  useEffect(() => {
    getAllUrlData();
  }, []);

  return (
    <div className="mt-8 rounded-2xl border border-[#e9e9e7] bg-white p-4 shadow-[0_1px_2px_rgba(15,15,15,0.06)]">
      <h2 className="mb-4 text-sm font-semibold text-[#191919]">
        Your shortened links
      </h2>

      <ul className="space-y-3">
        {links?.map((link) => (
          <li
            key={link._id}
            className="flex flex-col gap-3 rounded-xl border border-[#e9e9e7] p-3 sm:flex-row sm:items-center sm:justify-between"
          >
            {/* Link info */}
            <div className="min-w-0 flex-1">
              <a
                href={`http://localhost:7777/${link.shortCode}`}
                target="_blank"
                className="truncate hover:underline cursor-pointer text-sm font-medium text-[#191919]"
              >
                http://localhost:7777/{link.shortCode}
              </a>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Click count */}
              <div className="flex items-center gap-1 rounded-lg border border-[#e9e9e7] bg-[#fcfcfb] px-2.5 py-1.5">
                <MousePointerClick className="h-3.5 w-3.5 text-[#787774]" />
                <span className="text-xs font-medium text-[#191919]">
                  {link.clicks}
                </span>
              </div>

              <button
                onClick={() =>
                  copyUrl(`http://localhost:7777/${link.shortCode}`, link._id)
                }
                type="button"
                aria-label="Copy link"
                className="rounded-lg border border-[#e9e9e7] cursor-pointer bg-[#fcfcfb] p-1.5 text-[#787774] transition-colors hover:bg-[#f1f1ef] hover:text-[#191919]"
              >
                {copied === link._id ? (
                  <CopyCheck className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>

              <button
                onClick={() => deleteUrl(link.shortCode)}
                type="button"
                aria-label="Delete link"
                className="rounded-lg border border-[#e9e9e7] cursor-pointer bg-[#fcfcfb] p-1.5 text-[#787774] transition-colors hover:bg-[#fdebec] hover:text-[#e03e3e]"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {links?.length === 0 && (
        <div className="py-8 text-center text-sm text-[#9b9a97]">
          No links shortened yet.
        </div>
      )}
    </div>
  );
}
