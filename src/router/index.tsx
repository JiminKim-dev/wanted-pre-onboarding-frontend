import { createBrowserRouter } from 'react-router-dom';
import {
  Layout,
  ErrorPage,
  RootPage,
  SignInPage,
  SignUpPage,
  TodoPage,
  authLoader,
  todoLoader,
} from '@pages/index';
import ROUTER_PATH from '@constants/routerPath';

const router = createBrowserRouter(
  [
    {
      path: ROUTER_PATH.ROOT,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <RootPage />,
          loader: authLoader,
        },
        {
          path: ROUTER_PATH.SIGNIN,
          element: <SignInPage />,
          loader: authLoader,
        },
        {
          path: ROUTER_PATH.SIGNUP,
          element: <SignUpPage />,
          loader: authLoader,
        },
        {
          path: ROUTER_PATH.TODO,
          element: <TodoPage />,
          loader: todoLoader,
        },
      ],
      errorElement: <ErrorPage />,
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

export default router;
