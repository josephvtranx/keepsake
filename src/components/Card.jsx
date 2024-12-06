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
        padding: "1rem",
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
        style={{
          width: "100%",
          borderRadius: "0.5rem",
          objectFit: "cover",
        }}
      />

      <AnimatePresence>
        {/* Expanded Content */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            className="expand"
            style={{
              marginTop: "1rem",
              padding: "1rem",
              background: "rgba(240, 240, 240, 0.9)",
              borderRadius: "0.5rem",
            }}
          >
            <p>{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Card;
