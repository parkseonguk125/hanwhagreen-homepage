import { useEffect, useState } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { footerInfo } from "../data/mock";
import styles from "./Footer.module.css";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.logo}>
          <span className={styles.logoHan}>한화</span>
          <span className={styles.logoGreen}>그린</span>
        </div>

        <nav className={styles.links}>
          <a href="#">회사소개</a>
          <a href="#">보유기술</a>
          <a href="#">오시는길</a>
        </nav>

        <div className={styles.family}>
          <span>FAMILY SITE</span>
          <ul>
            <li>
              <a href="https://www.naver.com" target="_blank" rel="noopener noreferrer">
                NAVER
              </a>
            </li>
            <li>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                GOOGLE
              </a>
            </li>
            <li>
              <a href="https://www.daum.net" target="_blank" rel="noopener noreferrer">
                DAUM
              </a>
            </li>
          </ul>
        </div>

        <ul className={styles.contact}>
          <li>
            <MdLocationOn />
            {footerInfo.address}
          </li>
          <li>
            <MdEmail />
            {footerInfo.email}
          </li>
        </ul>

        <p className={styles.copy}>
          Copyright © (주)한화그린 All Rights Reserved.
        </p>

        <div className={styles.phone}>
          <MdPhone />
          <div>
            <p className={styles.phoneLabel}>대표전화 {footerInfo.phone}</p>
            <p className={styles.phoneHours}>{footerInfo.hours}</p>
          </div>
        </div>
      </div>

      {showTop && (
        <button
          type="button"
          className={styles.topBtn}
          onClick={scrollToTop}
          aria-label="상단으로"
        >
          <HiOutlineArrowUp size={22} />
          <span>상단으로</span>
        </button>
      )}
    </footer>
  );
}
