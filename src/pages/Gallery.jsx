import { useState } from "react";
import { photos } from "../data/photos";
import PhotoCard from "../components/PhotoCard";
import PhotoModal from "../components/PhotoModal";

function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <main className="gallery-page">
      <div className="section-heading">
        <p>MEMORIES</p>
        <h1>Our Story</h1>
      </div>

      <div className="photo-grid">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} onClick={setSelectedPhoto} />
        ))}
      </div>

      <PhotoModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </main>
  );
}

export default Gallery;
