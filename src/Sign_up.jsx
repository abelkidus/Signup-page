import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Sign_up() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName: e.target.fullname.value,
      username: e.target.username.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      address: e.target.address.value,
      birthDate: e.target.bday.value,
      password: e.target.password.value,
    };

    try {
      const response = await fetch("http://localhost:5000/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate("/Log_in");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Could not connect to the server");
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Enter full name: </label>
        <input type="text" name="fullname" id="fullname" />
        <br />

        <label htmlFor="username">Enter username: </label>
        <input type="text" name="username" id="username" />
        <br />

        <label htmlFor="phone">Enter phone number: </label>
        <input type="text" name="phone" id="phone" />
        <br />

        <label htmlFor="email">Enter email: </label>
        <input type="email" name="email" id="email" />
        <br />

        <label htmlFor="address">Enter address: </label>
        <input type="text" name="address" id="address" />
        <br />

        <label htmlFor="bday">Enter your birthdate: </label>
        <input type="date" name="bday" id="bday" />
        <br />

        <label htmlFor="password">Enter password: </label>
        <input type="password" name="password" id="password" />
        <br />

        {/* <button type="submit">Submit</button> */}
        <Button type="submit">Submit</Button>
      </form>

      <p>
        Already have an account? <Link to="/Log_in">Log in here</Link>
      </p>
    </div>
  );
}

export default Sign_up;
