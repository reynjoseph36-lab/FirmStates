"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./ToneBench.module.css";

type PickupPosition = "neck" | "middle" | "bridge";

interface StringDef {
  name: string;
  note: string;
  freq: number;
  gauge: string;
  wireHeight: number;
}

const STRINGS: StringDef[] = [
  { name: "6th string", note: "E2 (82 Hz)", freq: 82.41, gauge: ".046", wireHeight: 4.5 },
  { name: "5th string", note: "A2 (110 Hz)", freq: 110.0, gauge: ".036", wireHeight: 3.8 },
  { name: "4th string", note: "D3 (147 Hz)", freq: 146.83, gauge: ".026", wireHeight: 3.0 },
  { name: "3rd string", note: "G3 (196 Hz)", freq: 196.0, gauge: ".017", wireHeight: 2.3 },
  { name: "2nd string", note: "B3 (247 Hz)", freq: 246.94, gauge: ".013", wireHeight: 1.8 },
  { name: "1st string", note: "E4 (330 Hz)", freq: 329.63, gauge: ".010", wireHeight: 1.2 },
];

export default function ToneBench() {
  const [pickup, setPickup] = useState<PickupPosition>("neck");
  const [tonePot, setTonePot] = useState<number>(8.5);
  const [activeString, setActiveString] = useState<number | null>(null);
  const [lastPluckedNote, setLastPluckedNote] = useState<string>("Ready to test");

  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize AudioContext on first touch
  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const playPluck = (freq: number, index: number, noteName: string) => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      setActiveString(index);
      setLastPluckedNote(`Plucked ${noteName}`);
      setTimeout(() => setActiveString(null), 300);

      // Pickup filter configuration
      // Tone pot attenuates upper cutoff between 400Hz and 4500Hz
      const toneMultiplier = Math.max(0.2, tonePot / 10);

      let filterFreq = 800;
      let filterQ = 1.8;
      if (pickup === "neck") {
        filterFreq = 720 * toneMultiplier;
        filterQ = 1.4;
      } else if (pickup === "middle") {
        filterFreq = 1450 * toneMultiplier;
        filterQ = 2.0;
      } else if (pickup === "bridge") {
        filterFreq = 2800 * toneMultiplier;
        filterQ = 3.2;
      }

      // Master gain node
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, now);
      masterGain.gain.linearRampToValueAtTime(0.35, now + 0.005);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

      // Pickup Biquad Filter
      const pickupFilter = ctx.createBiquadFilter();
      pickupFilter.type = pickup === "middle" ? "peaking" : "lowpass";
      pickupFilter.frequency.setValueAtTime(filterFreq, now);
      pickupFilter.Q.setValueAtTime(filterQ, now);

      // Harmonic oscillators (Fundamental + Overtones)
      const osc1 = ctx.createOscillator();
      osc1.type = "sawtooth";
      osc1.frequency.setValueAtTime(freq, now);

      const osc2 = ctx.createOscillator();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(freq * 2.002, now); // slight organic detune

      const oscGain2 = ctx.createGain();
      oscGain2.gain.setValueAtTime(0.3, now);
      osc2.connect(oscGain2);

      osc1.connect(pickupFilter);
      oscGain2.connect(pickupFilter);
      pickupFilter.connect(masterGain);
      masterGain.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 2.3);
      osc2.stop(now + 2.3);
    } catch {
      // Audio fallback if unsupported
    }
  };

  const handleStrumChord = () => {
    // E major open chord: E2, B2, E3, G#3, B3, E4
    const chord = [
      { freq: 82.41, note: "E2", idx: 0 },
      { freq: 123.47, note: "B2", idx: 1 },
      { freq: 164.81, note: "E3", idx: 2 },
      { freq: 207.65, note: "G#3", idx: 3 },
      { freq: 246.94, note: "B3", idx: 4 },
      { freq: 329.63, note: "E4", idx: 5 },
    ];

    chord.forEach((item, i) => {
      setTimeout(() => {
        playPluck(item.freq, item.idx, item.note);
      }, i * 35);
    });
  };

  // Descriptive text per pickup
  const descriptions: Record<PickupPosition, string> = {
    neck: "Neck position: Placed directly at the 24th harmonic node. Produces a warm, round acoustic response with soft high-end rolloff and rich wood fundamental.",
    middle:
      "Middle position: Both pickups active in parallel. Cancels common-mode hum while scooping the nasal 800 Hz range for crisp bell chime and rhythm clarity.",
    bridge:
      "Bridge position: Located 18 mm from the brass saddles. Maximum string tension delivers cutting harmonic transients and articulate bite for lead articulation.",
  };

  return (
    <section className={styles.benchSection} id="tone-bench">
      <div className={styles.benchWrapper}>
        <div className={styles.benchHeader}>
          <div className={styles.titleArea}>
            <h2 className={styles.sectionTitle}>Interactive tone bench</h2>
            <p className={styles.sectionDescription}>
              Experience how our hand-scattered Alnico V coils shape frequency response.
              Select a pickup position, adjust the passive tone pot, and pick individual strings.
            </p>
          </div>
          <div className={styles.audioNotice}>Web Audio synthesis · Real-time DSP</div>
        </div>

        <div className={styles.controlGrid}>
          {/* Controls Column */}
          <div className={styles.pickupConsole}>
            <div className={styles.switchGroup}>
              <span className={styles.groupLabel}>Pickup selector (3-way switch)</span>
              <div className={styles.switchOptions} role="radiogroup" aria-label="Pickup position">
                <button
                  className={`${styles.switchBtn} ${pickup === "neck" ? styles.switchBtnActive : ""}`}
                  onClick={() => setPickup("neck")}
                  role="radio"
                  aria-checked={pickup === "neck"}
                  id="pickup-neck-btn"
                >
                  <span className={styles.switchName}>Neck</span>
                  <span className={styles.switchRole}>Wood warmth</span>
                </button>
                <button
                  className={`${styles.switchBtn} ${pickup === "middle" ? styles.switchBtnActive : ""}`}
                  onClick={() => setPickup("middle")}
                  role="radio"
                  aria-checked={pickup === "middle"}
                  id="pickup-mid-btn"
                >
                  <span className={styles.switchName}>Middle</span>
                  <span className={styles.switchRole}>Scooped chime</span>
                </button>
                <button
                  className={`${styles.switchBtn} ${pickup === "bridge" ? styles.switchBtnActive : ""}`}
                  onClick={() => setPickup("bridge")}
                  role="radio"
                  aria-checked={pickup === "bridge"}
                  id="pickup-bridge-btn"
                >
                  <span className={styles.switchName}>Bridge</span>
                  <span className={styles.switchRole}>Lead cut</span>
                </button>
              </div>
            </div>

            {/* Tone Potentiometer */}
            <div className={styles.potGroup}>
              <div className={styles.potHeader}>
                <label htmlFor="tone-slider" className={styles.potLabel}>
                  Passive tone pot (Bourns 250k / .022µF Orange Drop)
                </label>
                <span className={styles.potValue}>{tonePot.toFixed(1)} / 10</span>
              </div>
              <input
                id="tone-slider"
                type="range"
                min="1"
                max="10"
                step="0.5"
                value={tonePot}
                onChange={(e) => setTonePot(parseFloat(e.target.value))}
                className={styles.sliderInput}
              />
            </div>

            {/* Live profile note */}
            <div className={styles.profileNote}>{descriptions[pickup]}</div>

            {/* Dynamic Curve Visualizer */}
            <div className={styles.curveGraph}>
              <div className={curveStyles(pickup)}>
                <div className={styles.curveHeader}>
                  <span>Resonant frequency curve</span>
                  <span>
                    Peak:{" "}
                    {pickup === "neck" ? "720 Hz" : pickup === "middle" ? "1,450 Hz" : "2,800 Hz"}
                  </span>
                </div>
                <svg className={styles.svgCurve} viewBox="0 0 320 60" aria-hidden="true">
                  <path
                    d={getCurvePath(pickup, tonePot)}
                    fill="none"
                    stroke="#c27838"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <line x1="0" y1="50" x2="320" y2="50" stroke="#2b333a" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>

          {/* Fretboard & String Plucking Column */}
          <div className={styles.fretboardStage}>
            <div className={styles.strumRow}>
              <button
                className={styles.strumBtn}
                onClick={handleStrumChord}
                id="strum-chord-btn"
              >
                Strum open E chord
              </button>
              <span className={styles.activeIndicator}>{lastPluckedNote}</span>
            </div>

            <div className={styles.stringsRack} aria-label="Pluckable guitar strings">
              {STRINGS.map((str, idx) => (
                <div
                  key={str.name}
                  className={styles.stringRow}
                  onClick={() => playPluck(str.freq, idx, str.note)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      playPluck(str.freq, idx, str.note);
                    }
                  }}
                  id={`string-${idx}`}
                >
                  <span className={styles.stringGauge}>{str.gauge}</span>
                  <div className={styles.stringWire}>
                    <div
                      className={`${styles.wireLine} ${activeString === idx ? styles.wireActive : ""}`}
                      style={{ height: `${str.wireHeight}px` }}
                    />
                  </div>
                  <span className={styles.pluckPrompt}>Pluck {str.note.split(" ")[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function curveStyles(pickup: string) {
  return "";
}

function getCurvePath(pickup: PickupPosition, tone: number): string {
  const toneFactor = tone / 10;
  if (pickup === "neck") {
    // Round mid-low bulge
    const peakY = 50 - 32 * toneFactor;
    return `M 10 50 Q 80 ${peakY}, 140 ${peakY + 10} T 310 50`;
  }
  if (pickup === "middle") {
    // Scooped middle with dual humps
    const peakY = 50 - 28 * toneFactor;
    return `M 10 50 Q 60 ${peakY}, 120 40 Q 180 ${peakY - 5}, 310 50`;
  }
  // Bridge: sharp high peak shifted right
  const peakY = 50 - 38 * toneFactor;
  return `M 10 50 Q 100 48, 200 ${peakY} Q 250 ${peakY + 4}, 310 50`;
}
