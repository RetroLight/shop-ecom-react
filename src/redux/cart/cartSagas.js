import {all, call, put, takeLatest} from "redux-saga/effects";
import {clearCartAC} from "./cart.actions";
import userActionTypes from "../user/user.types";


export function* clearCart() {
    yield put(clearCartAC());
}

export function* signOutSuccess() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCart);
}

export function* cartSaga() {
    yield all([call(signOutSuccess)]);
}
