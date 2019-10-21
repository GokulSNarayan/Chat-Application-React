import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { API_URL } from '../../constants/defaultValues';
import axios from 'axios';

import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    REGISTER_USER,
    REGISTER_USER_SUCCESS
} from '../actions';


import {
    loginUser,
    loginUserSuccess,
    logoutUser,
    registerUser,
    registerUserSuccess
} from './actions'


function* loginWithEmailPassword({ payload }) {
    const { user: { email, password }, history } = payload;
    console.log("History======>>", payload)
    try {
        let result = yield axios.post(`${API_URL}/users/login`, { email, password })
        if (result.data.status == 1) {
            console.log("data========>>>", result)
            localStorage.setItem('token', result.data.token);
            yield put(loginUserSuccess(result.data.token));
            history.push('/');
        } else {
            alert("Login Failed")
        }
    }
    catch (err) {
        console.log("error", err);
    }
}

function* logout(payload){
    const {history} = payload;
    yield localStorage.removeItem('token');
    history.push('/')
}

export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

export function* watchLogoutUser() {
    yield takeEvery(LOGOUT_USER, logout);
}

export default function* rootSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchLogoutUser),
    ])
}