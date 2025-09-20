import { z } from "zod";

const Schema = z.object({
  demandScore: z.number().min(0).max(100),
  competitionScore: z.number().min(0).max(100),
  profitMargin: z.number().min(0).max(100),
  marketSaturation: z.number().min(0).max(100),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { demandScore, competitionScore, profitMargin, marketSaturation } = Schema.parse(body);

    const opportunityScore = (
      demandScore * 0.3 +
      (100 - competitionScore) * 0.25 +
      profitMargin * 0.3 +
      (100 - marketSaturation) * 0.15
    );

    return new Response(
      JSON.stringify({
        opportunityScore,
        breakdown: { demandScore, competitionScore, profitMargin, marketSaturation }
      }),
      { status: 200 }
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message ?? "Invalid payload" }), { status: 400 });
  }
}
