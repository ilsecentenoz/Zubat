import { Link } from "gatsby";
import React from "react";
import Logo from "../images/logo-venis-white.svg";
import Point from "../images/point.svg";
import Fb from "../images/facebook.png";
import Ins from "../images/instagram.png";

const Footer = ({}) => (
  <footer>
    <div className="logo-footer">
      <img src={Logo} alt="logo" />
    </div>
    <div>
      <Link href="/#">Privacy Notice</Link>
    </div>
    <div className="disclaimer">
      <img src={Point} alt="icon" />
      <p>Headquartered in London, UK and We are located all over the world</p>
    </div>
    <div>
      <ul>
        <li>
          <img src={Fb} alt="icon" />
        </li>
        <li>
          <img src={Ins} alt="icon" />
        </li>
      </ul>
    </div>
  </footer>
);

Footer.defaultProps = {};

export default Footer;
