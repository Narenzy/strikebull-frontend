"use client";

import { motion } from "motion/react";

import { useContactRequestStore } from "@/lib/store/contactRequestStore";

import css from "./Hero.module.css";

export default function Hero() {
  const setSelectedPlanId = useContactRequestStore(
    (state) => state.setSelectedPlanId,
  );

  const setRequestType = useContactRequestStore(
    (state) => state.setRequestType,
  );

  const handleFreeTrialClick = () => {
    setSelectedPlanId(null);
    setRequestType("trial");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className={css.hero_section}
      id="hero"
    >
      <div className={`container ${css.hero_container}`}>
        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className={css.hero_title}
        >
          STRIKEBULL MMA CLUB
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={css.hero_text_under}
        >
          Mehr als nur ein Fitnessstudio. Ein Ort, an dem du stärker wirst,
          deine Fähigkeiten verbesserst und mit einem klaren Ziel trainierst.
        </motion.p>

        <div className={css.hero_action}>
          <a
            href="#contacts"
            className={css.hero_btn_book}
            onClick={handleFreeTrialClick}
          >
            GRATIS PROBETRAINING BUCHEN
          </a>

          <a href="#about" className={css.hero_btn_learn}>
            MEHR ERFAHREN
          </a>
        </div>
      </div>
    </motion.section>
  );
}
