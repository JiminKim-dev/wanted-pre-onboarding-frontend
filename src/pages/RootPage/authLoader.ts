import { LOCAL_STORAGE_KEY } from '@constants/api';
import { redirect } from 'react-router-dom';
import ROUTER_PATH from '@constants/routerPath';

const authLoader = () => {
  const getAccessToken = localStorage.getItem(LOCAL_STORAGE_KEY);
  return getAccessToken ? redirect(ROUTER_PATH.TODO) : null;
};

export default authLoader;
