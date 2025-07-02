// src/pages/Gallery.js
import React, { useState } from 'react';

const images = [
  { src: '/APS1.jpg', caption: 'Assembly Program' },
  { src: '/APS2.jpg', caption: 'Morning Session' },
  { src: '/APS3.jpg', caption: 'Discipline Check' },
  { src: '/APS4.jpg', caption: 'Principal Addressing' },
  { src: '/CUL1.jpg', caption: 'Seerat E Nabi Program' },
  { src: '/CUL2.jpg', caption: 'Stage Performance' },
  { src: '/CUL3.jpg', caption: 'Teacher Address' },
  { src: '/CUL4.jpg', caption: 'Program Glimpse' },
  { src: '/CUL5.jpg', caption: 'Program Glimpse' },
  { src: '/CUL6.jpg', caption: 'Attended by Students' },
  { src: '/CUL7.jpg', caption: 'Program Glimpse' },
  { src: '/CUL8.jpg', caption: 'Principal Addressing' },
  { src: '/CUL9.jpg', caption: 'Recitation' },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  const showImage = (index) => {
    setSelectedIndex(index);
    setLoading(true);
  };

  const closeModal = () => setSelectedIndex(null);

  const goLeft = () =>
    selectedIndex !== null && setSelectedIndex((selectedIndex - 1 + images.length) % images.length);

  const goRight = () =>
    selectedIndex !== null && setSelectedIndex((selectedIndex + 1) % images.length);

  return (
    <div className="container">
      <h2>School Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <div className="gallery-item" key={idx} onClick={() => showImage(idx)}>
            <img src={img.src} alt={img.caption} />
            <p className="caption">{img.caption}</p>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="lightbox" onClick={closeModal}>
          <span className="arrow left" onClick={(e) => { e.stopPropagation(); goLeft(); }}>&#10094;</span>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {loading && <div className="loader"></div>}
            <img
              src={images[selectedIndex].src}
              alt="preview"
              onLoad={() => setLoading(false)}
              style={{ display: loading ? 'none' : 'block' }}
            />
            <p className="caption">{images[selectedIndex].caption}</p>
          </div>
          <span className="arrow right" onClick={(e) => { e.stopPropagation(); goRight(); }}>&#10095;</span>
          <span className="close" onClick={closeModal}>&times;</span>
        </div>
      )}
    </div>
  );
};

export default Gallery;
