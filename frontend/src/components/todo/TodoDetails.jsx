import React, { useEffect } from 'react';
import { useTodoAuth } from '../../store/toDoStore';
import { useParams } from 'react-router-dom';

export default function TodoDetails() {
  const { todos, fetchTodos } = useTodoAuth();
  const { id } = useParams();

  useEffect(() => {
    if (!todos || todos.length === 0) {
      fetchTodos();
    }
  }, []);

  const todo = todos?.find((todo) => todo._id === id);
  console.log('Fetched todos:', todos);
  console.log('Current todo:', todo); 

  if (!todo) {
    return <div>Loading or Todo not found...</div>;
  }

  return (
    <div className='h-screen mx-auto max-w-3xl my-10'>
      <h1 className="text-2xl font-bold">{todo.title}</h1>
      <p className="dark:text-gray-300 text-xl">{todo.content}</p>
    </div>
  );
}
