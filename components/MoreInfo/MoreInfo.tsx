import { teamMembers } from "@/lib/data/teamMembers";
import Image from "next/image";
import css from "@/components/MoreInfo/MoreInfo.module.css";

export default function MoreInfo() {
  return (
    <main className={css.page}>
      <section className={css.hero}>
        <div className={`container ${css.hero_container}`}>
          <p className={css.label}>STRIKEBULL MMA CLUB</p>

          <h1 className={css.title}>MEHR ERFAHREN</h1>

          <p className={css.intro}>
            Strikebull ist mehr als nur ein Ort zum Trainieren. Unser Club
            verbindet professionelles MMA-Training, persönliche Entwicklung und
            eine starke Community. Bei uns trainieren Anfänger, ambitionierte
            Sportler und erfahrene Athleten gemeinsam.
          </p>
        </div>
      </section>

      <section className={css.about}>
        <div className={`container ${css.about_container}`}>
          <div className={css.section_heading}>
            <p className={css.label}>ÜBER UNS</p>

            <h2 className={css.section_title}>DER CLUB</h2>
          </div>

          <div className={css.club_content}>
            <p>
              Der Strikebull MMA Club wurde mit dem Ziel gegründet, modernes
              Kampfsporttraining in einer professionellen und respektvollen
              Umgebung anzubieten.
            </p>

            <p>
              Im Mittelpunkt stehen nicht nur Technik und körperliche
              Leistungsfähigkeit, sondern auch Disziplin, Selbstvertrauen und
              persönliche Weiterentwicklung.
            </p>

            <p>
              Unsere Mitglieder trainieren unterschiedliche Bereiche des MMA –
              vom Standkampf über Clinch bis zum Bodenkampf – und entwickeln
              dabei Kraft, Ausdauer, Koordination und mentale Stärke.
            </p>
          </div>
        </div>
      </section>

      <section className={css.team}>
        <div className={`container ${css.team_container}`}>
          <div className={css.section_heading}>
            <p className={css.label}>DAS TEAM</p>

            <h2 className={css.section_title}>CLUBFÜHRUNG & TRAINER</h2>
          </div>

          <div className={css.members}>
            {teamMembers.map((member) => (
              <article className={css.member} key={member.id}>
                <div className={css.member_image_wrapper}>
                  <Image
                    className={css.member_image}
                    src={member.image}
                    alt={`${member.name}, ${member.role} beim Strikebull MMA Club`}
                    width={600}
                    height={750}
                    sizes="(max-width: 767px) 100vw, 45vw"
                  />
                </div>

                <div className={css.member_content}>
                  <p className={css.member_role}>{member.role}</p>

                  <h3 className={css.member_name}>{member.name}</h3>

                  <p className={css.member_description}>{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={css.development}>
        <div className={`container ${css.development_container}`}>
          <div className={css.section_heading}>
            <p className={css.label}>DEINE ENTWICKLUNG</p>

            <h2 className={css.section_title}>
              MÖGLICHKEITEN FÜR DEINE ENTWICKLUNG
            </h2>
          </div>

          <div className={css.development_content}>
            <p>
              Bei Strikebull kannst du unabhängig von deinem aktuellen
              Trainingsstand beginnen und dich Schritt für Schritt
              weiterentwickeln.
            </p>

            <p>
              Einsteiger lernen zunächst die Grundlagen und entwickeln ein
              solides technisches Fundament. Fortgeschrittene Athleten können
              ihre Fähigkeiten gezielt verbessern, Kombinationen vertiefen und
              unter realistischen Bedingungen trainieren.
            </p>

            <p>
              Wer ambitionierter trainieren möchte, erhält die Möglichkeit,
              seine körperliche und technische Leistungsfähigkeit systematisch
              weiterzuentwickeln und sich auf anspruchsvollere sportliche Ziele
              vorzubereiten.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
