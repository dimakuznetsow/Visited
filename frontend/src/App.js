import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Visas from "./pages/Visas";
import VisitedCountries from "./pages/VisitedCountries";
import LaunchPage from "./pages/LaunchPage";

import "./index.css";
import Footer from "./components/Footer";

function App() {
  const { user } = useAuthContext();
  const [visitedBefore, setVisitedBefore] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (visited) {
      setVisitedBefore(true);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={!visitedBefore ? <LaunchPage /> : <Visas />}
            />
            <Route path="/visas" element={<Visas />} />
            <Route
              path="/countries"
              element={user ? <VisitedCountries /> : <Visas />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/visas" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/visas" />}
            />
          </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
