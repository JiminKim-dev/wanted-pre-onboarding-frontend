import { useState, useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import TodoItem from '@components/TodoItem';
import { TodoItemTypes } from '@customTypes/todo';

const TodoPage = () => {
  const { data: todoListData } = useLoaderData() as AxiosResponse;
  const [items, setItems] = useState<TodoItemTypes[]>(todoListData);

  const newTodoInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col items-center w-[100%] h-[100%] gap-6">
      <form className="w-[100%] flex items-center justify-center">
        <input
          ref={newTodoInputRef}
          data-testid="new-todo-input"
          placeholder="할 일"
          className="px-4 py-2 border-y border-l w-[80%] border-solid rounded-l-lg border-slate-400 focus:outline-0"
        />
        <button
          type="submit"
          data-testid="new-todo-add-button"
          className="px-4 py-2 text-white whitespace-pre bg-blue-500 border border-blue-500 rounded-r-lg w-fit solid"
        >
          추가
        </button>
      </form>
      <ul className="w-[100%] flex items-center justify-center flex-col gap-2 overflow-scroll">
        {items.length ? (
          items.map((item) => <TodoItem {...item} />)
        ) : (
          <div>TodoList가 비어있어요.</div>
        )}
      </ul>
    </div>
  );
};

export default TodoPage;
