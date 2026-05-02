import React from "react";
import { motion } from "framer-motion";
import "./main.css";

const Home = () => {
  return (
    <div className="home-container">
      
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            DeliciousDrop 🍔
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-subtitle"
          >
            Fresh Food Delivered To Your Doorstep
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hero-btn"
          >
            Order Now
          </motion.button>

        </div>
      </section>

      {/* SECTION 1 */}
      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>🍕 Popular Dishes</h2>
        <p>Explore our most loved and trending foods.</p>
      </motion.section>

      {/* SECTION 2 */}
      <motion.section 
        className="section alt"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <h2>🥗 Healthy Choices</h2>
        <p>Fresh and nutritious meals for a healthy lifestyle.</p>
      </motion.section>

      {/* SECTION 3 */}
      <motion.section 
        className="section"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <h2>🚀 Fast Delivery</h2>
        <p>Get your food delivered quickly and safely.</p>
      </motion.section>

      {/* SECTION 4 */}
      <motion.section 
        className="section alt"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2>💰 Best Prices</h2>
        <p>Affordable meals without compromising quality.</p>
      </motion.section>

      {/* SECTION 5 */}
      <motion.section 
        className="section"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <h2>⭐ Customer Reviews</h2>
        <p>See what our happy customers say about us.</p>
      </motion.section>

    </div>
  );
};

export default Home;