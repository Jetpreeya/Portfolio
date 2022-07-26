import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="TopNav">
      <nav className="navbar">
        <ul className="ulNav">
          <li className="home"><a href="/About"> Home</a></li>
          <li> <Link to="/AboutMe" >About me </Link></li>
          <li> <Link to="/Projects" >Projects</Link></li>
          <li><Link to="/Contract" >Contract me </Link></li>
        </ul>
      </nav>
    </div>

  );
};

export default Navbar;