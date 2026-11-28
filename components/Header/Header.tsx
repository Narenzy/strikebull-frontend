"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

import css from "./Header.module.css";
import Link from "next/link";

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
        <Link
          href="/"
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
        </Link>

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

          <Link href="/" className={css.header_link} onClick={handleNavClick}>
            Startseite
          </Link>

          <Link
            href="/#about"
            className={css.header_link}
            onClick={handleNavClick}
          >
            Über uns
          </Link>

          <Link
            href="/#programs"
            className={css.header_link}
            onClick={handleNavClick}
          >
            Programme
          </Link>

          <Link
            href="/#classes"
            className={css.header_link}
            onClick={handleNavClick}
          >
            Trainingsplan
          </Link>

          <Link
            href="/#contacts"
            className={css.header_link}
            onClick={handleNavClick}
          >
            Kontakt
          </Link>
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
