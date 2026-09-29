"use client";

import React, { useState } from "react";
import styles from "./ConsultationModal.module.css";
import { Property } from "@/data/properties";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProperty?: Property | null;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  selectedProperty,
}: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [entity, setEntity] = useState("");
  const [desk, setDesk] = useState("New York Desk");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
          id="close-modal-btn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {submitted ? (
          <div className={styles.successBox}>
            <div className={styles.successIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 className={styles.successTitle}>Private Briefing Scheduled</h3>
            <p className={styles.successDesc}>
              Thank you, {name || "Principal"}. A Senior Partner at Firmstate&apos;s {desk} will reach out
              via confidential channels within 4 business hours.
            </p>
            <button className={styles.doneBtn} onClick={handleReset}>
              Return to Platform
            </button>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <span className={styles.badge}>Confidential Engagement</span>
              <h2 id="modal-title" className={styles.title}>
                {selectedProperty
                  ? `Inquire: ${selectedProperty.title}`
                  : "Private Asset Stewardship Briefing"}
              </h2>
              <p className={styles.subtitle}>
                Connect directly with a Senior Partner at Firmstate for discreet acquisition,
                valuation advisory, or portfolio management.
              </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="client-name" className={styles.label}>
                  Principal or Representative Name
                </label>
                <input
                  id="client-name"
                  type="text"
                  required
                  placeholder="e.g. Lord Alexander Vance"
                  className={styles.input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="client-email" className={styles.label}>
                  Confidential Contact Email / Phone
                </label>
                <input
                  id="client-email"
                  type="text"
                  required
                  placeholder="name@familyoffice.com or +1 (555) 019-2834"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="client-entity" className={styles.label}>
                  Represented Entity / Family Office (Optional)
                </label>
                <input
                  id="client-entity"
                  type="text"
                  placeholder="e.g. Vance Capital / Private Trust"
                  className={styles.input}
                  value={entity}
                  onChange={(e) => setEntity(e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="preferred-desk" className={styles.label}>
                  Preferred Operating Desk
                </label>
                <select
                  id="preferred-desk"
                  className={styles.select}
                  value={desk}
                  onChange={(e) => setDesk(e.target.value)}
                >
                  <option value="New York Desk">New York (Fifth Ave Desk)</option>
                  <option value="London Mayfair Desk">London (Mayfair Desk)</option>
                  <option value="Zurich Desk">Zurich (Bahnhofstrasse Desk)</option>
                  <option value="Dubai DIFC Desk">Dubai (DIFC Desk)</option>
                  <option value="Singapore Desk">Singapore (Marina Bay Desk)</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="client-notes" className={styles.label}>
                  Acquisition / Stewardship Scope
                </label>
                <textarea
                  id="client-notes"
                  placeholder="Detail any specific asset criteria, holding structures, or timeline..."
                  className={styles.textarea}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <button
                type="submit"
                id="submit-consultation-btn"
                className={styles.submitBtn}
              >
                Submit Confidential Inquiry
              </button>

              <div className={styles.discretionNotice}>
                All transmissions are encrypted. Firmstate enforces strict non-disclosure obligations across all client representations.
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
