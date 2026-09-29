"use client";

import React, { useState } from "react";
import styles from "./Hero.module.css";

interface HeroProps {
  selectedCity: string;
  selectedCategory: string;
  selectedPrice: string;
  onFilterChange: (filters: { city: string; category: string; price: string }) => void;
  onScrollToProperties: () => void;
}

export default function Hero({
  selectedCity,
  selectedCategory,
  selectedPrice,
  onFilterChange,
  onScrollToProperties,
}: HeroProps) {
  const [activeTab, setActiveTab] = useState<"acquire" | "lease" | "fund">("acquire");
  const [city, setCity] = useState(selectedCity);
  const [category, setCategory] = useState(selectedCategory);
  const [price, setPrice] = useState(selectedPrice);

  const handleSearch = () => {
    onFilterChange({ city, category, price });
    onScrollToProperties();
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGlow} aria-hidden="true" />

      <div className={styles.contentWrapper}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          Private Asset Stewardship & Global Real Estate
        </div>

        <h1 className={styles.title}>
          Where Prime Real Estate Meets{" "}
          <span className={styles.titleAccent}>Institutional Precision</span>
        </h1>

        <p className={styles.subtitle}>
          Firmstate orchestrates confidential acquisitions, bespoke property stewardship, and
          high-yield portfolio optimization for ultra-high-net-worth individuals and family offices worldwide.
        </p>

        {/* Interactive Search Console */}
        <div className={styles.filterCard}>
          <div className={styles.modeTabs} role="tablist">
            <button
              className={`${styles.modeTab} ${activeTab === "acquire" ? styles.modeTabActive : ""}`}
              onClick={() => setActiveTab("acquire")}
              role="tab"
              aria-selected={activeTab === "acquire"}
            >
              Acquire Trophy Assets
            </button>
            <button
              className={`${styles.modeTab} ${activeTab === "lease" ? styles.modeTabActive : ""}`}
              onClick={() => setActiveTab("lease")}
              role="tab"
              aria-selected={activeTab === "lease"}
            >
              Prime Private Leases
            </button>
            <button
              className={`${styles.modeTab} ${activeTab === "fund" ? styles.modeTabActive : ""}`}
              onClick={() => setActiveTab("fund")}
              role="tab"
              aria-selected={activeTab === "fund"}
            >
              Institutional Portfolios
            </button>
          </div>

          <div className={styles.filterGrid}>
            <div className={styles.filterField}>
              <label htmlFor="filter-location" className={styles.fieldLabel}>
                Global Metropolis
              </label>
              <select
                id="filter-location"
                className={styles.selectInput}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="all">All Global Hubs</option>
                <option value="New York">New York, NY</option>
                <option value="Côte d'Azur">Côte d'Azur, France</option>
                <option value="Los Angeles">Bel Air, Los Angeles</option>
                <option value="St. Moritz">St. Moritz, Switzerland</option>
                <option value="Dubai">Palm Jumeirah, Dubai</option>
                <option value="London">Kensington, London</option>
              </select>
            </div>

            <div className={styles.filterField}>
              <label htmlFor="filter-category" className={styles.fieldLabel}>
                Asset Class
              </label>
              <select
                id="filter-category"
                className={styles.selectInput}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All Asset Classes</option>
                <option value="penthouse">Sky Penthouses</option>
                <option value="coastal">Coastal & Waterfront Villas</option>
                <option value="architectural">Architectural Pavilions</option>
                <option value="investment">High-Yield Income Assets</option>
              </select>
            </div>

            <div className={styles.filterField}>
              <label htmlFor="filter-price" className={styles.fieldLabel}>
                Valuation Bracket
              </label>
              <select
                id="filter-price"
                className={styles.selectInput}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value="all">All Valuations</option>
                <option value="under20">Under $20M</option>
                <option value="20to25">$20M - $25M</option>
                <option value="over25">$25M+</option>
              </select>
            </div>

            <button
              id="hero-search-action-btn"
              className={styles.searchBtn}
              onClick={handleSearch}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span>Explore Portfolio</span>
            </button>
          </div>
        </div>

        {/* Institutional Metrics */}
        <div className={styles.metricsGrid}>
          <div className={styles.metricItem}>
            <div className={styles.metricValue}>$2.8B+</div>
            <div className={styles.metricLabel}>Assets Under Stewardship</div>
          </div>
          <div className={styles.metricItem}>
            <div className={styles.metricValue}>99.4%</div>
            <div className={styles.metricLabel}>Portfolio Occupancy</div>
          </div>
          <div className={styles.metricItem}>
            <div className={styles.metricValue}>14.8%</div>
            <div className={styles.metricLabel}>Historical Net IRR</div>
          </div>
          <div className={styles.metricItem}>
            <div className={styles.metricValue}>18</div>
            <div className={styles.metricLabel}>Global Financial Capitals</div>
          </div>
        </div>
      </div>
    </section>
  );
}
