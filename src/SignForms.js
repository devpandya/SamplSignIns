import ReactDOM from "react-dom";
import React, { useState } from "react";
import "./App.css";

const SignForms = () => {
  const [containerActive, setContainerActive] = useState(false);
  const signUpButton = () => {
    setContainerActive(true);
  };
  const signInButton = () => {
    setContainerActive(false);
  };

  return (
    <div className="signForms">
      <div
        className={`container ${containerActive && "right-panel-active"}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action="#">
            <h1 className="font-effect-anaglyph">Create Account</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="signup">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1 className="font-effect-anaglyph">Sign in</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button className="signin">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="font-effect-3d">Come On!</h1>
              <p className="font-effect-emboss">Start Your Journey With Us</p>
              <button className="ghost" onClick={signInButton} id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="font-effect-3d">No Account?</h1>
              <p className="font-effect-emboss">
                No Problem! Just Sign Up Here
              </p>
              <button className="ghost " onClick={signUpButton} id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignForms;
