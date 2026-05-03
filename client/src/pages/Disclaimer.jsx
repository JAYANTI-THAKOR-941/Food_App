import React from "react";
import { motion } from "framer-motion";

const sections = [
  { title: "General Information Only", icon: "ℹ️", content: "The content on the DeliciousDrop platform is for general informational purposes only. While we strive to keep all information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, or suitability of the information." },
  { title: "Food Allergy Disclaimer", icon: "⚠️", content: "Menu information, including ingredients and allergen data, is provided by our restaurant partners. DeliciousDrop cannot guarantee the accuracy of this information. If you have food allergies or dietary restrictions, please contact the restaurant directly before ordering." },
  { title: "Delivery Time Estimates", icon: "⏰", content: "Delivery time estimates provided on our platform are approximate and may vary due to traffic, weather, restaurant preparation times, and other unforeseen circumstances. We do not guarantee specific delivery times unless stated in a service level agreement." },
  { title: "Pricing & Availability", icon: "💰", content: "Prices, menu items, and restaurant availability are subject to change without notice. Errors in pricing or product information may occasionally occur. We reserve the right to cancel orders placed at incorrect prices, with a full refund to the customer." },
  { title: "Third-Party Links", icon: "🔗", content: "Our platform may contain links to third-party websites, restaurant apps, or payment portals. These links are provided for convenience only. DeliciousDrop has no control over the content of those sites and accepts no responsibility for them." },
  { title: "Health & Nutritional Information", icon: "🥗", content: "Nutritional information displayed on our platform is estimated and provided by restaurant partners. It may not account for variations in preparation, portion size, or ingredient substitutions. Consult a healthcare professional for dietary advice." },
  { title: "Limitation of Liability", icon: "⚖️", content: "To the maximum extent permitted by law, DeliciousDrop shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our platform or services. Our total liability shall not exceed the amount paid for the affected order." },
];

const Disclaimer = () => (
  <div style={{ background: "#0a0a0f", minHeight: "100vh", paddingBottom: "80px" }}>
    <div style={{ background: "linear-gradient(135deg, #0a0a0f, #1a1000)", padding: "80px 24px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(255,209,102,0.06), transparent 70%)", pointerEvents: "none" }} />
      <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        style={{ display: "inline-block", background: "rgba(255,209,102,0.12)", border: "1px solid rgba(255,209,102,0.25)", color: "#ffd166", padding: "6px 18px", borderRadius: "100px", fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>
        Legal
      </motion.span>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f0f0f5", marginBottom: "12px" }}>
        Disclaimer ⚠️
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
        Last updated: May 3, 2025
      </motion.p>
    </div>

    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "50px 24px 0" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        style={{ background: "rgba(255,209,102,0.08)", border: "1px solid rgba(255,209,102,0.2)", borderRadius: "16px", padding: "20px 24px", marginBottom: "40px" }}>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: 1.8 }}>
          By using the <strong style={{ color: "#ffd166" }}>DeliciousDrop</strong> platform, you acknowledge and agree to the following disclaimers. Please read them carefully.
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
          Legal questions?{" "}
          <a href="mailto:legal@deliciousdrop.in" style={{ color: "#ffd166", textDecoration: "none" }}>legal@deliciousdrop.in</a>
        </p>
      </motion.div>
    </div>
  </div>
);

export default Disclaimer;
