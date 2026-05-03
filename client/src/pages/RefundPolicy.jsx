import React from "react";
import { motion } from "framer-motion";

const sections = [
  { title: "Eligibility for Refund", icon: "✅", content: "You are eligible for a full refund if: (1) your order was never delivered, (2) you received the wrong items, (3) the food arrived in an unacceptable condition (spoiled, damaged, or contaminated), or (4) the order was significantly different from what was advertised." },
  { title: "Non-Refundable Situations", icon: "❌", content: "Refunds will not be issued for: change of mind after the order is accepted by the restaurant, incorrect delivery address provided by the customer, delay due to extreme weather or force majeure events, or items marked as non-refundable on the menu." },
  { title: "How to Request a Refund", icon: "📝", content: "To request a refund, contact our support team within 24 hours of receiving your order. Provide your order ID, a brief description of the issue, and photos if applicable. Requests submitted after 24 hours may not be eligible." },
  { title: "Refund Processing Time", icon: "⏱️", content: "Once approved, refunds are processed within 5–7 business days. The amount will be credited back to your original payment method. For UPI/wallet payments, refunds typically appear within 1–3 business days." },
  { title: "Partial Refunds", icon: "💰", content: "In cases where only part of an order is incorrect or missing, we will issue a partial refund or store credit equivalent to the affected items. This will be determined by our support team based on your evidence." },
  { title: "Order Cancellations", icon: "🚫", content: "You can cancel an order within 2 minutes of placing it, before the restaurant accepts it. After acceptance, cancellations are not possible. If a restaurant cancels your order, you will receive a full automatic refund." },
  { title: "Contact for Disputes", icon: "📞", content: "If you disagree with our refund decision, you may escalate the issue by emailing refunds@deliciousdrop.in with your order ID and reason. All escalations are reviewed within 72 hours by our senior team." },
];

const RefundPolicy = () => (
  <div style={{ background: "#0a0a0f", minHeight: "100vh", paddingBottom: "80px" }}>
    <div style={{ background: "linear-gradient(135deg, #0a0a0f, #0f1a0f)", padding: "80px 24px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(6,214,160,0.07), transparent 70%)", pointerEvents: "none" }} />
      <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        style={{ display: "inline-block", background: "rgba(6,214,160,0.12)", border: "1px solid rgba(6,214,160,0.25)", color: "#06d6a0", padding: "6px 18px", borderRadius: "100px", fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>
        Legal
      </motion.span>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#f0f0f5", marginBottom: "12px" }}>
        Refund Policy 💰
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
        Last updated: May 3, 2025
      </motion.p>
    </div>

    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "50px 24px 0" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        style={{ background: "rgba(6,214,160,0.08)", border: "1px solid rgba(6,214,160,0.2)", borderRadius: "16px", padding: "20px 24px", marginBottom: "40px" }}>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: 1.8 }}>
          At <strong style={{ color: "#06d6a0" }}>DeliciousDrop</strong>, customer satisfaction is our top priority. This policy outlines when and how you can request a refund or cancellation.
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
          Need help?{" "}
          <a href="mailto:refunds@deliciousdrop.in" style={{ color: "#06d6a0", textDecoration: "none" }}>refunds@deliciousdrop.in</a>
        </p>
      </motion.div>
    </div>
  </div>
);

export default RefundPolicy;
