import React from "react";
import { motion } from "framer-motion";

const team = [
  { name: "Arjun Mehta", role: "Founder & CEO", emoji: "👨‍💼", color: "#ff6b35" },
  { name: "Priya Sharma", role: "Head of Operations", emoji: "👩‍💼", color: "#06d6a0" },
  { name: "Rahul Verma", role: "Lead Chef Partner", emoji: "👨‍🍳", color: "#ffd166" },
  { name: "Aisha Khan", role: "UX & Design Lead", emoji: "👩‍🎨", color: "#a29bfe" },
];

const values = [
  { icon: "❤️", title: "Passion for Food", desc: "Every dish carries the love and craft of expert chefs dedicated to their art.", color: "#ff6b35" },
  { icon: "🌿", title: "Fresh Always", desc: "We source only the freshest, highest-quality ingredients — no compromises.", color: "#06d6a0" },
  { icon: "🤝", title: "Community First", desc: "We support local restaurants and farms, building a stronger food ecosystem.", color: "#ffd166" },
  { icon: "⚡", title: "Speed & Reliability", desc: "30-minute delivery guarantee backed by real-time logistics.", color: "#a29bfe" },
];

const About = () => (
  <div style={{ background: "#0a0a0f", minHeight: "100vh", paddingBottom: "80px" }}>

    {/* HERO */}
    <div style={{ background: "linear-gradient(135deg, #0a0a0f, #1a0a1f)", padding: "80px 24px 70px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 40% 60%, rgba(6,214,160,0.07), transparent 70%)", pointerEvents: "none" }} />
      <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        style={{ display: "inline-block", background: "rgba(6,214,160,0.12)", border: "1px solid rgba(6,214,160,0.25)", color: "#06d6a0", padding: "6px 18px", borderRadius: "100px", fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>
        Our Story
      </motion.span>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#f0f0f5", letterSpacing: "-1px", marginBottom: "14px" }}>
        About <span style={{ background: "linear-gradient(135deg, #ff6b35, #ffd166)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>DeliciousDrop 🍅</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem", maxWidth: "560px", margin: "0 auto" }}>
        Born from a love of great food — we set out to change how India eats.
      </motion.p>
    </div>

    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px 0" }}>

      {/* STORY */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", marginBottom: "80px", alignItems: "center" }}>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#f0f0f5", marginBottom: "20px" }}>
            Redefining Food Delivery, One Meal at a Time
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.8, marginBottom: "16px" }}>
            DeliciousDrop started in 2020 with a simple mission: make restaurant-quality food accessible to everyone, delivered in under 30 minutes. What began as a weekend side project has grown into a platform serving 50,000+ customers.
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.8 }}>
            We believe food is more than just fuel — it's culture, community, and comfort. Our platform connects local restaurants with hungry customers, ensuring every order is handled with care.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          style={{ background: "linear-gradient(145deg, rgba(255,107,53,0.08), rgba(255,209,102,0.05))", border: "1px solid rgba(255,107,53,0.15)", borderRadius: "28px", padding: "40px", textAlign: "center" }}>
          <div style={{ fontSize: "5rem", marginBottom: "20px" }}>🍅</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {[{ v: "50K+", l: "Customers" }, { v: "200+", l: "Restaurants" }, { v: "30 min", l: "Avg. Delivery" }, { v: "4.9★", l: "App Rating" }].map((s) => (
              <div key={s.l} style={{ background: "rgba(255,255,255,0.04)", borderRadius: "16px", padding: "20px 10px" }}>
                <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#ff6b35" }}>{s.v}</div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", marginTop: "4px" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* VALUES */}
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#f0f0f5", textAlign: "center", marginBottom: "40px" }}>
        Our Core Values
      </motion.h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "80px" }}>
        {values.map((v, i) => (
          <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -6 }}
            style={{ background: "linear-gradient(145deg, #12121a, #1a1a25)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "22px", padding: "32px 24px" }}>
            <div style={{ fontSize: "2rem", marginBottom: "14px" }}>{v.icon}</div>
            <h3 style={{ color: "#f0f0f5", fontWeight: 700, fontSize: "17px", marginBottom: "10px" }}>{v.title}</h3>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: 1.7 }}>{v.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* TEAM */}
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#f0f0f5", textAlign: "center", marginBottom: "40px" }}>
        Meet the Team 👥
      </motion.h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
        {team.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -6 }}
            style={{ background: "linear-gradient(145deg, #12121a, #1a1a25)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "22px", padding: "36px 24px", textAlign: "center" }}>
            <div style={{ width: "72px", height: "72px", background: "rgba(255,107,53,0.12)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px", margin: "0 auto 16px" }}>
              {t.emoji}
            </div>
            <h3 style={{ color: "#f0f0f5", fontWeight: 700, fontSize: "16px", marginBottom: "6px" }}>{t.name}</h3>
            <p style={{ color: t.color, fontSize: "13px", fontWeight: 500 }}>{t.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
