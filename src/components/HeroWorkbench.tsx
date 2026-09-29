"use client";

import React from "react";
import Image from "next/image";
import styles from "./HeroWorkbench.module.css";

interface HeroWorkbenchProps {
  onScrollToModels: () => void;
  onScrollToToneBench: () => void;
}

export default function HeroWorkbench({
  onScrollToModels,
  onScrollToToneBench,
}: HeroWorkbenchProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.introGrid}>
        <h1 className={styles.heading}>
          Instruments carved one at a time from seasoned timber.
        </h1>

        <div className={styles.narrativeCol}>
          <p className={styles.narrative}>
            We build forty-eight electric and semi-hollow guitars a year in
            Bellingham, Washington. No production lines, no polyester dips, no
            factory shortcuts. Just quarter-sawn maple, roasted ash, hand-wound
            coils, and thin nitrocellulose lacquer that lets the wood breathe.
          </p>

          <div className={styles.buttonRow}>
            <button
              onClick={onScrollToModels}
              className={styles.primaryAction}
              id="hero-explore-batch-btn"
            >
              Examine the 2026 batch
            </button>
            <button
              onClick={onScrollToToneBench}
              className={styles.secondaryAction}
              id="hero-listen-pickups-btn"
            >
              Test tone bench
            </button>
          </div>
        </div>
      </div>

      <div className={styles.showcaseStage}>
        <div className={styles.imageContainer}>
          <Image
            src="/guitars/arbor-model-one.jpg"
            alt="Arbor Model One solid body electric guitar resting on a craftsman leather mat"
            fill
            priority
            className={styles.heroImage}
          />
        </div>

        <div className={styles.specBar}>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Body timber</span>
            <span className={styles.specValue}>Torrefied Louisiana swamp ash</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Scale length</span>
            <span className={styles.specValue}>25.5 inches / 648 mm</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Pickups</span>
            <span className={styles.specValue}>Dual scatter-wound gold foils</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Cured weight</span>
            <span className={styles.specValue}>6.9 lbs (3.12 kg)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
