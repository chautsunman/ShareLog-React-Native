import {connect} from 'react-redux';

import LogDetailComponent from '../components/log-detail';

import {saveLog} from '../actions/log';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    save: (log) => {
      return dispatch(saveLog(log));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogDetailComponent);
