import io from 'socket.io-client';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { API_URL, SOCKET_URL } from '../../constants/defaultValues';
import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import {
    LOGIN_USER,
    LOGOUT_USER,
} from '../actions';
import {
    loginUserSuccess,
    loginUserFailed,
    setUserData,
    setSocketData
} from './actions'

const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
}

const socket = io(`${SOCKET_URL}`);
    


function* loginWithEmailPassword({ payload }) {
    const { user: { email, password }, history } = payload;
    console.log("History======>>", payload)
    try {
        let result = yield axios.post(`${API_URL}/users/login`, { email, password })
        if (result.data.status == 1) {
            console.log("data========>>>", result)
            localStorage.setItem('token', result.data.token);
            try {
            // let socket = getSocket();
            console.log("Socket")
            yield put(setSocketData(socket))
            let userData = yield axios.post(`${API_URL}/users/getUserDetails`, {}, {headers:{
                'Content-Type': 'application/json',
                'Authorization': result.data.token
            }})
            let user = userData.data.result;
            yield put(setUserData(user));
            // console.log("Userdata",user)
            socket.emit('new user', user.user_name)
        }
        catch(err){
            console.log("Error while getting user data",err)
        }
            yield put(loginUserSuccess(result.data.token));
            history.push('/');
        } else {
            yield put(loginUserFailed())
            toastr.error('Login', 'Invalid credentials');
        }
    }
    catch (err) {
        console.log("error", err);
    }
}

function* logout(payload) {
    const { history } = payload;
    yield localStorage.removeItem('token');
    history.push('/')
}

function* getUserData() {

}

export function* watchGetUserData() {
    yield takeEvery(LOGIN_USER, getUserData);
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