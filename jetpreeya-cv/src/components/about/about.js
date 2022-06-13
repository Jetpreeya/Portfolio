import "./about.css";
import Pic from "../img/Jetpreeya.jpg"

const About = () => {
  return (
    <div className="About">
      <div className="Picture">
          <img src={Pic} alt="myImage" className="a-img"/>
      </div>
      <div className="Name">
        <h1>My name is Jetpreeya Yawichai.</h1>
        <h3>Front-end Web Developer</h3>
        <h4>Malmö Sweden</h4>
        </div>
    </div>

  );
};

export default About;