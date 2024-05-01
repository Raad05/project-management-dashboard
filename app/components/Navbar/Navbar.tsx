import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-center py-10">
      <Link className="mx-5" href="/login">
        Login
      </Link>
      <Link className="mx-5" href="/projects">
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;
