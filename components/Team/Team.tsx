"use client";

import Image from "next/image";
import { motion } from "motion/react";

import css from "./Team.module.css";

const experience = [
  {
    value: "MMA",
    label: "Training & Wettkampf",
  },
  {
    value: "01",
    label: "Cheftrainer",
  },
  {
    value: "100%",
    label: "Praxisorientiert",
  },
];

export default function Team() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      id="team"
      className={css.team_section}
    >
      <div className={`container ${css.team_container}`}>
        <div className={css.team_heading}>
          <p className={css.team_label}>DAS TEAM HINTER STRIKEBULL</p>

          <h2 className={css.team_title}>UNSER TEAM</h2>
        </div>

        <article className={css.team_profile}>
          <div className={css.team_image_wrapper}>
            <Image
              className={css.team_image}
              src="/img/team/chernenko-dmytro.webp"
              alt="Dmytro Chernenko, Cheftrainer beim Strikebull MMA Club"
              width={900}
              height={1200}
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 45vw, 420px"
            />
          </div>

          <div className={css.team_content}>
            <div className={css.team_content_header}>
              <p className={css.team_role}>CHEFTRAINER / MMA TRAINER</p>

              <h3 className={css.team_member_name}>DMYTRO CHERNENKO</h3>
            </div>

            <div className={css.team_text_block}>
              <p className={css.team_description}>
                Dmytro Chernenko verfügt über umfangreiche Erfahrung im
                Kampfsport und im Wettkampfumfeld. Als Cheftrainer begleitet er
                Athleten auf unterschiedlichen Leistungsstufen und verbindet
                technische Präzision mit einem strukturierten,
                praxisorientierten Trainingsansatz.
              </p>

              <p className={css.team_description}>
                Sein Fokus liegt auf der Entwicklung von Technik, Disziplin,
                körperlicher Vorbereitung und taktischem Verständnis. Dadurch
                schafft er ein Trainingsumfeld für Einsteiger und
                fortgeschrittene Sportler.
              </p>
            </div>

            <div className={css.team_stats}>
              {experience.map((item) => (
                <div className={css.team_stat} key={item.label}>
                  <span className={css.team_stat_value}>{item.value}</span>
                  <span className={css.team_stat_label}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </motion.section>
  );
}
