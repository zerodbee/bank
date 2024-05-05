import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <Link className="HeaderLink" to=" ">
        Калькуляторы
      </Link>
    </div>
  );
}

export default Header;
