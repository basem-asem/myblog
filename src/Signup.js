// src/App.js
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Signup = ({setLogedin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false); // State to switch between login and signup forms
    const history = useHistory()
  const auth = getAuth(); // Initialize Firebase Authentication

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        // Sign up
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Signed up successfully!", userCredential.user);
        setError(null);
        setIsSignUp(false);
      } else {
        // Login
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Logged in successfully!", userCredential.user);
        setError(null);
        history.push("/")
        setLogedin(true)
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>{isSignUp ? "Sign Up" : "Login"}</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p>
          {isSignUp
            ? "Already have an account? "
            : "Don't have an account? "}
          <span
            className="toggle-link"
            onClick={() => setIsSignUp((prev) => !prev)}
          >
            {isSignUp ? "Login here" : "Sign up here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;

