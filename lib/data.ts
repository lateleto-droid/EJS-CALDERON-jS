export const businessInfo = {
  name: "EJS Calderon Construction LLC",
  address: "7 Lincoln St, Middletown, NY 10940",
  phone: "+1 (585) 261-1174",
  email: "info@ejscalderon.com",
  hours: "Mon-Sat 6AM-6PM, Sun Closed",
  tagline: "Building Your Vision, Crafting Excellence"
};

export const reviews = [
  {
    name: "Remberto Calderon",
    stars: 5,
    quote: "Excellent service and top-notch craftsmanship. They finished the project on time and the results are amazing. I will definitely hire them again for future projects!"
  },
  {
    name: "Byron Estalin Calderon Padilla",
    stars: 5,
    quote: "I am very happy with the results. The team at EJS Calderon Construction LLC is reliable, punctual, and very easy to work with. If you are looking for great craftsmanship, this is the company to hire!"
  },
  {
    name: "Mechanic Automotive",
    stars: 5,
    quote: "Excellent work, very clean and on time."
  },
  {
    name: "Juan Calderon",
    stars: 5,
    quote: "Excellent and efficient work"
  },
  {
    name: "Lia Ortiz Gómez",
    stars: 5,
    quote: "Excellent service, punctual delivery time"
  }
];

