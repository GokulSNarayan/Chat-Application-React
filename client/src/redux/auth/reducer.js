import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    REGISTER_USER_SUCCESS,
    SET_SOCKET_DATA,
    LOGIN_USER_FAILED,
    SET_USER_DATA
} from '../actions';

const INIT_STATE = {
    token: localStorage.getItem('token'),
    loading: false,
    user: {},
    socket:{}
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loading: true };
        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false, token: action.payload };
        case LOGIN_USER_FAILED:
            return { ...state, loading: false };
        case LOGOUT_USER:
            return { ...state, token: null };
        case REGISTER_USER_SUCCESS:
            return { ...state, user: action.payload };
        case SET_USER_DATA:
            return { ...state, user: action.payload }
        case SET_SOCKET_DATA:
            return { ...state, socket: action.payload }
        default:
            return { ...state };
    }
}