// src/data/projectsData.jsx
import React from 'react';
import { 
  Dumbbell, Users, Waves, Gamepad2, Film, Footprints, 
  Trophy, Coffee, Trees, Baby, HeartPulse, Music, ShieldCheck,
  Zap, Droplets, LayoutGrid, DoorOpen, Layers, Wind
} from 'lucide-react';

// --- DATA: Specifications Helper ---
const getSpecs = (projectType) => {
  // We can customize this per project if needed, but here is a high-quality standard set
  // based on the brochures provided.
  return [
    {
      title: "Structure",
      icon: <Layers size={24} />,
      details: ["RCC Framed Structure", "Seismic Zone II Compliant", "Concrete Solid Block Masonry"]
    },
    {
      title: "Flooring",
      icon: <LayoutGrid size={24} />,
      details: ["Vitrified Tiles in Living/Dining", "Laminated Wooden Flooring in Master Bedroom", "Anti-skid Ceramic in Balconies"]
    },
    {
      title: "Doors & Windows",
      icon: <DoorOpen size={24} />,
      details: ["Teak Wood Frame Main Door", "UPVC Sliding Windows with Mosquito Mesh", "Engineered Wooden Frames for Internal Doors"]
    },
    {
      title: "Electrical",
      icon: <Zap size={24} />,
      details: ["Grid Power from Supply Board", "Modular Switches (Schneider/Anchor)", "100% DG Backup for Common Areas"]
    },
    {
      title: "Plumbing",
      icon: <Droplets size={24} />,
      details: ["Premium CP Fittings (Grohe/Kohler/Jaquar)", "Wall Mounted EWC", "Rainwater Harvesting System"]
    },
    {
      title: "Security",
      icon: <ShieldCheck size={24} />,
      details: ["Round-the-clock Security", "CCTV Surveillance at Vantage Points", "Intercom Facility"]
    }
  ];
};

