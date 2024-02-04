import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa"; // Import the spinner icon

import "./style.css"; // Import your CSS file for additional styling
import Navbar from "../../components/Navbar";

export default function Login() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("https://mern-food-fpmn.onrender.com/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      // console.log(json);
      if (!json.success) {
        setError("Invalid Credentials");
        alert("Enter valid Credentials");
      }
      if (json.success) {
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        // console.log(localStorage.getItem("authToken"));
        navigate("/");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    setError(null);
  };

  return (
    <>
    <div className="nav-c">
    <Navbar/>
    </div>
    <div className="login">
      <div className="login-container">
        {loading && (
          <div className="loading-overlay">
            <FaSpinner className="loading-icon" />
          </div>
        )}

        {error && <div className="error-message">{error}</div>}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="label">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              id="email"
              onChange={onChange}
              className="input"
            />
            <div id="email-note" className="note">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              id="password"
              onChange={onChange}
              className="input"
            />
          </div>

          <button type="submit" disabled={loading} className="submit-button">
            Submit
          </button>
          <Link to="/signup" className="new-user-link">
            I'm a new user
          </Link>
        </form>
      </div>
      </div>
    </>
  );
}




