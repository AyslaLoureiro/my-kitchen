import headerimg from "../images/headerimg1.png";
import { useState } from "react";
import "../blocks/header.css";

export default function Header({ onSignUpOpenClick, onSignInOpenClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <img src={headerimg} className="header-img" alt="logo"></img>

      <button className="burguer-button" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="burguer-line"></span>
        <span className="burguer-line"></span>
        <span className="burguer-line"></span>
      </button>

      <div className={`header-button-container ${menuOpen ? "open" : ""}`}>
        <button className="header-button" onClick={() => setMenuOpen(false)}>
          Home
        </button>

        <button
          className="header-button"
          onClick={() => {
            onSignInOpenClick(true);
            setMenuOpen(false);
          }}
        >
          Sign in
        </button>

        <button
          className="header-button"
          onClick={() => {
            onSignUpOpenClick(true);
            setMenuOpen(false);
          }}
        >
          Sign up
        </button>
      </div>
    </header>
  );
}
