import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await api.post('/user/login', { email, password });
      alert(res.data.message);
      localStorage.setItem('authToken', res.data.token);
      localStorage.setItem('authUser', JSON.stringify(res.data.user));
      navigate('/');
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0a0f 0%, #1a0a1f 50%, #0f0f1a 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "100px 24px 40px",
      position: "relative", overflow: "hidden",
    }}>

      {/* Background blobs */}
      <motion.div
        style={{
          position: "absolute", width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 70%)",
          top: "-100px", right: "-100px", borderRadius: "50%", pointerEvents: "none",
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: "absolute", width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(255,209,102,0.07) 0%, transparent 70%)",
          bottom: "0", left: "-50px", borderRadius: "50%", pointerEvents: "none",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "28px",
          padding: "48px 40px",
          width: "100%", maxWidth: "420px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          position: "relative",
        }}
      >

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <motion.div
            style={{
              width: "64px", height: "64px",
              background: "linear-gradient(135deg, #ff6b35, #ff4500)",
              borderRadius: "18px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "30px",
              margin: "0 auto 16px",
              boxShadow: "0 8px 30px rgba(255,107,53,0.4)",
            }}
            whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            🍅
          </motion.div>
          <h1 style={{ color: "#f0f0f5", fontSize: "26px", fontWeight: 800, marginBottom: "6px" }}>Welcome Back!</h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Error */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: "rgba(255,59,48,0.1)",
                border: "1px solid rgba(255,59,48,0.3)",
                borderRadius: "12px", padding: "12px 16px",
                color: "#ff6b6b", fontSize: "13px", marginBottom: "20px",
                display: "flex", alignItems: "center", gap: "8px",
              }}
            >
              ⚠️ {error}
            </motion.div>
          )}

          {/* Email */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "12px", fontWeight: 600, marginBottom: "8px", letterSpacing: "0.5px" }}>
              EMAIL
            </label>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", fontSize: "16px" }}>📧</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                style={{
                  width: "100%", padding: "14px 16px 14px 46px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "14px", color: "#fff", fontSize: "14px",
                  transition: "all 0.3s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(255,107,53,0.5)";
                  e.target.style.background = "rgba(255,107,53,0.05)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.1)";
                  e.target.style.background = "rgba(255,255,255,0.05)";
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div style={{ marginBottom: "24px" }}>
            <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "12px", fontWeight: 600, marginBottom: "8px", letterSpacing: "0.5px" }}>
              PASSWORD
            </label>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", fontSize: "16px" }}>🔒</span>
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                style={{
                  width: "100%", padding: "14px 46px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "14px", color: "#fff", fontSize: "14px",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(255,107,53,0.5)";
                  e.target.style.background = "rgba(255,107,53,0.05)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.1)";
                  e.target.style.background = "rgba(255,255,255,0.05)";
                }}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                style={{
                  position: "absolute", right: "14px", top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent", border: "none",
                  color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: "16px",
                }}
              >
                {showPass ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            style={{
              width: "100%", padding: "15px",
              background: loading ? "rgba(255,107,53,0.4)" : "linear-gradient(135deg, #ff6b35, #ff4500)",
              color: "#fff", border: "none", borderRadius: "14px",
              fontSize: "15px", fontWeight: 700, cursor: loading ? "not-allowed" : "pointer",
              boxShadow: loading ? "none" : "0 6px 25px rgba(255,107,53,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
            }}
            whileHover={!loading ? { scale: 1.02, boxShadow: "0 10px 35px rgba(255,107,53,0.5)" } : {}}
            whileTap={!loading ? { scale: 0.97 } : {}}
          >
            {loading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  style={{
                    width: "18px", height: "18px",
                    border: "2px solid rgba(255,255,255,0.3)",
                    borderTop: "2px solid #fff",
                    borderRadius: "50%",
                  }}
                />
                Signing in...
              </>
            ) : "Sign In 🚀"}
          </motion.button>
        </form>

        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "#ff6b35", fontWeight: 600, textDecoration: "none" }}>
              Create one →
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
