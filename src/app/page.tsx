"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import ValuationCalculator from "@/components/ValuationCalculator";
import AssetManagement from "@/components/AssetManagement";
import GlobalMarkets from "@/components/GlobalMarkets";
import ConsultationModal from "@/components/ConsultationModal";
import Footer from "@/components/Footer";
import { PROPERTIES, Property } from "@/data/properties";

export default function Home() {
  const [currency, setCurrency] = useState("USD");
  const [filters, setFilters] = useState({
    city: "all",
    category: "all",
    price: "all",
  });
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Filter properties logic
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      // City check
      if (filters.city !== "all" && prop.city !== filters.city) {
        return false;
      }
      // Category check
      if (filters.category !== "all" && prop.category !== filters.category) {
        return false;
      }
      // Price bracket check
      if (filters.price === "under20" && prop.priceUSD >= 20000000) {
        return false;
      }
      if (
        filters.price === "20to25" &&
        (prop.priceUSD < 20000000 || prop.priceUSD > 25000000)
      ) {
        return false;
      }
      if (filters.price === "over25" && prop.priceUSD <= 25000000) {
        return false;
      }
      return true;
    });
  }, [filters]);

  const handleFilterChange = (newFilters: {
    city: string;
    category: string;
    price: string;
  }) => {
    setFilters(newFilters);
  };

  const handleCategorySelect = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      category,
    }));
  };

  const handleCitySelect = (city: string) => {
    setFilters((prev) => ({
      ...prev,
      city,
    }));
    scrollToProperties();
  };

  const handleResetFilters = () => {
    setFilters({
      city: "all",
      category: "all",
      price: "all",
    });
  };

  const handleInquireProperty = (prop: Property) => {
    setSelectedProperty(prop);
    setIsConsultationOpen(true);
  };

  const handleOpenGeneralConsultation = () => {
    setSelectedProperty(null);
    setIsConsultationOpen(true);
  };

  const scrollToProperties = () => {
    const el = document.getElementById("properties");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar
        currentCurrency={currency}
        onCurrencyChange={setCurrency}
        onOpenConsultation={handleOpenGeneralConsultation}
      />

      <main>
        <Hero
          selectedCity={filters.city}
          selectedCategory={filters.category}
          selectedPrice={filters.price}
          onFilterChange={handleFilterChange}
          onScrollToProperties={scrollToProperties}
        />

        <FeaturedProperties
          properties={filteredProperties}
          currentCurrency={currency}
          activeCategory={filters.category}
          onCategorySelect={handleCategorySelect}
          onInquire={handleInquireProperty}
          onResetFilters={handleResetFilters}
        />

        <ValuationCalculator
          currentCurrency={currency}
          onOpenConsultation={handleOpenGeneralConsultation}
        />

        <AssetManagement />

        <GlobalMarkets onSelectCity={handleCitySelect} />
      </main>

      <Footer />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        selectedProperty={selectedProperty}
      />
    </>
  );
}
