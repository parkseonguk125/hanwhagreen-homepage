import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { topLinks, navGroups } from "../data/mock";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e) => {
    e.preventDefault();
  };

  return (
    <header className={styles.header} id="header">
      <div className={styles.innerTop}>
        <div className={`container ${styles.topRow}`}>
          <ul className={styles.tpLink}>
            {topLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.userBox}>
            <ul>
              <li>
                <a href="#" onClick={handleNavClick}>
                  로그인
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.mainBar}>
        <div className={`container ${styles.mainRow}`}>
          <a href="/" className={styles.logo}>
            <span className={styles.logoHan}>한화</span>
            <span className={styles.logoGreen}>그린</span>
          </a>

          <nav className={styles.desktopNav} aria-label="주 메뉴">
            {navGroups.map((group) => (
              <div key={group.title} className={styles.navItem}>
                <button type="button" className={styles.menuTit}>
                  {group.title}
                  <IoIosArrowDown />
                </button>
                <ul className={styles.subMenu}>
                  {group.items.map((item) => (
                    <li key={item}>
                      <a href="#" onClick={handleNavClick}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <button
            type="button"
            className={styles.hamburger}
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        {navGroups.map((group) => (
          <div key={group.title} className={styles.mobileGroup}>
            <p className={styles.mobileGroupTitle}>{group.title}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item}>
                  <a href="#" onClick={handleNavClick}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </header>
  );
}
