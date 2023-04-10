import { createContext, Dispatch, useReducer } from 'react';
import { TodoItemTypes } from '@customTypes/todo';

type TodoAction =
  | { type: 'GET_TODO'; payload: TodoItemTypes[] }
  | { type: 'CREATE_TODO'; payload: TodoItemTypes }
  | { type: 'UPDATE_TODO'; payload: TodoItemTypes }
  | { type: 'DELETE_TODO'; payload: number };

type TodoDispatchType = Dispatch<TodoAction>;

const initState: TodoItemTypes[] = [];

export const TodoStateContext = createContext<TodoItemTypes[]>(initState);
export const TodoDispatchContext = createContext<TodoDispatchType | null>(null);

const TodoReducer = (
  state: TodoItemTypes[],
  action: TodoAction
): TodoItemTypes[] => {
  switch (action.type) {
    case 'GET_TODO':
      const todos = action.payload;
      return [...todos];
    case 'CREATE_TODO':
      const newTodo = action.payload;
      return [...state, newTodo];
    case 'UPDATE_TODO':
      const updateTodo = action.payload;
      const filterUpdateTodo = state.filter(
        (todo) => todo.id !== updateTodo.id
      );
      return [...filterUpdateTodo, updateTodo].sort((a, b) => a.id - b.id);
    case 'DELETE_TODO':
      const id = action.payload;
      const filterDeleteTodo = state.filter((todos) => todos.id !== id);
      return [...filterDeleteTodo];
    default:
      throw new Error();
  }
};

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(TodoReducer, initState);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};
