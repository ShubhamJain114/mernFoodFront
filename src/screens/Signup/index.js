import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";
import "./style.css";
import Navbar from "../../components/Navbar";
export default function Signup() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!credentials.name || !credentials.email || !credentials.password || !credentials.geolocation) {
      alert("Please fill in all the fields");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("https://mern-food-fpmn.onrender.com/api/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation,
        }),
      });

      if (response.ok) {
        const json = await response.json();
        // console.log(json);
        if (json.success) {
          setSuccessMessage("User created successfully!");
          setTimeout(() => {
            setSuccessMessage(null);
            navigate("/");
          }, 2000);
        } else {
          setError("Invalid Credentials");
          alert("Enter valid Credentials");
        }
      } else {
        console.error("Failed to create user");
        setError("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
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
    <Navbar />
    </div>
      {loading && (
        <div className="loading-screen" id="loadingScreen">
          <RingLoader size={150} color={"#36D7B7"} loading={loading} className="spinner" />
        </div>
      )}
      <div className="signup-container">
      <div className="sign-up" id="signupForm">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              value={credentials.name}
              id="name"
              onChange={onChange}
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              id="email"
              onChange={onChange}
              className="input-field"
            />
            <div id="email-note" className="note">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              id="password"
              onChange={onChange}
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="address">Address: </label>
            <input
              type="input"
              name="geolocation"
              value={credentials.geolocation}
              id="address"
              onChange={onChange}
              className="input-field"
            />
          </div>
          <button type="submit" disabled={loading} className="submit-button">
            {loading ? "Submitting..." : "Submit"}
          </button>
          <Link to="/login" className="login-link">
            Already a user
          </Link>
          {error && <div className="error-message">{error}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}
        </form>
      </div>
      </div>
    </>
  );
}


