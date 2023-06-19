import Nav from "@/components/Nav";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log("session", session);
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
      <div className=" flex-col h-screen justify-center  flex  items-center">
        <div className="font-extrabold text-5xl">
          <span>Nex</span>
          <span className="text-nextGreen">T</span>
          <span className="text-nextred">o</span>
          <span className="text-nextBlue">D</span>
          <span className="text-nextYellow">o</span>
        </div>
        <span>Faça login para criar sua lista!</span>
      </div>
    </div>
  );
}
