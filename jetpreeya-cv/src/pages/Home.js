import React from "react";
import "../styles/Home.css";
import {FaGithub} from "react-icons/fa";
import {AiFillLinkedin, AiOutlineGoogle } from "react-icons/ai";


function Home(){
    return (
    <div className="home">
        <div className="about">
            <img src="https://avatars.githubusercontent.com/u/84719740?v=4" width="320" height="320"></img>
            <h2>Hi, My Name is Jetpreeya</h2>
            <div className="prompt">
                <p>Junior front-end developer</p>
                <a href="https://www.linkedin.com/in/jetpreeya-yawichai/"  target="_blank"><AiFillLinkedin /></a>
                <a href="https://github.com/Jetpreeya"><FaGithub/></a>
            </div>
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <ol className="list">
                <span>ReactJS, JavaScript, Database MySQL, HTML, CSS, NodeJS, C# .NET, Azure, GIT, Github</span>
            </ol>
        </div>
    </div>
    
    );
}

export default Home; 