import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Visas from "./pages/Visas";
import VisitedCountries from "./pages/VisitedCountries";

import "./index.css";

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route path="/check-for-visa" element={<Visas />} />
            <Route path="/" element={user ? <VisitedCountries /> : <Visas />} />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
