function PhotoModal({ photo, onClose }) {
  if (!photo) {
    return null;
  }

  return (
    <div className="photo-modal" onClick={onClose}>
      <button className="close-button" onClick={onClose}>
        ×
      </button>

      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <img src={photo.image} alt={photo.title} />

        <div className="modal-caption">
          <span>{photo.year}</span>

          <h2>{photo.title}</h2>

          <p>{photo.caption}</p>
        </div>
      </div>
    </div>
  );
}

export default PhotoModal;
