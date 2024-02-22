import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { FrappeProvider } from "frappe-react-sdk";
import { Home } from "./pages/Home";
function App() {
  return (
    <FrappeProvider>
      <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
        <Routes>
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </FrappeProvider>
  );
}

export default App;
