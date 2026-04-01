import { useLocation } from "react-router-dom";

function Welcome() {
  const location = useLocation();
  const loggedInUser = location.state?.user?.fullName || location.state?.user?.username;

  return (
    <div className="container">
      <h1>{loggedInUser ? `Welcome, ${loggedInUser}` : "Welcome"}</h1>
    </div>
  );
}

export default Welcome;
