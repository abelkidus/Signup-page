import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyForm() {
  return <App />;
}

createRoot(document.getElementById("root")).render(<MyForm />);