export const projectsData = {
  // --- 1. MANA DALE (Kodathi, Sarjapur) ---
  "Mara Dale": {
    name: "Mara Dale",
    location: "Kodathi, Off Sarjapur Road",
    builder: "Mana Projects",
    price: "₹1.45 Cr Onwards",
    img: "/assets/Mana.png",
    brochureUrl: "/assets/brochures/mana-dale.pdf", // User must save PDF here
    specs: getSpecs(),
    amenities: [
      { icon: <Trees />, label: "100-Year Orchard" },
      { icon: <Users />, label: "55,000 sft Clubhouse" },
      { icon: <Wind />, label: "Sky Deck (20th Floor)" },
      { icon: <Waves />, label: "Leisure Pavilion" },
      { icon: <Gamepad2 />, label: "Gaming Zone" },
      { icon: <HeartPulse />, label: "Forest Bathing" }
    ],
    description: [
      <span key="1">Nestled within a lush <strong className="text-slate-900">6.39-acre tropical paradise</strong>, Mana Dale introduces a harmony of firsts—preserving <strong className="text-slate-900">century-old orchards</strong> alongside modern living.</span>,
      <span key="2">The project features <strong className="text-slate-900">3 & 4 BHK Premium Apartments</strong> constructed using pioneering <strong className="text-slate-900">Mivan Technology</strong> for superior finish and speed.</span>,
      <span key="3">A standout feature is the <strong className="text-slate-900">55,000 sq. ft. luxury clubhouse</strong> and a breath-taking <strong className="text-slate-900">Sky Deck on the 20th floor</strong> offering panoramic 360-degree views.</span>,
      <span key="4">Experience 'Shirin Yoku' (Forest Bathing) right at home. The design ensures that pollution and traffic noise are significantly reduced, creating a serene sanctuary off Sarjapur Road.</span>
    ]
  },

  // --- 2. ADARSH LUMINA (Off Sarjapur) ---
  "Adarsh Lumina": {
    name: "Adarsh Lumina",
    location: "Off Sarjapur Road, East Bangalore",
    builder: "Adarsh Developers",
    price: "₹1.10 Cr Onwards",
    img: "/assets/Adarsh.png",
    brochureUrl: "/assets/brochures/adarsh-lumina.pdf",
    specs: getSpecs(),
    amenities: [
      { icon: <Users />, label: "Clubhouse (Grocery Store)" },
      { icon: <Waves />, label: "Lap Pool & Kids Pool" },
      { icon: <Trophy />, label: "Cricket Practice Pitch" },
      { icon: <Footprints />, label: "Reflexology Pathway" },
      { icon: <Trees />, label: "Aroma & Herbal Gardens" },
      { icon: <Film />, label: "Mini Theatre" }
    ],
    description: [
      <span key="1"><strong className="text-slate-900">Adarsh Lumina</strong> is a low-rise community spread across <strong className="text-slate-900">8.5 Acres</strong> featuring G + 4 floors, ensuring a grounded and less crowded living experience.</span>,
      <span key="2">Offering spacious <strong className="text-slate-900">2.5 & 3 BHK homes</strong>, the project emphasizes community living with <strong className="text-slate-900">65% open spaces</strong> and green cover.</span>,
      <span key="3">Amenities include a Grocery Store, Creche, and a massive Party Hall within the community, ensuring convenience is just a walk away.</span>,
      <span key="4">Strategically located near <strong className="text-slate-900">Halanayakanahalli Lake</strong>, it offers excellent connectivity to Wipro, RGA Tech Park, and the Carmelaram Railway Station.</span>
    ]
  },

  // --- 3. CONCORDE ELEVE (Old Madras Road) ---
  "Concorde Eleve": {
    name: "Concorde Élevé",
    location: "Old Madras Road, Whitefield",
    builder: "Concorde Group",
    price: "₹1.40 Cr Onwards",
    img: "/assets/Concorde.png",
    brochureUrl: "/assets/brochures/concorde-eleve.pdf",
    specs: getSpecs(),
    amenities: [
      { icon: <Wind />, label: "G+36 Floors High" },
      { icon: <Users />, label: "Club Evolve (15,000 sft)" },
      { icon: <Waves />, label: "Infinity Pool" },
      { icon: <Gamepad2 />, label: "Bowling Alley" },
      { icon: <Zap />, label: "Alexa-Enabled Homes" },
      { icon: <Coffee />, label: "Co-working Space" }
    ],
    description: [
      <span key="1">Rising <strong className="text-slate-900">36 Floors</strong> into the sky, <strong className="text-slate-900">Concorde Élevé</strong> is a vertical sanctuary on Old Madras Road, offering panoramic views of the city skyline.</span>,
      <span key="2">The project features exquisite <strong className="text-slate-900">3 & 4 BHK residences</strong> with only 4 units per floor, ensuring privacy and exclusivity.</span>,
      <span key="3">Features <strong className="text-slate-900">70% open spaces</strong> on a 2.16-acre land parcel. Homes are <strong className="text-slate-900">Alexa-enabled</strong> for smart living.</span>,
      <span key="4">The 'Club Evolve' spans 15,000 sq.ft. and includes premium amenities like an Infinity Pool, Squash Courts, and a High Street Retail frontage.</span>
    ]
  },

  // --- 4. MONARCH AQUA (Old Madras Road) ---
  "Monarch Aqua": {
    name: "Monarch Aqua",
    location: "K.R. Puram, Old Madras Road",
    builder: "Monarch Group",
    price: "₹1.25 Cr Onwards",
    img: "/assets/Monarch.png", // Reuse existing or add new
    brochureUrl: "/assets/brochures/monarch-aqua.pdf",
    specs: getSpecs(),
    amenities: [
      { icon: <Waves />, label: "Lakefront Living" },
      { icon: <Users />, label: "Smart Pool" },
      { icon: <Gamepad2 />, label: "Indoor Games" },
      { icon: <Film />, label: "Mini Theatre" },
      { icon: <Baby />, label: "Pet Park" },
      { icon: <Trophy />, label: "Squash Court" }
    ],
    description: [
      <span key="1"><strong className="text-slate-900">Monarch Aqua</strong> offers true <strong className="text-slate-900">Lake Front Living</strong> located directly on Old Madras Road, connecting you to the heart of the city effortlessly.</span>,
      <span key="2">Designed with a philosophy of "Wait Less, Live More", it offers <strong className="text-slate-900">2 & 3 BHK homes</strong> with uninterrupted views of the K.R. Puram Lake.</span>,
      <span key="3">The project boasts a <strong className="text-slate-900">Smart Pool</strong>, Library, Business Meeting Rooms, and a Banquet Hall, catering to a wholesome lifestyle.</span>,
      <span key="4">Backed by 35+ years of trust from the Monarch Group, this project sits at a prime junction connecting Whitefield, Indiranagar, and the Airport road.</span>
    ]
  },

  // --- 5. BREN ASPERA (Old Madras Road) ---
  "Bren Aspera": {
    name: "Bren Aspera",
    location: "Avalahalli, Old Madras Road",
    builder: "Bren Corporation",
    price: "₹1.30 Cr Onwards",
    img: "/assets/Bren.png",
    brochureUrl: "/assets/brochures/bren-aspera.pdf",
    specs: getSpecs(),
    amenities: [
      { icon: <Users />, label: "Clubhouse Neon" },
      { icon: <Trophy />, label: "2 Badminton Courts" },
      { icon: <Trees />, label: "Veggie Lawn" },
      { icon: <Dumbbell />, label: "Bren Fitness Studio" },
      { icon: <Coffee />, label: "Social Kitchen" },
      { icon: <Gamepad2 />, label: "Snooker Table" }
    ],
    description: [
      <span key="1"><strong className="text-slate-900">Bren Aspera</strong> features 2 majestic towers rising 26 floors high, spread over <strong className="text-slate-900">4 Acres 15 Gunthas</strong>.</span>,
      <span key="2">Offers premium <strong className="text-slate-900">3 BHK Apartments</strong> (1563 - 1682 sqft). Built with <strong className="text-slate-900">Aluminium Formwork System</strong> for more carpet area and better finish.</span>,
      <span key="3">Unique <strong className="text-slate-900">'Brennovation'</strong> features include 20ft wide balconies, solar-powered common areas, and a Football field-sized vehicular-free zone.</span>,
      <span key="4">The 'Clubhouse Neon' is loaded with a Social Kitchen, Double-height Squash Court, and a luxurious Spa.</span>
    ]
  },

  // --- 6. SOWPARNIKA WHISPERING PETALS (Hoskote) ---
  "Sowparnika Whispering Petals": {
    name: "Sowparnika Whispering Petals",
    location: "Hoskote, East Bangalore",
    builder: "Sowparnika Projects",
    price: "₹65 Lakhs Onwards",
    img: "/assets/Sowparnika.png",
    brochureUrl: "/assets/brochures/sowparnika-petals.pdf",
    specs: getSpecs(),
    amenities: [
      { icon: <Users />, label: "Clubhouse" },
      { icon: <Trees />, label: "Maze Garden" },
      { icon: <Waves />, label: "Swimming Pool" },
      { icon: <Baby />, label: "Kids Play Area" },
      { icon: <Music />, label: "Amphitheatre" },
      { icon: <ShieldCheck />, label: "360° Security" }
    ],
    description: [
      <span key="1">Located in the booming corridor of <strong className="text-slate-900">Hoskote</strong>, this project is spread across <strong className="text-slate-900">8 Acres 5 Guntas</strong>.</span>,
      <span key="2">Comprising <strong className="text-slate-900">G + 19 Floors</strong>, it offers efficiently designed <strong className="text-slate-900">1, 2, and 3 BHK homes</strong> perfect for first-time homebuyers.</span>,
      <span key="3">East-West facing units designed for 100% Vaastu compliance and monolithic construction for durability.</span>,
      <span key="4">Amenities include a unique Maze Garden, Amphitheatre, and a dedicated zone for Senior Citizens, ensuring a holistic lifestyle for all ages.</span>
    ]
  },

  // --- 7. GODREJ ELARIS (Pune/Featured) ---
  "Godrej Elaris": {
    name: "Godrej Elaris",
    location: "Magarpatta - Mundhwa (Pune)",
    builder: "Godrej Properties",
    price: "₹1.69 Cr Onwards",
    img: "/assets/Elaris.png",
    brochureUrl: "/assets/brochures/godrej-elaris.pdf",
    specs: getSpecs(),
    amenities: [
      { icon: <Trees />, label: "1 Acre Forest Zone" },
      { icon: <Users />, label: "30,000 sft Clubhouse" },
      { icon: <Waves />, label: "Infinity Pool" },
      { icon: <Trophy />, label: "Squash & Badminton" },
      { icon: <Film />, label: "Mini Theatre" },
      { icon: <Dumbbell />, label: "Gym with Boxing" }
    ],
    description: [
      <span key="1"><strong className="text-slate-900">Godrej Elaris</strong> is a landmark address in Magarpatta-Mundhwa, Pune, featuring <strong className="text-slate-900">8 towers on 12 acres</strong>.</span>,
      <span key="2">A low-density project with <strong className="text-slate-900">1 Acre Urban Forest</strong> and 3.1 acres of Four Seasons Gardens.</span>,
      <span key="3">Offers <strong className="text-slate-900">2, 3, & 4 BHK homes</strong> with grand 5-tier security and <strong className="text-slate-900">Heat-strengthened glass</strong> facades.</span>,
      <span key="4">Boasts a massive 30,000 sq.ft. Grand Clubhouse with 5-star amenities including an Infinity Pool, Spa, and Bowling alley.</span>
    ]
  },

  "Brigade Lakecrest": {
    name: "Brigade Lakecrest",
    location: "Old Madras Road, East Bangalore",
    builder: "Brigade Group",
    price: "₹86 Lakhs Onwards", // Estimated based on market/location
    img: "/assets/Lakecrest.png", // Mapping to the image you have in App.jsx
    brochureUrl: "/assets/brochures/brigade-lakecrest.pdf",
    specs: getSpecs(),
    amenities: [
      { icon: <Users />, label: "Double-Height Clubhouse" },
      { icon: <Waves />, label: "Swimming Pool" },
      { icon: <Trophy />, label: "5-a-Side Futsal Court" },
      { icon: <Trees />, label: "Edible & Herb Gardens" },
      { icon: <Baby />, label: "Pet Park" },
      { icon: <Gamepad2 />, label: "Pickleball Court" }
    ],
    description: [
      <span key="1">Located next to the tranquil <strong className="text-slate-900">Bhattarahalli Lake</strong>, Brigade Lakecrest offers a <strong className="text-slate-900">Lakeside Life of Pride</strong> on Old Madras Road.</span>,
      <span key="2">The project features thoughtfully planned <strong className="text-slate-900">1, 2, & 3 BHK Homes</strong> with multiple balconies for expansive views.</span>,
      <span key="3">Unique dual-level landscape design: An active <strong className="text-slate-900">Ground Level</strong> with play zones and a peaceful <strong className="text-slate-900">Podium Level</strong> dedicated to relaxation.</span>,
      <span key="4">Ideally located just <strong className="text-slate-900">30 Mins from Whitefield</strong>, Marathahalli, and Indiranagar, keeping you connected to the city's pulse while living in serenity.</span>
    ]
  },
};

export const defaultProjectData = {
  name: "Premium Project",
  location: "Bangalore",
  builder: "Reputed Builder",
  price: "Price on Request",
  img: "/assets/pd1.avif",
  brochureUrl: "",
  specs: getSpecs(), // Uses the helper function defined at the top of this file
  amenities: [
    { icon: <Users />, label: "Clubhouse" },
    { icon: <ShieldCheck />, label: "24/7 Security" }
  ],
  description: [
    <span key="1">This is a premium residential project located in a prime area of Bangalore.</span>,
    <span key="2">Please contact us directly for specific details regarding floor plans, pricing, and availability.</span>
  ]
};