import {connect} from 'react-redux';

import AuthComponent from '../components/Auth';
import {signInAnonymously, signOut} from '../actions/Auth';

const mapStateToProps = (state) => {
  return {
    signedIn: state.auth.signedIn,
    user: state.auth.user,
    authStateChanging: state.auth.authStateChanging
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInAnonymously: () => {
      dispatch(signInAnonymously());
    },
    signOut: () => {
      dispatch(signOut());
    }
  }
}

const Auth = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthComponent);

export default Auth;
