"use client";

import Image from "next/image";
import { motion } from "motion/react";

import css from "./Programs.module.css";

export default function Programs() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className={css.programs_section}
      id="programs"
    >
      <div className={`container ${css.programs_container}`}>
        <div className={css.programs_heading}>
          <p className={css.programs_label}>TRAINING BEI STRIKEBULL</p>

          <h2 className={css.programs_title}>MMA TRAINING</h2>
        </div>

        <article className={css.programs_content}>
          <div className={css.programs_image_wrapper}>
            <Image
              className={css.programs_image}
              src="/img/programs/program-mma.webp"
              alt="MMA-Training bei Strikebull MMA Club"
              width={1200}
              height={900}
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 48vw"
            />
          </div>

          <div className={css.programs_info}>
            <p className={css.programs_category}>MIXED MARTIAL ARTS</p>

            <h3 className={css.programs_subtitle}>
              KOMPLETTES TRAINING FÜR KÖRPER UND TECHNIK
            </h3>

            <p className={css.programs_description}>
              MMA verbindet verschiedene Kampfsportdisziplinen zu einem
              vielseitigen und anspruchsvollen Training. Bei Strikebull lernst
              du Schlagtechniken, Tritte, Clinch, Takedowns und Bodenkampf
              strukturiert und praxisnah.
            </p>

            <p className={css.programs_description}>
              Das Training eignet sich sowohl für Einsteiger als auch für
              Fortgeschrittene. Neben Technik und Koordination entwickelst du
              Kraft, Ausdauer, Beweglichkeit und mentale Belastbarkeit.
            </p>

            <ul className={css.programs_list}>
              <li>Standkampf und Kombinationen</li>
              <li>Clinch und Takedowns</li>
              <li>Grappling und Bodenkampf</li>
              <li>Kondition und funktionelle Fitness</li>
            </ul>

            <a className={css.programs_link} href="#classes">
              TRAININGSPLAN ANSEHEN
            </a>
          </div>
        </article>
      </div>
    </motion.section>
  );
}
