import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const slides = [
  "/images/family.jpg",
  "/images/mum.jpg",
  "/images/dad.jpg",
  "/images/lucky.jpg",
  "/images/jones.jpg",
  "/images/esther.jpg",
  "/images/sifa.jpg",
];

function CinematicSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((previous) => (previous + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cinematic-slider">
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[index]}
          src={slides[index]}
          initial={{
            opacity: 0,
            scale: 1.1,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.05,
          }}
          transition={{
            duration: 1.2,
          }}
        />
      </AnimatePresence>
    </div>
  );
}

export default CinematicSlider;
