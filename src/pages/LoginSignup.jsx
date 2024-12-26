import React from "react";
import "./CSS/LoginSignup.css";


const LoginSignup = ()=>{
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>sign up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p className="loginSignup-login" >Already have an account? <span>Login here</span></p>
                <div className="loginSignup-agree">
                    <input type="checkbox" />  
                    <p>I agree to the terms and conditions</p>
                </div>
            </div>
        </div>
    );
}   

export default LoginSignup;