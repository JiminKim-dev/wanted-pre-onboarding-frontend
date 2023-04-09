import { getTodos } from '@api/todo';
import { LOCAL_STORAGE_KEY } from '@constants/api';
import ROUTER_PATH from '@constants/routerPath';
import { redirect } from 'react-router-dom';

const todoLoader = () => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!accessToken) {
    return redirect(ROUTER_PATH.SIGNIN);
  }

  return getTodos();
};

export default todoLoader;
