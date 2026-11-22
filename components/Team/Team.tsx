"use client";

import Image from "next/image";
import { motion } from "motion/react";

import css from "./Team.module.css";

export default function Team() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
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
        <p className={css.team_label}>DAS TEAM HINTER STRIKEBULL</p>

        <h2 className={css.team_title}>UNSER TEAM</h2>

        <div className={css.team_items}>
          <ul className={css.team_list}>
            <li className={css.team_item}>
              <Image
                className={css.team_image}
                src="/images/chernenko_dmytro.webp"
                alt="Dmytro Chernenko, MMA trainer at Strikebull MMA Club"
                width={600}
                height={800}
                sizes="(max-width: 767px) 100vw, 600px"
              />

              <h3 className={css.team_member_name}>CHERNENKO DMYTRO</h3>

              <p className={css.team_description}>Cheftrainer / MMA Trainer</p>
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
