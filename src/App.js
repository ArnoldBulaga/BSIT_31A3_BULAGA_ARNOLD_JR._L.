import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
const Home = () => (
  <div className="container mt-5">
    <h2>🏠 Home Page</h2>
    <p>Welcome to the Lyceum website!</p>
  </div>
);

const About = () => (
  <div className="container mt-5">
    <h2>📖 About Us</h2>
    <p>Learn more about Lyceum.</p>
  </div>
);

const Contact = () => (
  <div className="container mt-5">
    <h2>📞 Contact Us</h2>
    <p>Get in touch with us.</p>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Lyceum
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={toggleNavbar}>
                🏠 Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={toggleNavbar}>
                📖 About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={toggleNavbar}>
                📞 Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-dark text-light text-center p-3 mt-5">
    <p>&copy; {new Date().getFullYear()} Lyceum. All rights reserved.</p>
  </footer>
);

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
