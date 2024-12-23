// src/pages/index.tsx
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const Home: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-4 border-2 border-gray-200 rounded mt-10">
      <h1 className="text-lg font-medium border-b pb-2">Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Home;
