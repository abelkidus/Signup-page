import { Link, useNavigate } from "react-router-dom";
import "./Sign_up.css";

function Sign_up() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/welcome");
    console.log("Sign up successful");
  };

  return (
    <div class="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label for="fullname">Enter full name: </label>
        <input type="text" name="fullname" id="" required placeholder="" />
        <br />

        <label for="phone">Enter phone number: </label>
        <input type="number" name="phone" id="" required placeholder="" />
        <br />

        <label for="email">Enter email: </label>
        <input type="email" name="email" id="" required placeholder="" />
        <br />

        <label for="address">Enter address: </label>
        <input type="text" name="address" id="" required placeholder="" />
        <br />

        <label for="bday">Enter your birthdate: </label>
        <input type="date" name="bday" id="" required placeholder="" />
        <br />

        <label for="password">Enter password: </label>
        <input type="password" name="password" id="" required placeholder="" />
        <br />

        <button type="submit">Submit</button>
      </form>
      <p>
        Already have an account? <Link to="/Log_in">Log in here</Link>
      </p>
    </div>
  );
}

export default Sign_up;
