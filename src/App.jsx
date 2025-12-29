import React from 'react';
import { 
  MapPin, 
  Building2, 
  Trees, 
  Home, 
  Phone, 
  ChevronRight,
  ShieldCheck,
  Compass,
  LayoutGrid,
  ArrowUpRight
} from 'lucide-react';

const App = () => {
  // Arvind Project Pricing
  const unitConfigs = [
    { type: '2 BHK', size: '1131 - 1220 sft', price: '₹1.20 - 1.30 Cr*' },
    { type: '2.5 BHK', size: '1410 - 1475 sft', price: '₹1.50 - 1.58 Cr*' },
    { type: '3 BHK', size: '1544 - 1671 sft', price: '₹1.66 - 1.78 Cr*' },
    { type: '4 BHK', size: '1888 - 1944 sft', price: '₹2.10 - 2.15 Cr*' },
  ];

  // Section 1: Magic Bricks Featured Listings
  const magicBricksListings = [
    "Mara Dale", "Con Corde Eleve", "Adarsh Lumina", "Brigade Lake Crest",
    "Sowparnika - Whispering Petals", "NBR - Soul of the Seasons", 
    "Sattva - Song bird", "Godrej - Woodscapes", "Provident Deansgate", 
    "CKPC Winds of Change"
  ];

  // Section 2: Area Wise Breakdown
  const regionalGroups = [
    {
      title: "East Bangalore - Off Sarjapur",
      items: [
        "Mara Dale", "Adarsh Lumina", "NBR - Soul of the Seasons", "Birla Evara",
        "Adarsh Welkin Park", "Mana Cresta", "Mana Vista", "Gurenesto Primus",
        "Abhee Aria", "The Earth Sphere", "Meda East Winds", "Amberstone Vantara"
      ]
    },
    {
      title: "East Bangalore - K.R. Puram",
      items: [
        "Aratt Avant Twilight", "Concorde Eleve", "City Spaces - Villa/Apartment",
        "Brigade Lake Crest", "Godrej Woodscapes", "Sowparnika - Hoskote",
        "Pride Euphoria", "Sattva - Songbird", "RJ Lake Gardenia", "DSR EVOQ",
        "Bren Aspasia", "SBR One"
      ]
    },
    {
      title: "North Bangalore",
      items: [
        "Provident Deansgate", "CKPC Winds of Change", "Casagrand Promenade",
        "Aumera Marina - Yelahanka", "Divine Glory Leaf", "Assetz Tropical Woods",
        "Godrej - Thanisandra", "TVS", "Vajram Newtown 2.0", "KGF Vajram"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth">
      {/* --- Navigation --- */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tighter text-blue-900">ARVIND</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-amber-600 font-black">Bannerghatta</span>
          </div>
          <div className="hidden md:flex gap-6 items-center text-xs font-bold uppercase tracking-widest">
            <a href="#pricing" className="hover:text-amber-600 transition-colors">Pricing</a>
            <a href="#magicbricks" className="hover:text-amber-600 transition-colors">Magic Bricks</a>
            <a href="#areas" className="hover:text-amber-600 transition-colors">Area Wise</a>
            <button className="bg-blue-900 text-white px-5 py-2.5 rounded hover:bg-amber-600 transition-all">
              Enquire
            </button>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className="relative bg-slate-900 py-32 md:py-48 text-center text-white">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80" alt="Arvind Bannerghatta" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-slate-900"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4">
          <span className="bg-amber-500 text-slate-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Launching Soon</span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">Arvind Codename <span className="text-amber-500 italic">Bannerghatta</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light">Upcoming luxury landmark in South Bangalore across 4.30 Acres with premium specifications.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#pricing" className="bg-amber-500 text-slate-900 px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">View Pricing</a>
            <a href="https://maps.app.goo.gl/bGLuVbsHUPMvCXzh8?g_st=aw" target="_blank" rel="noreferrer" className="border-2 border-white/20 px-10 py-4 rounded-full font-bold backdrop-blur-sm flex items-center hover:bg-white hover:text-slate-900 transition-all"><MapPin className="mr-2 w-5 h-5" /> Location</a>
          </div>
        </div>
      </header>

      {/* --- Quick Highlights --- */}
      <section className="relative -mt-12 z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Building2 className="w-5 h-5" />, text: "B + G + 17 Floors" },
            { icon: <Trees className="w-5 h-5" />, text: "5 Towers / 4.30 Acres" },
            { icon: <Home className="w-5 h-5" />, text: "Only 340 Units" },
            { icon: <ShieldCheck className="w-5 h-5" />, text: "Premium Spec" }
          ].map((h, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
              <div className="bg-amber-100 p-2 rounded-lg text-amber-600">{h.icon}</div>
              <span className="text-xs font-black uppercase tracking-tight text-slate-800 leading-tight">{h.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- Pricing Section --- */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter">Investment Details</h2>
            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mt-2 italic">Pre-Launch Privilege Pricing</p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="grid grid-cols-2 bg-blue-900 text-white p-6 text-[10px] font-bold uppercase tracking-[0.2em]">
              <div>Unit Configuration</div>
              <div className="text-right">Price Onwards</div>
            </div>
            <div className="divide-y divide-slate-100">
              {unitConfigs.map((u, idx) => (
                <div key={idx} className="grid grid-cols-2 p-8 hover:bg-amber-50/50 transition-colors">
                  <div><h4 className="font-black text-xl">{u.type}</h4><p className="text-slate-400 text-sm">{u.size}</p></div>
                  <div className="text-right"><h4 className="font-black text-xl text-blue-900">{u.price}</h4><p className="text-[10px] text-amber-600 font-bold uppercase tracking-widest">Exclusive Offer</p></div>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 p-6 text-center border-t border-amber-100">
              <p className="text-xs font-bold text-amber-800 uppercase tracking-widest leading-loose">
                Base Price: ₹10300 - 10800 psft • EOI Window Opening Shortly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Magic Bricks Listings Section --- */}
      <section id="magicbricks" className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="bg-blue-100 p-3 rounded-2xl mb-4"><LayoutGrid className="w-8 h-8 text-blue-900" /></div>
          <h2 className="text-4xl font-black italic uppercase tracking-tighter">Magic Bricks Listings</h2>
          <p className="text-slate-400 font-medium">Top Trending Residential Projects</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {magicBricksListings.map((name, i) => (
            <button key={i} className="px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl font-bold text-slate-700 hover:border-amber-500 hover:text-amber-700 hover:bg-amber-50 transition-all shadow-sm active:scale-95">
              {name}
            </button>
          ))}
        </div>
      </section>

      {/* --- Area Wise Properties Section --- */}
      <section id="areas" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="bg-amber-500 p-3 rounded-2xl mb-4 text-slate-900"><Compass className="w-8 h-8" /></div>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter">Area Wise Properties</h2>
            <p className="text-slate-400 font-medium uppercase text-xs tracking-[0.2em] mt-2">Bangalore Real Estate Corridors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regionalGroups.map((group, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                <h3 className="text-amber-500 font-black text-lg mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                  <span className="text-xs bg-amber-500 text-slate-900 px-2 py-1 rounded">0{idx+1}</span>
                  {group.title}
                </h3>
                <div className="flex flex-col gap-2">
                  {group.items.map((item, pIdx) => (
                    <div key={pIdx} className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/10 cursor-pointer transition-all border border-transparent hover:border-white/20">
                      <span className="text-slate-300 group-hover:text-white font-medium text-sm tracking-tight">{item}</span>
                      <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-amber-500 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white py-24 text-center border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black tracking-tighter text-blue-900">ARVIND <span className="text-amber-500 font-light">BANNERGHATTA</span></h2>
          <p className="text-slate-400 mt-4 mb-10 max-w-md mx-auto italic">An upcoming world-class destination in South Bangalore. Stay tuned for the official launch.</p>
          
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 bg-slate-50 px-8 py-5 rounded-3xl border border-slate-200">
              <Phone className="text-amber-600 w-6 h-6" />
              <span className="text-2xl font-black text-slate-800">+91 9XXX XXX XXX</span>
            </div>
            <a href="https://maps.app.goo.gl/bGLuVbsHUPMvCXzh8?g_st=aw" target="_blank" rel="noreferrer" className="text-amber-600 font-bold underline flex items-center gap-2">
              <MapPin className="w-4 h-4" /> View Map Location
            </a>
          </div>
          
          <div className="mt-20 pt-10 border-t border-slate-100 text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
            © 2024 Arvind SmartSpaces • RERA Registration Pending
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;