import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchTodos } from "./AllFetchedData";

const useTodo = () => {
  const {
    data: todo,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isLoading) return <span>loading.....</span>;

  if (isError) return <span> error...</span>;
  console.log(todo);

  return todo;
};

export default useTodo;
