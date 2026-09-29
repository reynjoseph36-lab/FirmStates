"use client";

import React from "react";
import styles from "./GlobalMarkets.module.css";

interface GlobalMarketsProps {
  onSelectCity: (city: string) => void;
}

export default function GlobalMarkets({ onSelectCity }: GlobalMarketsProps) {
  const hubs = [
    { city: "New York", country: "United States", aum: "$920M", yieldAvg: "6.8%", primePenthouses: "14 Available" },
    { city: "London", country: "United Kingdom", aum: "$680M", yieldAvg: "6.5%", primePenthouses: "9 Available" },
    { city: "Côte d'Azur", country: "France / Monaco", aum: "$450M", yieldAvg: "7.4%", primePenthouses: "6 Available" },
    { city: "Dubai", country: "United Arab Emirates", aum: "$510M", yieldAvg: "9.2%", primePenthouses: "12 Available" },
    { city: "St. Moritz", country: "Switzerland", aum: "$340M", yieldAvg: "7.9%", primePenthouses: "5 Available" },
    { city: "Los Angeles", country: "United States", aum: "$480M", yieldAvg: "8.1%", primePenthouses: "8 Available" },
  ];

  return (
    <section className={styles.section} id="markets">
      <div className={styles.header}>
        <div className={styles.tag}>Prime Metropolises</div>
        <h2 className={styles.title}>Global Operating Desks</h2>
        <p className={styles.subtitle}>
          Active private representation across the world&apos;s most resilient real estate capital nodes.
        </p>
      </div>

      <div className={styles.grid}>
        {hubs.map((hub) => (
          <div
            key={hub.city}
            className={styles.hubCard}
            onClick={() => onSelectCity(hub.city)}
            role="button"
            tabIndex={0}
            title={`Filter by ${hub.city}`}
          >
            <div className={styles.hubTop}>
              <h3 className={styles.hubCity}>{hub.city}</h3>
              <span className={styles.hubCountry}>{hub.country}</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.statLabel}>Institutional AUM</span>
              <span className={styles.statValGold}>{hub.aum}</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.statLabel}>Avg Net Yield</span>
              <span className={styles.statVal}>{hub.yieldAvg}</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.statLabel}>Exclusive Access</span>
              <span className={styles.statVal}>{hub.primePenthouses}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
