import ROUTER_PATH from '@constants/routerPath';
import { useNavigate } from 'react-router-dom';

const RootPage = () => {
  const navigate = useNavigate();

  const clickSigninButtonHandler = () => navigate(ROUTER_PATH.SIGNIN);
  const clickSignupButtonHandler = () => navigate(ROUTER_PATH.SIGNUP);

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-[100%]">
      <button
        type="button"
        onClick={clickSigninButtonHandler}
        className="px-8 py-4 text-white bg-blue-600 w-[60%] min-w-[320px] rounded-xl hover:bg-blue-700"
      >
        로그인
      </button>
      <button
        type="button"
        onClick={clickSignupButtonHandler}
        className="px-8 py-4 text-white bg-slate-400 w-[60%] min-w-[320px] rounded-xl hover:bg-slate-950"
      >
        회원가입
      </button>
    </div>
  );
};

export default RootPage;
