import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginAdmin.css"; // ✅ Import CSS file

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/admin/login/", { email, password });
      localStorage.setItem("token", response.data.access);
      navigate("/admin/books");
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} className="admin-login-form">
        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default LoginAdmin;
