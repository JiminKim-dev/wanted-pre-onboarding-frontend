import { API_PATH, LOCAL_STORAGE_KEY } from '@constants/api';
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

export const postSignIn = async (formData: RequestFormData) => {
  try {
    const response = await AxiosInstance.post(API_PATH.SIGNIN, formData);

    if (response.status === 200) {
      localStorage.setItem(LOCAL_STORAGE_KEY, response.data.access_token);
    }
  } catch (catchError) {
    const error = catchError as AxiosError<ErrorMessage>;

    if (error.response?.status === 401) {
      alert('비밀번호를 다시 확인해주세요.');
    }

    if (error.response?.status === 404) {
      alert(error.response?.data.message);
    }

    throw error;
  }
};
