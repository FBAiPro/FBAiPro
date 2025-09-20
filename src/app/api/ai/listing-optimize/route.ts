import { z } from "zod";

const Schema = z.object({
  category: z.string().min(1),
  productName: z.string().optional(),
  features: z.array(z.string()).default([]),
  seoKeywords: z.array(z.string()).default([]),
});

function titleCase(s: string) {
  return s.replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase());
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { category, productName, features, seoKeywords } = Schema.parse(body);

    const baseName = productName ?? "Product";
    const topKeywords = seoKeywords.slice(0, 3).map((k) => titleCase(k));

    const optimizedTitle = [
      baseName,
      topKeywords.length ? `– ${topKeywords.join(" / ")}` : null,
      `| ${category}`,
    ].filter(Boolean).join(" ");

    const bulletPoints = features.slice(0,5).map((f) => `• ${f}`);

    const description = `${baseName} in ${category} category. Designed for shoppers looking for ${seoKeywords.slice(0,5).join(
      ", "
    )}. Key benefits: ${features.join(", ")}.`;

    const recommendedKeywords = Array.from(new Set([...seoKeywords, ...features.flatMap(f=> f.toLowerCase().split(/\s+/))])).slice(0,20);

    return new Response(
      JSON.stringify({ title: optimizedTitle, bullets: bulletPoints, description, keywords: recommendedKeywords }),
      { status: 200 }
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message ?? "Invalid payload" }), { status: 400 });
  }
}
