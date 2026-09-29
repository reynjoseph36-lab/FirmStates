"use client";

import React, { useState } from "react";
import WorkshopNav from "@/components/WorkshopNav";
import HeroWorkbench from "@/components/HeroWorkbench";
import ToneBench from "@/components/ToneBench";
import InstrumentShowcase from "@/components/InstrumentShowcase";
import Craftsmanship from "@/components/Craftsmanship";
import BuildDocket from "@/components/BuildDocket";
import CommissionModal from "@/components/CommissionModal";
import WorkshopFooter from "@/components/WorkshopFooter";

interface BuildDetails {
  model: string;
  timber: string;
  fretboard: string;
  pickups: string;
  finish: string;
  totalPrice: number;
  estimatedWeight: string;
}

export default function Home() {
  const [selectedModelForDocket, setSelectedModelForDocket] = useState<string>("model-one");
  const [isCommissionModalOpen, setIsCommissionModalOpen] = useState(false);
  const [activeBuildDetails, setActiveBuildDetails] = useState<BuildDetails | null>(null);

  const scrollToModels = () => {
    const el = document.getElementById("models");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToToneBench = () => {
    const el = document.getElementById("tone-bench");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectModelForDocket = (modelId: string) => {
    setSelectedModelForDocket(modelId);
    const el = document.getElementById("docket");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenCommissionModal = (details: BuildDetails) => {
    setActiveBuildDetails(details);
    setIsCommissionModalOpen(true);
  };

  const handleOpenGeneralCommission = () => {
    setActiveBuildDetails({
      model: "Arbor Model One",
      timber: "Torrefied Swamp Ash",
      fretboard: "Old-Growth Indian Rosewood",
      pickups: "Arbor Hand-Wound Gold Foils",
      finish: "Dune Wax (Open-Pore Satin)",
      totalPrice: 2850,
      estimatedWeight: "6.9 lbs",
    });
    setIsCommissionModalOpen(true);
  };

  return (
    <>
      <WorkshopNav onOpenCommission={handleOpenGeneralCommission} />

      <main>
        <HeroWorkbench
          onScrollToModels={scrollToModels}
          onScrollToToneBench={scrollToToneBench}
        />

        <ToneBench />

        <InstrumentShowcase
          onSelectForDocket={handleSelectModelForDocket}
        />

        <Craftsmanship />

        <BuildDocket
          initialModelId={selectedModelForDocket}
          onOpenCommissionModal={handleOpenCommissionModal}
        />
      </main>

      <WorkshopFooter />

      <CommissionModal
        isOpen={isCommissionModalOpen}
        onClose={() => setIsCommissionModalOpen(false)}
        buildDetails={activeBuildDetails}
      />
    </>
  );
}
