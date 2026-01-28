import { motion } from "framer-motion";
import heroBg from "../assets/Gym_.webp";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-text-box">
          <h1>Transform Your Body Today</h1>
          <p>Premium fitness space. Calm. Focused. Powerful.</p>
        

        <div className="hero-buttons">
          <button className="btn primary">Join Now</button>
          <button className="btn ghost">Free Trial</button>
        </div></div>
      </motion.div>
    </section>
  );
}
