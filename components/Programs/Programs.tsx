"use client";

import Image from "next/image";
import { motion } from "motion/react";

import css from "./Programs.module.css";

export default function Programs() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className={css.section_programs}
      id="programs"
    >
      <div className={`container ${css.programs_container}`}>
        <p className={css.programs_label}>TRAINING BEI STRIKEBULL</p>

        <h2 className={css.programs_title}>MMA TRAINING</h2>

        <div className={css.classes_items}>
          <ul className={css.classes_list}>
            <li className={css.classes_item}>
              <Image
                className={css.classes_image}
                src="/images/prog-desk-img1x.webp"
                alt="MMA-Training bei Strikebull MMA Club"
                width={1200}
                height={800}
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 100vw, 1200px"
              />

              <h3 className={css.classes_title}>MMA</h3>

              <p className={css.classes_description}>
                Schlagtechniken, Grappling und praxisnahe Kampffähigkeiten.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
