import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import { z } from "zod";

const BodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = BodySchema.parse(body);
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      return new Response(JSON.stringify({ error: "Email already registered" }), { status: 400 });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, passwordHash },
    });
    return new Response(JSON.stringify({ id: user.id, email: user.email }), { status: 201 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message ?? "Invalid payload" }), { status: 400 });
  }
}
