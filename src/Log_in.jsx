import { useNavigate } from "react-router-dom";

function Log_in() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate("/welcome");
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
    </div>
  );
}

export default Log_in;
