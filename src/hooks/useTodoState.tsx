import { useCallback, useContext } from 'react';
import { TodoItemTypes } from '@customTypes/todo';
import { TodoDispatchContext, TodoStateContext } from '@context/TodoContext';

export const useTodoState = () => {
  const state = useContext(TodoStateContext);
  const dispatch = useContext(TodoDispatchContext);

  if (!state || !dispatch) throw new Error();

  const getTodosState = useCallback((todos: TodoItemTypes[]): void => {
    dispatch({ type: 'GET_TODO', payload: todos });
  }, []);

  const createTodoState = useCallback((todo: TodoItemTypes) => {
    dispatch({ type: 'CREATE_TODO', payload: todo });
  }, []);

  const updateTodoState = useCallback((todo: TodoItemTypes) => {
    dispatch({ type: 'UPDATE_TODO', payload: todo });
  }, []);

  const deleteTodoState = useCallback((todoId: number) => {
    dispatch({ type: 'DELETE_TODO', payload: todoId });
  }, []);

  return {
    todoState: state,
    getTodosState,
    createTodoState,
    updateTodoState,
    deleteTodoState,
  };
};
