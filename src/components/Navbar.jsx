import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isPhotographyPage = location.pathname === "/photography";
  const isContactPage = location.pathname === "/contact";

  // Background image logic
  const backgroundImage = isPhotographyPage
    ? "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80')"
    : isContactPage
    ? "url('https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1920&q=80')"
    : "none";

  const isWhiteText = isPhotographyPage || isContactPage;

  return (
    <div
      className={`page-wrapper ${isWhiteText ? "has-bg" : ""}`}
      style={{ backgroundImage }}
    >
      <nav
        className={`navbar navbar-expand-lg fixed-top ivory-navbar ${
          isWhiteText ? "navbar-white text-white" : "navbar-black text-dark"
        }`}
      >
        <div className="container-fluid">
          {/* Center Logo for mobile */}
          <Link className="navbar-brand d-lg-none mx-auto" to="/">
            <h3 className={`m-0 ${isWhiteText ? "text-white" : "text-dark"}`}>
              IVORY <br />
              <small>FILMS</small>
            </h3>
          </Link>

          {/* Navbar toggler for mobile */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Navbar Content */}
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav mx-auto text-center gap-lg-4">
              {[
                { name: "Photography", link: "/photography" },
                { name: "Films", link: "/films" },
                { name: "Editorial", link: "/editorial" },
                { name: "Blogs", link: "/blogs" },
                { name: "Contact Us", link: "/contact" },
                { name: "FAQs", link: "/faqs" },
              ].map((item) => (
                <li className="nav-item" key={item.name}>
                  <Link
                    className={`nav-link ${isWhiteText ? "text-white" : "text-dark"}`}
                    to={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Center Logo (visible only on large screens) */}
            <div className="text-center ivory-logo d-none d-lg-block mx-auto">
              <h2 className={`${isWhiteText ? "text-white" : "text-dark"}`}>
                IVORY <br />
                <small>FILMS</small>
              </h2>
            </div>

            {/* Right Icons & Button */}
            <div className="d-flex align-items-center gap-3 justify-content-center mt-3 mt-lg-0">
              <i
                className={`bi bi-instagram ${isWhiteText ? "text-white" : "text-dark"}`}
                style={{ fontSize: "20px", cursor: "pointer" }}
              ></i>
              <button
                className={`btn ivory-btn ${isWhiteText ? "btn-outline-light" : "btn-dark"}`}
                onClick={() => navigate("/contact")}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Optional overlay for white text contrast */}
      {isWhiteText && <div className="page-overlay"></div>}
    </div>
  );
}

export default Navbar;
