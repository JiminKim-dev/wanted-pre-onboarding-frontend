import { useState } from 'react';
import { TodoItemTypes, UpdateTodoTypes } from '@customTypes/todo';

interface TodoItemProps {
  item: TodoItemTypes;
  deleteTodoHandler: (id: number) => void;
  updateTodoHandler: (updateInfo: UpdateTodoTypes) => void;
}

const TodoItem = ({
  item,
  updateTodoHandler,
  deleteTodoHandler,
}: TodoItemProps) => {
  const { id, todo, isCompleted } = item;
  const [todoInputValue, setTodoInputValue] = useState<string>(todo);
  const [isEditTodo, setIsEditTodo] = useState(false);
  const changeEditTodoState = () => setIsEditTodo((state) => !state);

  const clickDeleteButtonHandler = () => deleteTodoHandler(id);

  const onClickCheckboxHandler = () => {
    const updateItem = {
      id,
      isCompleted: !isCompleted,
      todo: todoInputValue,
    };
    updateTodoHandler(updateItem);
  };

  const onChangeInputValueHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setTodoInputValue(event.target.value);

  const onClickModifyButtonHandler = () => {
    const updateItem = {
      id,
      isCompleted,
      todo: todoInputValue,
    };
    updateTodoHandler(updateItem);
    changeEditTodoState();
  };

  const onClickCancleButtonHandler = () => {
    setTodoInputValue(todo);
    changeEditTodoState();
  };

  return (
    <li className="list-none w-[100%] min-w-fit flex justify-center">
      <label className="w-[100%] min-w-fit flex justify-center">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={onClickCheckboxHandler}
        />
        {isEditTodo ? (
          <>
            <input
              data-testid="modify-input"
              defaultValue={todo}
              onChange={onChangeInputValueHandler}
              className="w-[70%] w-min-[
                80px] mx-2 px-3 py-1 border-solid border-[1px] rounded-md border-slate-400"
            />
            <button
              data-testid="submit-button"
              onClick={onClickModifyButtonHandler}
              className="px-3 py-1 text-white whitespace-pre bg-green-500"
            >
              제출
            </button>
            <button
              data-testid="cancel-button"
              onClick={onClickCancleButtonHandler}
              className="px-3 py-1 text-white whitespace-pre bg-slate-600"
            >
              취소
            </button>
          </>
        ) : (
          <>
            <span
              className="inline-block mx-2 px-3 py-1 w-[70%] w-min-[
              80px]"
            >
              {todoInputValue}
            </span>
            <button
              data-testid="modify-button"
              onClick={changeEditTodoState}
              className="px-3 py-1 text-white whitespace-pre bg-slate-800"
            >
              수정
            </button>
            <button
              data-testid="delete-button"
              onClick={clickDeleteButtonHandler}
              className="px-3 py-1 text-white whitespace-pre bg-red-400"
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
