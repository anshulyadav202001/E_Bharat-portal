import { useState } from "react"
import "../components/header.css"
import logo1 from "../Images/logo1.png"

export default function Header() {

const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <img src={logo1} alt="logo-image" />
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">CATEGORIES</a>
          </li>
          <li>
            <a href="/contact">SECTOR</a>
          </li>
          <li>
            <a href="/contact">CONTRIBUTE</a>
          </li>
        </ul>
      </div>
    </nav>
  );
     }