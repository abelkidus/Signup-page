import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

function Log_in() {
  const navigate = useNavigate();

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const credential = credentialResponse?.credential;

      if (!credential) {
        alert("Google login failed: missing credential");
        return;
      }

      const response = await fetch("http://localhost:5000/users/google-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ credential }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate("/welcome", { state: { user: data.user } });
      } else {
        alert(data.message || "Google login failed");
      }
    } catch (error) {
      console.error("Google login error:", error);
      alert("Could not connect to the server for Google login");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    try {
      const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate("/welcome", { state: { user: data.user } });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Could not connect to the server");
    }
  };

  return (
    <div className="container">
      <h2>Log In</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter username: </label>
        <input type="text" name="username" id="username" required />
        <br />

        <label htmlFor="password">Enter password: </label>
        <input type="password" name="password" id="password" required />
        <br />

        <button type="submit">Submit</button>
      </form>
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={() => {
          console.log("Loggin failed");
          alert("Google login failed. Please try again.");
        }}
      />

      <p>
        Don't have an account? <Link to="/">Sign up here</Link>
      </p>
    </div>
  );
}

export default Log_in;
