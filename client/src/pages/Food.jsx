import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import api from '../services/api';

const categories = ["All", "Pizza", "Burger", "Sushi", "Salad", "Dessert", "Drinks"];

const Food = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const fetchFoods = async () => {
    try {
      const res = await api.get('/food/all');
      setProducts(res.data);
      setFiltered(res.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load menu. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => { fetchFoods(); }, []);

  useEffect(() => {
    let data = products;
    if (activeCategory !== "All") {
      data = data.filter(p => p.category?.toLowerCase() === activeCategory.toLowerCase());
    }
    if (search.trim()) {
      data = data.filter(p => p.name?.toLowerCase().includes(search.toLowerCase()));
    }
    setFiltered(data);
  }, [activeCategory, search, products]);

  if (error) return (
    <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{
        textAlign: "center", padding: "40px",
        background: "rgba(255,59,48,0.1)", border: "1px solid rgba(255,59,48,0.3)",
        borderRadius: "20px",
      }}>
        <div style={{ fontSize: "3rem", marginBottom: "16px" }}>😞</div>
        <p style={{ color: "#ff6b6b", fontSize: "1rem", fontWeight: 500 }}>{error}</p>
      </div>
    </div>
  );

  if (loading) return (
    <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "20px" }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        style={{
          width: "52px", height: "52px",
          border: "3px solid rgba(255,107,53,0.2)",
          borderTop: "3px solid #ff6b35",
          borderRadius: "50%",
        }}
      />
      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>Loading delicious items...</p>
    </div>
  );

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", paddingBottom: "80px" }}>

      {/* PAGE HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #1a0a1f 100%)",
        padding: "80px 24px 60px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(circle at 60% 50%, rgba(255,107,53,0.08), transparent 70%)",
          pointerEvents: "none",
        }} />
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: "inline-block",
            background: "rgba(255,107,53,0.12)",
            border: "1px solid rgba(255,107,53,0.25)",
            color: "#ff9a6b", padding: "6px 18px", borderRadius: "100px",
            fontSize: "12px", fontWeight: 600, letterSpacing: "1px",
            textTransform: "uppercase", marginBottom: "16px",
          }}
        >
          Our Menu
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800,
            color: "#f0f0f5", letterSpacing: "-1px", marginBottom: "12px",
          }}
        >
          Explore Our 🍽️ Menu
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem" }}
        >
          {products.length} items crafted with love
        </motion.p>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px 0" }}>

        {/* SEARCH */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: "32px" }}
        >
          <div style={{ position: "relative", maxWidth: "480px", margin: "0 auto" }}>
            <span style={{
              position: "absolute", left: "18px", top: "50%", transform: "translateY(-50%)",
              fontSize: "18px", pointerEvents: "none",
            }}>🔍</span>
            <input
              type="text"
              placeholder="Search dishes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%", padding: "14px 16px 14px 50px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "100px", color: "#fff", fontSize: "14px",
                transition: "border-color 0.3s",
              }}
              onFocus={(e) => e.target.style.borderColor = "rgba(255,107,53,0.5)"}
              onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
            />
          </div>
        </motion.div>

        {/* CATEGORY TABS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            display: "flex", gap: "10px", flexWrap: "wrap",
            justifyContent: "center", marginBottom: "48px",
          }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "9px 22px",
                borderRadius: "100px",
                border: activeCategory === cat ? "none" : "1px solid rgba(255,255,255,0.1)",
                background: activeCategory === cat
                  ? "linear-gradient(135deg, #ff6b35, #ff4500)"
                  : "rgba(255,255,255,0.04)",
                color: activeCategory === cat ? "#fff" : "rgba(255,255,255,0.55)",
                fontSize: "13px", fontWeight: 600,
                cursor: "pointer",
                boxShadow: activeCategory === cat ? "0 4px 20px rgba(255,107,53,0.35)" : "none",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* FOOD GRID */}
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ textAlign: "center", padding: "60px 20px" }}
          >
            <div style={{ fontSize: "4rem", marginBottom: "16px" }}>🍽️</div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1rem" }}>No items found. Try a different search.</p>
          </motion.div>
        ) : (
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {filtered.map((p, i) => (
              <motion.div
                key={p._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -8 }}
                style={{
                  background: "linear-gradient(145deg, #12121a, #1a1a25)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", overflow: "hidden", height: "200px" }}>
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) => e.target.style.transform = "scale(1.08)"}
                    onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400";
                    }}
                  />
                  <div style={{
                    position: "absolute", top: "12px", right: "12px",
                    background: "rgba(10,10,15,0.85)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "4px 10px", borderRadius: "100px",
                    fontSize: "11px", color: "#ffd166", fontWeight: 600,
                  }}>
                    {p.category || "Food"}
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: "20px" }}>
                  <h3 style={{ color: "#f0f0f5", fontSize: "17px", fontWeight: 700, marginBottom: "8px" }}>{p.name}</h3>
                  <p style={{
                    color: "rgba(255,255,255,0.45)", fontSize: "13px",
                    lineHeight: 1.6, marginBottom: "16px",
                    display: "-webkit-box", WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical", overflow: "hidden",
                  }}>
                    {p.description}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", display: "block" }}>Price</span>
                      <span style={{
                        fontSize: "20px", fontWeight: 800,
                        background: "linear-gradient(135deg, #ff6b35, #ffd166)",
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                      }}>₹{p.price}</span>
                    </div>
                    <motion.button
                      style={{
                        padding: "10px 20px",
                        background: "linear-gradient(135deg, #ff6b35, #ff4500)",
                        color: "#fff", border: "none", borderRadius: "100px",
                        fontSize: "13px", fontWeight: 700, cursor: "pointer",
                        boxShadow: "0 4px 15px rgba(255,107,53,0.3)",
                      }}
                      whileHover={{ scale: 1.05, boxShadow: "0 6px 25px rgba(255,107,53,0.5)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Add to Cart 🛒
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Food;