import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function MyForm() {
  return (
    <GoogleOAuthProvider clientId={client_id}>
      <App />
    </GoogleOAuthProvider>
  );
}

createRoot(document.getElementById("root")).render(<MyForm />);
