// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import styles from "./Navbar.module.css";
// import logo from "../public/images/edubanc.svg"


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div>
            <img src='../public/images/edubanc.svg' alt="logo"/>
        </div>
        
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/about">
            Products
          </Link>
        </li>
        <li>
          <Link href="/about">
            Services
          </Link>
        </li>
        <li>
          <Link href="/about">
            Blog
          </Link>
        </li>
      </ul>
      <div>
        
      </div>
    </nav>
  );
};

export default Navbar;
