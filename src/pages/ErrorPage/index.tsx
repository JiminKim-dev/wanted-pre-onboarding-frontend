import ROUTER_PATH from '@constants/routerPath';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  const moveToRootPage = () => navigate(ROUTER_PATH.ROOT);
  const moveBackPage = () => navigate(-1);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-slate-200">
      <div className="p-16 text-center bg-white w-fit h-fit rounded-xl">
        <h1 className="text-5xl font-bold">404 Not Found</h1>
        <p className="p-6 text-2xl">해당하는 페이지를 찾을 수 없습니다.</p>
        <button
          type="button"
          onClick={moveToRootPage}
          className="px-4 py-3 mr-4 text-white bg-blue-500 rounded-xl"
        >
          메인 페이지로 돌아가기
        </button>
        <button
          type="button"
          onClick={moveBackPage}
          className="px-4 py-3 text-white bg-slate-700 rounded-xl"
        >
          뒤로 가기
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
