import Nav from "@/components/Nav";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div>
      <Nav />
      <TodoInput />
      <TodoList />
    </div>
  );
}
