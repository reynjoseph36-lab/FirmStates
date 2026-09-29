"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./FeaturedProperties.module.css";
import { Property, CURRENCIES } from "@/data/properties";

interface FeaturedPropertiesProps {
  properties: Property[];
  currentCurrency: string;
  activeCategory: string;
  onCategorySelect: (category: string) => void;
  onInquire: (property: Property) => void;
  onResetFilters: () => void;
}

export default function FeaturedProperties({
  properties,
  currentCurrency,
  activeCategory,
  onCategorySelect,
  onInquire,
  onResetFilters,
}: FeaturedPropertiesProps) {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const currencyObj = CURRENCIES.find((c) => c.code === currentCurrency) || CURRENCIES[0];

  const formatPrice = (usd: number) => {
    const converted = usd * currencyObj.rate;
    if (converted >= 1000000) {
      return `${currencyObj.symbol}${(converted / 1000000).toFixed(1)}M`;
    }
    return `${currencyObj.symbol}${converted.toLocaleString()}`;
  };

  const categories = [
    { key: "all", label: "All Masterworks" },
    { key: "penthouse", label: "Sky Penthouses" },
    { key: "coastal", label: "Coastal Villas" },
    { key: "architectural", label: "Architectural Pavilions" },
    { key: "investment", label: "High-Yield Portfolios" },
  ];

  return (
    <section className={styles.section} id="properties">
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.sectionTag}>Curated Offerings</div>
          <h2 className={styles.title}>Prime Trophy Portfolio</h2>
        </div>

        <div className={styles.filterTabs}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`${styles.tabBtn} ${activeCategory === cat.key ? styles.tabBtnActive : ""}`}
              onClick={() => onCategorySelect(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {properties.length === 0 ? (
        <div className={styles.emptyState}>
          <h3 className={styles.emptyTitle}>No matching private offerings found</h3>
          <p className={styles.emptyText}>
            Try adjusting your search criteria or view our full curated masterwork portfolio.
          </p>
          <button className={styles.resetBtn} onClick={onResetFilters}>
            Show All Offerings
          </button>
        </div>
      ) : (
        <div className={styles.grid}>
          {properties.map((prop) => (
            <div key={prop.id} className={styles.card} id={`prop-card-${prop.id}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={prop.image}
                  alt={prop.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.image}
                  priority={prop.id === "prop-1"}
                />
                <span className={styles.badge}>{prop.tag}</span>
                <button
                  className={`${styles.favBtn} ${favorites[prop.id] ? styles.favBtnActive : ""}`}
                  onClick={(e) => toggleFavorite(prop.id, e)}
                  aria-label="Add to favorites"
                  title="Bookmark Asset"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={favorites[prop.id] ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>

              <div className={styles.content}>
                <div className={styles.location}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{prop.location}</span>
                </div>

                <h3 className={styles.cardTitle}>{prop.title}</h3>
                <p className={styles.description}>{prop.description}</p>

                <div className={styles.specs}>
                  <div className={styles.specItem}>
                    <span className={styles.specVal}>{prop.bedrooms}</span>
                    <span className={styles.specLabel}>Bedrooms</span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specVal}>{prop.bathrooms}</span>
                    <span className={styles.specLabel}>Bathrooms</span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specVal}>{prop.sqft.toLocaleString()}</span>
                    <span className={styles.specLabel}>Sq. Ft.</span>
                  </div>
                </div>

                <div className={styles.pricingRow}>
                  <div className={styles.priceCol}>
                    <span className={styles.priceLabel}>Valuation</span>
                    <span className={styles.priceAmount}>{formatPrice(prop.priceUSD)}</span>
                  </div>
                  <div className={styles.yieldBadge} title="Estimated Net Annual Rental Yield">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                      <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                    <span>{prop.projectedYield}% Yield</span>
                  </div>
                </div>

                <div className={styles.cardActions}>
                  <button
                    className={styles.inquireBtn}
                    onClick={() => onInquire(prop)}
                    id={`inquire-btn-${prop.id}`}
                  >
                    Schedule Private Tour
                  </button>
                  <button
                    className={styles.dossierBtn}
                    onClick={() => onInquire(prop)}
                    title="Request full investment memorandum"
                  >
                    Dossier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
