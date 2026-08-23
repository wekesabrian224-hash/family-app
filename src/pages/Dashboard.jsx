import Hero from "../components/Hero";
import FamilyMembers from "../components/FamilyMembers";

function Dashboard() {
  return (
    <main>
      <Hero />

      <section id="memories">
        <FamilyMembers />
      </section>

      <section className="dashboard-message">
        <p className="eyebrow">OUR HOME</p>

        <h2>Every moment becomes a memory.</h2>

        <p>Keep our family connected, wherever we are.</p>
      </section>
    </main>
  );
}

export default Dashboard;
