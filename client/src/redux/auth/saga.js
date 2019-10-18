import { all, call, fork, put, takeEvery } from 'redux-saga/effects';


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


function* loginWithEmailPassword({payload}){
    console.log("Saga working")
} 

export function* watchLoginUser(){
    yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

export default function* rootSaga(){
    yield all([
        fork(watchLoginUser),
    ])
}