export const services = [
  {
    id: "exteriors",
    title: "Exteriors",
    description: "Transform your home's curb appeal with our comprehensive exterior renovation services.",
    icon: "Home",
    features: ["Custom Facades", "Window Replacements", "Exterior Painting", "Trim & Fascia"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "interiors",
    title: "Interiors",
    description: "Create the living space you've always dreamed of with our custom interior remodeling.",
    icon: "LayoutDashboard",
    features: ["Kitchen Remodels", "Bathroom Upgrades", "Basement Finishing", "Custom Carpentry"],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "siding",
    title: "Siding",
    description: "Protect your home with high-quality vinyl, wood, or fiber cement siding installations.",
    icon: "PanelLeftClose",
    features: ["Vinyl Siding", "Fiber Cement", "Wood Siding", "Siding Repair"],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "decks",
    title: "Decks",
    description: "Expand your outdoor living space with custom-built wood or composite decks.",
    icon: "Layers",
    features: ["Custom Deck Design", "Composite Decking", "Treated Wood", "Railings & Stairs"],
    image: "https://images.unsplash.com/photo-1599691884144-8d9adabe2905?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "roofing",
    title: "Roofing",
    description: "Ensure your home is protected with durable, expert roofing installations and repairs.",
    icon: "House",
    features: ["Asphalt Shingles", "Metal Roofing", "Roof Repairs", "Skylight Installation"],
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "concrete",
    title: "Concrete & Foundation",
    description: "Solid foundations, driveways, and patios built to last.",
    icon: "SquareDashedBottom",
    features: ["Driveways & Patios", "Foundation Pouring", "Concrete Repair", "Stamped Concrete"],
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop"
  }
];

export const projects = [
  {
    id: 1,
    title: "Modern Minimalist Kitchen",
    category: "Interiors",
    description: "Complete kitchen renovation featuring custom cabinetry, quartz countertops, and a large central island.",
    fullDescription: "The challenge was to open up a dated, cramped kitchen into a modern, airy space. We removed a non-load-bearing wall, installed custom European-style cabinetry, and added a 10-foot quartz island. The result is a stunning, highly functional kitchen perfect for entertaining.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop",
    stats: { timeline: "6 Weeks", budget: "$45k - $60k", sqft: "350" }
  },
  {
    id: 2,
    title: "Wraparound Composite Deck",
    category: "Decks",
    description: "A gorgeous 800 sq.ft. multi-level Trex deck with built-in seating and custom lighting.",
    fullDescription: "The homeowners wanted to expand their usable outdoor space over a sloping backyard. We engineered a massive multi-level composite deck with custom integrated lighting, aluminum railings, and built-in bench seating. The outcome provided a maintenance-free outdoor oasis.",
    image: "https://images.unsplash.com/photo-1604107149027-e170940656a8?q=80&w=1000&auto=format&fit=crop",
    stats: { timeline: "3 Weeks", budget: "$25k - $35k", sqft: "800" }
  },
  {
    id: 3,
    title: "Full Exterior Remodel",
    category: "Exteriors",
    description: "Complete exterior makeover including new James Hardie siding, roof replacement, and updated trim.",
    fullDescription: "This aging 1980s colonial suffered from peeling paint and a failing roof. We stripped the exterior down to the sheathing, installed an architectural shingle roof, wrapped the house in HardiePlank lap siding, and replaced all exterior trim with PVC for a zero-maintenance finish.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop",
    stats: { timeline: "4 Weeks", budget: "$50k+", sqft: "2,200" }
  },
  {
    id: 4,
    title: "Luxury Primary En-Suite",
    category: "Interiors",
    description: "High-end bathroom addition with a walk-in wet room, soaking tub, and double vanity.",
    fullDescription: "We converted an unused bedroom into a massive primary en-suite. The showpiece is a fully waterproofed wet room containing both a freestanding soaking tub and a dual-head rainfall shower. Heated floors and custom walnut vanities completed the spa-like experience.",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1000&auto=format&fit=crop",
    stats: { timeline: "5 Weeks", budget: "$35k - $50k", sqft: "200" }
  },
  {
    id: 5,
    title: "Architectural Shingle Roofing",
    category: "Roofing",
    description: "Complete tear-off and replacement using premium dimensional shingles with ice/water shield.",
    fullDescription: "After storm damage, we performed a full tear-off down to the decking. We repaired rotted wood, installed full ice and water shield on all eaves and valleys, and installed premium architectural shingles with a 50-year warranty, securing the home against the Hudson Valley winters.",
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=1000&auto=format&fit=crop",
    stats: { timeline: "1 Week", budget: "$15k - $25k", sqft: "3,000" }
  },
  {
    id: 6,
    title: "Stamped Concrete Driveway",
    category: "Concrete",
    description: "A wide, durable stamped concrete driveway poured with a custom cobblestone pattern.",
    fullDescription: "The client wanted the look of a cobblestone driveway without the maintenance or shifting pavers. We poured a reinforced 4000 PSI concrete slab, stamped it with a Roman cobblestone texture, and applied a two-tone release agent and high-gloss sealer for a stunning entrance.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
    stats: { timeline: "2 Weeks", budget: "$15k - $25k", sqft: "1,200" }
  }
];

export const faqs = [
  {
    category: "General",
    questions: [
      { q: "What areas do you serve?", a: "We primarily serve Middletown, Newburgh, Port Jervis, Goshen, Monroe, Warwick, Montgomery, and Chester. We also cover all of Orange, Ulster, Dutchess, and Sullivan counties." },
      { q: "Are you fully licensed and insured?", a: "Yes, we are completely licensed and carry comprehensive liability and worker's compensation insurance for all structural and remodeling work in New York." },
      { q: "Do you offer free estimates?", a: "Absolutely! We provide detailed, no-obligation free estimates for all potential projects. Give us a call or fill out the contact form to schedule an on-site visit." }
    ]
  },
  {
    category: "Services",
    questions: [
      { q: "What types of projects do you handle?", a: "We handle a wide variety of both residential and commercial projects. This includes exteriors, interiors, siding, decks, roofing, and concrete/foundation work." },
      { q: "Do you offer design services?", a: "While we are primarily a construction firm, we work closely with several local architects and designers, and can assist you in the design phase to ensure your vision is buildable and within budget." },
      { q: "Do you do commercial construction?", a: "Yes, we have extensive experience with commercial fit-outs, renovations, and maintenance for retail spaces, offices, and warehouses." }
    ]
  },
  {
    category: "Process",
    questions: [
      { q: "How does the construction process start?", a: "It starts with a free on-site consultation where we discuss your vision. We then provide a detailed proposal. Once accepted, we handle design finalization and permitting before breaking ground." },
      { q: "Who handles permits and inspections?", a: "We do. We manage the entire permitting process and schedule all necessary municipal inspections. You don't have to worry about the paperwork." },
      { q: "How long will my project take?", a: "Project timelines vary greatly depending on scope. A new deck might take 1-3 weeks, while a full home renovation could take 2-4 months. We provide a detailed timeline during the proposal phase." },
      { q: "How do you handle change orders?", a: "If you decide to change the scope of work during the project, we will provide a written change order detailing the additional costs or savings, and the impact on the timeline. No extra work is done without your written approval." }
    ]
  },
  {
    category: "Pricing",
    questions: [
      { q: "How do you price your projects?", a: "We price our projects based on the cost of materials, labor, and necessary permits. We provide a detailed line-item breakdown in our proposals so you know exactly what you're paying for." },
      { q: "Do you require a deposit?", a: "Yes, we typically require a deposit to secure your spot on our schedule and to purchase initial materials. The deposit amount varies based on the size of the project." },
      { q: "Do you offer financing?", a: "While we don't offer direct in-house financing, we can recommend Several local lending partners who specialize in home improvement loans." },
      { q: "Do you offer warranties on your work?", a: "Yes, we stand behind our craftsmanship. We offer a comprehensive workmanship warranty, and we only use materials that come with strong manufacturer warranties." }
    ]
  }
];

export const chatResponses = [
  { keywords: ["owner", "who owns", "run", "founder", "who started", "ceo", "boss", "calderon"], response: "EJS Calderon Construction LLC is a family-owned company. The Calderon family built this business on trust, quality craftsmanship, and dedication to the Middletown community. Call (585) 261-1174!" },
  { keywords: ["name", "company name", "called", "business name", "ej"], response: "We are EJS Calderon Construction LLC! Licensed and insured, serving Middletown, NY and the Hudson Valley. How can we help?" },
  { keywords: ["address", "location", "where are you", "find you", "visit", "office", "directions"], response: "7 Lincoln St, Middletown, NY 10940. Visit us Mon-Sat 6AM-6PM, closed Sundays!" },
  { keywords: ["phone", "call", "number", "reach", "telephone", "dial"], response: "(585) 261-1174. Mon-Sat 6AM-6PM. We'd love to hear about your project!" },
  { keywords: ["email", "mail", "e-mail", "send", "write"], response: "info@ejscalderon.com. We respond within 24 hours. Faster? Call (585) 261-1174!" },
  { keywords: ["hours", "open", "close", "closed", "schedule", "what time", "available", "working"], response: "Mon-Sat 6AM-6PM, closed Sundays. Want to schedule a visit or get a free estimate?" },
  { keywords: ["services", "what do you do", "offer", "provide", "specialize", "help with"], response: "Full range: Exteriors, Interiors, Siding, Decks, Roofing, Concrete & Foundation. Which interests you?" },
  { keywords: ["new home", "new build", "new construction", "ground up", "custom home", "new house"], response: "We build custom homes from scratch tailored to your vision — design to final walkthrough. Want a free estimate?" },
  { keywords: ["renovation", "remodel", "update", "upgrade", "improve", "fix up", "redo", "flip"], response: "Our renovations transform spaces! Full home or room updates, stunning results on time and budget. Want to discuss ideas?" },
  { keywords: ["commercial", "business", "office", "retail", "warehouse", "industrial"], response: "We handle commercial projects of all sizes — offices, retail, warehouses. Call (585) 261-1174!" },
  { keywords: ["kitchen", "cabinets", "countertops", "backsplash"], response: "Kitchen renovations — cabinets, countertops, flooring, lighting. We create your dream kitchen within budget!" },
  { keywords: ["bathroom", "bath", "shower", "tub", "tile", "vanity"], response: "Stunning bathrooms combining style and function! Full remodels to shower upgrades. Ready to plan yours?" },
  { keywords: ["roof", "roofing", "shingles", "leak", "roof repair", "roof replace"], response: "Durable roofing — installations, repairs, replacements. Quality materials for decades of protection. Leak? Call now!" },
  { keywords: ["concrete", "foundation", "cement", "slab", "driveway", "patio", "sidewalk"], response: "Foundations, driveways, patios, sidewalks, repairs. Solid, long-lasting results. Want a quote?" },
  { keywords: ["estimate", "quote", "pricing", "how much", "cost", "price", "budget"], response: "FREE estimates! Call (585) 261-1174 or use our contact form. Detailed no-obligation estimate within 24 hours!" },
  { keywords: ["financing", "payment", "pay", "loan", "afford", "monthly", "deposit"], response: "Flexible payment options, deposit required, payment plans discussed during consultation. Call (585) 261-1174!" },
  { keywords: ["license", "licensed", "insured", "insurance", "bonded", "certified", "legal", "permit"], response: "Fully licensed and comprehensively insured. We handle all permits and inspections. You're protected!" },
  { keywords: ["area", "areas", "serve", "coverage", "where do you work", "county", "near me"], response: "Middletown, Newburgh, Port Jervis, Goshen, Monroe, Warwick, Montgomery, Chester + Orange/Ulster/Dutchess/Sullivan counties!" },
  { keywords: ["warranty", "guarantee", "last", "durable", "quality"], response: "We stand behind our work with a quality warranty. Premium materials + expert craftsmanship. Issues? Just call!" },
  { keywords: ["how long", "timeline", "duration", "take", "start", "finish", "complete", "when can", "begin"], response: "Varies by scope: renovations 2-8 weeks, new construction 3-12 months. Detailed timeline in your consultation." },
  { keywords: ["process", "how does it work", "steps", "what happens", "start a project"], response: "1) Free Consultation → 2) Design & Planning → 3) Permitting → 4) Construction → 5) Final Walkthrough. Ready?" },
  { keywords: ["permit", "inspection", "inspector", "code", "building code", "zoning"], response: "We handle all permits and inspections! Experienced with Middletown/Orange County codes. No paperwork worries." },
  { keywords: ["review", "rating", "stars", "testimonials", "reputation", "feedback"], response: "Proud 5-star rating! Remberto Calderon: 'Excellent service and top-notch craftsmanship, finished on time!'" },
  { keywords: ["material", "quality", "what do you use", "supplies", "brand"], response: "Premium-grade materials only — lumber, shingles, concrete, finishes. Best results from best materials." },
  { keywords: ["schedule", "appointment", "visit", "meeting", "consultation", "meet", "see you"], response: "Call (585) 261-1174 for a free on-site consultation! Mon-Sat 6AM-6PM, or use our contact form." },
  { keywords: ["thank", "thanks", "appreciate", "awesome", "great", "wonderful", "amazing"], response: "You're welcome! Any other questions, just ask or call (585) 261-1174!" },
  { keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "evening", "greetings", "sup"], response: "Hello! Welcome to EJS Calderon Construction! Ask about services, pricing, scheduling — anything!" },
  { keywords: ["bye", "goodbye", "see you", "later", "take care", "have a good"], response: "Goodbye! Call anytime at (585) 261-1174. Have a great day!" },
  { keywords: ["yes", "yeah", "yep", "sure", "ok", "okay", "absolutely", "definitely"], response: "Great! Anything specific about our services? Pricing, scheduling, areas — just ask!" },
  { keywords: ["no", "nope", "not", "nah", "not interested", "never mind", "cancel"], response: "No problem! We're here whenever you need us. Call (585) 261-1174 anytime!" },
  { keywords: ["help", "assist", "support", "need help", "question", "confused"], response: "I can help with: services, pricing, estimates, scheduling, hours, areas, contact info. What would you like to know?" }
];

