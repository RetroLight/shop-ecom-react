import React from 'react';
import {SignInSignUpPageContainer} from './SignInPage.styles';

import SignIn from '../../components/sign-in/SignIn.component';
import SignUp from "../../components/sign-up/SignUp.component";

const SignInPage = () => {
    return(
        <SignInSignUpPageContainer>
            <SignIn/>
            <SignUp/>
        </SignInSignUpPageContainer>
    )
}

export default SignInPage;
