import {combineReducers} from 'redux';

import nav from './Navigation';
import auth from './Auth';
import log from './log';

const App = combineReducers({
  nav,
  auth,
  log
});

export default App;
