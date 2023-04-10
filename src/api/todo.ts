import { API_PATH, LOCAL_STORAGE_KEY } from '@constants/api';
import { TodoItemTypes } from '@customTypes/todo';
import { AxiosError, AxiosPromise } from 'axios';
import { AxiosInstance } from '.';

interface ErrorMessage {
  message: string;
}

export const createTodo = async (todo: string): Promise<TodoItemTypes> => {
  try {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY);
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };
    const response = await AxiosInstance.post(API_PATH.TODO, { todo }, config);

    return response.data;
  } catch (catchError) {
    const error = catchError as AxiosError<ErrorMessage>;
    alert(error.response?.data.message);
    throw error;
  }
};

export const getTodos = async (): Promise<AxiosPromise<TodoItemTypes[]>> => {
  try {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY);
    const response = await AxiosInstance.get(API_PATH.TODO, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (catchError) {
    const error = catchError as AxiosError<ErrorMessage>;
    alert(error.response?.data.message);
    throw error;
  }
};

export const deleteTodo = async (todoId: number) => {
  try {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY);
    const response = await AxiosInstance.delete(`${API_PATH.TODO}/${todoId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (catchError) {
    const error = catchError as AxiosError<ErrorMessage>;
    alert(error.response?.data.message);
    throw error;
  }
};
