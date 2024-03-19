import React from "react";
import "../Css File/Footer.css";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="footer-row">
        <div className="footer-column-first">
          <div>Content 1</div>
          <div>Content 2</div>
        </div>
        <div className="footer-column-second">
          <div>Content 3</div>
          <div>Content 4</div>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-column-first">
          <div>Content 5</div>
          <div>Content 6</div>
        </div>
        <div className="footer-column-second">
          <div>Content 7</div>
          <div>Content 8</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
