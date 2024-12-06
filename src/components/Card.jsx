import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "../css/style.css";

function Card({ time, imgSrc, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      transition={{ layout: { duration: 0.5, type: "spring" } }}
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="card"
      style={{
        
        borderRadius: "1rem",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
        cursor: "pointer",
        background: "white",
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <motion.h2 layout="position" style={{ marginBottom: "1rem" }}>
        {time}
      </motion.h2>

      {/* Image */}
      <motion.img
        src={imgSrc}
        alt={time}
        layout="position"
      />

      <AnimatePresence>
        {/* Expanded Content */}
        {isOpen && (
          <motion
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            className="expand"
          >
            <p>{description}</p>
          </motion>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Card;
