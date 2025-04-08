import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  // Function to handle navigation
  const handleNavClick = (to) => {
    closeMenu();
    if (!isHomePage) {
      // If not on home page, navigate to home page first
      window.location.href = `/#${to}`;
    }
  };

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="/img/logo.png" alt="Logo" width="50" height="50" />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            {isHomePage ? (
              <ScrollLink
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="navbar--content"
              >
                Home
              </ScrollLink>
            ) : (
              <RouterLink
                to="/#heroSection"
                className="navbar--content"
                onClick={closeMenu}
              >
                Home
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Experience"
                className="navbar--content"
              >
                Experience
              </ScrollLink>
            ) : (
              <RouterLink
                to="/#Experience"
                className="navbar--content"
                onClick={closeMenu}
              >
                Experience
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="navbar--content"
              >
                About Me
              </ScrollLink>
            ) : (
              <RouterLink
                to="/#AboutMe"
                className="navbar--content"
                onClick={closeMenu}
              >
                About Me
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="mySkills"
                className="navbar--content"
              >
                Skills
              </ScrollLink>
            ) : (
              <RouterLink
                to="/#mySkills"
                className="navbar--content"
                onClick={closeMenu}
              >
                Skills
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="navbar--content"
              >
                Projects
              </ScrollLink>
            ) : (
              <RouterLink
                to="/#MyPortfolio"
                className="navbar--content"
                onClick={closeMenu}
              >
                Projects
              </RouterLink>
            )}
          </li>
        </ul>
        <a
          href="https://www.linkedin.com/in/kumkum-choudhary/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary mobile-only"
          onClick={closeMenu}
        >
          Contact Me
        </a>
      </div>
      <a
        href="https://www.linkedin.com/in/kumkum-choudhary/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-primary desktop-only"
      >
        Contact Me
      </a>
    </nav>
  );
}

export default Navbar;
