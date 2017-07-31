import {connect} from 'react-redux';

import AuthComponent from '../components/Auth';
import {signInAnonymously} from '../actions/Auth';

const mapStateToProps = (state) => {
  return {
    authStateChanging: state.auth.authStateChanging
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInAnonymously: () => {
      dispatch(signInAnonymously());
    }
  }
}

const Auth = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthComponent);

export default Auth;
