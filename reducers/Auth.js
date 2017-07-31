import {SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS} from '../actions/Auth';

const initialState = {
  signedIn: false,
  authStateChanging: false,
  user: null
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        signedIn: true,
        user: action.user
      };
    case SIGN_OUT_SUCCESS:
      return {
        signedIn: false,
        user: null
      }
    case 'SIGN_IN_ANONYMOUSLY_REQUEST':
      return {
        ...state,
        authStateChanging: true
      };
    case 'SIGN_OUT_REQUEST':
      return {
        ...state,
        authStateChanging: true
      };
    default:
      return state;
  }
};

export default Auth;
