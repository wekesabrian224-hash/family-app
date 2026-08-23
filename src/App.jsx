import { useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Gallery from "./pages/Gallery";

function App() {
  // Temporary local user
  // We will replace this with Supabase authentication later
  const [user, setUser] = useState(null);

  /*
    Temporary loading state.
    Supabase authentication will be added later.
  */
  const [loading, setLoading] = useState(false);

  // Loading screen
  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-symbol">✦</div>

          <h1>Our Family</h1>

          <p>Preparing your family space...</p>
        </div>
      </div>
    );
  }

  /*
    If nobody is logged in,
    show the login page.

    For now, Login.jsx can simply
    create a temporary local user.
  */
  if (!user) {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                onLogin={(loggedInUser) => {
                  setUser(loggedInUser);
                }}
              />
            }
          />

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }

  /*
    Main Family Hub
  */
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Family Dashboard */}
        <Route path="/" element={<Dashboard user={user} />} />

        {/* Family Gallery */}
        <Route path="/gallery" element={<Gallery user={user} />} />

        {/* Unknown pages */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
