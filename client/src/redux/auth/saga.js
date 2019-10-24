import io from 'socket.io-client';
import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { API_URL, SOCKET_URL } from '../../constants/defaultValues';
import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import swal from 'sweetalert';
import {
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER
} from '../actions';
import {
    loginUserSuccess,
    loginUserFailed,
    setUserData,
    setSocketData,
    registerUserSuccess,
    registerUser
} from './actions'

const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
}

var socket = {};

const getSocket = (url) => {
    return io(url)
};


function* loginWithEmailPassword({ payload }) {
    const { user: { email, password }, history } = payload;
    console.log("History======>>", payload)
    try {
        let result = yield axios.post(`${API_URL}/users/login`, { email, password })
        if (result.data.status == 1) {
            console.log("data========>>>", result)
            localStorage.setItem('token', result.data.token);
            try {
                socket = getSocket(SOCKET_URL);
                console.log("Socket")
                yield put(setSocketData(socket))
                let userData = yield axios.post(`${API_URL}/users/getUserDetails`, {}, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': result.data.token
                    }
                })
                let user = userData.data.result;
                yield put(setUserData(user));
                // console.log("Userdata",user)
                socket.emit('new user', user.user_name)
            }
            catch (err) {
                console.log("Error while getting user data", err)
            }
            yield put(loginUserSuccess(result.data.token));
            history.push('/');
        } else {
            yield put(loginUserFailed())
            // toastr.error('Login', 'Invalid credentials');
            swal("Login Failed!", result.data.message, "error", {
                buttons: false,
                timer: 2000
            });
        }
    }
    catch (err) {
        console.log("error", err);
    }
}

function* logout({ payload }) {
    console.log("payload at logout", payload)
    const { history, user_name, id } = payload;
    yield localStorage.removeItem('token');
    socket.emit('user left', id, user_name)
    history.push('/')
}

function* registerWithEmailPassword({ payload }) {
    const { user, history } = payload;
    console.log("handle Register saga", history)
    if (user) {
        try {
            let result = yield axios.post(`${API_URL}/users/register`, {
                user_name: user.user_name,
                email: user.email,
                password: user.password
            });
            console.log("result at register===>>", result);
            if (result.data.status == 1) {
                yield put(registerUser("success"))
                // history.push('/');
            }
        }
        catch (err) {
            console.log("Error at register saga", err)
        }
    }
}


export function* watchRegisterUser() {
    yield takeEvery(REGISTER_USER, registerWithEmailPassword);
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
        fork(watchRegisterUser),
    ])
}