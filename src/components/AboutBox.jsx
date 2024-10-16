import React from "react";
import cv_Ratchanon from "../assets/dowload/cv_Ratchanon.pdf";
const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        {/** About Me */}
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              Hi, I'm Ratchanon, a passionate software developer with a focus on
              problem-solving and creating innovative solutions. I have
              experience with programming languages such as Python, JavaScript,
              and C++, and I’m especially interested in areas like Machine
              Learning, Web Development, and Automation. I love applying my
              coding skills to build efficient, impactful projects, and I’m
              always looking to expand my knowledge in emerging technologies.
              Feel free to connect with me if you'd like to discuss tech or
              collaborate on projects!
            </p>
            <div className="about-btn">
              <a href={cv_Ratchanon} target="_blank"></a>
            </div>
          </div>
        </div>
        {/** Skills */}
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>FIGMA</span>
            </div>

            <div className="skills-header">
              <h3>Blackend</h3>
            </div>
            <div className="skills-list">
              <span>JAVASCRIPT</span>
              <span>PHP</span>
              <span>PYTHON</span>
            </div>
            <div className="skills-header">
              <h3>DataBase</h3>
            </div>
            <div className="skills-list">
              <span>MYSQL</span>
              <span>MONGODB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
