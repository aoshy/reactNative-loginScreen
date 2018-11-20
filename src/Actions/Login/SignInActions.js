import { 
    UPDATE_SIGNIN_USERNAME_FIELD,
    UPDATE_SIGNIN_PASSWORD_FIELD
} from '../../Constants/Constants';

export const updateUsernameField = username => ({
    type: UPDATE_SIGNIN_USERNAME_FIELD,
    payload: username
});

export const updatePasswordField = password => ({
    type: UPDATE_SIGNIN_PASSWORD_FIELD,
    payload: password
});