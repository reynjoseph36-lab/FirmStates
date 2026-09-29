"use client";

import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGlow} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <div className={styles.brand}>
              <div className={styles.logoBadge}>FS</div>
              <span className={styles.brandName}>FIRMSTATE</span>
            </div>
            <p className={styles.tagline}>
              Global authority in prime residential acquisitions, institutional asset management,
              and cross-border real estate syndicate advisory.
            </p>
            <div className={styles.securityBadge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>FINRA & SEC Regulated Custodial Escrow Partners</span>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Prime Portfolios</h4>
            <ul className={styles.linkList}>
              <li><a href="#properties" className={styles.footerLink}>Billionaires' Row Duplexes</a></li>
              <li><a href="#properties" className={styles.footerLink}>Mediterranean Seafront Villas</a></li>
              <li><a href="#properties" className={styles.footerLink}>Beverly Hills & Bel Air Crests</a></li>
              <li><a href="#properties" className={styles.footerLink}>Engadin Alpine Sanctuaries</a></li>
              <li><a href="#properties" className={styles.footerLink}>Dubai Palm Jumeirah Sky Estates</a></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Advisory & Capital</h4>
            <ul className={styles.linkList}>
              <li><a href="#valuation" className={styles.footerLink}>Dynamic Cap Rate Modeling</a></li>
              <li><a href="#management" className={styles.footerLink}>Institutional Stewardship</a></li>
              <li><a href="#markets" className={styles.footerLink}>Cross-Border Tax Havens</a></li>
              <li><a href="#management" className={styles.footerLink}>Off-Market Family Office Syndicates</a></li>
              <li><a href="#valuation" className={styles.footerLink}>Portfolio Stress Testing</a></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Operating Desks</h4>
            <ul className={styles.linkList}>
              <li><span className={styles.footerLink}>New York — 767 Fifth Ave</span></li>
              <li><span className={styles.footerLink}>London — Mayfair, W1K</span></li>
              <li><span className={styles.footerLink}>Monaco — Carré d'Or</span></li>
              <li><span className={styles.footerLink}>Dubai — DIFC Gate Tower 4</span></li>
              <li><span className={styles.footerLink}>Zurich — Bahnhofstrasse 28</span></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Firmstate Real Estate & Asset Management S.A. All rights reserved.
          </div>
          <div className={styles.disclaimer}>
            Disclaimers: Past capital yield models and appreciation forecasts do not guarantee future performance. Real estate assets are subject to market cyclicality and cross-border statutory compliance. Confidential property dossiers are available strictly to verified qualified purchasers.
          </div>
        </div>
      </div>
    </footer>
  );
}
