// src/data/projectsData.js
import React from 'react';

// 1. Helper function to generate the text dynamically with BOLD JSX elements
export const generateDescription = (project) => {
    const { name, location, builder } = project;
    
    // We return an array of JSX elements (spans) instead of simple strings
    return [
      <span key="1">
        <strong className="text-slate-900">{name}</strong> is the all-new luxury residential Apartment project launched on <strong className="text-slate-900">{location}</strong>.
      </span>,
      
      <span key="2">
        The residential enclave <strong className="text-slate-900">{name}</strong> features the very best in <strong className="text-slate-900">{builder}’s</strong> luxury living segment, spread across a massive expanse of prime land. The project offers spacious Lakeview and lakeside <strong className="text-slate-900">2, 3, and 4 BHK Apartments</strong> with luxurious features.
      </span>,
      
      <span key="3">
        One of the many USPs of the project is that each apartment is expected to feature a full-length external spacious balcony, broad decks, and large windows.
      </span>,
      
      <span key="4">
        Exquisite views of the surrounding skylines with beautiful landscapes all around <strong className="text-slate-900">{name}</strong>, with over 65% open spaces and green covers make it more special & Elite.
      </span>,
      
      <span key="5">
        The builder, <strong className="text-slate-900">{builder}</strong>, is world-renowned and is guaranteed to bring a quality living experience to the community of <strong className="text-slate-900">{location}</strong>, with brilliant architecture and an equivalent lifestyle in <strong className="text-slate-900">{name}</strong>. Other landmark <strong className="text-slate-900">{builder}</strong> apartments and villas around the project form a thriving community.
      </span>,
      
      <span key="6">
        <strong className="text-slate-900">{name}</strong> Location has excellent connectivity & it is ideally located at the crux of <strong className="text-slate-900">{location}</strong>, mere minutes from major IT hubs, main roads, as well as multiple metro stations, existing, and upcoming communities & facilities.
      </span>
    ];
  };
  
  // 2. The Project Database
  // IMAGES: Since they are in public/assets, we reference them as strings "/assets/..."
  export const projectsData = {
    "Mara Dale": {
      name: "Mara Dale",
      location: "Sarjapur Road, East Bangalore",
      builder: "Mara Developers",
      price: "₹1.25 Cr Onwards",
      img: "/assets/pd1.avif", 
      amenities: ["Grand Clubhouse (50k sft)", "3 Swimming Pools", "Pet Park", "Mini Theatre"]
    },
    "Con Corde Eleve": {
      name: "Con Corde Eleve",
      location: "K.R. Puram",
      builder: "Concorde Group",
      price: "₹1.40 Cr Onwards",
      img: "/assets/pd2.avif",
      amenities: ["Sky Deck", "Infinity Pool", "Coworking Spaces", "Squash Courts"]
    },
    "Adarsh Lumina": {
      name: "Adarsh Lumina",
      location: "Off Sarjapur",
      builder: "Adarsh Developers",
      price: "₹1.10 Cr Onwards",
      img: "/assets/pd3.avif",
      amenities: ["Forest Trail", "Organic Garden", "Tennis Court", "Spa & Sauna"]
    },
    // You can add more projects here...
  };
  
  // 3. Fallback data
  export const defaultProjectData = {
      location: "Prime Bangalore Corridor",
      builder: "Premium Developers",
      price: "Price on Request",
      // Fallback to the first image if specific one not found
      img: "/assets/pd4.avif",
      amenities: ["Luxury Clubhouse", "Landscaped Gardens", "24/7 Security", "Sports Courts"]
  };