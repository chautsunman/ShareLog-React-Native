import {connect} from 'react-redux';

import HomeComponent from '../components/Home';
import {signOut} from '../actions/Auth';

const mapStateToProps = (state) => {
  return {
    signedIn: state.auth.signedIn,
    user: state.auth.user,
    authStateChanging: state.auth.authStateChanging
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    }
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default Home;
