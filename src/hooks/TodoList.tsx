import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos, Todo } from "./AllFetchedData";

const TodoList = () => {
  const { data, error, isLoading } = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <ul className="list-group">
      {data?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
