import { API_PATH, LOCAL_STORAGE_KEY } from '@constants/api';
import { TodoItemTypes } from '@customTypes/todo';
import { AxiosError, AxiosPromise } from 'axios';
import { AxiosInstance } from '.';

interface ErrorMessage {
  message: string;
}

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
