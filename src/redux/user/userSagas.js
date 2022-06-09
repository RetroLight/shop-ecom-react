import {all, call, takeLatest, put} from 'redux-saga/effects';

import userActionTypes from "./user.types";
import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    emailSignUpSuccessAC,
    emailSignUpFailure
} from "./user.actions";

import {auth, googleProvider, createUserProfileData, getCurrentUser} from "../../firebase/firebase.utils";

export function* getUserRef(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileData, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

export function* emailSignIn({payloads: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        console.log(user)
        yield getUserRef(user);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

function* googleSignIn() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getUserRef(user);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

function* emailSignUp({payloads: {email, password, displayName}}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(emailSignUpSuccessAC({user, additionalData: {displayName}}))
    } catch (error) {
        yield put(emailSignUpFailure(error))
    }
}

function* signInAfterSignUpSuccess({payloads: {user, additionalData}}) {
    yield getUserRef(user, additionalData)
}


export function* onCheckUserAuth() {
    try {
        const userAuth = yield getCurrentUser();
        console.log(userAuth)
        if (!userAuth) return;
        yield getUserRef(userAuth);
    } catch (error) {
        yield put(signInFailure(error.message))
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}


export function* emailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, emailSignIn)
}

export function* googleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, googleSignIn)
}

export function* emailSignUpStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_UP_START, emailSignUp)
}

export function* emailSignUpSuccess() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_UP_SUCCESS, signInAfterSignUpSuccess)
}

export function* signOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

export function* checkUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, onCheckUserAuth)
}

export function* userSaga() {
    yield all(
        [call(googleSignInStart),
            call(emailSignInStart),
            call(checkUserSession),
            call(signOutStart),
            call(emailSignUpStart),
            call(emailSignUpSuccess)]
    )
}
