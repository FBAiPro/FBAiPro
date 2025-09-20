"use client";

import { useState } from "react";

export default function ListingOptimizeCard() {
  const [category, setCategory] = useState("Kitchen & Dining");
  const [productName, setProductName] = useState("Stainless Steel Water Bottle");
  const [features, setFeatures] = useState("Insulated for 24h\nLeak-proof cap\nDishwasher safe");
  const [seoKeywords, setSeoKeywords] = useState("water bottle, stainless steel, insulated");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function optimize() {
    setLoading(true);
    setResult(null);
    const res = await fetch("/api/ai/listing-optimize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category,
        productName,
        features: features.split(/\n+/).map(s=>s.trim()).filter(Boolean),
        seoKeywords: seoKeywords.split(/[,\n]+/).map(s=>s.trim()).filter(Boolean)
      })
    });
    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <div className="rounded border border-white/10 p-4">
      <h2 className="font-semibold mb-2">Listing Optimizer (free stub)</h2>
      <input className="w-full rounded bg-white/10 px-3 py-2 mb-2" placeholder="Category" value={category} onChange={(e)=>setCategory(e.target.value)} />
      <input className="w-full rounded bg-white/10 px-3 py-2 mb-2" placeholder="Product name" value={productName} onChange={(e)=>setProductName(e.target.value)} />
      <textarea className="w-full rounded bg-white/10 px-3 py-2 mb-2" placeholder="Key features (one per line)" rows={3} value={features} onChange={(e)=>setFeatures(e.target.value)} />
      <input className="w-full rounded bg-white/10 px-3 py-2 mb-2" placeholder="SEO keywords (comma separated)" value={seoKeywords} onChange={(e)=>setSeoKeywords(e.target.value)} />
      <button onClick={optimize} disabled={loading} className="rounded bg-blue-600 px-3 py-2">
        {loading ? "Optimizing..." : "Optimize"}
      </button>
      {result && (
        <div className="mt-3 text-sm space-y-2">
          <div><b>Title:</b> {result.title}</div>
          <div>
            <b>Bullets:</b>
            <ul className="list-disc pl-5">
              {result.bullets?.map((b: string, i: number)=> (<li key={i}>{b}</li>))}
            </ul>
          </div>
          <div>
            <b>Description:</b>
            <p className="whitespace-pre-wrap">{result.description}</p>
          </div>
          {result.keywords && (
            <div><b>Recommended Keywords:</b> {result.keywords.join(", ")}</div>
          )}
        </div>
      )}
    </div>
  );
}
