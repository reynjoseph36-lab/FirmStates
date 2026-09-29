"use client";

import React, { useState } from "react";
import styles from "./CommissionModal.module.css";

interface BuildDetails {
  model: string;
  timber: string;
  fretboard: string;
  pickups: string;
  finish: string;
  totalPrice: number;
  estimatedWeight: string;
}

interface CommissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  buildDetails?: BuildDetails | null;
}

export default function CommissionModal({
  isOpen,
  onClose,
  buildDetails,
}: CommissionModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [musicalContext, setMusicalContext] = useState("");
  const [customRequests, setCustomRequests] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
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
        aria-labelledby="commission-modal-title"
      >
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close dialog"
          id="close-commission-btn"
        >
          ✕
        </button>

        {submitted ? (
          <div className={styles.successBox}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.successHeading}>Build ticket received</h3>
            <p className={styles.successText}>
              Thank you, {name || "musician"}. Master luthier Julian Vance reviews every
              commission docket personally. We will contact you at {email} within 24 hours
              with your wood slab photos and wood grain selection options.
            </p>
            <button onClick={handleResetAndClose} className={styles.doneBtn}>
              Return to workshop
            </button>
          </div>
        ) : (
          <>
            <div className={styles.titleArea}>
              <h3 className={styles.modalTitle} id="commission-modal-title">
                Reserve build slot
              </h3>
              <p className={styles.modalSub}>
                Bellingham, WA workshop · Batch 2026 build queue
              </p>
            </div>

            {buildDetails && (
              <div className={styles.docketSummaryBox}>
                <div className={styles.docketSummaryLine}>
                  <span className={styles.docketKey}>Model</span>
                  <span className={styles.docketVal}>{buildDetails.model}</span>
                </div>
                <div className={styles.docketSummaryLine}>
                  <span className={styles.docketKey}>Tonewood</span>
                  <span className={styles.docketVal}>{buildDetails.timber}</span>
                </div>
                <div className={styles.docketSummaryLine}>
                  <span className={styles.docketKey}>Pickups</span>
                  <span className={styles.docketVal}>{buildDetails.pickups}</span>
                </div>
                <div className={styles.docketSummaryLine}>
                  <span className={styles.docketKey}>Finish</span>
                  <span className={styles.docketVal}>{buildDetails.finish}</span>
                </div>
                <div className={styles.docketSummaryLine}>
                  <span className={styles.docketKey}>Total investment</span>
                  <span className={styles.docketVal}>
                    ${buildDetails.totalPrice.toLocaleString()} USD
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="comm-name" className={styles.label}>
                  Full name
                </label>
                <input
                  id="comm-name"
                  type="text"
                  required
                  placeholder="e.g. Julian Casablancas"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="comm-email" className={styles.label}>
                  Email address
                </label>
                <input
                  id="comm-email"
                  type="email"
                  required
                  placeholder="you@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="comm-style" className={styles.label}>
                  Primary amplifier or playing context
                </label>
                <input
                  id="comm-style"
                  type="text"
                  placeholder="e.g. 1965 Deluxe Reverb, studio recording, fingerstyle"
                  value={musicalContext}
                  onChange={(e) => setMusicalContext(e.target.value)}
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="comm-notes" className={styles.label}>
                  Custom specifications or preferences (optional)
                </label>
                <textarea
                  id="comm-notes"
                  rows={3}
                  placeholder="Left-handed build, specific neck thickness (.880 at 1st fret), string gauge preference..."
                  value={customRequests}
                  onChange={(e) => setCustomRequests(e.target.value)}
                  className={styles.textarea}
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                id="submit-build-ticket-btn"
              >
                Submit build reservation
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
