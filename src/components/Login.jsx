import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      onLogin(email); // Tell App.jsx that user logged in
    } else {
      alert("Please enter an email");
    }
  };

  return (
    <div id="login-view">
      <div className="login-card">
        <h1>Style Store</h1>
        <p>Create an account</p>
        <br />
        <div className="input-group">
          <label>Email or mobile phone number</label>
          <input 
            type="text" 
            placeholder="Enter email" 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="At least 6 characters" />
        </div>
        <button className="btn login-btn" onClick={handleSubmit}>Continue</button>
        <div className="divider"><span>OR</span></div>
        <button className="btn phone-btn"><i className="fas fa-mobile-alt"></i> Login with Phone Number</button>
      </div>
    </div>
  );
};

export default Login;