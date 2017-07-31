import {GET_LOG, RESET_LOG_STATE} from '../actions/log';

const initialState = {
  logs: []
};

const Log = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOG:
      return {
        logs: action.logs
      };
    case RESET_LOG_STATE:
      return initialState;
    default:
      return state;
  }
};

export default Log;
