import {GET_LOG} from '../actions/log';

const initialState = {
  logs: []
};

const Log = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOG:
      return {
        logs: action.logs
      }
    default:
      return state;
  }
};

export default Log;
