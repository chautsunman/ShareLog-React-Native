const initialState = {
  signedIn: false,
  authStateChanging: false,
  user: null
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN_ANONYMOUSLY_REQUEST':
      return {
        ...state,
        authStateChanging: true
      };
    case 'SIGN_IN_ANONYMOUSLY_SUCCESS':
      return {
        signedIn: true,
        user: action.user
      };
    case 'SIGN_OUT_REQUEST':
      return {
        ...state,
        authStateChanging: true
      };
    case 'SIGN_OUT_SUCCESS':
      return {
        signedIn: false,
        user: null
      };
    default:
      return state;
  }
};

export default Auth;
