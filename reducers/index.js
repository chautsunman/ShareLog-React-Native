import {combineReducers} from 'redux';

import nav from './Navigation';
import auth from './Auth';

const App = combineReducers({
  nav,
  auth
});

export default App;
