import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" style={{ marginRight: 20 }}>
        Home
      </Link>
      <Link to="/videos">Videos</Link>
    </nav>
  );
}
