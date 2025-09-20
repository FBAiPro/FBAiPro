import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { z } from "zod";

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  const id = Number(params.id);
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  return new Response(JSON.stringify({ product }), { status: 200 });
}

const UpdateSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  price: z.number().optional(),
});

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  const id = Number(params.id);
  try {
    const body = await req.json();
    const data = UpdateSchema.parse(body);
    const product = await prisma.product.update({
      where: { id },
      data: {
        title: data.title ?? undefined,
        description: data.description ?? undefined,
        price: data.price !== undefined ? (data.price as any) : undefined,
      },
    });
    return new Response(JSON.stringify({ product }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message ?? "Invalid payload" }), { status: 400 });
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  const id = Number(params.id);
  await prisma.product.delete({ where: { id } });
  return new Response(undefined, { status: 204 });
}
