import "./contract.css";
import PicLinkedIn from "../img/LinkedIn.png"
import PicGitHub from "../img/github.png"
import PicEmail from "../img/email.png"

const Contract = () => {
  return (
      <div className = "contract">
      <div className ="link-in">
          <img src={PicLinkedIn} alt="linkedIn" className="linkedin-img"/>
          <a href ="https://www.linkedin.com/in/jetpreeya-yawichai/" className="linkedin-a"> LinkedIn</a>
      </div>
      <div className ="gitHub">
      <img src={PicGitHub} alt="github" className="github-img"/>
          <a href ="https://github.com/Jetpreeya" className="github"> GitHub</a>
      </div>
      <div className ="gmail">
      <img src={PicEmail} alt="email" className="email-img"/>
      <a href = "mailto: Jetpreeya.y@gmail.com">Email</a>
      </div>
      </div>
    
  );
};

export default Contract;