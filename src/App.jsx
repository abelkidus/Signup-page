import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign_up from "./Sign_up";
import Log_in from "./Log_in";
import Welcome from "./welcome";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/Sign_up" element={<Sign_up />} /> */}
        <Route path="/Log_in" element={<Log_in />} />
        <Route path="/welcome" element={<Welcome />} />
        {<Route path="/" element={<Sign_up />} />}
      </Routes>
    </Router>
  );
}

export default App;
