"use client";

import Image from "next/image";
import { motion } from "motion/react";

import css from "./About.module.css";

const aboutImages = [
  {
    src: "/img/about/about-1.webp",
    alt: "MMA Training bei Strikebull MMA Club",
  },
  {
    src: "/img/about/about-2.webp",
    alt: "Training im Strikebull MMA Club",
  },
  {
    src: "/img/about/about-3.webp",
    alt: "Strikebull MMA Club Atmosphäre",
  },
];

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className={css.about_section}
      id="about"
    >
      <div className={`container ${css.about_container}`}>
        <div className={css.about_wrapper}>
          <p className={css.about_text}>UNSERE GESCHICHTE</p>

          <h2 className={css.about_title}>ÜBER UNSEREN CLUB</h2>

          <p className={css.about_description}>
            Strikebull ist ein moderner MMA-Club für alle – von Anfängern bis
            hin zu professionellen Athleten. Hochwertiges Coaching, eine
            unterstützende Community und der Fokus auf persönliche
            Weiterentwicklung stehen bei uns im Mittelpunkt.
          </p>

          <a className={css.about_btn_learn} href="/more-info">
            MEHR ERFAHREN
          </a>
        </div>

        <div className={css.about_gallery}>
          {aboutImages.map((image) => (
            <div className={css.about_gallery_item} key={image.src}>
              <Image
                className={css.about_img}
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
