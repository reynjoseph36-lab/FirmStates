export interface Property {
  id: string;
  title: string;
  category: "penthouse" | "coastal" | "architectural" | "investment";
  location: string;
  city: string;
  priceUSD: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  projectedYield: number; // in %
  tag: string;
  image: string;
  description: string;
  features: string[];
}

export const PROPERTIES: Property[] = [
  {
    id: "prop-1",
    title: "The Solstice Crown Penthouse",
    category: "penthouse",
    location: "Billionaires' Row, Central Park South",
    city: "New York",
    priceUSD: 28500000,
    bedrooms: 5,
    bathrooms: 6,
    sqft: 7850,
    projectedYield: 6.8,
    tag: "Exclusive Trophy",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    description: "Private floor duplex with 360-degree panoramic skyline and Central Park vistas, private elevator gallery, and double-height entertaining salon.",
    features: ["Private Helipad Access", "Wine Cellar 1200 Btls", "24/7 Doorman", "Private Pool Terrace"]
  },
  {
    id: "prop-2",
    title: "Villa Mirador Del Mar",
    category: "coastal",
    location: "Cap d'Antibes Peninsula",
    city: "Côte d'Azur",
    priceUSD: 19800000,
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8900,
    projectedYield: 7.4,
    tag: "Waterfront",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    description: "Modernist Mediterranean sanctuary with direct private sea access, heated saltwater infinity pool, and sunken amphitheater fire pit.",
    features: ["Direct Deepwater Moorings", "Smart Home Automation", "Spa & Wellness Suite", "Staff Quarters"]
  },
  {
    id: "prop-3",
    title: "The Bel Air Obsidian Pavilion",
    category: "architectural",
    location: "Bel Air Crest",
    city: "Los Angeles",
    priceUSD: 24200000,
    bedrooms: 5,
    bathrooms: 8,
    sqft: 10400,
    projectedYield: 8.1,
    tag: "Architectural Icon",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "A cantilevered architectural masterpiece of smoked glass, titanium, and basalt stone boasting horizon-to-horizon ocean sunsets.",
    features: ["Zero-Edge Infinity Moat", "Automotive Gallery (8 Cars)", "Sub-Zero Chef Kitchen", "Dolby Atmos Cinema"]
  },
  {
    id: "prop-4",
    title: "The Engadin Alpine Sanctuary",
    category: "architectural",
    location: "Suvretta Hillside",
    city: "St. Moritz",
    priceUSD: 16500000,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 6200,
    projectedYield: 7.9,
    tag: "Ski-in / Ski-out",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description: "Ultra-luxury modern chalet blending local larch woodwork with minimalist bronze fixtures, indoor hydrotherapy pool, and private ski room.",
    features: ["Geothermal Heating", "Finnish Sauna & Cold Plunge", "Heated Driveway", "Private Helipad"]
  },
  {
    id: "prop-5",
    title: "The Palm Crescent Sky Villa",
    category: "penthouse",
    location: "Palm Jumeirah East Crescent",
    city: "Dubai",
    priceUSD: 22000000,
    bedrooms: 4,
    bathrooms: 6,
    sqft: 7200,
    projectedYield: 9.2,
    tag: "High Yield",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    description: "Triplex penthouse boasting private sky lounge, infinity rooftop pool with views of the Arabian Gulf, and private yacht berth.",
    features: ["Private Yacht Berth", "Private Elevator", "Valet & 24/7 Butler", "Zero Personal Tax"]
  },
  {
    id: "prop-6",
    title: "Kensington Palace Gate Residence",
    category: "investment",
    location: "Kensington",
    city: "London",
    priceUSD: 14750000,
    bedrooms: 4,
    bathrooms: 4,
    sqft: 5100,
    projectedYield: 6.5,
    tag: "Prime Central",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    description: "Restored Grade II listed residence with contemporary architectural interior, private courtyard garden, and secure underground parking.",
    features: ["Heritage Restoration", "Bespoke Joinery", "Underground Parking", "Mews House Included"]
  }
];

export const CURRENCIES = [
  { code: "USD", symbol: "$", rate: 1.0 },
  { code: "EUR", symbol: "€", rate: 0.92 },
  { code: "GBP", symbol: "£", rate: 0.78 },
  { code: "AED", symbol: "AED ", rate: 3.67 },
  { code: "SGD", symbol: "S$", rate: 1.34 }
];
