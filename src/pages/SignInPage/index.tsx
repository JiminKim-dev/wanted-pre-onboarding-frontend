import ROUTER_PATH from '@constants/routerPath';
import { Link } from 'react-router-dom';
import useFormValidation from '@hooks/useFormValidation';

const SignInPage = () => {
  const {
    isDisabledFormButton,
    emailInputRef,
    passwordInputRef,
    emailInputValue,
    passwordInputValue,
    onChangeEmailInputValue,
    onChangePasswordInputValue,
  } = useFormValidation();

  return (
    <div className="flex flex-col items-center justify-center w-[100%] gap-6">
      <h1 className="text-3xl font-bold ">로그인</h1>
      <form action="" className="flex flex-col w-[60%] gap-6">
        <label htmlFor="" className="text-lg">
          이메일
          <input
            type="text"
            data-testid="email-input"
            placeholder="test@test.com"
            ref={emailInputRef}
            value={emailInputValue}
            onChange={onChangeEmailInputValue}
            className="px-4 py-2 w-[100%] min-w-[320px] border-solid border-[1px] rounded-md border-slate-300"
          />
        </label>
        <label htmlFor="" className="text-lg">
          비밀번호
          <input
            type="password"
            data-testid="password-input"
            placeholder="8자리 이상 입력해주세요."
            ref={passwordInputRef}
            value={passwordInputValue}
            onChange={onChangePasswordInputValue}
            className="px-4 py-2 w-[100%] min-w-[320px] border-solid border-[1px] rounded-md border-slate-300"
          />
        </label>
        <button
          type="submit"
          value="Submit"
          data-testid="signin-button"
          disabled={isDisabledFormButton}
          className="px-8 py-4 text-white bg-blue-600 w-[100%] min-w-[320px] rounded-xl hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-500"
        >
          로그인
        </button>
      </form>
      <div className="flex">
        <p>아직 가입을 안했다면?</p>
        <Link
          to={ROUTER_PATH.SIGNUP}
          className="mx-1.5 underline hover:text-blue-700"
        >
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
