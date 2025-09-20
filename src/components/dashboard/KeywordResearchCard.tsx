"use client";

import { useState } from "react";

export default function KeywordResearchCard() {
  const [title, setTitle] = useState("Stainless Steel Water Bottle 1L");
  const [description, setDescription] = useState("Durable, BPA-free, insulated water bottle with leak-proof cap.");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);
    setKeywords([]);
    const res = await fetch("/api/ai/keyword-research", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description })
    });
    const data = await res.json();
    setKeywords(data.keywords || []);
    setLoading(false);
  }

  return (
    <div className="rounded border border-white/10 p-4">
      <h2 className="font-semibold mb-2">Keyword Research (free stub)</h2>
      <input className="w-full rounded bg-white/10 px-3 py-2 mb-2" value={title} onChange={(e)=>setTitle(e.target.value)} />
      <textarea className="w-full rounded bg-white/10 px-3 py-2 mb-2" rows={3} value={description} onChange={(e)=>setDescription(e.target.value)} />
      <button onClick={generate} disabled={loading} className="rounded bg-blue-600 px-3 py-2">
        {loading ? "Generating..." : "Generate keywords"}
      </button>
      {keywords.length > 0 && (
        <ul className="mt-3 text-sm list-disc pl-5">
          {keywords.map((k)=> (<li key={k}>{k}</li>))}
        </ul>
      )}
    </div>
  );
}
