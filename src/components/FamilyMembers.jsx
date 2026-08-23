import { useState } from "react";
import familyMembers from "../data/family";

import "./FamilyMembers.css";

function FamilyMembers() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="family-section">
      {/* =========================================
          SECTION INTRODUCTION
      ========================================= */}

      <div className="family-section-heading">
        <div>
          <p className="section-eyebrow">THE PEOPLE BEHIND THE STORY</p>

          <h2>
            Our <em>Family.</em>
          </h2>
        </div>

        <p className="section-description">
          Six people. One story. Countless memories that continue to become part
          of our family history.
        </p>
      </div>

      {/* =========================================
          FAMILY GRID
      ========================================= */}

      <div className="family-cinematic-grid">
        {familyMembers.map((member, index) => (
          <article
            className={`family-photo-card card-${index + 1}`}
            key={member.id}
            onClick={() => setSelectedMember(member)}
          >
            {/* Photograph */}

            <div className="family-image-wrapper">
              <img src={member.image} alt={member.name} loading="lazy" />

              <div className="image-vignette"></div>

              <div className="image-number">0{index + 1}</div>
            </div>

            {/* Information */}

            <div className="family-card-content">
              <div className="family-role">{member.role}</div>

              <h3>{member.name}</h3>

              <p>{member.description}</p>

              <div className="family-quote">“{member.quote}”</div>

              <button className="view-memory">
                VIEW MEMORY
                <span>→</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* =========================================
          FULL SCREEN MEMBER VIEW
      ========================================= */}

      {selectedMember && (
        <div className="memory-modal" onClick={() => setSelectedMember(null)}>
          <button
            className="close-memory"
            onClick={() => setSelectedMember(null)}
          >
            ×
          </button>

          <div
            className="memory-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="memory-modal-image">
              <img src={selectedMember.image} alt={selectedMember.name} />
            </div>

            <div className="memory-modal-info">
              <span>{selectedMember.role}</span>

              <h2>{selectedMember.name}</h2>

              <p>{selectedMember.description}</p>

              <blockquote>“{selectedMember.quote}”</blockquote>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FamilyMembers;
