import React from 'react';
import './SignIn.styles.scss';

import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    changeHandler = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label='Email' onChange={this.changeHandler} name='email' type='email' value={this.state.email} required/>
                    <FormInput label='Password' onChange={this.changeHandler} name='password' type='password' value={this.state.password} required/>
                    <div className='btn-group'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} googleBtn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
