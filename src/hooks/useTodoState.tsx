import { useCallback, useContext } from 'react';
import { TodoItemTypes } from '@customTypes/todo';
import { TodoDispatchContext, TodoStateContext } from '@context/TodoContext';

export const useTodoState = () => {
  const state = useContext(TodoStateContext);
  const dispatch = useContext(TodoDispatchContext);

  if (!state || !dispatch) throw new Error();

  const getTodosState = useCallback(
    (todos: TodoItemTypes[]): void => {
      dispatch({ type: 'GET_TODO', payload: todos });
    },
    [dispatch]
  );

  const createTodoState = useCallback(
    (todo: TodoItemTypes) => {
      dispatch({ type: 'CREATE_TODO', payload: todo });
    },
    [dispatch]
  );

  const updateTodoState = useCallback(
    (todo: TodoItemTypes) => {
      dispatch({ type: 'UPDATE_TODO', payload: todo });
    },
    [dispatch]
  );

  const deleteTodoState = useCallback(
    (todoId: number) => {
      dispatch({ type: 'DELETE_TODO', payload: todoId });
    },
    [dispatch]
  );

  return {
    todoState: state,
    getTodosState,
    createTodoState,
    updateTodoState,
    deleteTodoState,
  };
};
