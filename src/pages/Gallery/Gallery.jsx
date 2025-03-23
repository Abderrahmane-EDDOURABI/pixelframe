import React, { useState } from "react";
import "./gallery.css";

import gallery1 from "../../assets/images/gallery__images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery__images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery__images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery__images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery__images/gallery5.jpg";
import gallery6 from "../../assets/images/gallery__images/gallery6.jpg";
import gallery7 from "../../assets/images/gallery__images/gallery7.jpg";
import gallery8 from "../../assets/images/gallery__images/gallery8.jpg";
import gallery9 from "../../assets/images/gallery__images/gallery9.jpg";
import gallery10 from "../../assets/images/gallery__images/gallery10.jpg";
import gallery11 from "../../assets/images/gallery__images/gallery11.jpg";
import gallery12 from "../../assets/images/gallery__images/e1.jpg";
import gallery13 from "../../assets/images/gallery__images/e2.jpg";
import gallery14 from "../../assets/images/gallery__images/e3.jpg";
import gallery15 from "../../assets/images/gallery__images/e4.jpg";
import gallery16 from "../../assets/images/gallery__images/e5.jpg";
import gallery17 from "../../assets/images/gallery__images/eh.jpg";
import gallery18 from "../../assets/images/gallery__images/ev.jpg";

const photos = [
  { id: 1, src: gallery1, category: "Mariage" },
  { id: 2, src: gallery2, category: "Portrait" },
  { id: 3, src: gallery3, category: "Nature" },
  { id: 4, src: gallery4, category: "Urbain" },
  { id: 5, src: gallery5, category: "Portrait" },
  { id: 6, src: gallery6, category: "Mariage" },
  { id: 7, src: gallery7, category: "Mariage" },
  { id: 8, src: gallery8, category: "Portrait" },
  { id: 9, src: gallery9, category: "Nature" },
  { id: 10, src: gallery10, category: "Urbain" },
  { id: 11, src: gallery11, category: "Portrait" },
  { id: 12, src: gallery12, category: "Portrait" },
  { id: 13, src: gallery13, category: "Mariage" },
  { id: 14, src: gallery14, category: "Mariage" },
  { id: 15, src: gallery15, category: "Portrait" },
  { id: 16, src: gallery16, category: "Nature" },
  { id: 17, src: gallery17, category: "Urbain" },
  { id: 18, src: gallery18, category: "Portrait" },
];
const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPhotos =
    selectedCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);
  return (
    <section className="gallery">
      <div className="container gallery-page">
        <h1>📸 Galerie</h1>
        <div className="filters">
          {["All", "Mariage", "Portrait", "Nature", "Urbain"].map((cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* <div className="photo-grid">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="photo-card">
              <img src={photo.src} alt={photo.category} />
            </div>
          ))}
        </div> */}
        <div className="exhibitions__gallery">
          {filteredPhotos.map((photo) => {
            return (
              <article>
                <img src={photo.src} alt="exhibition__gallery" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
