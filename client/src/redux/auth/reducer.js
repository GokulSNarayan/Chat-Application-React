import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    REGISTER_USER,
    REGISTER_USER_SUCCESS
} from '../actions';

const INIT_STATE = {
    user: localStorage.getItem('token'),
    loading: false
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loading: true };
        case LOGIN_USER_SUCCESS:
            // console.log("Login Success")
            return { ...state, loading: false, user: action.payload };
        case LOGOUT_USER:
            return { ...state, user: null };
        case REGISTER_USER:
            return { ...state, loading: true };
        case REGISTER_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        default:
            return {...state};

    }
}