import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    icon: "🍕",
    title: "Popular Dishes",
    desc: "Explore our most loved and trending food selections crafted by expert chefs.",
    color: "#ff6b35",
  },
  {
    icon: "🥗",
    title: "Healthy Choices",
    desc: "Fresh and nutritious meals for a healthy, balanced lifestyle every day.",
    color: "#06d6a0",
  },
  {
    icon: "🚀",
    title: "Fast Delivery",
    desc: "Lightning-fast delivery — your food arrives hot and fresh at your doorstep.",
    color: "#ffd166",
  },
  {
    icon: "💰",
    title: "Best Prices",
    desc: "Affordable meals without compromising on quality or taste.",
    color: "#a29bfe",
  },
];

const reviews = [
  { name: "Priya S.", text: "Absolutely delicious! The delivery was super fast. 10/10 experience.", rating: 5, avatar: "👩" },
  { name: "Rahul M.", text: "Best food app I've used. The portions are generous and prices are great.", rating: 5, avatar: "👨" },
  { name: "Aisha K.", text: "Love the healthy options! Finally food that tastes good AND is good for me.", rating: 5, avatar: "👩‍🦱" },
];

const Home = () => {
  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh" }}>

      {/* ===== HERO SECTION ===== */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0a0a0f 0%, #1a0a1f 50%, #0f0f1a 100%)",
      }}>

        {/* Animated background blobs */}
        <motion.div
          style={{
            position: "absolute",
            width: "600px", height: "600px",
            background: "radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)",
            top: "-100px", right: "-100px",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{
            position: "absolute",
            width: "500px", height: "500px",
            background: "radial-gradient(circle, rgba(255,209,102,0.08) 0%, transparent 70%)",
            bottom: "-50px", left: "-100px",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Floating emoji decorators */}
        {["🍔", "🍕", "🌮", "🍜", "🍣"].map((emoji, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              fontSize: "2.5rem",
              opacity: 0.15,
              userSelect: "none",
              pointerEvents: "none",
              top: `${15 + i * 16}%`,
              left: i % 2 === 0 ? `${5 + i * 3}%` : "auto",
              right: i % 2 !== 0 ? `${5 + i * 3}%` : "auto",
            }}
            animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          >
            {emoji}
          </motion.div>
        ))}

        <div style={{
          maxWidth: "800px", margin: "0 auto", padding: "0 24px",
          textAlign: "center", position: "relative", zIndex: 1,
        }}>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,107,53,0.12)",
              border: "1px solid rgba(255,107,53,0.25)",
              padding: "8px 20px",
              borderRadius: "100px",
              fontSize: "13px",
              color: "#ff9a6b",
              marginBottom: "28px",
              fontWeight: 500,
            }}
          >
            <span>⚡</span> Now delivering in 30 minutes or less
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "24px",
              letterSpacing: "-2px",
            }}
          >
            <span style={{ color: "#f0f0f5" }}>Fresh Food,</span>
            <br />
            <span style={{
              background: "linear-gradient(135deg, #ff6b35, #ffd166)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Delivered Fast 🍅
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: "1.15rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "520px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            From local kitchens to your doorstep — bold flavors, fresh ingredients, and lightning-fast delivery every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link to="/foods">
              <motion.button
                style={{
                  padding: "16px 36px",
                  background: "linear-gradient(135deg, #ff6b35, #ff4500)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "100px",
                  fontSize: "15px",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 6px 30px rgba(255,107,53,0.45)",
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(255,107,53,0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                🍽️ Explore Menu
              </motion.button>
            </Link>
            <motion.button
              style={{
                padding: "16px 36px",
                background: "rgba(255,255,255,0.06)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "100px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
              }}
              whileHover={{ background: "rgba(255,255,255,0.1)", scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More →
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{
              display: "flex", gap: "48px", justifyContent: "center",
              marginTop: "60px", flexWrap: "wrap",
            }}
          >
            {[
              { value: "50K+", label: "Happy Customers" },
              { value: "200+", label: "Menu Items" },
              { value: "30 min", label: "Avg. Delivery" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#ff6b35", lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "6px", letterSpacing: "0.5px" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section style={{ padding: "100px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span style={{
            display: "inline-block", background: "rgba(255,107,53,0.12)",
            border: "1px solid rgba(255,107,53,0.25)", color: "#ff9a6b",
            padding: "6px 18px", borderRadius: "100px",
            fontSize: "12px", fontWeight: 600, letterSpacing: "1px",
            textTransform: "uppercase", marginBottom: "16px",
          }}>Why Choose Us</span>
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800,
            color: "#f0f0f5", letterSpacing: "-1px",
          }}>
            Everything You Love About Food
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
        }}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: `0 20px 60px rgba(0,0,0,0.4)` }}
              style={{
                background: "linear-gradient(145deg, #12121a, #1a1a25)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "24px",
                padding: "36px 28px",
                cursor: "default",
                transition: "box-shadow 0.3s ease",
              }}
            >
              <div style={{
                width: "60px", height: "60px",
                background: `rgba(${f.color === "#ff6b35" ? "255,107,53" : f.color === "#06d6a0" ? "6,214,160" : f.color === "#ffd166" ? "255,209,102" : "162,155,254"},0.15)`,
                borderRadius: "16px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "28px", marginBottom: "20px",
                border: `1px solid ${f.color}30`,
              }}>
                {f.icon}
              </div>
              <h3 style={{ color: "#f0f0f5", fontSize: "18px", fontWeight: 700, marginBottom: "12px" }}>{f.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: 1.7 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section style={{ padding: "0 24px 80px" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: "1200px", margin: "0 auto",
            background: "linear-gradient(135deg, rgba(255,107,53,0.15) 0%, rgba(255,65,0,0.08) 100%)",
            border: "1px solid rgba(255,107,53,0.2)",
            borderRadius: "32px",
            padding: "64px 48px",
            textAlign: "center",
            position: "relative", overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(circle at 50% 50%, rgba(255,107,53,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800,
            color: "#f0f0f5", marginBottom: "16px",
          }}>
            Ready to Order? 🍔
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", marginBottom: "32px" }}>
            Join thousands of happy customers and get your first order delivered free!
          </p>
          <Link to="/foods">
            <motion.button
              style={{
                padding: "16px 40px",
                background: "linear-gradient(135deg, #ff6b35, #ff4500)",
                color: "#fff", border: "none",
                borderRadius: "100px", fontSize: "15px", fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 8px 30px rgba(255,107,53,0.4)",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(255,107,53,0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now — It's Free Delivery 🚀
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "56px" }}
          >
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#f0f0f5" }}>
              ⭐ What Customers Say
            </h2>
          </motion.div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}>
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                style={{
                  background: "linear-gradient(145deg, #12121a, #1a1a25)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "20px", padding: "28px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <div style={{
                    width: "48px", height: "48px",
                    background: "rgba(255,107,53,0.15)",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "24px",
                  }}>{r.avatar}</div>
                  <div>
                    <div style={{ color: "#f0f0f5", fontWeight: 600, fontSize: "15px" }}>{r.name}</div>
                    <div style={{ color: "#ffd166", fontSize: "13px" }}>{"★".repeat(r.rating)}</div>
                  </div>
                </div>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: 1.7 }}>"{r.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;