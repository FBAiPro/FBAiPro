"use client";

import { useState } from "react";

export default function ProductResearchCard() {
  const [demandScore, setDemand] = useState(70);
  const [competitionScore, setCompetition] = useState(40);
  const [profitMargin, setMargin] = useState(35);
  const [marketSaturation, setSaturation] = useState(30);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function analyze() {
    setLoading(true);
    setResult(null);
    const res = await fetch("/api/ai/product-research", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ demandScore, competitionScore, profitMargin, marketSaturation })
    });
    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <div className="rounded border border-white/10 p-4">
      <h2 className="font-semibold mb-2">Product Opportunity Scorer</h2>
      <div className="grid grid-cols-2 gap-3">
        <label className="text-sm">Demand: {demandScore}
          <input type="range" min={0} max={100} value={demandScore} onChange={(e)=>setDemand(Number(e.target.value))} className="w-full" />
        </label>
        <label className="text-sm">Competition: {competitionScore}
          <input type="range" min={0} max={100} value={competitionScore} onChange={(e)=>setCompetition(Number(e.target.value))} className="w-full" />
        </label>
        <label className="text-sm">Profit Margin: {profitMargin}
          <input type="range" min={0} max={100} value={profitMargin} onChange={(e)=>setMargin(Number(e.target.value))} className="w-full" />
        </label>
        <label className="text-sm">Market Saturation: {marketSaturation}
          <input type="range" min={0} max={100} value={marketSaturation} onChange={(e)=>setSaturation(Number(e.target.value))} className="w-full" />
        </label>
      </div>
      <button onClick={analyze} disabled={loading} className="mt-3 rounded bg-blue-600 px-3 py-2">
        {loading ? "Analyzing..." : "Analyze"}
      </button>
      {result && (
        <div className="mt-3 text-sm">
          <div>Opportunity Score: <b>{Math.round(result.opportunityScore)}</b>/100</div>
          <pre className="mt-2 whitespace-pre-wrap bg-black/30 p-2 rounded">{JSON.stringify(result.breakdown, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
