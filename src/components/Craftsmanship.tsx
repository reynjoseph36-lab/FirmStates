"use client";

import React from "react";
import styles from "./Craftsmanship.module.css";

export default function Craftsmanship() {
  const pillars = [
    {
      title: "Kiln Torrefaction",
      marker: "Cellular Stability",
      description:
        "Every neck blank and swamp ash body undergoes 180°C heat-curing in an oxygen-depleted vacuum chamber. This thermal crystallization burns away sap, volatile oils, and trapped cellular moisture, dropping wood moisture below 4%. The timber becomes impervious to weather humidity swings and vibrates with the openness of a vintage sixty-year-old instrument.",
      specKey: "Moisture content",
      specVal: "< 3.8% stabilized",
    },
    {
      title: "Hand Scatter-Wound Pickups",
      marker: "Capacitance Optimization",
      description:
        "Industrial factory machines wind guitar pickups in dead-straight layers, creating high inter-strand capacitance that deadens treble dynamics. We hand-guide 42 and 43 AWG plain enamel wire across sand-cast Alnico pole pieces in randomized patterns, preserving microphonic harmonic richness and crystalline single-note attack.",
      specKey: "Wire gauge & insulation",
      specVal: "42 AWG Formvar / Plain Enamel",
    },
    {
      title: "Thin-Skin Nitrocellulose",
      marker: "Open Wood Breathing",
      description:
        "Modern commercial guitars are dipped in thick polyurethane that dries into a 0.030-inch hard plastic carapace. We spray eight feather-light coats of unplasticized nitrocellulose lacquer, total thickness under 0.004 inches. The lacquer enters the open grain pores, protecting the wood while allowing the body to flex and sing.",
      specKey: "Finish thickness",
      specVal: "0.004 inches / open-pore satin",
    },
    {
      title: "Cold-Rolled Steel & Bell Brass",
      marker: "Direct String Grounding",
      description:
        "No cheap zinc die-cast pot metal. Our bridges are CNC-milled from solid cold-rolled steel plates and fitted with compensated bell brass barrel saddles. The vibrational energy from vibrating guitar strings transfers directly into the torrefied wood grain with zero harmonic attenuation.",
      specKey: "Bridge material",
      specVal: "Cold-rolled 1018 steel + brass",
    },
  ];

  return (
    <section className={styles.craftSection} id="craft">
      <div className={styles.introArea}>
        <h2 className={styles.heading}>Built for tone, not ease of manufacture.</h2>
        <p className={styles.introText}>
          Every decision in our workshop honors the physics of acoustic resonance.
          When wood is treated correctly and hardware is selected for density, an
          electric guitar rings loud and warm even before you plug it into a tube amplifier.
        </p>
      </div>

      <div className={styles.pillarsGrid}>
        {pillars.map((pillar) => (
          <article key={pillar.title} className={styles.pillarCard}>
            <div className={pillar.marker ? styles.pillarHeader : ""}>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <span className={styles.pillarMarker}>{pillar.marker}</span>
            </div>
            <p className={styles.pillarDescription}>{pillar.description}</p>
            <div className={styles.specDetail}>
              <span className={styles.specKey}>{pillar.specKey}</span>
              <span className={styles.specVal}>{pillar.specVal}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
