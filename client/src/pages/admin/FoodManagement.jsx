import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../services/api";

const FoodManagement = () => {
  const [foods, setFoods] = useState([]);
  const [editId, setEditId] = useState(null);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: "", description: "", longDescription: "", price: "", category: "", image: "" });
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        const res = await api.put(`/food/update/${editId}`, form);
        alert(res.data.message);
      } else {
        const res = await api.post("/food/add", form);
        alert(res.data.message);
      }
      setShow(false);
      setEditId(null);
      setForm({ name: "", description: "", longDescription: "", price: "", category: "", image: "" });
      fetchFoods();
    } catch (err) {
      console.log("Error submitting form:", err);
    }
  };

  const fetchFoods = async () => {
    try {
      const res = await api.get("/food/all");
      setFoods(res.data);
    } catch (err) {
      console.log("Failed to fetch products.", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      const res = await api.delete(`/food/delete/${id}`);
      alert(res.data.message);
      fetchFoods();
    } catch (err) {
      console.log("Delete failed:", err);
    }
  };

  const handleEdit = (f) => {
    setEditId(f._id);
    setForm(f);
    setShow(true);
  };

  useEffect(() => { fetchFoods(); }, []);

  const inputStyle = {
    width: "100%", padding: "12px 16px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px", color: "#fff", fontSize: "14px",
  };

  return (
    <div style={{
      background: "#0a0a0f", minHeight: "100vh",
      padding: "40px 24px 80px",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between", marginBottom: "36px",
            flexWrap: "wrap", gap: "16px",
          }}
        >
          <div>
            <h1 style={{
              fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 800,
              background: "linear-gradient(135deg, #ff6b35, #ffd166)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              marginBottom: "6px",
            }}>
              🍔 Food Management
            </h1>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
              {foods.length} items in your menu
            </p>
          </div>

          <motion.button
            onClick={() => { setShow(true); setEditId(null); setForm({ name: "", description: "", longDescription: "", price: "", category: "", image: "" }); }}
            style={{
              padding: "12px 28px",
              background: "linear-gradient(135deg, #ff6b35, #ff4500)",
              color: "#fff", border: "none", borderRadius: "14px",
              fontSize: "14px", fontWeight: 700, cursor: "pointer",
              boxShadow: "0 6px 25px rgba(255,107,53,0.4)",
              display: "flex", alignItems: "center", gap: "8px",
            }}
            whileHover={{ scale: 1.04, boxShadow: "0 10px 35px rgba(255,107,53,0.5)" }}
            whileTap={{ scale: 0.96 }}
          >
            + Add New Item
          </motion.button>
        </motion.div>

        {/* LOADING */}
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", padding: "60px" }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={{ width: "52px", height: "52px", border: "3px solid rgba(255,107,53,0.2)", borderTop: "3px solid #ff6b35", borderRadius: "50%" }}
            />
          </div>
        ) : foods.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              textAlign: "center", padding: "80px 20px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "24px",
            }}
          >
            <div style={{ fontSize: "4rem", marginBottom: "16px" }}>🍽️</div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1rem", marginBottom: "24px" }}>No food items yet. Add your first item!</p>
          </motion.div>
        ) : (

          /* TABLE */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: "linear-gradient(145deg, #12121a, #1a1a25)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "24px", overflow: "hidden",
              boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
            }}
          >
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "rgba(255,107,53,0.08)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    {["Image", "Name", "Description", "Price", "Category", "Actions"].map((h) => (
                      <th key={h} style={{
                        padding: "16px 20px", textAlign: "left",
                        color: "#ff9a6b", fontSize: "12px",
                        fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase",
                        whiteSpace: "nowrap",
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {foods.map((f, i) => (
                    <motion.tr
                      key={f._id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.02)"}
                      onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                    >
                      <td style={{ padding: "16px 20px" }}>
                        <img
                          src={f.image}
                          alt={f.name}
                          style={{
                            width: "60px", height: "60px",
                            objectFit: "cover", borderRadius: "12px",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                          onError={(e) => e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100"}
                        />
                      </td>
                      <td style={{ padding: "16px 20px", color: "#f0f0f5", fontWeight: 600, fontSize: "14px", whiteSpace: "nowrap" }}>{f.name}</td>
                      <td style={{
                        padding: "16px 20px", color: "rgba(255,255,255,0.45)",
                        fontSize: "13px", maxWidth: "220px",
                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                      }}>{f.description}</td>
                      <td style={{ padding: "16px 20px", whiteSpace: "nowrap" }}>
                        <span style={{
                          color: "#ffd166", fontWeight: 700, fontSize: "15px",
                        }}>₹{f.price}</span>
                      </td>
                      <td style={{ padding: "16px 20px" }}>
                        <span style={{
                          background: "rgba(255,107,53,0.12)",
                          border: "1px solid rgba(255,107,53,0.2)",
                          color: "#ff9a6b", padding: "4px 12px",
                          borderRadius: "100px", fontSize: "12px", fontWeight: 600,
                          whiteSpace: "nowrap",
                        }}>
                          {f.category || "Uncategorized"}
                        </span>
                      </td>
                      <td style={{ padding: "16px 20px" }}>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <motion.button
                            onClick={() => handleEdit(f)}
                            style={{
                              padding: "7px 16px",
                              background: "rgba(255,209,102,0.1)",
                              border: "1px solid rgba(255,209,102,0.25)",
                              color: "#ffd166", borderRadius: "8px",
                              fontSize: "12px", fontWeight: 600, cursor: "pointer",
                            }}
                            whileHover={{ scale: 1.05, background: "rgba(255,209,102,0.2)" }}
                            whileTap={{ scale: 0.95 }}
                          >
                            ✏️ Edit
                          </motion.button>
                          <motion.button
                            onClick={() => handleDelete(f._id)}
                            style={{
                              padding: "7px 16px",
                              background: "rgba(255,59,48,0.1)",
                              border: "1px solid rgba(255,59,48,0.25)",
                              color: "#ff6b6b", borderRadius: "8px",
                              fontSize: "12px", fontWeight: 600, cursor: "pointer",
                            }}
                            whileHover={{ scale: 1.05, background: "rgba(255,59,48,0.2)" }}
                            whileTap={{ scale: 0.95 }}
                          >
                            🗑️ Delete
                          </motion.button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed", inset: 0,
              background: "rgba(0,0,0,0.8)",
              backdropFilter: "blur(12px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 2000, padding: "24px",
            }}
            onClick={(e) => e.target === e.currentTarget && setShow(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={{
                background: "linear-gradient(145deg, #12121a, #1a1a25)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "28px",
                padding: "40px",
                width: "100%", maxWidth: "520px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                maxHeight: "90vh", overflowY: "auto",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px" }}>
                <h2 style={{
                  fontSize: "22px", fontWeight: 800,
                  background: "linear-gradient(135deg, #ff6b35, #ffd166)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  {editId ? "✏️ Update Item" : "➕ Add New Item"}
                </h2>
                <motion.button
                  onClick={() => setShow(false)}
                  style={{
                    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px", color: "rgba(255,255,255,0.5)",
                    width: "36px", height: "36px", cursor: "pointer", fontSize: "16px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                  whileHover={{ background: "rgba(255,59,48,0.15)", color: "#ff6b6b" }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
              </div>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { name: "name", placeholder: "Food name", label: "Name", icon: "🍽️" },
                  { name: "description", placeholder: "Short description", label: "Description", icon: "📝" },
                  { name: "longDescription", placeholder: "Detailed description", label: "Long Description", icon: "📄" },
                  { name: "price", placeholder: "Price in ₹", label: "Price", icon: "💰" },
                  { name: "category", placeholder: "e.g. Pizza, Burger", label: "Category", icon: "🏷️" },
                  { name: "image", placeholder: "Image URL", label: "Image URL", icon: "🖼️" },
                ].map((field) => (
                  <div key={field.name}>
                    <label style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "6px" }}>
                      {field.icon} {field.label}
                    </label>
                    <input
                      type="text"
                      name={field.name}
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(255,107,53,0.5)"; e.target.style.background = "rgba(255,107,53,0.04)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
                    />
                  </div>
                ))}

                <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                  <motion.button
                    type="submit"
                    style={{
                      flex: 1, padding: "14px",
                      background: "linear-gradient(135deg, #ff6b35, #ff4500)",
                      color: "#fff", border: "none", borderRadius: "14px",
                      fontSize: "14px", fontWeight: 700, cursor: "pointer",
                      boxShadow: "0 6px 25px rgba(255,107,53,0.35)",
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {editId ? "Update Item ✅" : "Add Item 🚀"}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setShow(false)}
                    style={{
                      padding: "14px 20px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.6)",
                      borderRadius: "14px", fontSize: "14px", fontWeight: 600, cursor: "pointer",
                    }}
                    whileHover={{ background: "rgba(255,255,255,0.08)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Cancel
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FoodManagement;
