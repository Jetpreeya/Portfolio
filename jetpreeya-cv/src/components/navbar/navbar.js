import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="TopNav">
      <nav className="navbar">
        <ul className="ulNav">
          <li className="home"><a href="/About"> Home</a></li>
          <li> <Link to="/AboutMe" target="_blank">About me </Link></li>
          <li>Projects</li>
          <li>Contract me</li>
        </ul>
      </nav>
    </div>

  );
};

export default Navbar;