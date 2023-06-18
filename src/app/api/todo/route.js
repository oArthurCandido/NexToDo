import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  const todos = await prisma.todo.findMany({
    where: {
      userId: user.id,
    },
  });

  return NextResponse.json({ todos });
}

export async function POST(req) {
  const data = await req.json();
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  const todo = await prisma.todo.create({
    data: {
      title: data.title,
      category: data.category,
      userId: user.id,
    },
  });

  return NextResponse.json({ message: "Criado com sucesso", todo });
}
