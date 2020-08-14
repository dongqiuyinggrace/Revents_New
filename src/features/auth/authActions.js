import { SIGN_IN_USER, SIGN_OUT_USER } from './authConstants';

export const login = (payload) => {
    return {
        type: SIGN_IN_USER,
        payload
    }
}

export const logout = () => {
    return {
        type: SIGN_OUT_USER
    }
}