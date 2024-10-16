import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-footer">
        <p>Ratchanon Leechareon</p>
      </div>
      <div className="middle-footer">
        <div className="footer-menu">
          <div className="footer_menu_list">
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Projects">Project</a>
            <a href="#Contact">Contact</a>
          </div>
        </div>
      </div>

      <div className="footer-social-icons">
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

      <div className="bottom-footer">
        <p>
          Copyright &copy;
          <a href="#Home" style={{ textDecoration: "none" }}>
            Ratchanon
          </a>{" "}
          All Right Reseved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
