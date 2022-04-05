import React from 'react';
import './SignIn.styles.scss';

import {auth} from "../../firebase/firebase.utils";

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

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        } catch (error) {
            if (error.message === 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).') {
                alert('Incorrect email or password')
                this.setState({
                    email: '',
                    password: ''
                })
            } else {
                console.log(error.message)
            }
        }
    }

    changeHandler = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
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
