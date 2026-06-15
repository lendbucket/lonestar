// ---------------------------------------------------------------------------
// Lone Star Contracting Group -- Tier 1 Metro City Data
// ---------------------------------------------------------------------------

export type CityRegion =
  | "Coast"
  | "North and DFW"
  | "West and Permian"
  | "Central and Hill Country"
  | "South and RGV"
  | "East";

export interface City {
  id: string;
  name: string;
  county: string;
  region: CityRegion;
  populationTier:
    | "major-metro"
    | "mid-metro"
    | "small-metro"
    | "large-city"
    | "mid-city";
  populationApprox: number;
  climateHazards: string[];
  groundConditions: string[];
  dominantPropertyTypes: string[];
  growthNotes: string;
  localReferences: string[];
  neighborCityIds: string[];
  tradeConsiderations: string;
}

// ---------------------------------------------------------------------------
// Tier 1 Metro Records
// ---------------------------------------------------------------------------

export const cities: City[] = [
  // 1. Houston
  {
    id: "houston",
    name: "Houston",
    county: "Harris",
    region: "Coast",
    populationTier: "major-metro",
    populationApprox: 2_300_000,
    climateHazards: [
      "Hurricane and tropical storm wind damage",
      "Inland and coastal flooding",
      "High humidity and persistent moisture exposure",
      "Gulf Coast salt air corrosion",
      "Extreme summer heat with prolonged 100-degree stretches",
      "Severe thunderstorms with hail",
    ],
    groundConditions: [
      "Expansive clay soil prone to shrink-swell movement",
      "High water table in many areas",
      "Coastal subsidence in southeastern portions of the metro",
      "Poorly draining gumbo clay in outlying subdivisions",
    ],
    dominantPropertyTypes: [
      "Single-family suburban housing",
      "Large-scale commercial and retail corridors",
      "Petrochemical and industrial facilities",
      "Mid-rise and high-rise multifamily",
      "Historic bungalows and pier-and-beam homes",
      "Medical center institutional buildings",
    ],
    growthNotes:
      "Houston is the largest city in Texas and the fourth largest in the United States, anchored by the energy sector, Texas Medical Center, and the Port of Houston. The metro area continues to expand outward along major freeway corridors such as I-10, US-290, and SH-99 (the Grand Parkway). Ongoing residential and commercial development in Katy, Cypress, Pearland, and Sugar Land keeps demand for contracting services consistently high.",
    localReferences: [
      "The Heights historic neighborhood",
      "Texas Medical Center",
      "Houston Ship Channel and Port of Houston",
      "Energy Corridor along I-10 West",
      "Buffalo Bayou and the downtown bayou trail system",
    ],
    neighborCityIds: [
      "san-antonio",
      "corpus-christi",
      "austin",
    ],
    tradeConsiderations:
      "Contracting in Houston requires constant attention to moisture management, from vapor barriers and drainage systems to mold-resistant materials. The expansive clay soils demand engineered foundations, typically post-tensioned slabs, and proper site drainage to prevent differential settlement. Hurricane season drives demand for wind-rated roofing, impact-resistant windows, and reinforced framing in coastal zones. Contractors must also account for the city's strict floodplain regulations and the growing adoption of elevated construction standards following major flood events.",
  },

  // 2. San Antonio
  {
    id: "san-antonio",
    name: "San Antonio",
    county: "Bexar",
    region: "Central and Hill Country",
    populationTier: "major-metro",
    populationApprox: 1_580_000,
    climateHazards: [
      "Flash flooding along creeks and low-water crossings",
      "Extreme summer heat exceeding 100 degrees for extended periods",
      "Severe thunderstorms with damaging hail",
      "Drought cycles that cause soil shrinkage and foundation movement",
      "Occasional ice storms and hard freezes",
      "High UV exposure accelerating exterior material degradation",
    ],
    groundConditions: [
      "Limestone bedrock requiring specialized excavation",
      "Expansive black clay soil in eastern portions of the metro",
      "Shallow rock that complicates trenching and utility work",
    ],
    dominantPropertyTypes: [
      "Single-family residential in master-planned communities",
      "Historic stone and stucco structures near downtown",
      "Military base housing and support facilities",
      "Large-format retail and commercial along Loop 1604",
      "Mid-rise multifamily in urban infill areas",
    ],
    growthNotes:
      "San Antonio is one of the fastest-growing large cities in the United States, driven by military installations including Joint Base San Antonio, a thriving healthcare and bioscience sector, and a lower cost of living relative to Austin. Growth is concentrated along the Loop 1604 corridor, particularly on the far north and northwest sides. The city's population surpassed 1.5 million and continues to attract both residents and commercial investment.",
    localReferences: [
      "The River Walk and downtown historic core",
      "Joint Base San Antonio (Fort Sam Houston, Lackland, Randolph)",
      "The Pearl District redevelopment",
      "Loop 1604 growth corridor",
      "The Hill Country edge along the Balcones Escarpment",
    ],
    neighborCityIds: [
      "austin",
      "houston",
      "corpus-christi",
    ],
    tradeConsiderations:
      "San Antonio sits on the Balcones Escarpment where the coastal plain meets the Hill Country, creating a split between clay soils to the east and limestone bedrock to the west. Excavation on the west and north sides frequently requires rock trenching or blasting, adding cost and time to foundation, plumbing, and utility work. The city enforces Edwards Aquifer protection regulations that affect stormwater management, impervious cover limits, and construction site runoff controls in the recharge and contributing zones. Military construction projects follow federal contracting standards and often require security clearances and Davis-Bacon wage compliance.",
  },

  // 3. Dallas
  {
    id: "dallas",
    name: "Dallas",
    county: "Dallas",
    region: "North and DFW",
    populationTier: "major-metro",
    populationApprox: 1_340_000,
    climateHazards: [
      "Severe hail storms causing widespread roof and exterior damage",
      "Tornado risk across the metro and surrounding counties",
      "Freeze-thaw cycles that damage foundations, pipes, and roads",
      "Extreme summer heat with temperatures regularly exceeding 105 degrees",
      "Flash flooding in low-lying creek areas",
      "Ice storms and winter weather events",
    ],
    groundConditions: [
      "Highly expansive clay soil (Austin Chalk and Eagle Ford formations)",
      "Significant shrink-swell movement causing foundation distress",
      "Variable fill conditions in older developed areas",
    ],
    dominantPropertyTypes: [
      "Single-family suburban housing across sprawling subdivisions",
      "Class A office towers and corporate campus developments",
      "Large-scale warehouse and distribution centers",
      "Mixed-use urban infill and transit-oriented development",
      "Luxury high-rise residential in Uptown and downtown",
      "Retail power centers and regional malls",
    ],
    growthNotes:
      "Dallas is a major corporate hub, home to more Fortune 500 headquarters than almost any other U.S. city. The metro area continues to attract corporate relocations and expansions, driving massive commercial and residential construction in suburbs like Frisco, McKinney, Prosper, and Celina to the north. The ongoing buildout of mixed-use districts and the expansion of DART rail corridors sustain strong demand for both commercial and residential trade work.",
    localReferences: [
      "Uptown and the Katy Trail corridor",
      "Deep Ellum entertainment district",
      "North Dallas and the Galleria area",
      "Trinity River corridor and the Great Trinity Forest",
      "Bishop Arts District in Oak Cliff",
    ],
    neighborCityIds: [
      "fort-worth",
      "austin",
      "san-antonio",
    ],
    tradeConsiderations:
      "The DFW metroplex is the largest construction market in Texas, and Dallas proper presents unique challenges driven by its expansive clay soils. Nearly every residential foundation requires engineered design to account for seasonal soil movement, and post-construction foundation repair is one of the most common service calls in the market. Hail storms generate enormous volumes of roofing and exterior restoration work, making storm damage restoration a significant segment of the local contracting economy. The competitive market demands efficiency and strong relationships with municipal permitting offices across dozens of independent jurisdictions within Dallas County.",
  },

  // 4. Fort Worth
  {
    id: "fort-worth",
    name: "Fort Worth",
    county: "Tarrant",
    region: "North and DFW",
    populationTier: "major-metro",
    populationApprox: 960_000,
    climateHazards: [
      "Severe hail and wind from supercell thunderstorms",
      "Tornado risk in the broader DFW tornado corridor",
      "Freeze-thaw cycles affecting foundations and exterior materials",
      "Extreme summer heat and drought stress on soils",
      "Flash flooding along the Trinity River and West Fork",
      "Ice storms and occasional prolonged hard freezes",
    ],
    groundConditions: [
      "Expansive clay soils similar to Dallas but with more variable geology",
      "Limestone outcroppings on the western edge of the metro",
      "Sandy loam soils in portions of the far west and southwest",
    ],
    dominantPropertyTypes: [
      "Single-family residential in rapidly expanding western suburbs",
      "Ranch and large-lot rural residential on the urban fringe",
      "Industrial and logistics facilities near Alliance Airport",
      "Historic brick commercial buildings in the Stockyards and downtown",
      "Mixed-use development in the Near Southside and West 7th corridors",
    ],
    growthNotes:
      "Fort Worth has been one of the fastest-growing large cities in the United States for over a decade, with western expansion pushing into Parker and Wise counties. The Alliance corridor in far north Fort Worth is a major logistics and industrial hub anchored by BNSF Railway operations and the Alliance Airport intermodal complex. Population growth has outpaced infrastructure in many areas, creating sustained demand for both new construction and renovation work.",
    localReferences: [
      "Fort Worth Stockyards National Historic District",
      "Sundance Square in downtown",
      "Alliance Town Center and Alliance Airport corridor",
      "The Trinity River and Trinity Trails system",
      "West 7th and the Cultural District",
    ],
    neighborCityIds: [
      "dallas",
      "austin",
      "san-antonio",
    ],
    tradeConsiderations:
      "Fort Worth blends urban density in its historic core with rapid greenfield development on its western edge, requiring contractors to be versatile across project types. The Stockyards and downtown areas involve work on historic masonry and brick structures that demand specialized restoration skills and adherence to historic preservation standards. Western expansion into previously undeveloped land means contractors regularly encounter variable soil conditions, from heavy clay to sandy loam to limestone, sometimes within a single subdivision. The Alliance corridor's industrial and logistics construction follows accelerated timelines driven by supply chain demand, and contractors working there benefit from familiarity with tilt-wall, steel frame, and large-format concrete slab construction.",
  },

  // 5. Austin
  {
    id: "austin",
    name: "Austin",
    county: "Travis",
    region: "Central and Hill Country",
    populationTier: "major-metro",
    populationApprox: 1_020_000,
    climateHazards: [
      "Flash flooding along creeks and in Hill Country drainages",
      "Extreme summer heat with prolonged periods above 100 degrees",
      "Severe thunderstorms with damaging hail",
      "Drought cycles causing soil shrinkage and wildfire risk",
      "Occasional ice storms and hard freezes",
      "High UV exposure degrading roofing and exterior finishes",
    ],
    groundConditions: [
      "Limestone and rock requiring drilling and specialized excavation",
      "Edwards Aquifer recharge zone with strict construction regulations",
      "Expansive clay (Blackland Prairie) on the east side of I-35",
      "Thin topsoil over rock in western Hill Country areas",
    ],
    dominantPropertyTypes: [
      "Single-family residential in master-planned communities",
      "Tech campus and office park construction",
      "High-rise and mid-rise multifamily in the urban core",
      "Mixed-use transit-oriented development along Project Connect corridors",
      "Custom hillside homes in West Austin and Lakeway",
      "Adaptive reuse and commercial renovation in East Austin",
    ],
    growthNotes:
      "Austin experienced explosive population growth driven by the tech industry, with major employers including Tesla, Apple, Google, Samsung, and Oracle establishing significant operations in the metro. While the pace of growth moderated after 2022, the metro area continues to expand, particularly in suburbs like Round Rock, Cedar Park, Georgetown, and Buda. The city's construction market remains highly active with infrastructure projects including Project Connect transit expansion and ongoing commercial development.",
    localReferences: [
      "South Congress Avenue (SoCo) commercial corridor",
      "The Domain mixed-use district in North Austin",
      "Barton Creek Greenbelt and Barton Springs",
      "East Austin's rapidly redeveloping neighborhoods",
      "Lake Travis and the Highland Lakes chain",
    ],
    neighborCityIds: [
      "san-antonio",
      "dallas",
      "fort-worth",
      "houston",
    ],
    tradeConsiderations:
      "Austin's geology splits sharply along the I-35 corridor, with limestone Hill Country terrain to the west and expansive Blackland Prairie clay to the east, requiring contractors to adapt techniques based on project location. Work in the Edwards Aquifer recharge and contributing zones is subject to strict environmental regulations governing impervious cover, stormwater retention, and construction site best management practices. The city's permitting process has historically been one of the more complex in Texas, with multiple review layers for zoning, environmental, and building compliance. Rapid growth has also created a highly competitive labor market for skilled trades, making workforce availability a key planning factor for project timelines.",
  },

  // 6. El Paso
  {
    id: "el-paso",
    name: "El Paso",
    county: "El Paso",
    region: "West and Permian",
    populationTier: "major-metro",
    populationApprox: 680_000,
    climateHazards: [
      "Extreme heat with summer temperatures regularly exceeding 105 degrees",
      "Desert dust storms and sustained high winds",
      "Intense UV radiation causing rapid material degradation",
      "Flash flooding from monsoon thunderstorms in arroyos and washes",
      "Very low humidity causing wood shrinkage and joint separation",
      "Hard water with high mineral content affecting plumbing systems",
    ],
    groundConditions: [
      "Caliche (calcium carbonate hardpan) requiring specialized excavation",
      "Rocky desert soils with low organic content",
      "Sandy alluvial soils along the Rio Grande floodplain",
    ],
    dominantPropertyTypes: [
      "Single-family residential with stucco and masonry construction",
      "Military housing and facilities at Fort Bliss",
      "Commercial retail along I-10 and Mesa Street corridors",
      "Industrial and logistics facilities tied to border trade",
      "Adobe and historic Southwest-style structures in central El Paso",
    ],
    growthNotes:
      "El Paso is the largest U.S. city on the Mexican border and is economically tied to both Fort Bliss, one of the largest Army installations in the country, and international trade through multiple ports of entry with Ciudad Juarez. Growth is concentrated on the far east and northeast sides of the city. The construction market is shaped by military investment cycles, border infrastructure projects, and a strong demand for affordable housing.",
    localReferences: [
      "Fort Bliss military installation",
      "Franklin Mountains State Park and the Franklin Mountains range",
      "The UTEP campus and Sun Bowl area",
      "Downtown El Paso and the border crossing at the Paso del Norte Bridge",
      "Montana Avenue commercial corridor on the east side",
    ],
    neighborCityIds: [],
    tradeConsiderations:
      "El Paso's desert environment demands construction materials and methods suited to extreme heat, intense UV, and very low humidity. Caliche soil is the dominant ground condition and requires heavy equipment or pneumatic tools for excavation, significantly affecting the cost and timeline of foundation, trenching, and utility work. Stucco, masonry, and concrete block are the primary exterior materials, and contractors must account for thermal expansion and UV degradation in material selection and installation. The city's location on the border means many projects involve bilingual crews and coordination with federal agencies on work near the international boundary, and Fort Bliss projects follow military construction standards and procurement processes.",
  },

  // 7. Corpus Christi
  {
    id: "corpus-christi",
    name: "Corpus Christi",
    county: "Nueces",
    region: "Coast",
    populationTier: "mid-metro",
    populationApprox: 320_000,
    climateHazards: [
      "Hurricane and tropical storm wind exposure",
      "Coastal flooding and storm surge",
      "Salt air corrosion of metals, fasteners, and exterior materials",
      "High humidity promoting mold and moisture damage",
      "Sustained coastal winds causing accelerated wear on roofing and siding",
      "Intense UV exposure from reflected sunlight off water and sand",
    ],
    groundConditions: [
      "Sandy and sandy-loam soils with variable bearing capacity",
      "High water table in low-lying coastal areas",
      "Saline soil conditions affecting concrete and metal in contact with ground",
    ],
    dominantPropertyTypes: [
      "Single-family residential with wind-rated construction",
      "Petrochemical and refinery industrial facilities",
      "Coastal commercial and tourism-related properties",
      "Military housing and facilities at Naval Air Station Corpus Christi",
      "Port and maritime industrial structures",
    ],
    growthNotes:
      "Corpus Christi serves as a hub for the petrochemical industry, port operations, military aviation training, and coastal tourism. The city's economy is closely tied to energy sector investment, particularly LNG export terminal development and refinery expansion along the ship channel. Residential and commercial growth is moderate compared to the major inland metros, but industrial construction and storm damage restoration create consistent contracting demand.",
    localReferences: [
      "Corpus Christi Bay and the seawall",
      "Naval Air Station Corpus Christi",
      "The Port of Corpus Christi and inner harbor",
      "Padre Island and the JFK Causeway",
      "Southside residential growth along Saratoga Boulevard",
    ],
    neighborCityIds: [
      "houston",
      "san-antonio",
    ],
    tradeConsiderations:
      "Corpus Christi is located in the Texas Windstorm Insurance Association (TWIA) designated catastrophe area, meaning all construction must meet windstorm certification requirements enforced by the Texas Department of Insurance. Contractors must use approved fasteners, tie-down methods, and wind-rated materials, and completed work is subject to inspection by certified windstorm inspectors before certificates of compliance are issued. Salt air corrosion is a constant concern, requiring the use of stainless steel or hot-dipped galvanized fasteners, marine-grade coatings, and corrosion-resistant flashing and hardware. Industrial work in the refinery and port corridor demands additional safety certifications, confined space training, and compliance with OSHA process safety management standards.",
  },
];

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

export function getCityById(id: string): City | undefined {
  return cities.find((city) => city.id === id);
}

export function getCitiesByRegion(region: CityRegion): City[] {
  return cities.filter((city) => city.region === region);
}

export function getTier1Cities(): City[] {
  return [...cities];
}
