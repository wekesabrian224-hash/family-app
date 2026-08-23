import { motion } from "motion/react";

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-image"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <p className="eyebrow">OUR STORY</p>

        <h1>
          Six people.
          <br />
          One beautiful story.
        </h1>

        <p>A private place for our memories, moments and conversations.</p>

        <a href="#memories" className="hero-button">
          Explore Our Story
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
