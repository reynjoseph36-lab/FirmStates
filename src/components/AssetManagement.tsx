"use client";

import React from "react";
import styles from "./AssetManagement.module.css";

export default function AssetManagement() {
  const services = [
    {
      title: "Confidential Acquisition & Syndication",
      description: "Direct off-market origination and cross-border structural navigation for private residences, trophy towers, and land holdings.",
      bullets: [
        "100% Discretionary Off-Market Flow",
        "Cross-Jurisdictional Tax Structuring",
        "Algorithmic Micro-Market Valuation",
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    {
      title: "Full-Lifecycle Asset Stewardship",
      description: "End-to-end operational management, preventative architectural maintenance, and institutional lease management delivering 99.4% occupancy.",
      bullets: [
        "VIP Tenant Screening & Placement",
        "24/7 Dedicated Estate Concierge",
        "Preventative Facility Engineering",
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
    },
    {
      title: "Institutional Reporting & Yield Maximization",
      description: "Comprehensive GAAP/IFRS quarterly reporting, digital investor portal, and strategic capital expenditure guidance for sustained alpha.",
      bullets: [
        "Real-Time Investor Ledger Access",
        "Quarterly Independent Appraisals",
        "Capital Refinancing Advisory",
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.section} id="management">
      <div className={styles.header}>
        <div className={styles.tag}>Institutional Services</div>
        <h2 className={styles.title}>The Firmstate Advantage</h2>
        <p className={styles.subtitle}>
          Tailored for high-net-worth principals, family offices, and sovereign investors seeking total alignment,
          rigorous risk mitigation, and uncompromised discretion.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((serv, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.iconWrapper}>{serv.icon}</div>
            <h3 className={styles.cardTitle}>{serv.title}</h3>
            <p className={styles.cardDescription}>{serv.description}</p>

            <ul className={styles.bulletList}>
              {serv.bullets.map((b, bIdx) => (
                <li key={bIdx} className={styles.bulletItem}>
                  <span className={styles.bulletDot}></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
