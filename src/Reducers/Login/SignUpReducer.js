import { 
    UPDATE_SIGNUP_USERNAME_FIELD,
    UPDATE_SIGNUP_EMAIL_FIELD,
    UPDATE_SIGNUP_PASSWORD_FIELD
} from '../../Constants/Constants';

const INITIAL_STATE = {
    signUpUsername: '',
    signUpEmail: '',
    signUpPassword: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_SIGNUP_USERNAME_FIELD:
            return { ...state, signUpUsername: action.payload };
        case UPDATE_SIGNUP_EMAIL_FIELD:
            return { ...state, signUpEmail: action.payload };
        case UPDATE_SIGNUP_PASSWORD_FIELD:
            return { ...state, signUpPassword: action.payload };
        default:
            return state;
    }
}