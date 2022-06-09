import React from 'react';
import {connect} from "react-redux";
import {SignInContainer, BtnGroup} from './SignIn.styles';

import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';

import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        const {emailSignInStart} = this.props;
        emailSignInStart(email, password);
    }

    changeHandler = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        const {googleSignInStart} = this.props;
        return(
            <SignInContainer>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label='Email' onChange={this.changeHandler} name='email' type='email' value={this.state.email} required/>
                    <FormInput label='Password' onChange={this.changeHandler} name='password' type='password' value={this.state.password} required/>
                    <BtnGroup>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} googleBtn>Sign in with Google</CustomButton>
                    </BtnGroup>
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);
