import { Link } from 'react-router-dom';
import { SIGN_FORM_TEXT } from '@constants/signFormText';
import useFormValidation from '@hooks/useFormValidation';

export interface FormDataTypes {
  email: string;
  password: string;
}

interface SignFormProps {
  onSubmitHandler: (FotmData: FormDataTypes) => Promise<void>;
  type: 'signIn' | 'siginUp';
}

const SignForm = ({ onSubmitHandler, type }: SignFormProps) => {
  const {
    isDisabledFormButton,
    emailInputRef,
    passwordInputRef,
    emailInputValue,
    passwordInputValue,
    onChangeEmailInputValue,
    onChangePasswordInputValue,
  } = useFormValidation();

  const FORM_TEXT =
    type === 'signIn' ? SIGN_FORM_TEXT.SIGNIN : SIGN_FORM_TEXT.SIGNUP;

  const formSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      email: emailInputValue,
      password: passwordInputValue,
    };
    onSubmitHandler(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center w-[100%] gap-6">
      <h1 className="text-3xl font-bold">{FORM_TEXT.title}</h1>
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
          {FORM_TEXT.title}
        </button>
      </form>
      <div className="flex">
        <p>{FORM_TEXT.signGuide.title}</p>
        <Link
          to={FORM_TEXT.signGuide.route}
          className="mx-1.5 underline hover:text-blue-700"
        >
          {FORM_TEXT.signGuide.routeName}
        </Link>
      </div>
    </div>
  );
};

export default SignForm;
