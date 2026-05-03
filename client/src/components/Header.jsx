import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Read user from localStorage on mount & on location change (e.g. after login)
  useEffect(() => {
    const stored = localStorage.getItem("authUser");
    if (stored) {
      try { setUser(JSON.parse(stored)); } catch { setUser(null); }
    } else {
      setUser(null);
    }
  }, [location]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); setDropdownOpen(false); }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    setUser(null);
    setDropdownOpen(false);
    navigate("/login");
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/foods" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  // Get initials for avatar
  const getInitials = (name = "") =>
    name.trim().split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "U";

  return (
    <motion.header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(10,10,15,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", height: "75px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* LOGO */}
        <Link to="/">
          <motion.div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <div style={{ width: "42px", height: "42px", background: "linear-gradient(135deg, #ff6b35, #ff4500)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", boxShadow: "0 0 20px rgba(255,107,53,0.4)" }}>🍅</div>
            <span style={{ fontSize: "20px", fontWeight: 800, background: "linear-gradient(135deg, #ff6b35, #ffd166)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", letterSpacing: "-0.5px" }}>
              DeliciousDrop
            </span>
          </motion.div>
        </Link>

        {/* DESKTOP NAV */}
        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link to={link.path} key={link.path}>
              <motion.div
                style={{
                  padding: "8px 16px", borderRadius: "100px", fontSize: "13px", fontWeight: 500,
                  color: isActive(link.path) ? "#fff" : "rgba(255,255,255,0.65)",
                  background: isActive(link.path) ? "linear-gradient(135deg, #ff6b35, #ff4500)" : "transparent",
                  cursor: "pointer", transition: "all 0.3s ease",
                }}
                whileHover={{ color: "#fff", background: isActive(link.path) ? "linear-gradient(135deg, #ff6b35, #ff4500)" : "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.div>
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE — auth buttons OR profile */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

          {user ? (
            /* ===== PROFILE DROPDOWN ===== */
            <div ref={dropdownRef} style={{ position: "relative" }}>
              <motion.button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  background: dropdownOpen ? "rgba(255,107,53,0.12)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${dropdownOpen ? "rgba(255,107,53,0.4)" : "rgba(255,255,255,0.1)"}`,
                  borderRadius: "100px", padding: "6px 14px 6px 6px",
                  cursor: "pointer", transition: "all 0.3s ease",
                }}
                whileHover={{ background: "rgba(255,107,53,0.1)", borderColor: "rgba(255,107,53,0.35)" }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Avatar circle */}
                <div style={{
                  width: "34px", height: "34px",
                  background: "linear-gradient(135deg, #ff6b35, #ff4500)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "13px", fontWeight: 800, color: "#fff",
                  flexShrink: 0,
                }}>
                  {getInitials(user.name)}
                </div>
                <span style={{ color: "#f0f0f5", fontSize: "13px", fontWeight: 600, maxWidth: "100px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {user.name?.split(" ")[0] || "User"}
                </span>
                {/* Arrow */}
                <motion.span
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "10px", lineHeight: 1 }}
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  ▼
                </motion.span>
              </motion.button>

              {/* DROPDOWN PANEL */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    style={{
                      position: "absolute", top: "calc(100% + 12px)", right: 0,
                      background: "rgba(18, 18, 26, 0.98)",
                      backdropFilter: "blur(24px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "20px",
                      minWidth: "240px",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,107,53,0.08)",
                      overflow: "hidden",
                      zIndex: 100,
                    }}
                  >
                    {/* User Info Header */}
                    <div style={{
                      padding: "20px 20px 16px",
                      borderBottom: "1px solid rgba(255,255,255,0.07)",
                      background: "linear-gradient(135deg, rgba(255,107,53,0.08), rgba(255,65,0,0.04))",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{
                          width: "46px", height: "46px",
                          background: "linear-gradient(135deg, #ff6b35, #ff4500)",
                          borderRadius: "14px",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "18px", fontWeight: 800, color: "#fff",
                          boxShadow: "0 4px 16px rgba(255,107,53,0.4)",
                          flexShrink: 0,
                        }}>
                          {getInitials(user.name)}
                        </div>
                        <div style={{ overflow: "hidden" }}>
                          <div style={{ color: "#f0f0f5", fontWeight: 700, fontSize: "15px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {user.name || "User"}
                          </div>
                          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", marginTop: "2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {user.email || ""}
                          </div>
                        </div>
                      </div>
                      {user.isAdmin && (
                        <div style={{
                          marginTop: "10px",
                          display: "inline-flex", alignItems: "center", gap: "5px",
                          background: "rgba(255,209,102,0.12)", border: "1px solid rgba(255,209,102,0.25)",
                          padding: "3px 10px", borderRadius: "100px",
                          fontSize: "11px", color: "#ffd166", fontWeight: 600,
                        }}>
                          ⭐ Admin
                        </div>
                      )}
                    </div>

                    {/* Menu Items */}
                    <div style={{ padding: "10px 10px" }}>
                      {[
                        { icon: "👤", label: "My Profile", path: "/profile" },
                        { icon: "📦", label: "My Orders", path: "/orders" },
                        { icon: "🍔", label: "Browse Menu", path: "/foods" },
                        { icon: "🛡️", label: "Admin Panel", path: "/manage-food" },
                      ].map((item) => (
                        <Link to={item.path} key={item.label} onClick={() => setDropdownOpen(false)}>
                          <motion.div
                            style={{
                              display: "flex", alignItems: "center", gap: "12px",
                              padding: "11px 14px", borderRadius: "12px",
                              color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: 500,
                              cursor: "pointer", transition: "all 0.2s",
                            }}
                            whileHover={{ background: "rgba(255,107,53,0.1)", color: "#fff", x: 3 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <span style={{ fontSize: "16px", width: "22px", textAlign: "center", flexShrink: 0 }}>{item.icon}</span>
                            {item.label}
                          </motion.div>
                        </Link>
                      ))}
                    </div>

                    {/* Divider */}
                    <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", margin: "0 10px" }} />

                    {/* Logout */}
                    <div style={{ padding: "10px" }}>
                      <motion.button
                        onClick={handleLogout}
                        style={{
                          width: "100%", padding: "11px 14px",
                          display: "flex", alignItems: "center", gap: "12px",
                          background: "transparent", border: "none", borderRadius: "12px",
                          color: "#ff6b6b", fontSize: "14px", fontWeight: 600,
                          cursor: "pointer", textAlign: "left",
                        }}
                        whileHover={{ background: "rgba(255,59,48,0.12)", x: 3 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span style={{ fontSize: "16px", width: "22px", textAlign: "center" }}>🚪</span>
                        Logout
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            /* ===== LOGIN / SIGNUP BUTTONS ===== */
            <>
              <Link to="/login">
                <motion.button
                  style={{ padding: "9px 20px", borderRadius: "100px", border: "1px solid rgba(255,107,53,0.5)", background: "transparent", color: "#ff6b35", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}
                  whileHover={{ background: "rgba(255,107,53,0.1)", borderColor: "#ff6b35", boxShadow: "0 0 20px rgba(255,107,53,0.2)" }}
                  whileTap={{ scale: 0.95 }}>
                  Login
                </motion.button>
              </Link>
              <Link to="/register">
                <motion.button
                  style={{ padding: "9px 20px", borderRadius: "100px", border: "none", background: "linear-gradient(135deg, #ff6b35, #ff4500)", color: "#fff", fontSize: "13px", fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 20px rgba(255,107,53,0.35)" }}
                  whileHover={{ scale: 1.05, boxShadow: "0 6px 30px rgba(255,107,53,0.5)" }}
                  whileTap={{ scale: 0.95 }}>
                  Sign Up
                </motion.button>
              </Link>
            </>
          )}

          {/* HAMBURGER */}
          <motion.button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: "none", flexDirection: "column", gap: "5px", background: "transparent", border: "none", cursor: "pointer", padding: "6px" }}
            whileTap={{ scale: 0.9 }}>
            {[0, 1, 2].map((i) => (
              <motion.span key={i}
                style={{ display: "block", width: "24px", height: "2px", background: "#ff6b35", borderRadius: "2px", transformOrigin: "center" }}
                animate={menuOpen ? (i === 0 ? { rotate: 45, y: 7 } : i === 1 ? { opacity: 0 } : { rotate: -45, y: -7 }) : { rotate: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }} />
            ))}
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ background: "rgba(10,10,15,0.98)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
            <div style={{ padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: "6px" }}>

              {/* Mobile user info */}
              {user && (
                <div style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  padding: "14px 16px", background: "rgba(255,107,53,0.08)",
                  border: "1px solid rgba(255,107,53,0.15)",
                  borderRadius: "14px", marginBottom: "8px",
                }}>
                  <div style={{ width: "40px", height: "40px", background: "linear-gradient(135deg, #ff6b35, #ff4500)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 800, color: "#fff", flexShrink: 0 }}>
                    {getInitials(user.name)}
                  </div>
                  <div>
                    <div style={{ color: "#f0f0f5", fontWeight: 700, fontSize: "14px" }}>{user.name}</div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>{user.email}</div>
                  </div>
                </div>
              )}

              {navLinks.map((link, i) => (
                <Link to={link.path} key={link.path}>
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                    style={{ padding: "13px 20px", borderRadius: "12px", color: isActive(link.path) ? "#ff6b35" : "rgba(255,255,255,0.75)", background: isActive(link.path) ? "rgba(255,107,53,0.1)" : "transparent", fontWeight: 500, fontSize: "15px", borderLeft: isActive(link.path) ? "3px solid #ff6b35" : "3px solid transparent" }}>
                    {link.label}
                  </motion.div>
                </Link>
              ))}

              {user ? (
                <motion.button onClick={handleLogout}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}
                  style={{ width: "100%", marginTop: "8px", padding: "13px 20px", borderRadius: "12px", background: "rgba(255,59,48,0.1)", border: "1px solid rgba(255,59,48,0.2)", color: "#ff6b6b", fontWeight: 600, fontSize: "14px", cursor: "pointer", textAlign: "left" }}>
                  🚪 Logout
                </motion.button>
              ) : (
                <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
                  <Link to="/login" style={{ flex: 1 }}>
                    <button style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid rgba(255,107,53,0.4)", background: "transparent", color: "#ff6b35", fontWeight: 600, fontSize: "14px", cursor: "pointer" }}>Login</button>
                  </Link>
                  <Link to="/register" style={{ flex: 1 }}>
                    <button style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg, #ff6b35, #ff4500)", color: "#fff", fontWeight: 600, fontSize: "14px", cursor: "pointer" }}>Sign Up</button>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) { .desktop-nav { display: none !important; } .hamburger { display: flex !important; } }
      `}</style>
    </motion.header>
  );
};

export default Header;