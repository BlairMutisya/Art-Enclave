import React, { useState } from "react";
import Axios from 'axios'; // Import Axios
import * as Components from '../components/LoginComponents'; // Import styled components

const LoginRegisterPage = () => {
    const [signIn, toggle] = useState(true);
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    // Function to handle login action
// Function to handle login action
// Function to handle login action
const handleLogin = async () => {
    try {
        // Make POST request to the userdata endpoint
        const response = await Axios.post('http://localhost:3000/user-data', loginData);
        
        // Extract user data from the response
        const userData = response.data;
        
        // Display alert with user's name and login successful message
        alert(`Welcome, ${userData.name}! Login successful.`);
        
        // Redirect user to the home page
        window.location.href = '/'; // Change the URL to the home page
        
    } catch (error) {
        console.error('Error logging in:', error);
    }
};


    // Function to handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <Components.Container>
            {/* Login Form */}
            <Components.SignInContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Sign in</Components.Title>
                    <Components.Input type='email' name="email" value={loginData.email} onChange={handleChange} placeholder='Email' />
                    <Components.Input type='password' name="password" value={loginData.password} onChange={handleChange} placeholder='Password' />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.Button onClick={handleLogin}>Sign In</Components.Button> {/* Call handleLogin function on button click */}
                </Components.Form>
            </Components.SignInContainer>

            {/* Registration Form */}
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input type='text' placeholder='Name' />
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Button>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            {/* Overlay */}
            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>
                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                            Connected with us by signing In
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>
                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </Components.GhostButton> 
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
};

export default LoginRegisterPage;
