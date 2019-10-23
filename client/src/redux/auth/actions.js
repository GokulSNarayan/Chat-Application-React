import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    SET_USER_DATA,
    SET_SOCKET_DATA,
    LOGIN_USER_FAILED,
} from '../actions';
import { actionChannel } from 'redux-saga/effects';

export const loginUser = (user, history) => ({
    type: LOGIN_USER,
    payload: { user, history }
});

export const loginUserSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    payload: user
});

export const loginUserFailed = () => ({
    type: LOGIN_USER_FAILED,
});

export const logoutUser = (history) => ({
    type: LOGOUT_USER,
    payload: { history }
});

export const registerUser = (user, history) => ({
    type: REGISTER_USER,
    payload: { user, history }
});

export const registerUserSuccess = (user) => ({
    type: REGISTER_USER_SUCCESS,
    payload: user
});

export const setUserData = (user) => ({
    type: SET_USER_DATA,
    payload: user
});

export const setSocketData = (socket) => ({
    type: SET_SOCKET_DATA,
    payload: socket
});

export const getUserDataSuccess = (user) => ({
    type: SET_SOCKET_DATA,
    payload: user
});
