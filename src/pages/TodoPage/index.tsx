import { useEffect, useRef } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { createTodo, deleteTodo, updateTodo } from '@api/todo';
import TodoItem from '@components/TodoItem';
import { TodoItemTypes, UpdateTodoTypes } from '@customTypes/todo';
import { useTodoState } from '@hooks/useTodoState';
import { LOCAL_STORAGE_KEY } from '@constants/api';
import ROUTER_PATH from '@constants/routerPath';

const TodoPage = () => {
  const { data: todoListData } = useLoaderData() as AxiosResponse;
  const {
    todoState,
    getTodosState,
    createTodoState,
    updateTodoState,
    deleteTodoState,
  } = useTodoState();

  const navigate = useNavigate();

  const newTodoInputRef = useRef<HTMLInputElement>(null);
  const createTodoFormHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (!newTodoInputRef.current) return;

    const newTodo = newTodoInputRef.current.value;

    if (!newTodo) return;
    const responseNewTodo = await createTodo(newTodo);
    createTodoState(responseNewTodo);
    newTodoInputRef.current.value = '';
  };

  const updateTodoHandler = async (updateInfo: UpdateTodoTypes) => {
    const responseUpdateTodo = await updateTodo(updateInfo);
    updateTodoState(responseUpdateTodo);
  };

  const deleteTodoHandler = async (todoId: number) => {
    await deleteTodo(todoId);
    deleteTodoState(todoId);
  };

  const onClickLogoutButtonHandler = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    navigate(ROUTER_PATH.ROOT);
  };

  useEffect(() => {
    getTodosState(todoListData);
  }, [getTodosState, todoListData]);

  return (
    <div className="flex flex-col w-[100%] h-[100%]">
      <div className="w-[100%] h-[100%] overflow-y-auto">
        <form
          onSubmit={createTodoFormHandler}
          className="w-[100%] flex items-center justify-center mb-6"
        >
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
        <ul className="w-[100%] flex flex-col gap-2">
          {todoState.length ? (
            todoState.map((item: TodoItemTypes) => (
              <TodoItem
                key={item.id}
                item={item}
                updateTodoHandler={updateTodoHandler}
                deleteTodoHandler={deleteTodoHandler}
              />
            ))
          ) : (
            <div className="flex justify-center">TodoList가 비어있어요.</div>
          )}
        </ul>
      </div>
      <button
        type="button"
        onClick={onClickLogoutButtonHandler}
        className="m-auto px-8 py-4 text-slate-500 bg-slate-300 w-[280px] rounded-xl hover:bg-blue-500 hover:text-white"
      >
        로그아웃
      </button>
    </div>
  );
};

export default TodoPage;
