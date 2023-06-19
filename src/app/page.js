import Nav from "@/components/Nav";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import FloatingLogo from "@/components/FloatingLogo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <div>
        <Nav />
        <TodoInput />
        <TodoList />
      </div>
    );
  }
  return (
    <div>
      <Nav />
      <FloatingLogo />
    </div>
  );
}
