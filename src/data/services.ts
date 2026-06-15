// ---------------------------------------------------------------------------
// Lone Star Contracting Group -- Services Data
// Structured data source driving pages, forms, and SEO across the site.
// ---------------------------------------------------------------------------

// ---- Types ----------------------------------------------------------------

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  categoryId: string;
  subServices: string[];
  licensed: boolean;
  licenseNote: string | null;
  primaryKeyword: string;
  keywordVariants: string[];
  customerAngle: string;
  serviceType: "commercial" | "residential" | "both";
  image: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  image: string;
}

// ---- Categories -----------------------------------------------------------

export const serviceCategories: ServiceCategory[] = [
  {
    id: "structural-and-foundation",
    name: "Structural and Foundation",
    description:
      "Foundation repair, concrete work, framing, masonry, and structural services for residential and commercial properties across Texas.",
    image: "/images/lone-star-foundation-repair.jpg",
  },
  {
    id: "exterior-and-envelope",
    name: "Exterior and Envelope",
    description:
      "Roofing, siding, stucco, gutters, windows, doors, exterior painting, and waterproofing to protect your building from the elements.",
    image: "/images/lone-star-exterior-work.jpg",
  },
  {
    id: "mechanical-licensed-trades",
    name: "Mechanical (Licensed Trades)",
    description:
      "Plumbing, electrical, HVAC, and irrigation services delivered by licensed professionals in our network.",
    image: "/images/lone-star-plumbing.jpg",
  },
  {
    id: "interior-and-finish",
    name: "Interior and Finish",
    description:
      "Drywall, painting, flooring, tile, cabinetry, countertops, and trim work to complete your interior space.",
    image: "/images/lone-star-interior-finish.jpg",
  },
  {
    id: "site-work-and-outdoor",
    name: "Site Work and Outdoor",
    description:
      "Land clearing, grading, demolition, fencing, decks, patios, hardscaping, landscaping, tree work, and drainage solutions.",
    image: "/images/lone-star-site-work.jpg",
  },
  {
    id: "maintenance-and-specialty",
    name: "Maintenance and Specialty",
    description:
      "Pressure washing, parking lot striping, sealcoating, welding, handyman services, and debris removal for ongoing property care.",
    image: "/images/lone-star-maintenance-work.jpg",
  },
  {
    id: "construction-and-remodel",
    name: "Construction and Remodel",
    description:
      "Residential remodels, kitchen and bath renovations, room additions, custom homes, commercial construction, tenant finish-outs, and insurance restoration.",
    image: "/images/lone-star-home-remodel.jpg",
  },
];

// ---- Services -------------------------------------------------------------

