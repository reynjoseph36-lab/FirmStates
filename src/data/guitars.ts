export interface GuitarModel {
  id: string;
  name: string;
  designation: string;
  category: "solidbody" | "semihollow" | "baritone";
  tagline: string;
  bodyWood: string;
  neckWood: string;
  fretboardWood: string;
  fretboardRadius: string;
  scaleLength: string;
  nutWidth: string;
  pickupConfig: string;
  bridgeSystem: string;
  weightAverage: string;
  basePriceUSD: number;
  image: string;
  soundCharacteristics: {
    neck: string;
    middle: string;
    bridge: string;
  };
  frequencies: {
    low: number; // 0-100
    mid: number;
    high: number;
  };
  notes: string;
}

export const GUITARS: GuitarModel[] = [
  {
    id: "model-one",
    name: "Model One",
    designation: "Solid Body Electric",
    category: "solidbody",
    tagline: "Roasted swamp ash with hand-wound gold foil single coils.",
    bodyWood: "Torrefied Louisiana Swamp Ash (single-piece slab)",
    neckWood: "Quartersawn Hard Rock Maple with dual graphite rods",
    fretboardWood: "Old-growth Indian Rosewood (10 inch radius)",
    fretboardRadius: "10\"",
    scaleLength: "25.5\"",
    nutWidth: "1.687\" (42.8 mm) hand-filed bone",
    pickupConfig: "Arbor Custom Gold Foil Single Coils (Alnico V magnets)",
    bridgeSystem: "Half-plate cold-rolled steel with compensated brass barrel saddles",
    weightAverage: "6.9 lbs (3.12 kg)",
    basePriceUSD: 2850,
    image: "/guitars/arbor-model-one.jpg",
    soundCharacteristics: {
      neck: "Warm hollow acoustic character with quick percussive decay.",
      middle: "Scooped chime with balanced string separation across all 6 courses.",
      bridge: "Microphonic bite and open-air harmonic overtones without harsh peak.",
    },
    frequencies: {
      low: 68,
      mid: 82,
      high: 78,
    },
    notes:
      "The body blank is baked at 180°C in an oxygen-free kiln until moisture drops below 4%. This crystalline cell structure yields the resonance of a sixty-year-old instrument on day one.",
  },
  {
    id: "drift",
    name: "Drift",
    designation: "Carved Semi-Hollow",
    category: "semihollow",
    tagline: "Bookmatched flame maple top with unpotted vintage humbuckers.",
    bodyWood: "Chambered Honduran Mahogany with hand-graduated flamed Michigan maple cap",
    neckWood: "One-piece Honduran Mahogany with 17-degree headstock angle",
    fretboardWood: "Gabon Ebony with hide-glue cellulose nitrate binding",
    fretboardRadius: "12\"",
    scaleLength: "24.75\"",
    nutWidth: "1.695\" (43.0 mm) bone nut",
    pickupConfig: "Scatter-wound PAF style humbuckers (Alnico II, 7.2k neck / 8.1k bridge)",
    bridgeSystem: "Machined aluminum ABR-1 bridge on brass posts with solid bar tailpiece",
    weightAverage: "6.4 lbs (2.90 kg)",
    basePriceUSD: 3400,
    image: "/guitars/arbor-drift.jpg",
    soundCharacteristics: {
      neck: "Rich woody resonance with round flute-like sustain on single notes.",
      middle: "Complex acoustic bloom with sweet midrange harmonic compression.",
      bridge: "Vocal midrange bark that cuts cleanly through live drum arrangements.",
    },
    frequencies: {
      low: 80,
      mid: 74,
      high: 66,
    },
    notes:
      "Dual sound chambers are CNC-routed and finished with Japanese hand planes. The acoustic air column inside the soundboard softens harsh pick attacks into smooth dynamic swell.",
  },
  {
    id: "rift",
    name: "Rift Baritone",
    designation: "Extended Scale Offset",
    category: "baritone",
    tagline: "Extended 27-inch scale tuned B-to-B with soapbar P90 clarity.",
    bodyWood: "Selected Red Alder with deep forearm and ribcage relief contours",
    neckWood: "Roasted Curly Maple with dual-action truss rod and spoke-wheel adjuster",
    fretboardWood: "Macassar Ebony with Jescar medium-jumbo stainless steel frets",
    fretboardRadius: "9.5\" to 12\" compound",
    scaleLength: "27.0\"",
    nutWidth: "1.72\" (43.6 mm) graph-tech lubricated ivory",
    pickupConfig: "Matched pair Soapbar P90s wound with 43 AWG plain enamel wire",
    bridgeSystem: "Recessed hardtail brass plate with string-through-body ferrule anchor",
    weightAverage: "7.3 lbs (3.31 kg)",
    basePriceUSD: 3100,
    image: "https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=1200&q=80",
    soundCharacteristics: {
      neck: "Deep upright-bass chest resonance with crystalline top-end string definition.",
      middle: "Punchy rhythm clatter ideal for baritone twang and ambient textures.",
      bridge: "Tight punchy transient with instantaneous low-E tracking under overdrive.",
    },
    frequencies: {
      low: 92,
      mid: 68,
      high: 72,
    },
    notes:
      "Tuned five semitones below standard guitar (B1–E2–A2–D3–F#3–B3), the 27-inch scale maintains 16.8 lbs of tension per string using standard baritone sets without flabbiness.",
  },
];

export const WORKSHOP_DETAILS = {
  location: "Bellingham, Washington",
  founded: 2018,
  annualOutput: "48 instruments per year",
  currentSlotWait: "14 to 18 weeks",
  luthierLead: "Julian Vance",
};
