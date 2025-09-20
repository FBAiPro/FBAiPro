import { z } from "zod";

const Schema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
});

function simpleKeywordExtract(text: string) {
  return Array.from(
    new Set(
      text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter((w) => w.length > 2 && !["the","and","for","with","you","are","this","that","from","your","have","but","not","all","any"].includes(w))
    )
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description } = Schema.parse(body);
    const words = simpleKeywordExtract(`${title} ${description ?? ""}`);
    // Rank by length and alphabetically as a naive heuristic
    const ranked = words.sort((a,b)=> b.length - a.length || a.localeCompare(b)).slice(0, 15);
    return new Response(JSON.stringify({ keywords: ranked }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message ?? "Invalid payload" }), { status: 400 });
  }
}