export const teamMembers = [
  { name: "Juan Calderon", role: "Founder & CEO", bio: "With over 20 years of experience in the construction industry, Juan leads with passion and a commitment to quality.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" },
  { name: "Carlos Ramirez", role: "Project Manager", bio: "Carlos ensures every project stays on schedule and meets our rigorous standards of craftsmanship.", image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1000&auto=format&fit=crop" },
  { name: "Sofia Martinez", role: "Design Coordinator", bio: "Sofia helps bridge the gap between our clients' visions and the actionable build plans.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop" }
];

export const serviceAreas = [
  { name: "Middletown", desc: "Our home base, providing full construction and remodeling services across the city.", county: "Orange County" },
  { name: "Newburgh", desc: "Serving historic and modern homes with premium contractor solutions.", county: "Orange County" },
  { name: "Port Jervis", desc: "Expert roofing, deck building, and siding services for Port Jervis residents.", county: "Orange County" },
  { name: "Goshen", desc: "Upscale interior renovations and beautiful exterior masonry.", county: "Orange County" },
  { name: "Monroe", desc: "High-end custom builds and luxury renovations.", county: "Orange County" },
  { name: "Warwick", desc: "Quality craftsmanship for new additions and complete home overhauls.", county: "Orange County" },
  { name: "Montgomery", desc: "Concrete, foundation, and structural expertise.", county: "Orange County" },
  { name: "Chester", desc: "Full-service general contracting for homes and businesses.", county: "Orange County" },
];
