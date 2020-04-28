import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user-actions';
import './sign-in.styles.scss';
import { connect } from 'react-redux';

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
        const {emailSignIn} = this.props;

        try {
            emailSignIn(email, password);
            this.setState({
                email: '',
                password: ''
            });
        } catch(e) {
            console.error(e);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]: value});
    }

    render() {
        const {googleSignIn} = this.props;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' value={this.state.email} onChange={this.handleChange} label="E-mail" required></FormInput>
                    <FormInput type='password' name='password' value={this.state.password} onChange={this.handleChange} label="Password" required></FormInput>
                    
                    <div className="buttons">
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={googleSignIn} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    googleSignIn: () => dispatch(googleSignInStart()),
    emailSignIn: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);