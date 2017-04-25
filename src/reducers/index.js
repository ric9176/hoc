import { combineReducers } from 'redux';
import authenticationReducer from './authentication'


const rootReducer = combineReducers({
  authenicated: authenticationReducer
});

export default rootReducer;
