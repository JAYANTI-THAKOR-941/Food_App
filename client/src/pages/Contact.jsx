import React, { useState } from "react";
import { motion } from "framer-motion";

const contactCards = [
  { icon: "📍", title: "Our Address", value: "123 Food Street, Mumbai, MH 400001", color: "#ff6b35" },
  { icon: "📞", title: "Phone Number", value: "+91 98765 43210", color: "#06d6a0" },
  { icon: "📧", title: "Email Address", value: "hello@deliciousdrop.in", color: "#ffd166" },
  { icon: "⏰", title: "Working Hours", value: "Mon – Sun: 9:00 AM – 11:00 PM", color: "#a29bfe" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  const inputStyle = {
    width: "100%", padding: "14px 18px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "14px", color: "#fff", fontSize: "14px",
    fontFamily: "Poppins, sans-serif",
    transition: "all 0.3s",
  };

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", paddingBottom: "80px" }}>

      {/* HERO */}
      <div style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #1a0a1f 100%)",
        padding: "80px 24px 70px", textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 60% 40%, rgba(255,107,53,0.08), transparent 70%)", pointerEvents: "none" }} />
        <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          style={{ display: "inline-block", background: "rgba(255,107,53,0.12)", border: "1px solid rgba(255,107,53,0.25)", color: "#ff9a6b", padding: "6px 18px", borderRadius: "100px", fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>
          Get In Touch
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#f0f0f5", letterSpacing: "-1px", marginBottom: "14px" }}>
          Contact <span style={{ background: "linear-gradient(135deg, #ff6b35, #ffd166)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Us 💬</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem", maxWidth: "500px", margin: "0 auto" }}>
          Have a question or feedback? We'd love to hear from you. Our team responds within 24 hours.
        </motion.p>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px 0" }}>

        {/* CONTACT CARDS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "60px" }}>
          {contactCards.map((c, i) => (
            <motion.div key={c.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              style={{ background: "linear-gradient(145deg, #12121a, #1a1a25)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "28px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{c.icon}</div>
              <h4 style={{ color: c.color, fontSize: "12px", fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "8px" }}>{c.title}</h4>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1.6 }}>{c.value}</p>
            </motion.div>
          ))}
        </div>

        {/* FORM + MAP */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>

          {/* FORM */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            style={{ background: "linear-gradient(145deg, #12121a, #1a1a25)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "24px", padding: "40px" }}>
            <h2 style={{ color: "#f0f0f5", fontSize: "22px", fontWeight: 800, marginBottom: "28px" }}>Send a Message ✉️</h2>

            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "4rem", marginBottom: "16px" }}>🎉</div>
                <h3 style={{ color: "#06d6a0", fontSize: "20px", fontWeight: 700, marginBottom: "10px" }}>Message Sent!</h3>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px" }}>We'll get back to you within 24 hours.</p>
                <motion.button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  style={{ marginTop: "24px", padding: "10px 24px", background: "rgba(6,214,160,0.15)", border: "1px solid rgba(6,214,160,0.3)", color: "#06d6a0", borderRadius: "100px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}
                  whileHover={{ background: "rgba(6,214,160,0.25)" }}>
                  Send Another
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  {["name", "email"].map((field) => (
                    <div key={field}>
                      <label style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "6px" }}>{field}</label>
                      <input type={field === "email" ? "email" : "text"} name={field} value={form[field]} onChange={handleChange} placeholder={field === "name" ? "Your name" : "you@example.com"} required style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(255,107,53,0.5)"; e.target.style.background = "rgba(255,107,53,0.04)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.background = "rgba(255,255,255,0.05)"; }} />
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "6px" }}>Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" required style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "rgba(255,107,53,0.5)"; e.target.style.background = "rgba(255,107,53,0.04)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.background = "rgba(255,255,255,0.05)"; }} />
                </div>
                <div>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "6px" }}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us more..." required rows={5}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "130px" }}
                    onFocus={(e) => { e.target.style.borderColor = "rgba(255,107,53,0.5)"; e.target.style.background = "rgba(255,107,53,0.04)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.background = "rgba(255,255,255,0.05)"; }} />
                </div>
                <motion.button type="submit" disabled={loading}
                  style={{ padding: "14px", background: "linear-gradient(135deg, #ff6b35, #ff4500)", color: "#fff", border: "none", borderRadius: "14px", fontSize: "14px", fontWeight: 700, cursor: "pointer", boxShadow: "0 6px 25px rgba(255,107,53,0.35)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  {loading ? (<><motion.div animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} style={{ width: "18px", height: "18px", border: "2px solid rgba(255,255,255,0.3)", borderTop: "2px solid #fff", borderRadius: "50%" }} />Sending...</>) : "Send Message 🚀"}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* MAP / INFO */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ background: "linear-gradient(145deg, #12121a, #1a1a25)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "24px", overflow: "hidden", height: "280px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "4rem" }}>🗺️</div>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "14px" }}>123 Food Street, Mumbai, India</p>
              <motion.a href="https://maps.google.com" target="_blank" rel="noreferrer"
                style={{ padding: "10px 24px", background: "rgba(255,107,53,0.15)", border: "1px solid rgba(255,107,53,0.3)", color: "#ff9a6b", borderRadius: "100px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}
                whileHover={{ background: "rgba(255,107,53,0.25)" }}>
                View on Google Maps →
              </motion.a>
            </div>

            <div style={{ background: "linear-gradient(145deg, #12121a, #1a1a25)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "24px", padding: "28px" }}>
              <h3 style={{ color: "#f0f0f5", fontWeight: 700, fontSize: "16px", marginBottom: "16px" }}>Quick FAQ</h3>
              {[
                { q: "How fast is delivery?", a: "Average delivery time is 30–45 minutes." },
                { q: "Can I track my order?", a: "Yes! Real-time tracking is available in the app." },
                { q: "What's the return policy?", a: "Full refund if order is wrong or damaged." },
              ].map((faq, i) => (
                <div key={i} style={{ marginBottom: i < 2 ? "16px" : 0, paddingBottom: i < 2 ? "16px" : 0, borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                  <p style={{ color: "#f0f0f5", fontSize: "13px", fontWeight: 600, marginBottom: "4px" }}>❓ {faq.q}</p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
};

export default Contact;
