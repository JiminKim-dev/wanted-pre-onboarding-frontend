import { useNavigate } from 'react-router-dom';
import { postSignUp } from '@api/auth';
import ROUTER_PATH from '@constants/routerPath';
import SignForm, { FormDataTypes } from '@components/SignForm';

const SignUpPage = () => {
  const navigate = useNavigate();

  const formSubmitHandler = async (formData: FormDataTypes) => {
    await postSignUp(formData);
    navigate(ROUTER_PATH.SIGNIN);
  };

  return <SignForm type="siginUp" onSubmitHandler={formSubmitHandler} />;
};
export default SignUpPage;
