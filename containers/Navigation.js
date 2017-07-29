import {connect} from 'react-redux';

import NavigationComponent from '../components/Navigation';

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  };
};

const Navigation = connect(
  mapStateToProps
)(NavigationComponent);

export default Navigation;
