import { Link } from "react-router-dom";
import { MessageCircle, Calendar, MapPin } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        ✦ OUR FAMILY
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/gallery">Memories</Link>
        <Link to="/calendar">
          <Calendar size={16} />
          Calendar
        </Link>

        <Link to="/location">
          <MapPin size={16} />
          Map
        </Link>

        <Link to="/chat">
          <MessageCircle size={16} />
          Chat
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
