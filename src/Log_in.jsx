import { useNavigate } from "react-router-dom";
import "./Log_in.css";

const username = "admin";
const password = "1012";

function Log_in() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredUsername = e.target.username.value;
    const enteredPassword = e.target.password.value;
    if (enteredUsername === username && enteredPassword === password) {
      navigate("/welcome");
      console.log("Login successful");
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <div class="container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <label for="username">Enter username: </label>
        <input type="text" name="username" id="" required placeholder="" />
        <br />

        <label for="password">Enter password: </label>
        <input type="password" name="password" id="" required placeholder="" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Log_in;
