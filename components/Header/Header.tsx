"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

import css from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const mobileMedia = window.matchMedia("(max-width: 767px)");

    const updateBodyScroll = () => {
      document.body.style.overflow =
        isMenuOpen && mobileMedia.matches ? "hidden" : "";
    };

    updateBodyScroll();

    mobileMedia.addEventListener("change", updateBodyScroll);

    return () => {
      document.body.style.overflow = "";
      mobileMedia.removeEventListener("change", updateBodyScroll);
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className={css.header}
      id="home"
    >
      <div className={`container ${css.header_container}`}>
        <a
          href="#hero"
          className={css.logo}
          onClick={handleNavClick}
          aria-label="Strikebull MMA Club Startseite"
        >
          <Image
            src="/svg/bull-logo.svg"
            alt="Strikebull MMA Club"
            width={120}
            height={60}
            className={css.header_logo}
            priority
          />
        </a>

        <nav
          id="main-navigation"
          className={`${css.nav} ${isMenuOpen ? css.open : ""}`}
          aria-label="Main navigation"
        >
          {isMenuOpen && (
            <button
              type="button"
              className={css.close_button}
              aria-label="Close navigation"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>
          )}

          <a href="#hero" className={css.header_link} onClick={handleNavClick}>
            Startseite
          </a>

          <a href="#about" className={css.header_link} onClick={handleNavClick}>
            Über uns
          </a>

          <a
            href="#classes"
            className={css.header_link}
            onClick={handleNavClick}
          >
            Trainingsplan
          </a>

          <a
            href="#contacts"
            className={css.header_link}
            onClick={handleNavClick}
          >
            Kontakt
          </a>

          <a
            href="#programs"
            className={css.header_link}
            onClick={handleNavClick}
          >
            Programme
          </a>
        </nav>

        {!isMenuOpen && (
          <button
            type="button"
            className={css.burger_button}
            aria-label="Open navigation"
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              className={css.burger_button_img}
              width="32"
              height="32"
              aria-hidden="true"
            >
              <use href="/svg/sprite.svg#icon-burger" />
            </svg>
          </button>
        )}
      </div>
    </motion.header>
  );
}
