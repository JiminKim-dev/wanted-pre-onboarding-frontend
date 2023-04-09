import { API_PATH } from '@constants/api';
import { AxiosError } from 'axios';
import { AxiosInstance } from '.';

interface RequestFormData {
  email: string;
  password: string;
}

interface ErrorMessage {
  message: string;
}

export const postSignUp = async (formData: RequestFormData) => {
  try {
    await AxiosInstance.post(API_PATH.SIGNUP, formData);
  } catch (catchError) {
    const error = catchError as AxiosError<ErrorMessage>;
    alert(error.response?.data.message);
    throw error;
  }
};
