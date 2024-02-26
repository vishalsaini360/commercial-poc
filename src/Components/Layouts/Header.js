import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <nav className="navbar navbar-expand-lg posit">
        <a className={`navbar-brand ${styles.header_a}`} href="#">
          <img src='/images/logo.png' className={styles.header_logo} />
        </a>

        <div className="navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className={`navbar-nav ml-auto ${styles.header_ul}`}>
            <li className="nav-item">
              <a className={`nav-link ${styles.text_color}`} href="#">Vehicle Range</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.text_color}`} href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.text_color}`} href="#">Rewards Program</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

  )
}

export default Header;