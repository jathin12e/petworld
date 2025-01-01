import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import './login.css'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to Home page
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div style={styles.container}>
      
      {error && <p style={styles.error}>{error}</p>}
      <div className="login-position">
        <img src="images/images (4).jpeg" height={300} style={{paddingRight:"10px"}} className="image-position"/>
        <form onSubmit={handleLogin} style={styles.form }>
          <h2 style={{textDecoration:"underline"}}>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}> 
            Login
          </button>
          <p>create an acc?&nbsp;<Link to='/register'>register</Link></p>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: "700px", margin: "50px auto", textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "10px", fontSize: "16px" },
  button: { padding: "10px", fontSize: "16px", background: "blue", color: "white", border: "none" },
  error: { color: "red" },
};

export default Login;
