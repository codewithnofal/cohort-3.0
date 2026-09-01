import axios from "axios";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function NoteInput() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.title.trim() === "" || formData.description.trim() === "")
      return;

    try {
      const res = await axios.post("http://localhost:3000/notes/create", formData);

      console.log(res)
    } catch (error) {
      console.log("error while creating a note", error);
    }

    console.log("me chala");
  };

  return (
    <div className="rounded-xl border border-[#e9e9e7] bg-white p-4 shadow-[0_1px_2px_rgba(15,15,15,0.06)]">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          type="text"
          placeholder="Note title…"
          className="w-full rounded-lg border border-[#e9e9e7] bg-[#fcfcfb] px-3 py-2.5 text-sm font-medium text-[#191919] placeholder:text-[#9b9a97] transition-colors focus:border-[#b8b8b5] focus:outline-none"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          placeholder="Write something…"
          className="w-full resize-none rounded-lg border border-[#e9e9e7] bg-[#fcfcfb] px-3 py-2.5 text-sm text-[#191919] placeholder:text-[#9b9a97] transition-colors focus:border-[#b8b8b5] focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#191919] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 active:opacity-80 sm:w-auto"
        >
          <Plus className="h-4 w-4" />
          Add note
        </button>
      </form>
    </div>
  );
}
