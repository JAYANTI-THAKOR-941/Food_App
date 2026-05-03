import React from "react";
import { motion } from "framer-motion";

const services = [
  { icon: "🚀", title: "Express Delivery", desc: "Get your food delivered in 30 minutes or less. Our dedicated fleet of riders ensures your order arrives hot and fresh.", badge: "Most Popular", color: "#ff6b35" },
  { icon: "🍽️", title: "Curated Menu", desc: "Browse 200+ dishes from top-rated local restaurants, curated by our food experts for quality and variety.", badge: null, color: "#06d6a0" },
  { icon: "📱", title: "Real-Time Tracking", desc: "Track your order live from the kitchen to your doorstep with our advanced GPS-powered tracking system.", badge: "New", color: "#ffd166" },
  { icon: "🎁", title: "Loyalty Rewards", desc: "Earn points on every order and redeem them for free meals, discounts, and exclusive member perks.", badge: null, color: "#a29bfe" },
  { icon: "🏢", title: "Corporate Catering", desc: "Bulk orders and scheduled deliveries for offices, events, and corporate gatherings across the city.", badge: null, color: "#ff6b35" },
  { icon: "🌱", title: "Healthy Meal Plans", desc: "Subscribe to weekly meal plans crafted by nutritionists — balanced, delicious, and delivered fresh daily.", badge: "Premium", color: "#06d6a0" },
];

const steps = [
  { step: "01", title: "Choose Your Food", desc: "Browse hundreds of dishes from top restaurants near you.", icon: "🍕" },
  { step: "02", title: "Place Your Order", desc: "Add to cart and checkout securely in just a few taps.", icon: "🛒" },
  { step: "03", title: "Track in Real-Time", desc: "Watch your order being prepared and delivered live.", icon: "📍" },
  { step: "04", title: "Enjoy Your Meal", desc: "Hot, fresh food delivered to your door. Bon appétit!", icon: "😍" },
];

const Services = () => (
  <div style={{ background: "#0a0a0f", minHeight: "100vh", paddingBottom: "80px" }}>

    {/* HERO */}
    <div style={{ background: "linear-gradient(135deg, #0a0a0f, #0f1a1f)", padding: "80px 24px 70px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 60% 40%, rgba(6,214,160,0.07), transparent 70%)", pointerEvents: "none" }} />
      <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        style={{ display: "inline-block", background: "rgba(255,107,53,0.12)", border: "1px solid rgba(255,107,53,0.25)", color: "#ff9a6b", padding: "6px 18px", borderRadius: "100px", fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>
        What We Offer
      </motion.span>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#f0f0f5", letterSpacing: "-1px", marginBottom: "14px" }}>
        Our <span style={{ background: "linear-gradient(135deg, #ff6b35, #ffd166)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Services 🛎️</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem", maxWidth: "540px", margin: "0 auto" }}>
        Everything you need for an exceptional food delivery experience — all in one platform.
      </motion.p>
    </div>

    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px 0" }}>

      {/* SERVICE CARDS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginBottom: "80px" }}>
        {services.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -8 }}
            style={{ background: "linear-gradient(145deg, #12121a, #1a1a25)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "24px", padding: "36px 30px", position: "relative", overflow: "hidden" }}>
            {s.badge && (
              <span style={{ position: "absolute", top: "20px", right: "20px", background: s.badge === "New" ? "rgba(6,214,160,0.15)" : s.badge === "Premium" ? "rgba(162,155,254,0.15)" : "rgba(255,107,53,0.15)", border: `1px solid ${s.badge === "New" ? "rgba(6,214,160,0.3)" : s.badge === "Premium" ? "rgba(162,155,254,0.3)" : "rgba(255,107,53,0.3)"}`, color: s.badge === "New" ? "#06d6a0" : s.badge === "Premium" ? "#a29bfe" : "#ff9a6b", padding: "3px 10px", borderRadius: "100px", fontSize: "11px", fontWeight: 700 }}>
                {s.badge}
              </span>
            )}
            <div style={{ fontSize: "2.5rem", marginBottom: "18px" }}>{s.icon}</div>
            <h3 style={{ color: "#f0f0f5", fontSize: "19px", fontWeight: 700, marginBottom: "12px" }}>{s.title}</h3>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: 1.75 }}>{s.desc}</p>
            <div style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", gap: "6px", color: s.color, fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>
              Learn More <span>→</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#f0f0f5" }}>How It Works ⚙️</h2>
        <p style={{ color: "rgba(255,255,255,0.4)", marginTop: "12px", fontSize: "15px" }}>Four simple steps to deliciousness</p>
      </motion.div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "80px" }}>
        {steps.map((s, i) => (
          <motion.div key={s.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            style={{ textAlign: "center", padding: "36px 24px", background: "linear-gradient(145deg, #12121a, #1a1a25)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "22px" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>{s.icon}</div>
            <div style={{ fontSize: "11px", fontWeight: 800, color: "#ff6b35", letterSpacing: "2px", marginBottom: "10px" }}>STEP {s.step}</div>
            <h3 style={{ color: "#f0f0f5", fontWeight: 700, fontSize: "17px", marginBottom: "10px" }}>{s.title}</h3>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", lineHeight: 1.7 }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        style={{ background: "linear-gradient(135deg, rgba(255,107,53,0.12), rgba(255,65,0,0.06))", border: "1px solid rgba(255,107,53,0.2)", borderRadius: "28px", padding: "60px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#f0f0f5", marginBottom: "14px" }}>Ready to Get Started? 🍔</h2>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "15px", marginBottom: "32px" }}>Join thousands of food lovers enjoying fast, fresh delivery every day.</p>
        <motion.a href="/foods" style={{ display: "inline-block", padding: "15px 36px", background: "linear-gradient(135deg, #ff6b35, #ff4500)", color: "#fff", borderRadius: "100px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: "0 6px 28px rgba(255,107,53,0.4)" }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(255,107,53,0.55)" }}
          whileTap={{ scale: 0.96 }}>
          Order Now 🚀
        </motion.a>
      </motion.div>
    </div>
  </div>
);

export default Services;
