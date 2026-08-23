import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    /*
      TEMPORARY LOGIN

      We are not using Supabase yet.

      Any email and password will allow
      you to enter the Family Hub.

      Later we will replace this with
      real authentication.
    */

    const temporaryUser = {
      email: email,
      name: "Family Member",
    };

    onLogin(temporaryUser);

    navigate("/");
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-label">Private Family Space</div>

        <h1>Welcome Home</h1>

        <p className="login-subtitle">
          Sign in to enter the family hub and explore your memories together.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          {/* EMAIL */}

          <div className="input-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          {/* PASSWORD */}

          <div className="input-group">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          {/* LOGIN BUTTON */}

          <button type="submit" className="login-button">
            Enter Family Hub
          </button>
        </form>

        <div className="login-footer">Memories • Family • Together</div>
      </section>
    </main>
  );
}

export default Login;
