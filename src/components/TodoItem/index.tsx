import { useState } from 'react';
import { TodoItemTypes } from '@customTypes/todo';

interface TodoItemProps {
  item: TodoItemTypes;
  deleteTodoHandler: (id: number) => void;
}

const TodoItem = ({ item, deleteTodoHandler }: TodoItemProps) => {
  const { id, todo, isCompleted } = item;

  const [isEditTodo, setIsEditTodo] = useState(false);
  const setIsEditMode = () => setIsEditTodo((state) => !state);

  const clickDeleteButtonHandler = () => deleteTodoHandler(id);

  return (
    <li className="list-none w-[100%]">
      <label>
        <input type="checkbox" />
        {isEditTodo ? (
          <>
            <input
              data-testid="modify-input"
              defaultValue={todo}
              className="w-[70%] w-min-[200px] mx-2 px-3 py-1 border-solid border-[1px] rounded-md border-slate-400"
            />
            <button
              data-testid="submit-button"
              className="px-3 py-1 text-white bg-green-500"
            >
              제출
            </button>
            <button
              data-testid="cancel-button"
              onClick={setIsEditMode}
              className="px-3 py-1 text-white bg-slate-600"
            >
              취소
            </button>
          </>
        ) : (
          <>
            <span className="inline-block mx-2  px-3 py-1 w-[70%] w-min-[200px]">
              {todo}
            </span>
            <button
              data-testid="modify-button"
              onClick={setIsEditMode}
              className="px-3 py-1 text-white bg-slate-800"
            >
              수정
            </button>
            <button
              data-testid="delete-button"
              onClick={clickDeleteButtonHandler}
              className="px-3 py-1 text-white bg-red-400"
            >
              삭제
            </button>
          </>
        )}
      </label>
    </li>
  );
};

export default TodoItem;
