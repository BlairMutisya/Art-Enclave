import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import * as Components from '../components/LoginComponents';

const LoginRegisterPage = () => {
    const navigate = useNavigate();
    const [signIn, toggle] = useState(true);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [signUpData, setSignUpData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleSignUp = async () => {
        try {
            await Axios.post("http://localhost:3000/user-data", signUpData);
            alert("Sign up successful!");
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };

    const handleLogin = async () => {
        try {
            await Axios.post("http://localhost:3000/user-data", loginData);
            alert(`Welcome to Art Enclave!`);
            navigate("/collection");
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    const handleSignUpChange = (e) => {
        const { name, value } = e.target;
        setSignUpData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <Components.Container>
            {/* Sign Up Form */}
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input
                        type="text"
                        name="name"
                        value={signUpData.name}
                        onChange={handleSignUpChange}
                        placeholder="Name"
                    />
                    <Components.Input
                        type="email"
                        name="email"
                        value={signUpData.email}
                        onChange={handleSignUpChange}
                        placeholder="Email"
                    />
                    <Components.Input
                        type="password"
                        name="password"
                        value={signUpData.password}
                        onChange={handleSignUpChange}
                        placeholder="Password"
                    />
                    <Components.Button onClick={handleSignUp}>
                        Sign Up
                    </Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            {/* Sign In Form */}
            <Components.SignInContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Sign in</Components.Title>
                    <Components.Input
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        placeholder="Email"
                    />
                    <Components.Input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        placeholder="Password"
                    />
                    <Components.Anchor href="#">
                        Forgot your password?
                    </Components.Anchor>
                    <Components.Button onClick={handleLogin} type="button">
                        Sign In
                    </Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            {/* Overlay */}
            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>
                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                             Stay turned for more!    
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>
                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Picasso!</Components.Title>
                        <Components.Paragraph>
                            Start your Art journey with us..
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
