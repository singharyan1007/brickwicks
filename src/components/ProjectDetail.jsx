import React, { useEffect } from 'react';
import { 
  ArrowLeft, MapPin, Building2, CheckCircle2, 
  Download, 
  // Specs Icons
  Layers, LayoutGrid, DoorOpen, Droplets, ShieldCheck, Zap
} from 'lucide-react';
import { defaultProjectData } from '../data/projectsData'; 

const ProjectDetail = ({ project, onBack }) => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScrwwgp2-s4qYKbXP1m3S6iDwugTZanO6h1Slws7EGlfF2n-w/viewform?usp=sharing&ouid=113988146229226111905";
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const descriptions = project.description || ["Contact for details."];
  const specs = project.specs || defaultProjectData.specs; 

  return (
    <div className="animate-in fade-in zoom-in duration-300 min-h-screen bg-white">
      {/* --- Sticky Navigation Header --- */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur shadow-sm border-b border-slate-100 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-blue-900 font-bold uppercase text-xs tracking-widest">
            <ArrowLeft size={16} /> Back to Listings
          </button>
          
          <div className="flex gap-2">
            {project.brochureUrl && (
                <a 
                  href={project.brochureUrl} 
                  download 
                  className="hidden md:flex items-center gap-2 border border-amber-500 text-amber-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-amber-50"
                >
                  <Download size={14} /> Brochure
                </a>
            )}
            <a href={googleFormUrl} target="_blank" rel="noreferrer" className="bg-amber-500 text-slate-900 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-amber-400">
              Enquire Now
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* --- MAIN HERO IMAGE & OVERLAY --- */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 group border border-slate-200">
          
          {/* 1. The Image: w-full h-auto ensures NO blur and NO stretching */}
          <img 
            src={project.img} 
            alt={project.name} 
            className="w-full h-auto block" 
          />

          {/* 2. The Overlay: Placed ON TOP of the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent flex items-end">
            <div className="p-8 md:p-16 text-white w-full">
              
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">
                    {project.builder}
                </span>
                <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">
                    New Launch
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-3 drop-shadow-lg shadow-black">
                  {project.name}
              </h1>

              {/* Location */}
              <div className="flex items-center gap-2 text-base md:text-lg font-medium opacity-90 text-slate-200">
                  <MapPin size={20} className="text-amber-500"/> 
                  {project.location}
              </div>

            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column: Description & Details */}
          <div className="md:col-span-2 space-y-12">
            
            {/* Description Text */}
            <div>
              <h2 className="text-3xl font-black text-blue-900 italic uppercase tracking-tighter mb-6">About The Project</h2>
              <div className="prose prose-lg text-slate-600 leading-relaxed">
                {descriptions.map((para, index) => (
                  <p key={index} className="mb-4">{para}</p>
                ))}
              </div>
            </div>

            {/* World-class Amenities */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-xl font-black text-blue-900 uppercase tracking-tighter mb-6">World-class Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.amenities && project.amenities.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center gap-3 bg-white p-4 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow border border-slate-100">
                    <div className="text-amber-500 w-8 h-8 flex items-center justify-center">
                      {React.cloneElement(item.icon, { size: 28 })}
                    </div>
                    <span className="font-bold text-slate-700 text-xs uppercase tracking-tight leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-xl font-black text-blue-900 uppercase tracking-tighter mb-6 flex items-center gap-2">
                 <Layers className="text-amber-500" /> Project Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {specs.map((spec, index) => (
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
                    <span className="text-slate-500 text-sm">Builder</span>
                    <span className="font-bold text-slate-900 text-sm text-right">{project.builder}</span>
                  </div>
                </div>

                {/* Mobile Download Button */}
                {project.brochureUrl && (
                    <a href={project.brochureUrl} download className="block md:hidden w-full text-center border-2 border-amber-500 text-amber-600 py-3 rounded-xl font-bold hover:bg-amber-50 transition-colors mb-3 flex items-center justify-center gap-2">
                        <Download size={16} /> Download Brochure
                    </a>
                )}

                <a href={googleFormUrl} target="_blank" rel="noreferrer" className="block w-full text-center bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-amber-600 transition-colors mb-3">
                  Request Price Sheet
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