import "./aboutMe.css";

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <div className="Education">
        <h2>Education</h2>
      </div>
      <div className="Education-list">
        <ul>
          <li><h3>Programmer course .NET C#. </h3>
            <p>April 2022 - Now : Lexicon Malmö, Sweden.</p></li>
          <li><h3>Fullslack web developer intensive course.</h3>
            <p>August 2021- March 2022 : FooCoding Malmö, Sweden.</p></li>
          <li> <h3>Bachelor Degree of Economics.</h3>
            <p>May 2013- December 2016 : Chiang Mai University, Thailand.</p></li>
        </ul>
      </div>

      <div className="Experience">
        <h2>Experience</h2>
      </div>
      <div className="Experience-list">
        <ul>
          <li><h3>Manager </h3>
            <p>December 2018 - December 2020 : DoiChaang Cafe, Thailand.</p></li>
        </ul>
      </div>
    </div>

  );
};

export default AboutMe;