import { useRef, useState } from 'react';

const useFormValidation = () => {
  const [isDisabledFormButton, setIsDisabledFormButton] =
    useState<boolean>(true);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [emailInputValue, setEmailInputValue] = useState<string>('');
  const [passwordInputValue, setPasswordInputValue] = useState<string>('');

  const checkValidForm = () => {
    const emailRegex = /@/;
    const isValidEmail = (value: string) => emailRegex.test(value);
    const isValidPassword = (value: string) => value.length >= 8;

    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    if (!email || !password) return false;

    const isValidForm = () => isValidEmail(email) && isValidPassword(password);
    return isValidForm();
  };

  const onChangeEmailInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmailInputValue(event.target.value);
    setIsDisabledFormButton(!checkValidForm());
  };
  const onChangePasswordInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordInputValue(event.target.value);
    setIsDisabledFormButton(!checkValidForm());
  };

  return {
    isDisabledFormButton,
    emailInputRef,
    passwordInputRef,
    emailInputValue,
    passwordInputValue,
    onChangeEmailInputValue,
    onChangePasswordInputValue,
  };
};

export default useFormValidation;
