"use client";

import React from "react";
import styles from "./WorkshopNav.module.css";

interface WorkshopNavProps {
  onOpenCommission: () => void;
}

export default function WorkshopNav({ onOpenCommission }: WorkshopNavProps) {
  return (
    <header className={styles.navHeader}>
      <div className={styles.inner}>
        <div className={styles.brandGroup}>
          <a href="#" className={styles.brandTitle}>
            Arbor Guitars
          </a>
          <span className={styles.brandLocation}>Workshop No. 4 · Bellingham, WA</span>
        </div>

        <nav className={styles.navLinks} aria-label="Workshop navigation">
          <a href="#models" className={styles.link}>
            Instruments
          </a>
          <a href="#tone-bench" className={styles.link}>
            Tone bench
          </a>
          <a href="#craft" className={styles.link}>
            Wood & craft
          </a>
          <a href="#docket" className={styles.link}>
            Custom commission
          </a>
        </nav>

        <div className={styles.ctaGroup}>
          <span className={styles.slotBadge}>Batch 2026: 8 slots open</span>
          <button
            onClick={onOpenCommission}
            className={styles.commissionBtn}
            id="nav-commission-btn"
          >
            Commission build
          </button>
        </div>
      </div>
    </header>
  );
}
