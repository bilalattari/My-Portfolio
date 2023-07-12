import { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { tony } from "./utils";

const Header = ({ headerColor, isTransparent }) => {
  useEffect(() => {
    tony.stickyNav();
    tony.scrollToActiveNav();
  }, []);

  return (
    <header>
      <Accordion>
        <nav
          className={`navbar header-nav header-${
            headerColor ? headerColor : "white"
          } ${isTransparent ? "header-transparent" : ""} navbar-expand-lg`}
        >
          <div className="container">
            {/* Brand */}
            <a className="navbar-brand" href="index.html">
              Bilal Raza <span className="theme-bg" />
            </a>
            {/* / */}
            {/* Mobile Toggle */}
            <Accordion.Toggle
              as="button"
              className="navbar-toggler"
              type="button"
              eventKey="toggle"
            >
              <span />
              <span />
              <span />
            </Accordion.Toggle>
            {/* / */}
            {/* Top Menu */}
            <Accordion.Collapse
              eventKey="toggle"
              className="navbar-collapse justify-content-end"
              id="navbar-collapse-toggle"
            >
              <ul className="navbar-nav ml-auto nav-ul">
                <li>
                  <a className="nav-link active" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#about">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#services">
                    services
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#work">
                    Portfolio
                  </a>
                </li>
               
                <li>
                  <a className="nav-link" href="#contactus">
                    Contact
                  </a>
                </li>
              </ul>
            </Accordion.Collapse>
            {/* / */}
          </div>
          {/* Container */}
        </nav>{" "}
        {/* Navbar */}
      </Accordion>
    </header>
  );
};
export default Header;
