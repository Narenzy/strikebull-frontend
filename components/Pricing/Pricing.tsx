"use client";

import { motion } from "motion/react";

import { pricingPlans } from "@/lib/data/pricing";
import { useContactRequestStore } from "@/lib/store/contactRequestStore";

import css from "./Pricing.module.css";

export default function Pricing() {
  const selectedPlanId = useContactRequestStore(
    (state) => state.selectedPlanId,
  );

  const setSelectedPlanId = useContactRequestStore(
    (state) => state.setSelectedPlanId,
  );

  const setRequestType = useContactRequestStore(
    (state) => state.setRequestType,
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      viewport={{ once: false }}
      className={css.pricing_section}
      id="pricing"
    >
      <div className={`container ${css.pricing_container}`}>
        <div className={css.pricing_text_container}>
          <p className={css.pricing_label}>MITGLIEDSCHAFT</p>
          <h2 className={css.pricing_title}>TARIFE</h2>
        </div>

        <div className={css.pricing_plans_container}>
          {pricingPlans.map((plan) => {
            const isActive = selectedPlanId === plan.id;

            const handlePlanSelect = () => {
              if (isActive) {
                setSelectedPlanId(null);
                setRequestType("contact");
                return;
              }

              setSelectedPlanId(plan.id);
              setRequestType("membership");
            };

            const handlePlanButtonClick = () => {
              setSelectedPlanId(plan.id);
              setRequestType("membership");

              document
                .getElementById("contacts")
                ?.scrollIntoView({ behavior: "smooth" });
            };

            return (
              <article
                key={plan.id}
                className={`${css.pricing_plan_article} ${
                  isActive ? css.pricing_plan_active : ""
                }`}
                onClick={handlePlanSelect}
              >
                <h3 className={css.plans_title}>{plan.title}</h3>

                <p className={css.plans_price}>{plan.price}</p>

                <p className={css.plans_description}>{plan.description}</p>

                <ul className={css.pricing_list}>
                  {plan.features.map((feature) => (
                    <li className={css.pricing_list_item} key={feature}>
                      <svg
                        className={css.pricing_check_icon}
                        width="16"
                        height="16"
                        aria-hidden="true"
                      >
                        <use href="/svg/sprite.svg#icon-check" />
                      </svg>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={css.pricing_btn}
                  onClick={(event) => {
                    event.stopPropagation();
                    handlePlanButtonClick();
                  }}
                >
                  TARIF WÄHLEN
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
