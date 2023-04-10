export interface TodoItemTypes {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export type UpdateTodoTypes = Omit<TodoItemTypes, 'userId'>;
