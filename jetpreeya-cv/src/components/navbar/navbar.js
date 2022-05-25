import "./navbar.css";

const Navbar = () => {
  return (
    <div className="TopNav">
      <nav className="navbar">
        <ul className="ulNav">
          <li className="home"><a href="/About"> Home</a></li>
          <li>About me</li>
          <li>Projects</li>
          <li>Contract me</li>
        </ul>
      </nav>
    </div>

  );
};

export default Navbar;