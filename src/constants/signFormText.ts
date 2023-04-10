import ROUTER_PATH from './routerPath';

export const SIGN_FORM_TEXT = {
  SIGNIN: {
    title: '로그인',
    signGuide: {
      title: '아직 가입을 안했다면?',
      routeName: '회원가입',
      route: ROUTER_PATH.SIGNUP,
    },
  },
  SIGNUP: {
    title: '회원가입',
    signGuide: {
      title: '이미 가입한 회원이라면?',
      routeName: '로그인',
      route: ROUTER_PATH.SIGNIN,
    },
  },
};
