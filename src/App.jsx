import React, { useState } from 'react';
import { 
  MapPin, 
  Building2, 
  Trees, 
  Home, 
  Phone, 
  ShieldCheck,
  Compass,
  LayoutGrid,
  ArrowUpRight,
  FileDown,
  Menu,
  X 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScrwwgp2-s4qYKbXP1m3S6iDwugTZanO6h1Slws7EGlfF2n-w/viewform?usp=sharing&ouid=113988146229226111905";
  const pdfUrl = "/brochure.pdf"; 

  const unitConfigs = [
    { type: '2 BHK', size: '1131 - 1220 sft', price: '₹1.20 - 1.30 Cr*', img: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=800' },
    { type: '2.5 BHK', size: '1410 - 1475 sft', price: '₹1.50 - 1.58 Cr*', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800' },
    { type: '3 BHK', size: '1544 - 1671 sft', price: '₹1.66 - 1.78 Cr*', img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800' },
    { type: '4 BHK', size: '1888 - 1944 sft', price: '₹2.10 - 2.15 Cr*', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
  ];

  const magicBricksListings = [
    { name: "Mara Dale", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=60&w=400" },
    { name: "Con Corde Eleve", img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=60&w=400" },
    { name: "Adarsh Lumina", img: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&q=60&w=400" },
    { name: "Brigade Lake Crest", img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=60&w=400" },
    { name: "Sowparnika Petals", img: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=60&w=400" },
    { name: "Godrej Woodscapes", img: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=60&w=400" }
  ];

  const regionalGroups = [
    {
      title: "East Bangalore - Off Sarjapur",
      banner: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=60&w=400",
      items: [
        "Mara Dale", "Adarsh Lumina", "NBR - Soul of the Seasons", "Birla Evara",
        "Adarsh Welkin Park", "Mana Cresta", "Mana Vista", "Gurenesto Primus",
        "Abhee Aria", "The Earth Sphere", "Meda East Winds", "Amberstone Vantara"
      ]
    },
    {
      title: "East Bangalore - K.R. Puram",
      banner: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
      items: [
        "Aratt Avant Twilight", "Concorde Eleve", "City Spaces - Villa/Apartment",
        "Brigade Lake Crest", "Godrej Woodscapes", "Sowparnika - Hoskote",
        "Pride Euphoria", "Sattva - Songbird", "RJ Lake Gardenia", "DSR EVOQ",
        "Bren Aspasia", "SBR One"
      ]
    },
    {
      title: "North Bangalore",
      banner: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=60&w=400",
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
            <span className="text-2xl font-bold tracking-tighter text-blue-900">BRICKWICKS</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 items-center text-xs font-bold uppercase tracking-widest">
            <a href="#pricing" className="hover:text-amber-600 transition-colors">Pricing</a>
            <a href="#magicbricks" className="hover:text-amber-600 transition-colors">Projects</a>
            <a href="#areas" className="hover:text-amber-600 transition-colors">Area Wise</a>
            <a href={pdfUrl} download="Arvind-Bannerghatta-Brochure.pdf" className="flex items-center gap-2 border-2 border-blue-900 text-blue-900 px-4 py-2 rounded hover:bg-blue-50 transition-all">
              <FileDown className="w-4 h-4" /> Brochure
            </a>
            <a href={googleFormUrl} target="_blank" rel="noreferrer" className="bg-blue-900 text-white px-5 py-2.5 rounded hover:bg-amber-600 transition-all">
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-blue-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 absolute w-full left-0 p-6 flex flex-col gap-4 text-sm font-bold uppercase tracking-widest text-blue-900 z-[100]">
            <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#magicbricks" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#areas" onClick={() => setIsMenuOpen(false)}>Area Wise</a>
            <a href={pdfUrl} download className="flex items-center justify-center gap-2 border border-blue-900 py-3 rounded">
                <FileDown size={18} /> Brochure
            </a>
            <a href={googleFormUrl} target="_blank" rel="noreferrer" className="bg-blue-900 text-white text-center py-3 rounded">
                Enquire Now
            </a>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <header className="relative bg-slate-900 py-32 md:py-56 text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80" alt="Hero Background" className="w-full h-full object-cover opacity-40 scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4">
          <span className="bg-amber-500 text-slate-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Launching Soon</span>
          <h1 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">Arvind Codename <span className="text-amber-500 italic">Bannerghatta</span></h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light px-4">Upcoming luxury landmark in South Bangalore across 4.30 Acres with premium specifications.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#pricing" className="bg-amber-500 text-slate-900 px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">View Pricing</a>
            <a href="https://maps.app.goo.gl/bGLuVbsHUPMvCXzh8?g_st=aw" target="_blank" rel="noreferrer" className="border-2 border-white/20 px-10 py-4 rounded-full font-bold backdrop-blur-sm flex items-center hover:bg-white hover:text-slate-900 transition-all"><MapPin className="mr-2 w-5 h-5" /> Location</a>
          </div>
        </div>
      </header>

      {/* --- Quick Highlights --- */}
      <section className="relative -mt-16 z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: <Building2 />, text: "B + G + 17 Floors", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400" },
            { icon: <Trees />, text: "Nature Centric", img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=400" },
            { icon: <Home />, text: "340 Units Only", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400" },
            { icon: <ShieldCheck />, text: "Premium Spec", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=400" }
          ].map((h, i) => (
            <div key={i} className="group bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col">
              <div className="h-32 overflow-hidden">
                <img src={h.img} alt={h.text} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-5 flex items-center gap-4">
                <div className="bg-amber-100 p-2 rounded-lg text-amber-600">{h.icon}</div>
                <span className="text-xs font-black uppercase tracking-tight text-slate-800">{h.text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Pricing Section --- */}
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
                        <img src={u.img} alt={u.type} className="w-full h-full object-cover" />
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
               <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800" alt="Show Home" className="rounded-[3rem] shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="magicbricks" className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="bg-blue-100 p-3 rounded-2xl mb-4 text-blue-900"><LayoutGrid /></div>
          <h2 className="text-4xl font-black italic uppercase tracking-tighter">Residential Projects</h2>
          <p className="text-slate-400 font-medium">Top Trending Bangalore Listings</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {magicBricksListings.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-3 shadow-lg">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <p className="text-[10px] font-black uppercase text-center text-slate-700 tracking-tight group-hover:text-amber-600 px-2">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Area Wise Section --- */}
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
                  <img src={group.banner} alt={group.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-amber-500 font-black text-lg mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                    <span className="text-xs bg-amber-500 text-slate-900 px-2 py-1 rounded">0{idx+1}</span>
                    {group.title}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {group.items.map((item, pIdx) => (
                      <div key={pIdx} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-all text-sm font-medium text-slate-300 hover:text-white group/item cursor-pointer">
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

      {/* --- Footer --- */}
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
               <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80" alt="Bangalore Skyline" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-100 text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
            © 2025 BRICKWICKS • RERA Registration Pending
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;