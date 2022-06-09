import React from "react";
import {SignUpContainer} from './SignUp.styles';
import {connect} from "react-redux";

import {emailSignUpStart} from '../../redux/user/user.actions';

import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    submitHandler = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        const {emailSignUpStart} = this.props;

        if (password !== confirmPassword) {
            alert('Passwords are different')
            return;
        }
        emailSignUpStart(email, password, displayName)
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <SignUpContainer>
                <h2>I don't have an account</h2>
                <form onSubmit={this.submitHandler}>
                    <FormInput onChange={this.handleChange} label='Display name' type='text' name='displayName'
                               value={displayName} required/>
                    <FormInput onChange={this.handleChange} label='Email' type='email' name='email' value={email}
                               required/>
                    <FormInput onChange={this.handleChange} label='Password' type='password' name='password'
                               value={password} required/>
                    <FormInput onChange={this.handleChange} label='Confirm password' type='password'
                               name='confirmPassword' value={confirmPassword}
                               required/>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    emailSignUpStart: (email, password, displayName) => dispatch(emailSignUpStart({email, password, displayName}))
})

export default connect(null, mapDispatchToProps)(SignUp);
