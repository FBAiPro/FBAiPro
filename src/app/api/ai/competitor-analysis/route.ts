import { z } from "zod";

const Schema = z.object({
  keywords: z.array(z.string()).min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { keywords } = Schema.parse(body);

    // Naive heuristic: longer keyword -> lower competition
    const analysis = keywords.slice(0, 15).map((k) => {
      const len = k.split(/\s+/).length;
      const level = len >= 3 ? "low" : len === 2 ? "medium" : "high";
      return { keyword: k, competition: level };
    });

    return new Response(JSON.stringify({ analysis }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message ?? "Invalid payload" }), { status: 400 });
  }
}
