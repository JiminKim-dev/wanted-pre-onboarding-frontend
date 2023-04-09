import ROUTER_PATH from '@constants/routerPath';
import { Link, useNavigate } from 'react-router-dom';
import { postSignIn } from '@api/auth';
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

  const navigate = useNavigate();

  const formSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      email: emailInputValue,
      password: passwordInputValue,
    };
    await postSignIn(formData);
    navigate(ROUTER_PATH.TODO);
  };

  return (
    <div className="flex flex-col items-center justify-center w-[100%] gap-6">
      <h1 className="text-3xl font-bold">로그인</h1>
      <form onSubmit={formSubmitHandler} className="flex flex-col gap-6">
        <label className="text-lg">
          이메일
          <input
            type="text"
            data-testid="email-input"
            placeholder="test1234@test.net"
            ref={emailInputRef}
            value={emailInputValue}
            onChange={onChangeEmailInputValue}
            className="px-4 py-2 w-[100%] min-w-[320px] border-solid border-[1px] rounded-md border-slate-300"
          />
        </label>
        <label className="text-lg">
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
