/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import Form from "./form";
import Logo from "../images/logo-venis-black.svg";

const Layout = ({}) => {
  return (
    <>
      <section className="layout">
        <header>
          <img src={Logo} alt="logo" />
        </header>
        <div className="grid">
          <div className="contentText">
            <h1>Reconnect with your skin</h1>
            <div className="row">
              <ul>
                <li>Anti age</li>
                <li>Light</li>
                <li>Facials</li>
              </ul>
              <ul>
                <li>Spot reduction</li>
                <li>Pore reduction</li>
                <li>Skin moistening</li>
              </ul>
            </div>
          </div>
          <Form />
        </div>
        <Footer />
      </section>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
