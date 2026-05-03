import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import api from '../services/api';

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  const handleVerify = async () => {
    if (!otp.trim()) { setError("Please enter the OTP."); return; }
    setLoading(true);
    setError("");
    try {
      const res = await api.post('/user/verifyOtp', { email, otp });
      alert(res.data.message);
      navigate('/login');
    } catch (err) {
      setError(err?.response?.data?.message || "Invalid OTP. Please try again.");
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

      <motion.div
        style={{
          position: "absolute", width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(162,155,254,0.08) 0%, transparent 70%)",
          top: "-100px", right: "-100px", borderRadius: "50%", pointerEvents: "none",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
          width: "100%", maxWidth: "400px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          textAlign: "center",
        }}
      >

        <motion.div
          style={{
            width: "80px", height: "80px",
            background: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
            borderRadius: "22px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "36px",
            margin: "0 auto 24px",
            boxShadow: "0 8px 30px rgba(162,155,254,0.35)",
          }}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          📬
        </motion.div>

        <h1 style={{ color: "#f0f0f5", fontSize: "26px", fontWeight: 800, marginBottom: "10px" }}>
          Verify Your Email
        </h1>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", lineHeight: 1.7, marginBottom: "32px" }}>
          We've sent a 6-digit OTP to<br />
          <strong style={{ color: "#a29bfe" }}>{email || "your email"}</strong>
        </p>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: "rgba(255,59,48,0.1)", border: "1px solid rgba(255,59,48,0.3)",
              borderRadius: "12px", padding: "12px 16px",
              color: "#ff6b6b", fontSize: "13px", marginBottom: "20px",
            }}
          >
            ⚠️ {error}
          </motion.div>
        )}

        <input
          type="text"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
          placeholder="• • • • • •"
          style={{
            width: "100%", padding: "18px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px", color: "#fff",
            fontSize: "28px", fontWeight: 700,
            textAlign: "center", letterSpacing: "12px",
            marginBottom: "24px",
          }}
          onFocus={(e) => { e.target.style.borderColor = "rgba(162,155,254,0.5)"; e.target.style.background = "rgba(162,155,254,0.05)"; }}
          onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
        />

        <motion.button
          onClick={handleVerify}
          disabled={loading}
          style={{
            width: "100%", padding: "15px",
            background: loading ? "rgba(162,155,254,0.3)" : "linear-gradient(135deg, #a29bfe, #6c5ce7)",
            color: "#fff", border: "none", borderRadius: "14px",
            fontSize: "15px", fontWeight: 700,
            cursor: loading ? "not-allowed" : "pointer",
            boxShadow: loading ? "none" : "0 6px 25px rgba(162,155,254,0.35)",
            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
          }}
          whileHover={!loading ? { scale: 1.02 } : {}}
          whileTap={!loading ? { scale: 0.97 } : {}}
        >
          {loading ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                style={{ width: "18px", height: "18px", border: "2px solid rgba(255,255,255,0.3)", borderTop: "2px solid #fff", borderRadius: "50%" }}
              />
              Verifying...
            </>
          ) : "Verify OTP ✅"}
        </motion.button>

        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px", marginTop: "20px" }}>
          Didn't receive the code?{" "}
          <span style={{ color: "#a29bfe", cursor: "pointer", fontWeight: 600 }}>Resend</span>
        </p>
      </motion.div>
    </div>
  );
};

export default VerifyOtp;