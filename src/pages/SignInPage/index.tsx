import ROUTER_PATH from '@constants/routerPath';
import { useNavigate } from 'react-router-dom';
import { postSignIn } from '@api/auth';
import SignForm, { FormDataTypes } from '@components/SignForm';

const SignInPage = () => {
  const navigate = useNavigate();

  const formSubmitHandler = async (formData: FormDataTypes) => {
    await postSignIn(formData);
    navigate(ROUTER_PATH.TODO);
  };

  return <SignForm type="signIn" onSubmitHandler={formSubmitHandler} />;
};

export default SignInPage;
