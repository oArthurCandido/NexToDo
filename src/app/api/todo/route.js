import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

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

export async function DELETE(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json("Não autorizado");
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const deleteTodo = await prisma.todo.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json({ message: "Deletado com sucesso", deleteTodo });
}

export async function PATCH(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json("Não autorizado");
  }
  const data = await req.json();
  const updateTodo = await prisma.todo.update({
    where: {
      id: data.id,
    },
    data: {
      title: data.title,
      completed: data.completed,
      category: data.category,
    },
  });
  return NextResponse.json({ message: "Atualizado com sucesso", updateTodo });
}
