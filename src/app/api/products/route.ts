import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { z } from "zod";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }
  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return new Response(JSON.stringify({ products: [] }), { status: 200 });
  const products = await prisma.product.findMany({ where: { userId: user.id }, orderBy: { createdAt: "desc" } });
  return new Response(JSON.stringify({ products }), { status: 200 });
}

const CreateSchema = z.object({
  asin: z.string().optional(),
  title: z.string().min(1),
  description: z.string().optional(),
  price: z.number().optional(),
});

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }
  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });

  try {
    const body = await req.json();
    const data = CreateSchema.parse(body);
    const product = await prisma.product.create({
      data: {
        userId: user.id,
        asin: data.asin,
        title: data.title,
        description: data.description,
        price: data.price ? data.price as any : null,
      },
    });
    return new Response(JSON.stringify({ product }), { status: 201 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message ?? "Invalid payload" }), { status: 400 });
  }
}
