import { motion } from "motion/react";

function PhotoCard({ photo, onClick }) {
  return (
    <motion.article
      className="photo-card"
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.4,
      }}
      onClick={() => onClick(photo)}
    >
      <img src={photo.image} alt={photo.title} />

      <div className="photo-overlay">
        <div>
          <span>{photo.year}</span>

          <h3>{photo.title}</h3>

          <p>{photo.caption}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default PhotoCard;
