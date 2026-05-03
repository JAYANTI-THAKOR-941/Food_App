import React from "react";
import { motion } from "framer-motion";

const sections = [
  { title: "Information We Collect", icon: "📋", content: "We collect information you provide when registering, including your name, email address, phone number, and delivery address. We also collect order history, payment information (processed securely via third-party providers), and device/usage data to improve our services." },
  { title: "How We Use Your Information", icon: "🔍", content: "Your information is used to process and deliver orders, send order confirmations and updates, improve our platform and personalize your experience, send promotional offers (with your consent), and comply with legal obligations." },
  { title: "Data Sharing & Third Parties", icon: "🤝", content: "We do not sell your personal data. We share data only with restaurant partners (to fulfill orders), delivery personnel, payment processors, and analytics services — all bound by strict confidentiality agreements." },
  { title: "Cookies & Tracking", icon: "🍪", content: "We use cookies and similar technologies to keep you logged in, remember preferences, analyze site traffic, and serve relevant promotions. You can control cookie preferences through your browser settings." },
  { title: "Data Security", icon: "🔒", content: "We implement industry-standard encryption (SSL/TLS), secure servers, and regular security audits to protect your data. However, no method of transmission over the internet is 100% secure." },
  { title: "Your Rights", icon: "⚖️", content: "You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at privacy@deliciousdrop.in. We will respond within 30 days." },
  { title: "Data Retention", icon: "🗂️", content: "We retain your personal data for as long as your account is active or as needed to provide services. You may request account deletion, after which we will remove your data within 30 days, except where required by law." },
  { title: "Changes to This Policy", icon: "📝", content: "We may update this Privacy Policy periodically. We'll notify you of significant changes via email or a prominent notice on our platform. Continued use after changes constitutes acceptance." },
];

const PrivacyPolicy = () => (
  <div style={{ background: "#0a0a0f", minHeight: "100vh", paddingBottom: "80px" }}>
    <div style={{ background: "linear-gradient(135deg, #0a0a0f, #1a0a1f)", padding: "80px 24px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(162,155,254,0.07), transparent 70%)", pointerEvents: "none" }} />
      <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        style={{ display: "inline-block", background: "rgba(162,155,254,0.12)", border: "1px solid rgba(162,155,254,0.25)", color: "#a29bfe", padding: "6px 18px", borderRadius: "100px", fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>
        Legal
      </motion.span>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f0f0f5", marginBottom: "12px" }}>
        Privacy Policy 🔒
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
        Last updated: May 3, 2025
      </motion.p>
    </div>

    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "50px 24px 0" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        style={{ background: "rgba(162,155,254,0.08)", border: "1px solid rgba(162,155,254,0.2)", borderRadius: "16px", padding: "20px 24px", marginBottom: "40px" }}>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: 1.8 }}>
          This Privacy Policy explains how <strong style={{ color: "#a29bfe" }}>DeliciousDrop</strong> collects, uses, and protects your personal information when you use our platform. By using our services, you agree to this policy.
        </p>
      </motion.div>

      {sections.map((s, i) => (
        <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
          style={{ background: "linear-gradient(145deg, #12121a, #1a1a25)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "28px 30px", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
            <span style={{ fontSize: "1.5rem" }}>{s.icon}</span>
            <h2 style={{ color: "#f0f0f5", fontSize: "17px", fontWeight: 700 }}>{s.title}</h2>
          </div>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.85 }}>{s.content}</p>
        </motion.div>
      ))}

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        style={{ textAlign: "center", marginTop: "40px", padding: "30px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px" }}>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
          Questions? Contact us at{" "}
          <a href="mailto:privacy@deliciousdrop.in" style={{ color: "#a29bfe", textDecoration: "none" }}>privacy@deliciousdrop.in</a>
        </p>
      </motion.div>
    </div>
  </div>
);

export default PrivacyPolicy;
