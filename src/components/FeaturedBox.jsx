import React from "react";
import avatar from "../assets/images/me.jpg";

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Ratchanon Leechereon</span>
        </div>
        <div className="featured-name">
          I'm <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
            Ratchanon was a young aspiring programmer with a deep curiosity for
            technology. Ever since he was a child, he spent hours tinkering with
            computers, teaching himself how to code through online tutorials and
            experimenting with small projects. His dream was to create something
            that could make a difference in people's lives.
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Download CV <i className="uil uil-cloud-download"></i>
          </button>
        </div>

        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/tae_rcn_lcr/"></a>
            <i className="uil uil-instagram-alt"></i>
          </div>

          <div className="icon">
            <a href="https://www.facebook.com/profile.php?id=100019450442892&locale=th_TH"></a>
            <i className="uil uil-facebook"></i>
          </div>

          <div className="icon">
            <a href="https://github.com/013Ratchanon"></a>
            <i class="uil uil-github"></i>
          </div>
        </div>
      </div>

      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>

      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-angle-down"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
