import FamilyMembers from "../components/FamilyMembers";

import "./Dashboard.css";

function Dashboard({ user }) {
  return (
    <main className="dashboard">
      {/* =====================================
          CINEMATIC HERO
      ===================================== */}

      <section className="dashboard-hero">
        <div className="dashboard-hero-image">
          <img src="/images/family.jpg" alt="Our family" />
        </div>

        <div className="dashboard-hero-overlay"></div>

        <div className="dashboard-hero-content">
          <p>WELCOME TO OUR PRIVATE SPACE</p>

          <h1>
            The Family
            <br />
            <em>Archive.</em>
          </h1>

          <span>Memories that belong to us.</span>
        </div>
      </section>

      {/* =====================================
          FAMILY MEMBERS
      ===================================== */}

      <FamilyMembers />
    </main>
  );
}

export default Dashboard;
