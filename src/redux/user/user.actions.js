import userActionTypes from "./user.types";

export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = ({email, password}) => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payloads: {email, password}
})

export const emailSignUpStart = userData => ({
    type: userActionTypes.EMAIL_SIGN_UP_START,
    payloads: userData
})
export const emailSignUpSuccessAC = ({user, additionalData}) => ({
    type: userActionTypes.EMAIL_SIGN_UP_SUCCESS,
    payloads: {user, additionalData}

})
export const emailSignUpFailure = (error) => ({
    type: userActionTypes.EMAIL_SIGN_UP_FAILURE,
    payloads: error

})

export const signInSuccess = user => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payloads: user
});

export const signInFailure = error => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payloads: error
})

export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS,
    payloads: null
})

export const signOutFailure = error => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payloads: error
})

