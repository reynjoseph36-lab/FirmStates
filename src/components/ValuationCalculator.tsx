"use client";

import React, { useState } from "react";
import styles from "./ValuationCalculator.module.css";
import { CURRENCIES } from "@/data/properties";

interface ValuationCalculatorProps {
  currentCurrency: string;
  onOpenConsultation: () => void;
}

export default function ValuationCalculator({
  currentCurrency,
  onOpenConsultation,
}: ValuationCalculatorProps) {
  const [purchasePrice, setPurchasePrice] = useState<number>(18000000);
  const [monthlyRent, setMonthlyRent] = useState<number>(95000);
  const [appreciationRate, setAppreciationRate] = useState<number>(6.5);

  const currencyObj = CURRENCIES.find((c) => c.code === currentCurrency) || CURRENCIES[0];

  const formatCurrency = (valUSD: number) => {
    const converted = valUSD * currencyObj.rate;
    if (converted >= 1000000) {
      return `${currencyObj.symbol}${(converted / 1000000).toFixed(2)}M`;
    }
    return `${currencyObj.symbol}${Math.round(converted).toLocaleString()}`;
  };

  // Calculations
  const annualRentalIncome = monthlyRent * 12;
  const grossCapRate = ((annualRentalIncome / purchasePrice) * 100).toFixed(2);
  
  // 5 Year compound appreciation
  const fiveYearAppreciation = purchasePrice * (Math.pow(1 + appreciationRate / 100, 5) - 1);
  const fiveYearRentalTotal = annualRentalIncome * 5;
  const totalFiveYearReturn = fiveYearAppreciation + fiveYearRentalTotal;
  const netIRR = ((totalFiveYearReturn / purchasePrice) * 100 / 5).toFixed(1);

  return (
    <section className={styles.section} id="valuation">
      <div className={styles.card}>
        <div className={styles.cardGlow} aria-hidden="true" />

        <div className={styles.header}>
          <div className={styles.tag}>Dynamic Financial Modeling</div>
          <h2 className={styles.title}>Asset Yield & ROI Simulator</h2>
          <p className={styles.subtitle}>
            Model institutional returns, projected capital appreciation, and annual net cash flows across our prime real estate portfolios.
          </p>
        </div>

        <div className={styles.calculatorGrid}>
          {/* Sliders */}
          <div className={styles.controls}>
            <div className={styles.sliderGroup}>
              <div className={styles.sliderHeader}>
                <label htmlFor="input-purchase-price" className={styles.sliderLabel}>
                  Acquisition Valuation
                </label>
                <span className={styles.sliderValue}>{formatCurrency(purchasePrice)}</span>
              </div>
              <input
                id="input-purchase-price"
                type="range"
                min={2000000}
                max={50000000}
                step={500000}
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>

            <div className={styles.sliderGroup}>
              <div className={styles.sliderHeader}>
                <label htmlFor="input-monthly-rent" className={styles.sliderLabel}>
                  Projected Monthly Lease
                </label>
                <span className={styles.sliderValue}>{formatCurrency(monthlyRent)}</span>
              </div>
              <input
                id="input-monthly-rent"
                type="range"
                min={10000}
                max={300000}
                step={5000}
                value={monthlyRent}
                onChange={(e) => setMonthlyRent(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>

            <div className={styles.sliderGroup}>
              <div className={styles.sliderHeader}>
                <label htmlFor="input-appreciation" className={styles.sliderLabel}>
                  Expected Annual Capital Growth
                </label>
                <span className={styles.sliderValue}>{appreciationRate}% / yr</span>
              </div>
              <input
                id="input-appreciation"
                type="range"
                min={2.0}
                max={15.0}
                step={0.5}
                value={appreciationRate}
                onChange={(e) => setAppreciationRate(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>
          </div>

          {/* Results Card */}
          <div className={styles.resultsBox}>
            <div className={styles.metricPrimary}>
              <div className={styles.metricPrimaryLabel}>Projected 5-Year Net Value Addition</div>
              <div className={styles.metricPrimaryValue}>{formatCurrency(totalFiveYearReturn)}</div>
            </div>

            <div className={styles.resultsList}>
              <div className={styles.resultItem}>
                <span className={styles.resultLabel}>Gross Cap Rate</span>
                <span className={styles.resultValue}>{grossCapRate}%</span>
              </div>
              <div className={styles.resultItem}>
                <span className={styles.resultLabel}>Annual Rental Income</span>
                <span className={styles.resultValue}>{formatCurrency(annualRentalIncome)}</span>
              </div>
              <div className={styles.resultItem}>
                <span className={styles.resultLabel}>5-Yr Appreciation</span>
                <span className={styles.resultValue}>{formatCurrency(fiveYearAppreciation)}</span>
              </div>
              <div className={styles.resultItem}>
                <span className={styles.resultLabel}>Projected Net IRR</span>
                <span className={styles.resultValue}>{netIRR}% / yr</span>
              </div>
            </div>

            <button
              id="calc-consultation-trigger"
              className={styles.ctaButton}
              onClick={onOpenConsultation}
            >
              Request Custom Pro-Forma Modeling
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
