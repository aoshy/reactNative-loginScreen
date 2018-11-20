import { combineReducers } from 'redux';
import SignInReducer from './Login/SignInReducer';
import SignUpReducer from './Login/SignUpReducer';

export default combineReducers({
    SignInReducer,
    SignUpReducer
});