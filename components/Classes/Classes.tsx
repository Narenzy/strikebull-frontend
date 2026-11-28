"use client";

import { useState } from "react";
import { motion } from "motion/react";

import type { Category } from "@/types/classes";
import { categories, classesShedule } from "@/lib/data/classes";

import css from "./Classes.module.css";

export default function Classes() {
  const [activeCategory, setActiveCategory] = useState<Category>("Alle");

  const filteredClasses =
    activeCategory === "Alle"
      ? classesShedule
      : classesShedule.filter((item) => item.discipline === activeCategory);

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className={css.classes_section}
      id="classes"
    >
      <div className={`container ${css.classes_container}`}>
        <div className={css.classes_header}>
          <div className={css.classes_text_container}>
            <p className={css.classes_label}>DEIN TRAINING PLANEN</p>

            <h2 className={css.classes_title}>TRAININGSPLAN</h2>

            <p className={css.classes_description}>
              Finde das passende Training und plane deine Woche bei Strikebull.
            </p>
          </div>

          <div className={css.classes_filter}>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`${css.classes_btn} ${
                  activeCategory === category ? css.classes_btn_active : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className={css.classes_info_container}>
          <div className={css.classes_table_header}>
            <span>TAG</span>
            <span>ZEIT</span>
            <span>TRAINING</span>
          </div>

          <ul className={css.classes_list}>
            {filteredClasses.map((item) => (
              <motion.li
                layout
                key={`${item.day}-${item.time}-${item.discipline}`}
                className={css.classes_item}
              >
                <span className={css.classes_day}>{item.day}</span>

                <span className={css.classes_time}>{item.time}</span>

                <strong className={css.classes_discipline}>
                  {item.discipline}
                </strong>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
