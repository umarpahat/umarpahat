import { call, put, takeEvery } from "redux-saga/effects";
import { storeToken, appLogout, storeError } from "./actions";
import { HITLOGIN, HITLOGOUT, HITFORGOTMPIN } from '../types'
import { getLoginToken } from "./api";

function* getToken(action) {
    try {
        const data = yield call(getLoginToken, action.payload);
        console.log(data)
        if (data.data.error) {
            console.log(data.data.error)
            yield put(storeError({error: data.data.error}));
        } else {
            yield put(storeToken({token:data.data.data.token, phone_number: action.payload.phone_number}));
        }
    } catch (e) {
        console.log(e);
    }
}

function* getTokenForgotMpin(action) {
    try {
        console.log("check my action man baby")
        console.log(action)
        console.log("teret teret teret")
        yield put(storeToken({token:action.payload.token, phone_number: action.payload.phone_number}))
    } catch (e) {
        console.log(e);
    }
}

function* expireToken(action) {
    try {
        // do api call
        // const data = yield call(getLoginToken);
        yield put(appLogout());
    } catch (e) {
        console.log(e);
    }
}

export function* watchLogin() {
    yield takeEvery(HITLOGIN, getToken);
}

export function* watchLogout() {
    yield takeEvery(HITLOGOUT, expireToken);
}

export function* watchForgotMpin() {
    yield takeEvery(HITFORGOTMPIN, getTokenForgotMpin);
}