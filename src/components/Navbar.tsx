import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

export function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrolling(prevScrollPos <= currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar sticky-top navbar-expand-lg navbar-dark bg-black bg-nav ${
        scrolling ? "navbar-hidden" : ""
      }`}
    >
      <a className="navbar-brand pl-4" href="#">
        <img
          src={logo}
          className="img-fluid"
          width="80"
          height="70"
          alt="Logo"
        />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse pr-4" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a className="nav-link active" href="#home">
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-link" href="#products">
            Products
          </a>
          <a className="nav-link" href="#promo">
            Promo
          </a>
          <a className="nav-link" href="#contacts">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
