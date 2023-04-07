import { createBrowserRouter } from 'react-router-dom';
import {
  Layout,
  ErrorPage,
  RootPage,
  SignInPage,
  SignUpPage,
  TodoPage,
} from '@pages/index';
import ROUTER_PATH from '@constants/routerPath';

const router = createBrowserRouter([
  {
    path: ROUTER_PATH.ROOT,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <RootPage />,
      },
      {
        path: ROUTER_PATH.SIGNIN,
        element: <SignInPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTER_PATH.SIGNUP,
        element: <SignUpPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTER_PATH.TODO,
        element: <TodoPage />,
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
