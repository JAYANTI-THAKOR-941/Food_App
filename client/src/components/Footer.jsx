import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socialLinks = [
    { icon: "🐦", label: "Twitter", href: "#" },
    { icon: "📸", label: "Instagram", href: "#" },
    { icon: "📘", label: "Facebook", href: "#" },
    { icon: "💼", label: "LinkedIn", href: "#" },
  ];

  // Quick links — in header, so included here too for footer
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/foods" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact Us", path: "/contact" },
    { label: "Admin Panel", path: "/manage-food" },
  ];

  // Legal links — footer only
  const legalLinks = [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Refund Policy", path: "/refund-policy" },
    { label: "Disclaimer", path: "/disclaimer" },
  ];

  const categories = ["Pizza", "Burgers", "Sushi", "Salads", "Desserts", "Drinks"];

  return (
    <footer style={{ background: "linear-gradient(180deg, #0a0a0f, #080810)", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>

      <div style={{ position: "absolute", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(255,107,53,0.06), transparent 70%)", top: "-100px", left: "-100px", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(255,209,102,0.04), transparent 70%)", bottom: "0", right: "100px", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* MAIN GRID */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px", padding: "64px 0 48px" }}>

          {/* BRAND */}
          <motion.div variants={itemVariants}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
              <div style={{ width: "42px", height: "42px", background: "linear-gradient(135deg, #ff6b35, #ff4500)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", boxShadow: "0 0 20px rgba(255,107,53,0.3)" }}>🍅</div>
              <span style={{ fontSize: "20px", fontWeight: 800, background: "linear-gradient(135deg, #ff6b35, #ffd166)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>DeliciousDrop</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", lineHeight: 1.8, maxWidth: "260px", marginBottom: "22px" }}>
              Delivering happiness to your doorstep. Fresh ingredients, bold flavors, lightning-fast delivery — every single time.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {socialLinks.map((s) => (
                <motion.a key={s.label} href={s.href} title={s.label}
                  style={{ width: "38px", height: "38px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", cursor: "pointer" }}
                  whileHover={{ background: "rgba(255,107,53,0.15)", borderColor: "rgba(255,107,53,0.4)", scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}>
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div variants={itemVariants}>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "14px", marginBottom: "18px", letterSpacing: "0.5px" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "11px" }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>
                    <motion.span style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", display: "flex", alignItems: "center", gap: "7px", cursor: "pointer" }} whileHover={{ color: "#ff6b35", x: 4 }}>
                      <span style={{ color: "#ff6b35", fontSize: "9px" }}>▶</span>{link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CATEGORIES */}
          <motion.div variants={itemVariants}>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "14px", marginBottom: "18px", letterSpacing: "0.5px" }}>Categories</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "11px" }}>
              {categories.map((cat) => (
                <li key={cat}>
                  <motion.span style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", gap: "7px" }} whileHover={{ color: "#ffd166", x: 4 }}>
                    <span style={{ color: "#ffd166", fontSize: "9px" }}>▶</span>{cat}
                  </motion.span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* NEWSLETTER */}
          <motion.div variants={itemVariants}>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "14px", marginBottom: "8px", letterSpacing: "0.5px" }}>Stay Updated</h4>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", marginBottom: "14px", lineHeight: 1.7 }}>
              Get deals & new menu alerts to your inbox.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input type="email" placeholder="your@email.com" style={{ padding: "11px 14px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "#fff", fontSize: "13px", width: "100%", fontFamily: "Poppins, sans-serif" }} />
              <motion.button
                style={{ padding: "11px 14px", background: "linear-gradient(135deg, #ff6b35, #ff4500)", border: "none", borderRadius: "10px", color: "#fff", fontSize: "13px", fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 15px rgba(255,107,53,0.3)" }}
                whileHover={{ scale: 1.02, boxShadow: "0 6px 25px rgba(255,107,53,0.5)" }}
                whileTap={{ scale: 0.97 }}>
                Subscribe 🚀
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* DIVIDER */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

        {/* BOTTOM BAR — legal links here */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          style={{ padding: "22px 0", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>
            © {currentYear} <span style={{ color: "#ff6b35" }}>DeliciousDrop</span>. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {legalLinks.map((item) => (
              <Link to={item.path} key={item.label}>
                <motion.span style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", cursor: "pointer" }} whileHover={{ color: "#ff6b35" }}>
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) { footer > div > div:first-of-type { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { footer > div > div:first-of-type { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
};

export default Footer;