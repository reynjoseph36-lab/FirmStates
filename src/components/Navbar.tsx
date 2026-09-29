"use client";

import React from "react";
import styles from "./Navbar.module.css";
import { CURRENCIES } from "@/data/properties";

interface NavbarProps {
  currentCurrency: string;
  onCurrencyChange: (currency: string) => void;
  onOpenConsultation: () => void;
}

export default function Navbar({
  currentCurrency,
  onCurrencyChange,
  onOpenConsultation,
}: NavbarProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.brand} id="firmstate-logo">
          <div className={styles.logoBadge}>FS</div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>FIRMSTATE</span>
            <span className={styles.brandTagline}>Prime Real Estate & Assets</span>
          </div>
        </a>

        <nav className={styles.nav} aria-label="Main Navigation">
          <a href="#properties" className={styles.navLink}>
            Prime Residences
          </a>
          <a href="#valuation" className={styles.navLink}>
            ROI Valuation
          </a>
          <a href="#management" className={styles.navLink}>
            Asset Management
          </a>
          <a href="#markets" className={styles.navLink}>
            Global Markets
          </a>
        </nav>

        <div className={styles.actions}>
          <select
            id="currency-selector"
            className={styles.currencySelect}
            value={currentCurrency}
            onChange={(e) => onCurrencyChange(e.target.value)}
            aria-label="Select currency"
          >
            {CURRENCIES.map((curr) => (
              <option key={curr.code} value={curr.code}>
                {curr.code} ({curr.symbol.trim()})
              </option>
            ))}
          </select>

          <button
            id="nav-consultation-btn"
            className={styles.ctaBtn}
            onClick={onOpenConsultation}
          >
            <span>Consultation</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
