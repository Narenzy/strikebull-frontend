"use client";

import { motion } from "motion/react";

import { useContactRequestStore } from "@/lib/store/contactRequestStore";

import css from "./FreeTrial.module.css";

export default function FreeTrial() {
  const setSelectedPlanId = useContactRequestStore(
    (state) => state.setSelectedPlanId,
  );

  const setRequestType = useContactRequestStore(
    (state) => state.setRequestType,
  );

  const handleFreeTrialClick = () => {
    setSelectedPlanId(null);
    setRequestType("trial");

    document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={css.freetrial_section}
      id="free-trial"
    >
      <div className={`container ${css.freetrial_container}`}>
        <p className={css.freetrial_label}>JETZT STARTEN</p>

        <h2 className={css.freetrial_title}>GRATIS PROBETRAINING</h2>

        <p className={css.freetrial_description}>
          Lerne unsere Trainer kennen, erlebe die Atmosphäre und finde das
          passende Programm für dich.
        </p>

        <button
          className={css.freetrial_btn}
          type="button"
          onClick={handleFreeTrialClick}
        >
          GRATIS PROBETRAINING
        </button>
      </div>
    </motion.section>
  );
}
