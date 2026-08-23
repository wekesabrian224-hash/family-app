import { motion } from "motion/react";
import { familyMembers } from "../data/family";

function FamilyMembers() {
  return (
    <section className="family-section">
      <div className="section-heading">
        <p>THE PEOPLE</p>
        <h2>Our Family</h2>
      </div>

      <div className="family-grid">
        {familyMembers.map((member, index) => (
          <motion.div
            className="member-card"
            key={member.id}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.1,
            }}
          >
            <img src={member.image} alt={member.name} />

            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FamilyMembers;
