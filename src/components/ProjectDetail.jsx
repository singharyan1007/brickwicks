import React, { useEffect } from 'react';
import { 
  ArrowLeft, MapPin, Building2, CheckCircle2, Dumbbell, Car,
  Waves, Gamepad2, Film, Footprints, Trophy, Coffee, Trees, Baby, HeartPulse, Music, Users,
  Layers, LayoutGrid, DoorOpen, Droplets, ShieldCheck, Zap
} from 'lucide-react';
import { generateDescription } from '../data/projectsData';

const ProjectDetail = ({ project, onBack }) => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScrwwgp2-s4qYKbXP1m3S6iDwugTZanO6h1Slws7EGlfF2n-w/viewform?usp=sharing&ouid=113988146229226111905";
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const descriptionParagraphs = generateDescription(project);

  // --- DATA: Specifications (Construction Details) ---
  const specifications = [
    {
      title: "Structure",
      icon: <Layers size={24} />,
      details: ["3 Basement floor + Ground + 18 floors RCC structure."]
    },
    {
      title: "Flooring",
      icon: <LayoutGrid size={24} />,
      details: [
        "Vitrified / Marble flooring in the Foyer, Living, Dining, Corridors, and all Bedrooms.",
        "Anti-skid Ceramic Tiles in Balconies."
      ]
    },
    {
      title: "Doors",
      icon: <DoorOpen size={24} />,
      details: [
        "Main Door – 8 Feet High Opening with Pre-Moulded Flush Shutter & Frame in Wood and Polish on Both Sides.",
        "Internal Doors – 7 Feet High Opening with Wooden Frames and Flush Shutters.",
        "External Doors – UPVC Frames and Sliding Shutters."
      ]
    },
    {
      title: "Plumbing & Sanitary",
      icon: <Droplets size={24} />,
      details: [
        "All Toilets will have EWCs and Chrome Plated Fittings.",
        "Chrome Plated Tap with Shower Mixer.",
        "Granite Counter with Ceramic Wash Basin in Master Toilet.",
        "Rainwater Harvesting includes drain pipes."
      ]
    },
    {
      title: "Security",
      icon: <ShieldCheck size={24} />,
      details: [
        "Suitable Size and Capacity Passenger and Service Lifts in Every Block.",
        "Round-the-clock security with an intercom facility.",
        "CCTV Camera at all vantage points."
      ]
    },
    {
      title: "Electrical",
      icon: <Zap size={24} />,
      details: [
        "Grid Power from BESCOM for each home upto 6kW.",
        "Modular switches of reputed make.",
        "Copper electrical wiring all throughout via concealed conduits.",
        "100% Power backup for elevators, common areas & 50% for apartments."
      ]
    }
  ];

  // --- DATA: The New Amenities List ---
  const amenitiesList = [
    { icon: <Dumbbell />, label: "Gymnasium" },
    { icon: <Users />, label: "Clubhouse" },
    { icon: <Waves />, label: "Swimming Pool" },
    { icon: <Gamepad2 />, label: "Indoor Games Zone" },
    { icon: <Film />, label: "Mini Theatre" },
    { icon: <Footprints />, label: "Jogging & Skating Track" },
    { icon: <Trophy />, label: "Multiple Sports Courts" },
    { icon: <Coffee />, label: "Dining & Cafe" },
    { icon: <Trees />, label: "Landscaped Gardens" },
    { icon: <Baby />, label: "Kids Play Area & Creche" },
    { icon: <HeartPulse />, label: "Health Center (Spa)" },
    { icon: <Music />, label: "Banquet Party Area" }
  ];

  return (
    <div className="animate-in fade-in zoom-in duration-300 min-h-screen bg-white">
      {/* Sticky Header */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur shadow-sm border-b border-slate-100 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-blue-900 font-bold uppercase text-xs tracking-widest cursor-pointer">
            <ArrowLeft size={16} /> Back to Listings
          </button>
          <a href={googleFormUrl} target="_blank" rel="noreferrer" className="bg-amber-500 text-slate-900 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-amber-400">
            Request Brochure
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Image */}
        <div className="relative h-[40vh] md:h-[60vh] rounded-[2.5rem] overflow-hidden shadow-2xl mb-12">
          <img src={project.img} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
            <div className="p-8 md:p-16 text-white">
              <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded mb-4 inline-block text-xs font-bold uppercase tracking-widest">New Launch</span>
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-2">{project.name}</h1>
              <div className="flex flex-wrap gap-4 text-sm font-medium opacity-90">
                <span className="flex items-center gap-1"><MapPin size={16} className="text-amber-500"/> {project.location}</span>
                <span className="flex items-center gap-1"><Building2 size={16} className="text-amber-500"/> {project.builder}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column: Description & Details */}
          <div className="md:col-span-2 space-y-12">
            
            {/* 1. Description Text */}
            <div>
              <h2 className="text-3xl font-black text-blue-900 italic uppercase tracking-tighter mb-6">About The Project</h2>
              <div className="prose prose-lg text-slate-600 leading-relaxed">
                {descriptionParagraphs.map((para, index) => (
                  <p key={index} className="mb-4">{para}</p>
                ))}
              </div>
            </div>

            {/* 2. World-class Amenities (Updated List) */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-xl font-black text-blue-900 uppercase tracking-tighter mb-6">World-class Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {amenitiesList.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center gap-3 bg-white p-4 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow border border-slate-100">
                    <div className="text-amber-500 w-8 h-8 flex items-center justify-center">
                      {React.cloneElement(item.icon, { size: 28 })}
                    </div>
                    <span className="font-bold text-slate-700 text-xs uppercase tracking-tight leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Specifications (New Section) */}
            <div>
              <h3 className="text-xl font-black text-blue-900 uppercase tracking-tighter mb-6 flex items-center gap-2">
                 <Layers className="text-amber-500" /> Project Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {specifications.map((spec, index) => (
                   <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-amber-500 transition-colors shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-50 text-blue-900 p-2 rounded-lg">
                           {spec.icon}
                        </div>
                        <h4 className="font-bold text-lg text-slate-800">{spec.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {spec.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                             <CheckCircle2 size={14} className="text-amber-500 mt-1 flex-shrink-0" />
                             <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                   </div>
                 ))}
              </div>
            </div>

          </div>

          {/* Right Column: Pricing & Enquiry */}
          <div className="md:col-span-1">
             <div className="sticky top-40 bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Starting Price</h3>
                <div className="text-4xl font-black text-blue-900 mb-6">{project.price}</div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500 text-sm">Status</span>
                    <span className="font-bold text-slate-900 text-sm">New Launch</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500 text-sm">Land Area</span>
                    <span className="font-bold text-slate-900 text-sm">4.30 Acres</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500 text-sm">Total Units</span>
                    <span className="font-bold text-slate-900 text-sm">340 Units</span>
                  </div>
                </div>

                <a href={googleFormUrl} target="_blank" rel="noreferrer" className="block w-full text-center bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-amber-600 transition-colors mb-3">
                  Download Price Sheet
                </a>
                <a href={googleFormUrl} target="_blank" rel="noreferrer" className="block w-full text-center border-2 border-blue-900 text-blue-900 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                  Schedule Site Visit
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;