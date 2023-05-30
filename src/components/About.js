import React, { useState } from "react";
import jibonPic from "../assets/Jibon.jpg";
import devinPic from "../assets/Devin.jpeg";
import jorgePic from "../assets/Jorge.jpg";
import "./About.css";
import teamIcon from "../assets/Pursuit+Wordmark+White.png";

function PersonCard({ name, image, email, skillset, bio, githubLink }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`person-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="person-image" src={image} alt={name} />
          <h2>{name}</h2>
          <p className="person-title">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              Pursuit Fellow 9.5
            </a>
          </p>
        </div>
        <div className="flip-card-back">
          <div className="card-content">
            <h3>{name}</h3>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p className="person-skillset">
              <strong>Skillset:</strong> {skillset}
            </p>
          </div>
          <p className="person-bio">{bio}</p>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about-page">
      <h1>Creators</h1>
      <div className="person-cards">
        <PersonCard
          name="Jibon"
          image={jibonPic}
          email="jibonpaul@gmail.com"
          skillset={"JS, CSS, JavaScript, React, and others"}
          bio="Jibon is a passionate developer with expertise in frontend technologies."
          githubLink="https://github.com/JibonP"
        />
        <PersonCard
          name="Devin"
          image={devinPic}
          email="devinlewis@pursuit.org"
          skillset={"JS, CSS, JavaScript, React, and others"}
          bio="Devin is a skilled designer with a keen eye for aesthetics."
          githubLink="https://github.com/devinjlewis"
        />
        <PersonCard
          name="Jorge"
          image={jorgePic}
          email="jorgemoran@pursuit.org"
          skillset={"JS, CSS, JavaScript, React, and others"}
          bio="Jorge is a talented full-stack developer with experience in building scalable websites."
          githubLink="https://github.com/JorgeM419"
        />
      </div>
      <div className="project-summary">
        <h2>Project Summary</h2>
        <p>
          This project is a showcase of our team's skills and expertise in web
          development. We have combined our frontend and design knowledge to
          create an interactive and visually appealing website. Feel free to
          explore and learn more about our team members and their contributions
          to this project.
        </p>
        <img src={teamIcon} alt="Team Icon" className="team-icon" />
      </div>
    </div>
  );
}

export default About;
