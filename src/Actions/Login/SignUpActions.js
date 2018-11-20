import { 
    UPDATE_SIGNUP_USERNAME_FIELD,
    UPDATE_SIGNUP_EMAIL_FIELD,
    UPDATE_SIGNUP_PASSWORD_FIELD
} from '../../Constants/Constants';

export const updateUsernameField = username => ({
    type: UPDATE_SIGNUP_USERNAME_FIELD,
    payload: username
});

export const updateEmailField = email => ({
    type: UPDATE_SIGNUP_EMAIL_FIELD,
    payload: email
});

export const updatePasswordField = password => ({
    type: UPDATE_SIGNUP_PASSWORD_FIELD,
    payload: password
});