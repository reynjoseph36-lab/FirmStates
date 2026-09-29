"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./InstrumentShowcase.module.css";
import { GUITARS, GuitarModel } from "@/data/guitars";

interface InstrumentShowcaseProps {
  onSelectForDocket: (modelId: string) => void;
}

export default function InstrumentShowcase({
  onSelectForDocket,
}: InstrumentShowcaseProps) {
  const [selectedId, setSelectedId] = useState<string>("model-one");

  const currentGuitar =
    GUITARS.find((g) => g.id === selectedId) || GUITARS[0];

  return (
    <section className={styles.showcaseSection} id="models">
      <div className={styles.sectionHeader}>
        <div>
          <h2 className={styles.heading}>The 2026 Batch</h2>
          <p className={styles.subheading}>
            Three foundational architectures engineered for acoustic dynamics,
            crystalline string articulation, and effortless fretboard access.
          </p>
        </div>

        <div className={styles.modelTabs} role="tablist" aria-label="Guitar models">
          {GUITARS.map((g) => (
            <button
              key={g.id}
              className={`${styles.tabBtn} ${selectedId === g.id ? styles.tabBtnActive : ""}`}
              onClick={() => setSelectedId(g.id)}
              role="tab"
              aria-selected={selectedId === g.id}
              id={`tab-${g.id}`}
            >
              {g.name}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.stage}>
        <div className={styles.imageFrame}>
          <Image
            src={currentGuitar.image}
            alt={`${currentGuitar.name} - ${currentGuitar.designation}`}
            fill
            className={styles.guitarImage}
          />
        </div>

        <div className={styles.detailsCol}>
          <div className={styles.titleBlock}>
            <span className={styles.designation}>{currentGuitar.designation}</span>
            <h3 className={styles.modelName}>{currentGuitar.name}</h3>
            <p className={styles.modelTagline}>{currentGuitar.tagline}</p>
          </div>

          <div className={styles.specTable}>
            <div className={styles.specRow}>
              <span className={styles.specLabel}>Body wood</span>
              <span className={styles.specValue}>{currentGuitar.bodyWood}</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specLabel}>Neck construction</span>
              <span className={styles.specValue}>{currentGuitar.neckWood}</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specLabel}>Fretboard & radius</span>
              <span className={styles.specValue}>{currentGuitar.fretboardWood}</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specLabel}>Scale length</span>
              <span className={styles.specValue}>{currentGuitar.scaleLength}</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specLabel}>Pickups</span>
              <span className={styles.specValue}>{currentGuitar.pickupConfig}</span>
            </div>
            <div className={styles.specRow}>
              <span className={styles.specLabel}>Average weight</span>
              <span className={styles.specValue}>{currentGuitar.weightAverage}</span>
            </div>
          </div>

          <div className={styles.luthierNote}>
            <strong>Luthier Field Notes: </strong>
            {currentGuitar.notes}
          </div>

          <div className={styles.actionRow}>
            <div className={styles.priceBlock}>
              <span className={styles.priceLabel}>Base commission</span>
              <span className={styles.priceValue}>
                ${currentGuitar.basePriceUSD.toLocaleString()} USD
              </span>
            </div>

            <button
              onClick={() => onSelectForDocket(currentGuitar.id)}
              className={styles.configureBtn}
              id={`configure-${currentGuitar.id}-btn`}
            >
              Configure this instrument
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
