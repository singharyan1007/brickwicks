// src/App.jsx
import React, { useState, Suspense } from 'react';
import { 
  MapPin, Building2, Trees, Home, Phone, ShieldCheck, 
  Compass, LayoutGrid, ArrowUpRight, FileDown, Menu, X, Loader2
} from 'lucide-react';

// 1. LAZY LOAD THE DETAIL COMPONENT
const ProjectDetail = React.lazy(() => import('./components/ProjectDetail'));
import { projectsData, defaultProjectData } from './data/projectsData';
import WhatsAppButton from './components/WhatsAppButton'; 

// 2. IMPORT LOCAL IMAGES (.avif)
// Make sure these files exist in src/assets/
import bg1 from '../public/assets/bg1.avif';   // Hero
import bg2 from '../public/assets/bg2.avif';   // Highlight 1
import bg3 from '../public/assets/bg3.avif';   // Highlight 2
import bg4 from '../public/assets/bg4.avif';   // Highlight 3
import bg5 from '../public/assets/bg5.avif';   // Highlight 4
import bg6 from '../public/assets/bg6.avif';   // Pricing 1
import bg7 from '../public/assets/bg7.avif';   // Pricing 2
import bg8 from '../public/assets/bg8.avif';   // Pricing 3
import bg9 from '../public/assets/bg9.avif';   // Pricing 4
import bg10 from '../public/assets/bg10.avif'; // Pricing Side Image
import bg11 from '../public/assets/bg11.avif'; // Project 1
import bg12 from '../public/assets/bg12.avif'; // Project 2
import bg13 from '../public/assets/bg13.avif'; // Project 3
import bg14 from '../public/assets/bg14.avif'; // Project 4
import bg15 from '../public/assets/bg15.avif'; // Project 5
import bg16 from '../public/assets/bg16.avif'; // Project 6
import bg17 from '../public/assets/bg17.avif'; // Area 1
import bg18 from '../public/assets/bg18.avif'; // Area 2
import bg19 from '../public/assets/bg19.avif'; // Area 3
import bg20 from '../public/assets/bg20.avif'; // Footer
import bg21 from '../public/assets/bg21.avif'
import bg22 from '../public/assets/bg22.avif'
import bg23 from '../public/assets/bg23.avif'
// Note: bg21, bg22, bg23 are available in assets if you want to swap them in later

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScrwwgp2-s4qYKbXP1m3S6iDwugTZanO6h1Slws7EGlfF2n-w/viewform?usp=sharing&ouid=113988146229226111905";
  const pdfUrl = "/brochure.pdf"; 

  const handleProjectClick = (projectName) => {
    let data = projectsData[projectName];
    if (!data) {
        data = { ...defaultProjectData, name: projectName };
    }
    setSelectedProject(data);
  };

  // --- MAPPING IMAGES TO DATA ---
  
  const unitConfigs = [
    { type: '2 BHK', size: '1131 - 1220 sft', price: '₹1.20 - 1.30 Cr*', img: bg6 },
    { type: '2.5 BHK', size: '1410 - 1475 sft', price: '₹1.50 - 1.58 Cr*', img: bg7 },
    { type: '3 BHK', size: '1544 - 1671 sft', price: '₹1.66 - 1.78 Cr*', img: bg8 },
    { type: '4 BHK', size: '1888 - 1944 sft', price: '₹2.10 - 2.15 Cr*', img: bg9 },
  ];

  const magicBricksListings = [
    { name: "Mara Dale", img: bg16 },
    { name: "Con Corde Eleve", img: bg9 },
    { name: "Adarsh Lumina", img: bg13 },
    { name: "Brigade Lake Crest", img: bg23 },
    { name: "Sowparnika Petals", img: bg15 },
    { name: "Godrej Woodscapes", img: bg16 }
  ];

  const regionalGroups = [
    {
      title: "East Bangalore - Off Sarjapur",
      banner: bg17,
      items: [
        "Mara Dale", "Adarsh Lumina", "NBR - Soul of the Seasons", "Birla Evara",
        "Adarsh Welkin Park", "Mana Cresta", "Mana Vista", "Gurenesto Primus",
        "Abhee Aria", "The Earth Sphere", "Meda East Winds", "Amberstone Vantara"
      ]
    },
    {
      title: "East Bangalore - K.R. Puram",
      banner: bg18,
      items: [
        "Aratt Avant Twilight", "Concorde Eleve", "City Spaces - Villa/Apartment",
        "Brigade Lake Crest", "Godrej Woodscapes", "Sowparnika - Hoskote",
        "Pride Euphoria", "Sattva - Songbird", "RJ Lake Gardenia", "DSR EVOQ",
        "Bren Aspasia", "SBR One"
      ]
    },
    {
      title: "North Bangalore",
      banner: bg21,
      items: [
        "Provident Deansgate", "CKPC Winds of Change", "Casagrand Promenade",
        "Aumera Marina - Yelahanka", "Divine Glory Leaf", "Assetz Tropical Woods",
        "Godrej - Thanisandra", "TVS", "Vajram Newtown 2.0", "KGF Vajram"
      ]
    }
  ];

  const highlights = [
    { icon: <Building2 />, text: "B + G + 17 Floors", img: bg2 },
    { icon: <Trees />, text: "Nature Centric", img: bg3 },
    { icon: <Home />, text: "340 Units Only", img: bg4 },
    { icon: <ShieldCheck />, text: "Premium Spec", img: bg5 }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex flex-col cursor-pointer" onClick={() => setSelectedProject(null)}>
            <span className="text-2xl font-bold tracking-tighter text-blue-900">BRICKWICKS</span>
          </div>

          <div className="hidden md:flex gap-6 items-center text-xs font-bold uppercase tracking-widest">
            <button onClick={() => {setSelectedProject(null); setTimeout(() => document.getElementById('pricing')?.scrollIntoView(), 100)}} className="hover:text-amber-600 transition-colors">Pricing</button>
            <button onClick={() => {setSelectedProject(null); setTimeout(() => document.getElementById('magicbricks')?.scrollIntoView(), 100)}} className="hover:text-amber-600 transition-colors">Projects</button>
            <button onClick={() => {setSelectedProject(null); setTimeout(() => document.getElementById('areas')?.scrollIntoView(), 100)}} className="hover:text-amber-600 transition-colors">Area Wise</button>
            <a href={pdfUrl} download className="flex items-center gap-2 border-2 border-blue-900 text-blue-900 px-4 py-2 rounded hover:bg-blue-50 transition-all">
              <FileDown className="w-4 h-4" /> Brochure
            </a>
            <a href={googleFormUrl} target="_blank" rel="noreferrer" className="bg-blue-900 text-white px-5 py-2.5 rounded hover:bg-amber-600 transition-all">
              Enquire Now
            </a>
          </div>

          <button className="md:hidden p-2 text-blue-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 absolute w-full left-0 p-6 flex flex-col gap-4 text-sm font-bold uppercase tracking-widest text-blue-900 z-[100]">
            <button className="text-left" onClick={() => {setIsMenuOpen(false); setSelectedProject(null);}}>Home</button>
            <a href={pdfUrl} download className="flex items-center justify-center gap-2 border border-blue-900 py-3 rounded">
                <FileDown size={18} /> Brochure
            </a>
          </div>
        )}
      </nav>

      {/* --- CONTENT AREA --- */}
      {selectedProject ? (
        // Suspense handles the loading state while ProjectDetail code is being fetched
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <Loader2 className="w-10 h-10 animate-spin text-blue-900" />
          </div>
        }>
          <ProjectDetail 
              project={selectedProject} 
              onBack={() => setSelectedProject(null)} 
          />
        </Suspense>
      ) : (
        <>
          {/* Hero Section */}
          <header className="relative bg-slate-900 py-32 md:py-56 text-center text-white overflow-hidden">
            <div className="absolute inset-0">
              {/* No loading="lazy" here - we want this to load FAST */}
              <img src={bg1} alt="Hero Background" className="w-full h-full object-cover opacity-40 scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            </div>
            <div className="relative max-w-5xl mx-auto px-4">
              <span className="bg-amber-500 text-slate-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Launching Soon</span>
              <h1 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">Arvind Codename <span className="text-amber-500 italic">Bengaluru</span></h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light px-4">Upcoming luxury landmark in South Bangalore across 4.30 Acres with premium specifications.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#pricing" className="bg-amber-500 text-slate-900 px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">View Pricing</a>
                <a href="https://maps.app.goo.gl/bGLuVbsHUPMvCXzh8?g_st=aw" target="_blank" rel="noreferrer" className="border-2 border-white/20 px-10 py-4 rounded-full font-bold backdrop-blur-sm flex items-center hover:bg-white hover:text-slate-900 transition-all"><MapPin className="mr-2 w-5 h-5" /> Location</a>
              </div>
            </div>
          </header>

          {/* Highlights */}
          <section className="relative -mt-16 z-10 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {highlights.map((h, i) => (
                <div key={i} className="group bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col">
                  <div className="h-32 overflow-hidden">
                    <img src={h.img} alt={h.text} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-5 flex items-center gap-4">
                    <div className="bg-amber-100 p-2 rounded-lg text-amber-600">{h.icon}</div>
                    <span className="text-xs font-black uppercase tracking-tight text-slate-800">{h.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-8 text-blue-900">Investment Details</h2>
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                    <div className="divide-y divide-slate-100">
                      {unitConfigs.map((u, idx) => (
                        <div key={idx} className="flex items-center p-6 hover:bg-amber-50/50 transition-colors">
                          <div className="w-16 h-16 rounded-xl overflow-hidden hidden sm:block mr-4">
                            <img src={u.img} alt={u.type} loading="lazy" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-black text-xl">{u.type}</h4>
                            <p className="text-slate-400 text-sm">{u.size}</p>
                          </div>
                          <div className="text-right">
                            <h4 className="font-black text-xl text-blue-900">{u.price}</h4>
                            <p className="text-[10px] text-amber-600 font-bold uppercase tracking-widest">Early Offer</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 relative">
                   <img src={bg10} alt="Show Home" loading="lazy" className="rounded-[3rem] shadow-2xl" />
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="magicbricks" className="py-24 max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center mb-16 text-center">
              <div className="bg-blue-100 p-3 rounded-2xl mb-4 text-blue-900"><LayoutGrid /></div>
              <h2 className="text-4xl font-black italic uppercase tracking-tighter">Residential Projects</h2>
              <p className="text-slate-400 font-medium">Top Trending Bangalore Listings</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {magicBricksListings.map((item, i) => (
                <div key={i} className="group cursor-pointer" onClick={() => handleProjectClick(item.name)}>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-3 shadow-lg relative">
                    <img src={item.img} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <p className="text-[10px] font-black uppercase text-center text-slate-700 tracking-tight group-hover:text-amber-600 px-2">{item.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Areas Section */}
          <section id="areas" className="py-24 bg-slate-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col items-center mb-16 text-center">
                <div className="bg-amber-500 p-3 rounded-2xl mb-4 text-slate-900"><Compass /></div>
                <h2 className="text-4xl font-black italic uppercase tracking-tighter">Area Wise Properties</h2>
                <p className="text-slate-400 font-medium uppercase text-xs tracking-widest mt-2">Bangalore Real Estate Corridors</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {regionalGroups.map((group, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm group flex flex-col">
                    <div className="h-40 overflow-hidden">
                      <img src={group.banner} alt={group.title} loading="lazy" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-amber-500 font-black text-lg mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                        <span className="text-xs bg-amber-500 text-slate-900 px-2 py-1 rounded">0{idx+1}</span>
                        {group.title}
                      </h3>
                      <div className="flex flex-col gap-2">
                        {group.items.map((item, pIdx) => (
                          <div 
                            key={pIdx} 
                            onClick={() => handleProjectClick(item)}
                            className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-all text-sm font-medium text-slate-300 hover:text-white group/item cursor-pointer"
                          >
                            {item} <ArrowUpRight className="w-4 h-4 text-white/20 group-hover/item:text-amber-500" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="bg-white py-24 text-center border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left mb-16">
            <div>
              <h2 className="text-4xl font-black tracking-tighter text-blue-900">BRICK<span className="text-amber-500 font-light">WICKS</span></h2>
              <p className="text-slate-500 mt-4 max-w-md italic font-medium leading-relaxed">Official marketing partner for premium residential landmarks. Specialized in high-growth corridors of South and North Bangalore.</p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 text-blue-900 font-black text-2xl">
                   <Phone className="text-amber-600" /> +91 98800 73706
                </div>
                <p className="flex items-center gap-4 text-slate-600 font-bold">
                  <MapPin className="text-amber-600" /> Bannerghatta Main Road, Bangalore
                </p>
              </div>
            </div>
            <div className="h-64 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
               <img src={bg20} alt="Bangalore Skyline" loading="lazy" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-100 text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
            © 2025 BRICKWICKS • RERA Registration Pending
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default App;