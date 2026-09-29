"use client";

import React from "react";
import styles from "./WorkshopFooter.module.css";

export default function WorkshopFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <span className={styles.brandTitle}>Arbor Guitars</span>
            <p className={styles.tagline}>
              Independent lutherie workshop producing forty-eight handmade electric and
              semi-hollow guitars annually in the Pacific Northwest.
            </p>
            <div className={styles.guaranteeNote}>
              Lifetime structural warranty to the original musician
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>The Workshop</h4>
            <ul className={styles.list}>
              <li>1420 Cornwall Avenue, Suite 4</li>
              <li>Bellingham, Washington 98225</li>
              <li>Bench trials by appointment</li>
              <li>workshop@arbornw.com</li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Craft & Stewardship</h4>
            <ul className={styles.list}>
              <li><a href="#models">Batch 2026 models</a></li>
              <li><a href="#tone-bench">Tone bench synthesis</a></li>
              <li><a href="#craft">Torrefaction & wood sourcing</a></li>
              <li><a href="#docket">Commission build docket</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div>
            © {new Date().getFullYear()} Arbor Guitars LLC. Hand-carved in Bellingham, WA.
          </div>
          <div>
            All tone woods sourced under verified FSC guidelines. Zero endangered timber species.
          </div>
        </div>
      </div>
    </footer>
  );
}
