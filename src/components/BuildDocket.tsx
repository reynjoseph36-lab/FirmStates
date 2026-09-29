"use client";

import React, { useState } from "react";
import styles from "./BuildDocket.module.css";
import { GUITARS } from "@/data/guitars";

interface BuildDocketProps {
  initialModelId?: string;
  onOpenCommissionModal: (buildDetails: {
    model: string;
    timber: string;
    fretboard: string;
    pickups: string;
    finish: string;
    totalPrice: number;
    estimatedWeight: string;
  }) => void;
}

export default function BuildDocket({
  initialModelId = "model-one",
  onOpenCommissionModal,
}: BuildDocketProps) {
  const [modelId, setModelId] = useState<string>(initialModelId);
  const [timberOption, setTimberOption] = useState<number>(0);
  const [fretboardOption, setFretboardOption] = useState<number>(0);
  const [pickupOption, setPickupOption] = useState<number>(0);
  const [finishOption, setFinishOption] = useState<number>(0);

  const selectedGuitar = GUITARS.find((g) => g.id === modelId) || GUITARS[0];

  const timbers = [
    { name: "Torrefied Swamp Ash", upcharge: 0, weightMod: 0.0 },
    { name: "Select Red Alder", upcharge: 0, weightMod: 0.2 },
    { name: "Chambered African Mahogany", upcharge: 220, weightMod: -0.4 },
    { name: "5A Flamed Michigan Maple Cap", upcharge: 480, weightMod: 0.3 },
  ];

  const fretboards = [
    { name: "Old-Growth Indian Rosewood", upcharge: 0 },
    { name: "Dark Gabon Ebony", upcharge: 120 },
    { name: "Roasted Flame Maple", upcharge: 180 },
  ];

  const pickups = [
    { name: "Arbor Hand-Wound Gold Foils", upcharge: 0 },
    { name: "Vintage Low-Wind PAF Humbuckers", upcharge: 150 },
    { name: "Matched Soapbar P90 Pair", upcharge: 0 },
    { name: "Custom Filter'Tron Style Voicing", upcharge: 190 },
  ];

  const finishes = [
    { name: "Dune Wax (Open-Pore Satin)", upcharge: 0 },
    { name: "Smoked Tobacco Burst", upcharge: 240 },
    { name: "Oxidized Spruce Green", upcharge: 180 },
    { name: "Midnight Oxblood", upcharge: 220 },
  ];

  const totalPrice =
    selectedGuitar.basePriceUSD +
    timbers[timberOption].upcharge +
    fretboards[fretboardOption].upcharge +
    pickups[pickupOption].upcharge +
    finishes[finishOption].upcharge;

  const baseWeightNum = parseFloat(selectedGuitar.weightAverage.split(" ")[0]);
  const estimatedWeight = (baseWeightNum + timbers[timberOption].weightMod).toFixed(1);

  const handleCommissionClick = () => {
    onOpenCommissionModal({
      model: selectedGuitar.name,
      timber: timbers[timberOption].name,
      fretboard: fretboards[fretboardOption].name,
      pickups: pickups[pickupOption].name,
      finish: finishes[finishOption].name,
      totalPrice,
      estimatedWeight: `${estimatedWeight} lbs`,
    });
  };

  return (
    <section className={styles.docketSection} id="docket">
      <div className={styles.docketCard}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Custom commission docket</h2>
          <p className={styles.subheading}>
            Every Arbor guitar is built to order. Select your architecture, tonewoods,
            fretboard radius, and pickup voicing to generate your workshop build ticket.
          </p>
        </div>

        <div className={styles.docketGrid}>
          {/* Controls */}
          <div className={styles.formCol}>
            {/* Model Architecture */}
            <div className={styles.optionSection}>
              <span className={styles.optionTitle}>1. Instrument architecture</span>
              <div className={styles.buttonGrid}>
                {GUITARS.map((g) => (
                  <button
                    key={g.id}
                    className={`${styles.choiceBtn} ${modelId === g.id ? styles.choiceBtnActive : ""}`}
                    onClick={() => setModelId(g.id)}
                    id={`docket-model-${g.id}`}
                  >
                    <span className={styles.choiceLabel}>{g.name}</span>
                    <span className={styles.choiceCost}>
                      Base: ${g.basePriceUSD.toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tonewood */}
            <div className={styles.optionSection}>
              <span className={styles.optionTitle}>2. Body tonewood</span>
              <div className={styles.buttonGrid}>
                {timbers.map((t, idx) => (
                  <button
                    key={t.name}
                    className={`${styles.choiceBtn} ${timberOption === idx ? styles.choiceBtnActive : ""}`}
                    onClick={() => setTimberOption(idx)}
                    id={`docket-timber-${idx}`}
                  >
                    <span className={styles.choiceLabel}>{t.name}</span>
                    <span className={styles.choiceCost}>
                      {t.upcharge === 0 ? "Standard" : `+$${t.upcharge}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Fretboard */}
            <div className={styles.optionSection}>
              <span className={styles.optionTitle}>3. Fretboard timber</span>
              <div className={styles.buttonGrid}>
                {fretboards.map((f, idx) => (
                  <button
                    key={f.name}
                    className={`${styles.choiceBtn} ${fretboardOption === idx ? styles.choiceBtnActive : ""}`}
                    onClick={() => setFretboardOption(idx)}
                    id={`docket-fretboard-${idx}`}
                  >
                    <span className={styles.choiceLabel}>{f.name}</span>
                    <span className={styles.choiceCost}>
                      {f.upcharge === 0 ? "Standard" : `+$${f.upcharge}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Pickups */}
            <div className={styles.optionSection}>
              <span className={styles.optionTitle}>4. Pickup wind & voicing</span>
              <div className={styles.buttonGrid}>
                {pickups.map((p, idx) => (
                  <button
                    key={p.name}
                    className={`${styles.choiceBtn} ${pickupOption === idx ? styles.choiceBtnActive : ""}`}
                    onClick={() => setPickupOption(idx)}
                    id={`docket-pickup-${idx}`}
                  >
                    <span className={styles.choiceLabel}>{p.name}</span>
                    <span className={styles.choiceCost}>
                      {p.upcharge === 0 ? "Standard" : `+$${p.upcharge}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Finish */}
            <div className={styles.optionSection}>
              <span className={styles.optionTitle}>5. Thin-skin nitro finish</span>
              <div className={styles.buttonGrid}>
                {finishes.map((fn, idx) => (
                  <button
                    key={fn.name}
                    className={`${styles.choiceBtn} ${finishOption === idx ? styles.choiceBtnActive : ""}`}
                    onClick={() => setFinishOption(idx)}
                    id={`docket-finish-${idx}`}
                  >
                    <span className={styles.choiceLabel}>{fn.name}</span>
                    <span className={styles.choiceCost}>
                      {fn.upcharge === 0 ? "Standard" : `+$${fn.upcharge}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Docket Ticket Summary */}
          <div className={styles.summaryPanel}>
            <div className={styles.docketHeader}>
              <h3 className={styles.docketTitle}>Build docket</h3>
              <span className={styles.docketNumber}>Ticket #AB-2026-04</span>
            </div>

            <div className={styles.summaryList}>
              <div className={styles.summaryRow}>
                <span className={styles.summaryKey}>Selected model</span>
                <span className={styles.summaryVal}>{selectedGuitar.name}</span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryKey}>Scale length</span>
                <span className={styles.summaryVal}>{selectedGuitar.scaleLength}</span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryKey}>Body wood</span>
                <span className={styles.summaryVal}>{timbers[timberOption].name}</span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryKey}>Fretboard</span>
                <span className={styles.summaryVal}>{fretboards[fretboardOption].name}</span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryKey}>Pickups</span>
                <span className={styles.summaryVal}>{pickups[pickupOption].name}</span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryKey}>Finish</span>
                <span className={styles.summaryVal}>{finishes[finishOption].name}</span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryKey}>Estimated weight</span>
                <span className={styles.summaryVal}>approx. {estimatedWeight} lbs</span>
              </div>
            </div>

            <div className={styles.totalBlock}>
              <span className={styles.totalLabel}>Estimated build cost</span>
              <span className={styles.totalAmount}>${totalPrice.toLocaleString()} USD</span>
            </div>

            <div className={styles.timelineNote}>
              Lead time: 14 to 18 weeks. 30% deposit required upon slot confirmation.
              Includes custom fitted hardshell case and lifetime craft warranty.
            </div>

            <button
              onClick={handleCommissionClick}
              className={styles.submitBtn}
              id="docket-reserve-slot-btn"
            >
              Reserve this build slot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
