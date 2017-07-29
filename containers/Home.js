import {connect} from 'react-redux';

import HomeComponent from '../components/Home';
import {signOut} from '../actions/Auth';
import {getLogs} from '../actions/log';

const mapStateToProps = (state) => {
  return {
    signedIn: state.auth.signedIn,
    user: state.auth.user,
    authStateChanging: state.auth.authStateChanging,
    logs: state.log.logs
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    },
    getLogs: () => {
      dispatch(getLogs());
    }
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default Home;