export const services: Service[] = [
  // ========================================================================
  // 1. Structural and Foundation
  // ========================================================================
  {
    id: "foundation-repair",
    name: "Foundation Repair",
    description:
      "Pier installation, leveling, and stabilization for settling or damaged foundations.",
    category: "Structural and Foundation",
    categoryId: "structural-and-foundation",
    subServices: [
      "Pressed concrete piers",
      "Steel push piers",
      "Helical piers",
      "Slab leveling and mudjacking",
      "Beam repair and replacement",
      "Drainage correction for foundations",
      "Foundation inspections",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "foundation repair",
    keywordVariants: [
      "foundation repair near me",
      "house leveling",
      "pier and beam repair",
      "slab foundation repair",
      "foundation crack repair",
    ],
    customerAngle:
      "Homeowners worry that cracks and uneven floors signal major structural failure and need a contractor they can trust to diagnose and fix the real problem.",
    serviceType: "both",
    image: "/images/lone-star-foundation-repair.jpg",
  },
  {
    id: "concrete-flatwork",
    name: "Concrete Flatwork",
    description:
      "Driveways, sidewalks, slabs, and patios poured and finished to spec.",
    category: "Structural and Foundation",
    categoryId: "structural-and-foundation",
    subServices: [
      "Driveway installation and replacement",
      "Sidewalk and walkway pouring",
      "Garage and shop slabs",
      "Patio slabs",
      "Concrete curbing",
      "Stamped and decorative concrete",
      "Concrete repair and resurfacing",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "concrete contractor",
    keywordVariants: [
      "concrete flatwork",
      "driveway contractor",
      "sidewalk repair",
      "concrete slab contractor",
      "stamped concrete",
      "concrete patio",
    ],
    customerAngle:
      "Property owners want concrete that is poured right the first time so they do not have to tear it out and start over in a few years.",
    serviceType: "both",
    image: "/images/lone-star-concrete-work.jpg",
  },
  {
    id: "framing",
    name: "Framing",
    description:
      "Structural wood and metal framing for new construction, additions, and repairs.",
    category: "Structural and Foundation",
    categoryId: "structural-and-foundation",
    subServices: [
      "Wood stud framing",
      "Metal stud framing",
      "Load-bearing wall modifications",
      "Roof framing and trusses",
      "Floor system framing",
      "Sheathing and subfloor installation",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "framing contractor",
    keywordVariants: [
      "house framing",
      "commercial framing",
      "metal stud framing",
      "rough carpentry",
      "structural framing",
    ],
    customerAngle:
      "Builders and homeowners need framing crews that show up on schedule and build plumb, square, and to code so every trade behind them can do clean work.",
    serviceType: "both",
    image: "/images/lone-star-foundation-repair.jpg",
  },
  {
    id: "retaining-walls",
    name: "Retaining Walls",
    description:
      "Engineered retaining walls for erosion control, grade changes, and property boundaries.",
    category: "Structural and Foundation",
    categoryId: "structural-and-foundation",
    subServices: [
      "Segmental block retaining walls",
      "Poured concrete retaining walls",
      "Timber retaining walls",
      "Natural stone retaining walls",
      "Gabion walls",
      "Drainage integration behind walls",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "retaining wall contractor",
    keywordVariants: [
      "retaining wall installation",
      "retaining wall repair",
      "erosion control wall",
      "landscape retaining wall",
      "block retaining wall",
    ],
    customerAngle:
      "Property owners dealing with erosion or sloped lots need a wall that is engineered correctly so it does not lean or fail after a heavy rain.",
    serviceType: "both",
    image: "/images/lone-star-foundation-repair.jpg",
  },
  {
    id: "masonry",
    name: "Masonry",
    description:
      "Brick, block, and stone construction, repair, and restoration for structures and hardscapes.",
    category: "Structural and Foundation",
    categoryId: "structural-and-foundation",
    subServices: [
      "Brick veneer installation",
      "CMU block walls",
      "Stone veneer and natural stone",
      "Tuckpointing and mortar repair",
      "Chimney repair and rebuild",
      "Masonry columns and mailboxes",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "masonry contractor",
    keywordVariants: [
      "brick repair",
      "stone masonry",
      "tuckpointing",
      "block wall contractor",
      "masonry repair near me",
    ],
    customerAngle:
      "Owners of older brick or stone buildings need skilled masons who can match existing materials and restore structural integrity without making the repair look like a patch job.",
    serviceType: "both",
    image: "/images/lone-star-foundation-repair.jpg",
  },
  {
    id: "structural-repairs",
    name: "Structural Repairs",
    description:
      "Diagnosis and repair of load-bearing damage, sagging beams, and compromised framing.",
    category: "Structural and Foundation",
    categoryId: "structural-and-foundation",
    subServices: [
      "Load-bearing wall repair",
      "Beam and joist replacement",
      "Subfloor repair",
      "Storm and wind damage structural repair",
      "Termite damage repair",
      "Structural assessment and scoping",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "structural repair contractor",
    keywordVariants: [
      "structural damage repair",
      "beam replacement",
      "load bearing wall repair",
      "storm damage structural repair",
      "wood rot repair",
    ],
    customerAngle:
      "Property owners facing visible structural damage need a crew that can accurately scope the problem and make lasting repairs instead of covering up symptoms.",
    serviceType: "both",
    image: "/images/lone-star-foundation-repair.jpg",
  },

  // ========================================================================
  // 2. Exterior and Envelope
  // ========================================================================
  {
    id: "roofing",
    name: "Roofing",
    description:
      "Roof repair, replacement, and new installation for residential and commercial properties.",
    category: "Exterior and Envelope",
    categoryId: "exterior-and-envelope",
    subServices: [
      "Asphalt shingle roofing",
      "Metal roofing",
      "TPO and flat roof systems",
      "Roof repair and patching",
      "Storm damage roof repair",
      "Roof inspections",
      "Gutter and flashing replacement",
      "Commercial roof maintenance programs",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "roofing contractor",
    keywordVariants: [
      "roof repair near me",
      "metal roof installation",
      "commercial roofing",
      "storm damage roof repair",
      "TPO roofing contractor",
      "roof replacement",
    ],
    customerAngle:
      "After a storm or years of wear, property owners need a roofer who will be honest about what actually needs replacing and stand behind the work with a solid warranty.",
    serviceType: "both",
    image: "/images/lone-star-roofing.jpg",
  },
  {
    id: "siding",
    name: "Siding",
    description:
      "Siding installation, repair, and replacement in vinyl, fiber cement, wood, and metal.",
    category: "Exterior and Envelope",
    categoryId: "exterior-and-envelope",
    subServices: [
      "Vinyl siding installation",
      "Fiber cement (Hardie) siding",
      "Wood siding repair",
      "Metal siding and panels",
      "Siding removal and replacement",
      "Soffit and fascia repair",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "siding contractor",
    keywordVariants: [
      "siding installation",
      "Hardie board siding",
      "vinyl siding repair",
      "siding replacement near me",
      "fiber cement siding",
    ],
    customerAngle:
      "Homeowners want siding that protects against Texas heat and wind-driven rain without warping, fading, or requiring constant maintenance.",
    serviceType: "both",
    image: "/images/lone-star-exterior-work.jpg",
  },
  {
    id: "stucco",
    name: "Stucco",
    description:
      "Stucco application, patching, and re-coating for residential and commercial exteriors.",
    category: "Exterior and Envelope",
    categoryId: "exterior-and-envelope",
    subServices: [
      "Traditional stucco application",
      "Synthetic stucco (EIFS)",
      "Stucco crack repair",
      "Stucco re-coating and color matching",
      "Stucco removal",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "stucco contractor",
    keywordVariants: [
      "stucco repair near me",
      "stucco installation",
      "EIFS contractor",
      "stucco crack repair",
      "stucco patching",
    ],
    customerAngle:
      "Property owners with cracked or peeling stucco want a repair that blends seamlessly with the original finish and seals out moisture for the long term.",
    serviceType: "both",
    image: "/images/lone-star-exterior-work.jpg",
  },
  {
    id: "gutters",
    name: "Gutters",
    description:
      "Gutter installation, repair, cleaning, and gutter guard systems.",
    category: "Exterior and Envelope",
    categoryId: "exterior-and-envelope",
    subServices: [
      "Seamless gutter installation",
      "Gutter repair and resealing",
      "Gutter guard and leaf protection systems",
      "Downspout installation and rerouting",
      "Gutter cleaning",
      "Box gutter and commercial gutter systems",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "gutter installation",
    keywordVariants: [
      "seamless gutters",
      "gutter repair",
      "gutter guards",
      "gutter contractor near me",
      "downspout installation",
    ],
    customerAngle:
      "Homeowners dealing with overflowing gutters and water pooling near the foundation need a lasting fix that channels water away from the structure.",
    serviceType: "both",
    image: "/images/lone-star-exterior-work.jpg",
  },
  {
    id: "windows-and-doors",
    name: "Windows and Doors",
    description:
      "Window and door installation, replacement, and weatherization for improved comfort and efficiency.",
    category: "Exterior and Envelope",
    categoryId: "exterior-and-envelope",
    subServices: [
      "Window replacement",
      "New construction window installation",
      "Entry door installation",
      "Sliding and patio door installation",
      "Storefront and commercial door installation",
      "Weatherstripping and sealing",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "window replacement",
    keywordVariants: [
      "window installation near me",
      "door replacement",
      "energy efficient windows",
      "entry door installation",
      "commercial door installation",
    ],
    customerAngle:
      "Owners tired of drafty rooms and high energy bills want windows and doors installed correctly so the seal holds and the savings show up on the utility bill.",
    serviceType: "both",
    image: "/images/lone-star-exterior-work.jpg",
  },
  {
    id: "exterior-painting",
    name: "Exterior Painting",
    description:
      "Surface preparation and exterior painting for homes, offices, and commercial buildings.",
    category: "Exterior and Envelope",
    categoryId: "exterior-and-envelope",
    subServices: [
      "House exterior painting",
      "Commercial building exterior painting",
      "Surface prep and power washing",
      "Wood trim and fascia painting",
      "Stain and sealant application",
      "Fence and deck staining",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "exterior painting contractor",
    keywordVariants: [
      "exterior house painting",
      "commercial exterior painting",
      "house painters near me",
      "exterior paint job",
      "building painting",
    ],
    customerAngle:
      "Property owners want a paint job that looks sharp on day one and holds up against Texas sun and weather for years instead of peeling after the first summer.",
    serviceType: "both",
    image: "/images/lone-star-exterior-work.jpg",
  },
  {
    id: "waterproofing",
    name: "Waterproofing",
    description:
      "Below-grade and exterior waterproofing to prevent moisture intrusion and water damage.",
    category: "Exterior and Envelope",
    categoryId: "exterior-and-envelope",
    subServices: [
      "Basement and crawl space waterproofing",
      "Exterior foundation waterproofing",
      "Sealant and membrane application",
      "Interior drainage systems",
      "Sump pump installation",
      "Moisture barrier installation",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "waterproofing contractor",
    keywordVariants: [
      "basement waterproofing",
      "foundation waterproofing",
      "crawl space waterproofing",
      "moisture barrier installation",
      "water damage prevention",
    ],
    customerAngle:
      "Property owners with recurring moisture problems need a waterproofing system that solves the root cause instead of just treating the symptoms every rainy season.",
    serviceType: "both",
    image: "/images/lone-star-exterior-work.jpg",
  },

  // ========================================================================
  // 3. Mechanical (Licensed Trades)
  // ========================================================================
  {
    id: "plumbing",
    name: "Plumbing",
    description:
      "Residential and commercial plumbing installation, repair, and service.",
    category: "Mechanical (Licensed Trades)",
    categoryId: "mechanical-licensed-trades",
    subServices: [
      "Pipe repair and repiping",
      "Water heater installation and repair",
      "Fixture installation",
      "Drain cleaning and sewer repair",
      "Gas line installation and repair",
      "Commercial plumbing systems",
      "Backflow preventer installation and testing",
    ],
    licensed: true,
    licenseNote:
      "Delivered by licensed professionals in our network. The licensed party holds the license and pulls the permit.",
    primaryKeyword: "plumber near me",
    keywordVariants: [
      "plumbing contractor",
      "plumbing repair",
      "water heater installation",
      "repiping service",
      "commercial plumber",
      "drain cleaning",
    ],
    customerAngle:
      "Owners facing leaks, low pressure, or aging pipes need a licensed plumber who can diagnose the issue fast, provide an honest quote, and fix it right.",
    serviceType: "both",
    image: "/images/lone-star-plumbing.jpg",
  },
  {
    id: "electrical",
    name: "Electrical",
    description:
      "Electrical installation, wiring, panel upgrades, and repair for residential and commercial properties.",
    category: "Mechanical (Licensed Trades)",
    categoryId: "mechanical-licensed-trades",
    subServices: [
      "Panel upgrades and replacement",
      "Wiring and rewiring",
      "Outlet and switch installation",
      "Lighting installation",
      "Generator installation",
      "Commercial electrical build-outs",
      "Electrical troubleshooting and repair",
    ],
    licensed: true,
    licenseNote:
      "Delivered by licensed professionals in our network. The licensed party holds the license and pulls the permit.",
    primaryKeyword: "electrician near me",
    keywordVariants: [
      "electrical contractor",
      "panel upgrade",
      "electrical repair",
      "commercial electrician",
      "wiring contractor",
      "generator installation",
    ],
    customerAngle:
      "Property owners know that electrical work done wrong is a fire hazard and want a licensed electrician who will do the job to code and pull the proper permits.",
    serviceType: "both",
    image: "/images/lone-star-electrical.jpg",
  },
  {
    id: "hvac",
    name: "HVAC",
    description:
      "Heating, ventilation, and air conditioning installation, repair, and maintenance.",
    category: "Mechanical (Licensed Trades)",
    categoryId: "mechanical-licensed-trades",
    subServices: [
      "AC installation and replacement",
      "Furnace and heat pump installation",
      "HVAC repair and diagnostics",
      "Ductwork installation and repair",
      "Preventive maintenance plans",
      "Commercial HVAC systems",
      "Mini-split and ductless systems",
    ],
    licensed: true,
    licenseNote:
      "Delivered by licensed professionals in our network. The licensed party holds the license and pulls the permit.",
    primaryKeyword: "HVAC contractor near me",
    keywordVariants: [
      "AC repair",
      "HVAC installation",
      "air conditioning contractor",
      "furnace repair",
      "commercial HVAC",
      "ductwork repair",
    ],
    customerAngle:
      "In Texas heat, a broken AC is an emergency. Property owners need a licensed HVAC team that can respond quickly and recommend the right system instead of upselling.",
    serviceType: "both",
    image: "/images/lone-star-hvac-system.jpg",
  },
  {
    id: "irrigation",
    name: "Irrigation",
    description:
      "Sprinkler system design, installation, repair, and seasonal maintenance.",
    category: "Mechanical (Licensed Trades)",
    categoryId: "mechanical-licensed-trades",
    subServices: [
      "Sprinkler system design and installation",
      "Sprinkler head repair and replacement",
      "Drip irrigation systems",
      "Controller and timer upgrades",
      "Backflow preventer installation and testing",
      "Seasonal system winterization and startup",
    ],
    licensed: true,
    licenseNote:
      "Delivered by licensed professionals in our network. The licensed party holds the license and pulls the permit.",
    primaryKeyword: "irrigation contractor",
    keywordVariants: [
      "sprinkler system installation",
      "sprinkler repair near me",
      "drip irrigation",
      "irrigation system repair",
      "lawn sprinkler contractor",
    ],
    customerAngle:
      "Property owners want a sprinkler system that waters evenly, conserves water, and does not leak underground where nobody can see the damage until the bill arrives.",
    serviceType: "both",
    image: "/images/lone-star-plumbing.jpg",
  },

  // ========================================================================
  // 4. Interior and Finish
  // ========================================================================
  {
    id: "drywall",
    name: "Drywall",
    description:
      "Drywall hanging, finishing, texturing, and repair for new builds and renovations.",
    category: "Interior and Finish",
    categoryId: "interior-and-finish",
    subServices: [
      "Drywall hanging",
      "Taping, mudding, and finishing",
      "Texture application and matching",
      "Drywall patch and repair",
      "Ceiling repair",
      "Soundproofing drywall installation",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "drywall contractor",
    keywordVariants: [
      "drywall repair near me",
      "drywall installation",
      "drywall finishing",
      "texture matching",
      "ceiling repair",
    ],
    customerAngle:
      "Homeowners and builders want seamless drywall that does not show seams, nail pops, or uneven texture once the paint goes on.",
    serviceType: "both",
    image: "/images/lone-star-interior-finish.jpg",
  },
  {
    id: "interior-painting",
    name: "Interior Painting",
    description:
      "Professional interior painting, wall prep, and color consultation for homes and businesses.",
    category: "Interior and Finish",
    categoryId: "interior-and-finish",
    subServices: [
      "Full interior painting",
      "Accent wall painting",
      "Cabinet painting and refinishing",
      "Ceiling painting",
      "Wall repair and prep",
      "Commercial interior painting",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "interior painting contractor",
    keywordVariants: [
      "interior painters near me",
      "house painting interior",
      "commercial interior painting",
      "cabinet painting",
      "wall painting service",
    ],
    customerAngle:
      "Owners want clean lines, even coverage, and a crew that protects floors and furniture instead of leaving paint splatters everywhere.",
    serviceType: "both",
    image: "/images/lone-star-interior-painting.jpg",
  },
  {
    id: "flooring",
    name: "Flooring",
    description:
      "Flooring installation and replacement including hardwood, LVP, laminate, and carpet.",
    category: "Interior and Finish",
    categoryId: "interior-and-finish",
    subServices: [
      "Hardwood floor installation",
      "Luxury vinyl plank (LVP) installation",
      "Laminate flooring",
      "Carpet installation",
      "Floor removal and subfloor prep",
      "Hardwood refinishing",
      "Commercial flooring",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "flooring contractor",
    keywordVariants: [
      "flooring installation near me",
      "hardwood floor installation",
      "LVP flooring contractor",
      "carpet installation",
      "floor replacement",
    ],
    customerAngle:
      "Property owners want flooring installed flat and tight with clean transitions between rooms and no squeaks or gaps that show up weeks later.",
    serviceType: "both",
    image: "/images/lone-star-interior-finish.jpg",
  },
  {
    id: "tile",
    name: "Tile",
    description:
      "Tile installation for floors, showers, backsplashes, and feature walls.",
    category: "Interior and Finish",
    categoryId: "interior-and-finish",
    subServices: [
      "Floor tile installation",
      "Shower and tub surround tile",
      "Backsplash installation",
      "Large-format tile installation",
      "Tile repair and re-grouting",
      "Waterproofing and substrate prep",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "tile installer near me",
    keywordVariants: [
      "tile installation",
      "shower tile contractor",
      "backsplash installation",
      "bathroom tile",
      "tile contractor",
    ],
    customerAngle:
      "Homeowners want tile work with consistent grout lines, proper waterproofing behind the tile, and no cracked tiles from poor substrate prep.",
    serviceType: "both",
    image: "/images/lone-star-interior-finish.jpg",
  },
  {
    id: "cabinetry-and-countertops",
    name: "Cabinetry and Countertops",
    description:
      "Cabinet installation, refacing, and countertop fabrication and installation.",
    category: "Interior and Finish",
    categoryId: "interior-and-finish",
    subServices: [
      "Kitchen cabinet installation",
      "Bathroom vanity installation",
      "Cabinet refacing and refinishing",
      "Granite and quartz countertop installation",
      "Laminate countertop installation",
      "Custom shelving and built-ins",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "cabinet and countertop installer",
    keywordVariants: [
      "kitchen cabinets contractor",
      "countertop installation",
      "granite countertops",
      "cabinet refacing",
      "quartz countertop installer",
    ],
    customerAngle:
      "Kitchen and bath remodelers want cabinets that are level, doors that close properly, and countertop seams that are tight and barely visible.",
    serviceType: "both",
    image: "/images/lone-star-interior-finish.jpg",
  },
  {
    id: "trim-and-finish-carpentry",
    name: "Trim and Finish Carpentry",
    description:
      "Crown molding, baseboards, casing, wainscoting, and custom millwork installation.",
    category: "Interior and Finish",
    categoryId: "interior-and-finish",
    subServices: [
      "Crown molding installation",
      "Baseboard and shoe molding",
      "Door and window casing",
      "Wainscoting and board and batten",
      "Stair rail and baluster installation",
      "Custom built-ins and mantels",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "finish carpentry contractor",
    keywordVariants: [
      "trim carpenter near me",
      "crown molding installation",
      "baseboard installation",
      "custom carpentry",
      "millwork installation",
    ],
    customerAngle:
      "Homeowners and builders want tight miters, smooth transitions, and detail work that elevates the entire feel of the finished space.",
    serviceType: "both",
    image: "/images/lone-star-interior-finish.jpg",
  },

  // ========================================================================
  // 5. Site Work and Outdoor
  // ========================================================================
  {
    id: "land-clearing",
    name: "Land Clearing",
    description:
      "Brush removal, tree clearing, and lot preparation for construction or agricultural use.",
    category: "Site Work and Outdoor",
    categoryId: "site-work-and-outdoor",
    subServices: [
      "Brush and vegetation removal",
      "Tree clearing and stump grinding",
      "Lot clearing for new construction",
      "Right-of-way clearing",
      "Forestry mulching",
      "Debris hauling and disposal",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "land clearing service",
    keywordVariants: [
      "lot clearing",
      "brush clearing",
      "land clearing near me",
      "forestry mulching",
      "site clearing contractor",
    ],
    customerAngle:
      "Landowners preparing to build or develop a property need a crew that can clear the site efficiently without damaging the trees and features they want to keep.",
    serviceType: "both",
    image: "/images/lone-star-site-work.jpg",
  },
  {
    id: "grading-and-excavation",
    name: "Grading and Excavation",
    description:
      "Site grading, excavation, trenching, and earthwork for construction and drainage.",
    category: "Site Work and Outdoor",
    categoryId: "site-work-and-outdoor",
    subServices: [
      "Finish grading and rough grading",
      "Excavation for foundations and utilities",
      "Trenching for drainage and utilities",
      "Backfill and compaction",
      "Pond and stock tank excavation",
      "Driveway grading and base prep",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "excavation contractor",
    keywordVariants: [
      "grading contractor",
      "site grading",
      "excavation near me",
      "trenching service",
      "dirt work contractor",
    ],
    customerAngle:
      "Builders and property owners need precise grading and excavation so water drains away from structures and the site is prepped correctly before anything gets built on it.",
    serviceType: "both",
    image: "/images/lone-star-site-work.jpg",
  },
  {
    id: "demolition",
    name: "Demolition",
    description:
      "Selective interior demolition and full structure demolition with debris removal.",
    category: "Site Work and Outdoor",
    categoryId: "site-work-and-outdoor",
    subServices: [
      "Interior selective demolition",
      "Full structure demolition",
      "Concrete demolition and removal",
      "Pool demolition and fill",
      "Debris hauling and dumpster coordination",
      "Hazardous material abatement coordination",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "demolition contractor",
    keywordVariants: [
      "demolition service near me",
      "interior demolition",
      "house demolition",
      "concrete removal",
      "pool demolition",
    ],
    customerAngle:
      "Property owners need demolition done safely and cleanly, with the site left ready for the next phase of work instead of a pile of debris and open questions.",
    serviceType: "both",
    image: "/images/lone-star-site-work.jpg",
  },
  {
    id: "fencing",
    name: "Fencing",
    description:
      "Fence installation, repair, and replacement in wood, metal, chain link, and vinyl.",
    category: "Site Work and Outdoor",
    categoryId: "site-work-and-outdoor",
    subServices: [
      "Wood privacy fence installation",
      "Chain link fence installation",
      "Iron and metal fence installation",
      "Vinyl and composite fencing",
      "Fence repair and post replacement",
      "Gate installation and automation",
      "Commercial and security fencing",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "fence contractor near me",
    keywordVariants: [
      "fence installation",
      "wood fence contractor",
      "iron fence installation",
      "fence repair near me",
      "commercial fencing",
      "privacy fence",
    ],
    customerAngle:
      "Property owners want a fence that is straight, sturdy, and built with posts set deep enough to stand up to Texas wind and soil movement.",
    serviceType: "both",
    image: "/images/lone-star-fencing.jpg",
  },
  {
    id: "decks-and-patios",
    name: "Decks and Patios",
    description:
      "Custom deck and patio construction, repair, and resurfacing in wood and composite.",
    category: "Site Work and Outdoor",
    categoryId: "site-work-and-outdoor",
    subServices: [
      "Wood deck construction",
      "Composite deck construction",
      "Pergola and shade structure installation",
      "Patio cover construction",
      "Deck repair and board replacement",
      "Deck staining and sealing",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "deck builder near me",
    keywordVariants: [
      "deck contractor",
      "patio construction",
      "composite deck installation",
      "pergola builder",
      "outdoor living contractor",
    ],
    customerAngle:
      "Homeowners want an outdoor living space that is built to code, looks great, and holds up to years of Texas sun without warping or splintering.",
    serviceType: "residential",
    image: "/images/lone-star-site-work.jpg",
  },
  {
    id: "hardscaping",
    name: "Hardscaping",
    description:
      "Pavers, stone patios, outdoor kitchens, fire pits, and decorative hardscape features.",
    category: "Site Work and Outdoor",
    categoryId: "site-work-and-outdoor",
    subServices: [
      "Paver patio and walkway installation",
      "Outdoor kitchen construction",
      "Fire pit and fireplace construction",
      "Natural stone installation",
      "Seat walls and planters",
      "Driveway paver installation",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "hardscaping contractor",
    keywordVariants: [
      "paver patio installation",
      "outdoor kitchen builder",
      "fire pit contractor",
      "stone patio",
      "hardscape design",
    ],
    customerAngle:
      "Homeowners investing in outdoor living want hardscape that drains properly, stays level over time, and does not shift or sink after the first season.",
    serviceType: "residential",
    image: "/images/lone-star-site-work.jpg",
  },
  {
    id: "landscaping",
    name: "Landscaping",
    description:
      "Landscape design, planting, sod installation, and ongoing landscape maintenance.",
    category: "Site Work and Outdoor",
    categoryId: "site-work-and-outdoor",
    subServices: [
      "Landscape design and installation",
      "Sod installation",
      "Shrub and tree planting",
      "Mulch and ground cover installation",
      "Landscape bed creation",
      "Commercial landscape maintenance",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "landscaping contractor",
    keywordVariants: [
      "landscaping near me",
      "sod installation",
      "landscape design",
      "commercial landscaping",
      "lawn and landscape service",
    ],
    customerAngle:
      "Property owners want landscaping that looks intentional, thrives in the local climate, and does not require constant replanting because the wrong species were chosen.",
    serviceType: "both",
    image: "/images/lone-star-site-work.jpg",
  },
  {
    id: "tree-trimming-and-removal",
    name: "Tree Trimming and Removal",
    description:
      "Tree pruning, trimming, removal, and stump grinding for residential and commercial sites.",
    category: "Site Work and Outdoor",
    categoryId: "site-work-and-outdoor",
    subServices: [
      "Tree trimming and pruning",
      "Tree removal",
      "Stump grinding and removal",
      "Emergency storm damage tree work",
      "Tree health assessment",
      "Deadwood and hazard limb removal",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "tree service near me",
    keywordVariants: [
      "tree trimming",
      "tree removal near me",
      "stump grinding",
      "emergency tree removal",
      "tree cutting service",
    ],
    customerAngle:
      "Property owners with overgrown, dead, or storm-damaged trees need safe removal by a crew that will not drop a limb on the roof or leave a mess behind.",
    serviceType: "both",
    image: "/images/lone-star-site-work.jpg",
  },
  {
    id: "drainage-and-french-drains",
    name: "Drainage and French Drains",
    description:
      "Surface and subsurface drainage systems to redirect water and prevent flooding and erosion.",
    category: "Site Work and Outdoor",
    categoryId: "site-work-and-outdoor",
    subServices: [
      "French drain installation",
      "Surface drain and catch basin systems",
      "Channel drain installation",
      "Yard grading for drainage",
      "Sump pump and discharge line installation",
      "Downspout drainage routing",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "drainage contractor",
    keywordVariants: [
      "French drain installation",
      "yard drainage near me",
      "drainage solutions",
      "water drainage contractor",
      "storm water drainage",
    ],
    customerAngle:
      "Homeowners with standing water, flooded yards, or soggy foundations need a drainage system designed for their specific lot and soil conditions.",
    serviceType: "both",
    image: "/images/lone-star-site-work.jpg",
  },

  // ========================================================================
  // 6. Maintenance and Specialty
  // ========================================================================
  {
    id: "pressure-washing",
    name: "Pressure Washing",
    description:
      "Power washing for driveways, buildings, sidewalks, parking lots, and commercial properties.",
    category: "Maintenance and Specialty",
    categoryId: "maintenance-and-specialty",
    subServices: [
      "Driveway and sidewalk pressure washing",
      "Building exterior washing",
      "Parking lot and garage cleaning",
      "Fence and deck washing",
      "Graffiti removal",
      "Fleet and equipment washing",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "pressure washing service",
    keywordVariants: [
      "pressure washing near me",
      "power washing",
      "commercial pressure washing",
      "driveway cleaning",
      "building washing",
    ],
    customerAngle:
      "Property managers and homeowners want a fast, thorough clean that restores curb appeal without damaging surfaces or landscaping.",
    serviceType: "both",
    image: "/images/lone-star-maintenance-work.jpg",
  },
  {
    id: "parking-lot-striping",
    name: "Parking Lot Striping",
    description:
      "Parking lot line striping, ADA compliance markings, and traffic signage.",
    category: "Maintenance and Specialty",
    categoryId: "maintenance-and-specialty",
    subServices: [
      "Parking lot line striping",
      "ADA-compliant handicap markings",
      "Fire lane and no-parking markings",
      "Directional arrows and traffic flow",
      "Curb painting",
      "Warehouse and facility floor striping",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "parking lot striping",
    keywordVariants: [
      "parking lot painting",
      "line striping service",
      "ADA parking markings",
      "lot striping near me",
      "commercial striping",
    ],
    customerAngle:
      "Property managers need crisp, code-compliant striping that keeps tenants and inspectors happy and reduces liability from poorly marked lots.",
    serviceType: "commercial",
    image: "/images/lone-star-maintenance-work.jpg",
  },
  {
    id: "sealcoating",
    name: "Sealcoating",
    description:
      "Asphalt sealcoating and crack filling to extend pavement life and improve appearance.",
    category: "Maintenance and Specialty",
    categoryId: "maintenance-and-specialty",
    subServices: [
      "Asphalt sealcoating",
      "Crack filling and sealing",
      "Pothole patching",
      "Asphalt overlay",
      "Parking lot maintenance programs",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "sealcoating service",
    keywordVariants: [
      "asphalt sealcoating",
      "parking lot sealcoating",
      "crack sealing",
      "asphalt maintenance",
      "driveway sealcoating",
    ],
    customerAngle:
      "Property managers want to extend the life of their asphalt and avoid the cost of a full repave by staying ahead of cracks and surface wear.",
    serviceType: "both",
    image: "/images/lone-star-maintenance-work.jpg",
  },
  {
    id: "welding-and-metal-fabrication",
    name: "Welding and Metal Fabrication",
    description:
      "Custom welding, steel fabrication, and metal repair for structural and decorative applications.",
    category: "Maintenance and Specialty",
    categoryId: "maintenance-and-specialty",
    subServices: [
      "Structural steel welding",
      "Custom gate and railing fabrication",
      "Metal stair fabrication",
      "Equipment and machinery repair welding",
      "Pipe welding",
      "Ornamental and decorative metalwork",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "welding contractor",
    keywordVariants: [
      "metal fabrication near me",
      "custom welding",
      "steel fabrication",
      "welding repair",
      "mobile welding service",
    ],
    customerAngle:
      "Property and business owners need welding done by someone who understands load requirements and finishes, not just someone with a torch.",
    serviceType: "both",
    image: "/images/lone-star-maintenance-work.jpg",
  },
  {
    id: "general-handyman-and-repairs",
    name: "General Handyman and Repairs",
    description:
      "Small repairs, maintenance tasks, and odd jobs for homes and commercial properties.",
    category: "Maintenance and Specialty",
    categoryId: "maintenance-and-specialty",
    subServices: [
      "Door and hardware repair",
      "Drywall patching",
      "Fixture installation",
      "Shelving and mounting",
      "Minor plumbing and electrical fixes",
      "Caulking and weatherization",
      "General property maintenance",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "handyman near me",
    keywordVariants: [
      "handyman service",
      "home repair service",
      "property maintenance",
      "odd job service",
      "commercial handyman",
    ],
    customerAngle:
      "Owners with a growing list of small repairs need one reliable crew to knock it all out instead of calling five different people for five small jobs.",
    serviceType: "both",
    image: "/images/lone-star-maintenance-work.jpg",
  },
  {
    id: "junk-and-debris-removal",
    name: "Junk and Debris Removal",
    description:
      "Junk hauling, construction debris removal, and cleanout services for homes and job sites.",
    category: "Maintenance and Specialty",
    categoryId: "maintenance-and-specialty",
    subServices: [
      "Construction debris removal",
      "Property cleanout and junk hauling",
      "Appliance and furniture removal",
      "Yard waste and brush removal",
      "Dumpster rental coordination",
      "Post-renovation cleanup",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "junk removal near me",
    keywordVariants: [
      "debris removal",
      "construction cleanup",
      "junk hauling",
      "property cleanout",
      "trash removal service",
    ],
    customerAngle:
      "Property owners and contractors need debris gone fast so the next phase of work can start or so the property is ready to list, sell, or occupy.",
    serviceType: "both",
    image: "/images/lone-star-maintenance-work.jpg",
  },

  // ========================================================================
  // 7. Construction and Remodel
  // ========================================================================
  {
    id: "residential-remodels",
    name: "Residential Remodels",
    description:
      "Whole-home and partial remodels managed from planning through final walkthrough.",
    category: "Construction and Remodel",
    categoryId: "construction-and-remodel",
    subServices: [
      "Whole-home renovation",
      "Open-concept conversions",
      "Garage conversions",
      "Aging-in-place modifications",
      "Historic home renovation",
      "Permit coordination and project management",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "home remodeling contractor",
    keywordVariants: [
      "residential remodeling",
      "home renovation contractor",
      "house remodel near me",
      "whole home renovation",
      "remodeling company",
    ],
    customerAngle:
      "Homeowners dread juggling multiple contractors and timelines and want one team accountable for delivering the entire project on time and on budget.",
    serviceType: "residential",
    image: "/images/lone-star-home-remodel.jpg",
  },
  {
    id: "kitchen-and-bath",
    name: "Kitchen and Bath",
    description:
      "Kitchen and bathroom remodels from layout and design through installation and finishing.",
    category: "Construction and Remodel",
    categoryId: "construction-and-remodel",
    subServices: [
      "Kitchen remodeling",
      "Bathroom remodeling",
      "Cabinet and countertop replacement",
      "Tile and flooring upgrades",
      "Fixture and hardware upgrades",
      "Shower and tub conversions",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "kitchen and bath remodel",
    keywordVariants: [
      "kitchen remodeling near me",
      "bathroom remodel contractor",
      "kitchen renovation",
      "bath renovation",
      "kitchen and bathroom contractor",
    ],
    customerAngle:
      "Homeowners want their kitchen or bath done once and done right, without surprise costs, blown timelines, or finishes that do not match what was promised.",
    serviceType: "residential",
    image: "/images/lone-star-home-remodel.jpg",
  },
  {
    id: "room-additions",
    name: "Room Additions",
    description:
      "Home additions including extra bedrooms, living space expansions, and second stories.",
    category: "Construction and Remodel",
    categoryId: "construction-and-remodel",
    subServices: [
      "Bedroom and living space additions",
      "Second-story additions",
      "Sunroom and enclosed porch additions",
      "In-law suite and ADU construction",
      "Bump-out additions",
      "Foundation and structural work for additions",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "room addition contractor",
    keywordVariants: [
      "home addition contractor",
      "house addition near me",
      "second story addition",
      "in-law suite builder",
      "ADU construction",
    ],
    customerAngle:
      "Growing families need more space but want the addition to blend seamlessly with the existing home instead of looking like an afterthought bolted onto the side.",
    serviceType: "residential",
    image: "/images/lone-star-home-remodel.jpg",
  },
  {
    id: "custom-home-construction",
    name: "Custom Home Construction",
    description:
      "Ground-up custom home building from site prep through final punch list.",
    category: "Construction and Remodel",
    categoryId: "construction-and-remodel",
    subServices: [
      "Custom home design coordination",
      "Site preparation and foundation",
      "Framing and rough-in coordination",
      "Interior and exterior finish management",
      "Selections and material procurement",
      "Final inspections and punch list",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "custom home builder",
    keywordVariants: [
      "custom home construction",
      "home builder near me",
      "new home construction",
      "build a custom home",
      "residential construction",
    ],
    customerAngle:
      "Families building their dream home want a builder who communicates clearly, manages the budget transparently, and delivers quality at every stage.",
    serviceType: "residential",
    image: "/images/lone-star-home-remodel.jpg",
  },
  {
    id: "commercial-construction",
    name: "Commercial Construction",
    description:
      "Commercial new builds, renovations, and project management for offices, retail, and industrial spaces.",
    category: "Construction and Remodel",
    categoryId: "construction-and-remodel",
    subServices: [
      "Office build-outs",
      "Retail space construction",
      "Warehouse and industrial construction",
      "Restaurant and hospitality construction",
      "ADA compliance upgrades",
      "Commercial project management",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "commercial construction contractor",
    keywordVariants: [
      "commercial contractor near me",
      "commercial building contractor",
      "office construction",
      "retail construction",
      "commercial renovation",
    ],
    customerAngle:
      "Business owners and property developers need a contractor who can deliver on schedule because every day past the deadline is lost revenue.",
    serviceType: "commercial",
    image: "/images/lone-star-commercial-building.jpg",
  },
  {
    id: "tenant-finish-out-and-build-outs",
    name: "Tenant Finish-Out and Build-Outs",
    description:
      "Interior build-outs and finish-outs to prepare leased commercial spaces for occupancy.",
    category: "Construction and Remodel",
    categoryId: "construction-and-remodel",
    subServices: [
      "Office tenant finish-out",
      "Retail tenant build-out",
      "Restaurant and food service build-out",
      "Medical and dental office build-out",
      "Demising walls and suite separation",
      "Code compliance and permit coordination",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "tenant finish out contractor",
    keywordVariants: [
      "tenant build out",
      "commercial build out",
      "office finish out",
      "retail build out contractor",
      "TI contractor",
    ],
    customerAngle:
      "Landlords and tenants need the space ready by lease commencement and want a contractor who can manage permits, inspections, and subs without delay.",
    serviceType: "commercial",
    image: "/images/lone-star-commercial-building.jpg",
  },
  {
    id: "insurance-restoration",
    name: "Insurance Restoration",
    description:
      "Storm, fire, and water damage restoration with insurance claim coordination.",
    category: "Construction and Remodel",
    categoryId: "construction-and-remodel",
    subServices: [
      "Storm damage restoration",
      "Fire damage restoration",
      "Water damage restoration and dry-out",
      "Insurance claim documentation and coordination",
      "Emergency board-up and tarping",
      "Contents pack-out coordination",
    ],
    licensed: false,
    licenseNote: null,
    primaryKeyword: "insurance restoration contractor",
    keywordVariants: [
      "storm damage repair",
      "fire damage restoration",
      "water damage repair",
      "insurance claim contractor",
      "disaster restoration",
    ],
    customerAngle:
      "Property owners dealing with damage from a storm, fire, or flood need a contractor who knows how to work with the insurance process and restore the property to pre-loss condition.",
    serviceType: "both",
    image: "/images/lone-star-commercial-building.jpg",
  },
];

// ---- Priority Services ----------------------------------------------------

export const PRIORITY_SERVICE_IDS: string[] = [
  "roofing",
  "foundation-repair",
  "concrete-flatwork",
  "fencing",
  "plumbing",
  "electrical",
  "hvac",
  "interior-painting",
  "residential-remodels",
  "commercial-construction",
];

// ---- Helper Functions -----------------------------------------------------

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

export function getServicesByCategory(categoryId: string): Service[] {
  return services.filter((service) => service.categoryId === categoryId);
}

export function getPriorityServices(): Service[] {
  return PRIORITY_SERVICE_IDS.map((id) => getServiceById(id)).filter(
    (service): service is Service => service !== undefined
  );
}
