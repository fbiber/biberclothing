import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user-actions';
import './sign-in.styles.scss';
import { connect } from 'react-redux';

const SignIn = ({googleSignIn, emailSignIn}) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''});
    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            emailSignIn(email, password);
            setUserCredentials({
                ...userCredentials,
                email: '',
                password: ''
            });
        } catch(e) {
            console.error(e);
        }
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setUserCredentials({...userCredentials, [name]: value});
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput type='email' name='email' value={email} onChange={handleChange} label="E-mail" required></FormInput>
                <FormInput type='password' name='password' value={password} onChange={handleChange} label="Password" required></FormInput>
                
                <div className="buttons">
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignIn} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    googleSignIn: () => dispatch(googleSignInStart()),
    emailSignIn: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);