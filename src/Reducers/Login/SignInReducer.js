import { 
    UPDATE_SIGNIN_USERNAME_FIELD,
    UPDATE_SIGNIN_PASSWORD_FIELD
} from '../../Constants/Constants';

const INITIAL_STATE = {
    signInUsername: '',
    signInPassword: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_SIGNIN_USERNAME_FIELD:
            return { ...state, signInUsername: action.payload };
        case UPDATE_SIGNIN_PASSWORD_FIELD:
            return { ...state, signInPassword: action.payload };
        default:
            return state;
    }
}