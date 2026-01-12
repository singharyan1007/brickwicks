import React, { useEffect } from 'react';
import { 
  ArrowLeft, MapPin, Building2, CheckCircle2, 
  Download, 
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
      <div className="sticky top-0 md:top-20 z-40 bg-white/95 backdrop-blur shadow-sm border-b border-slate-100 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-blue-900 font-bold uppercase text-xs tracking-widest">
            <ArrowLeft size={16} /> Back
          </button>
          
          <div className="flex gap-2">
            {project.brochureUrl && (
                <a 
                  href={project.brochureUrl} 
                  download 
                  target="_blank"
                  rel="noopener noreferrer"
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

      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        
        {/* --- MAIN HERO IMAGE & OVERLAY --- */}
        {/* Added 'relative' and 'rounded' classes. Min-height ensures it looks good even if image loads slowly */}
        <div className="relative w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 md:mb-12 group border border-slate-200 bg-slate-900">
          
          {/* 1. The Image */}
          <img 
            src={project.img} 
            alt={project.name} 
            className="w-full h-auto block min-h-[300px] object-cover" 
          />

          {/* 2. The Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent flex items-end">
            <div className="p-6 md:p-16 text-white w-full">
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 md:gap-3 mb-2 md:mb-4">
                <span className="bg-amber-500 text-slate-900 px-2 py-1 md:px-3 md:py-1 rounded text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    {project.builder}
                </span>
                <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-2 py-1 md:px-3 md:py-1 rounded text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    New Launch
                </span>
              </div>

              {/* Title - Responsive Text Size */}
              <h1 className="text-3xl md:text-7xl font-black tracking-tighter mb-2 md:mb-3 drop-shadow-lg shadow-black leading-tight">
                  {project.name}
              </h1>

              {/* Location */}
              <div className="flex items-start md:items-center gap-2 text-sm md:text-lg font-medium opacity-90 text-slate-200">
                  <MapPin className="text-amber-500 w-4 h-4 md:w-5 md:h-5 mt-1 md:mt-0 flex-shrink-0"/> 
                  <span>{project.location}</span>
              </div>

            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column: Description & Details */}
          <div className="md:col-span-2 space-y-8 md:space-y-12">
            
            {/* Description Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-blue-900 italic uppercase tracking-tighter mb-4 md:mb-6">About The Project</h2>
              <div className="prose prose-base md:prose-lg text-slate-600 leading-relaxed">
                {descriptions.map((para, index) => (
                  <p key={index} className="mb-4">{para}</p>
                ))}
              </div>
            </div>

            {/* World-class Amenities */}
            <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100">
              <h3 className="text-lg md:text-xl font-black text-blue-900 uppercase tracking-tighter mb-6">World-class Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.amenities && project.amenities.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center gap-3 bg-white p-4 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow border border-slate-100">
                    <div className="text-amber-500 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                      {React.cloneElement(item.icon, { size: 24 })}
                    </div>
                    <span className="font-bold text-slate-700 text-[10px] md:text-xs uppercase tracking-tight leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg md:text-xl font-black text-blue-900 uppercase tracking-tighter mb-6 flex items-center gap-2">
                 <Layers className="text-amber-500 w-5 h-5 md:w-6 md:h-6" /> Project Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                 {specs.map((spec, index) => (
                   <div key={index} className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 hover:border-amber-500 transition-colors shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-50 text-blue-900 p-2 rounded-lg">
                           {React.cloneElement(spec.icon, { size: 20 })}
                        </div>
                        <h4 className="font-bold text-base md:text-lg text-slate-800">{spec.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {spec.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs md:text-sm text-slate-600 font-medium">
                             <CheckCircle2 size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
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
             <div className="sticky top-24 bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8">
                <h3 className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Starting Price</h3>
                <div className="text-3xl md:text-4xl font-black text-blue-900 mb-6">{project.price}</div>
                
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
                    <a 
                      href={project.brochureUrl} 
                      download 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block md:hidden w-full text-center border-2 border-amber-500 text-amber-600 py-3 rounded-xl font-bold hover:bg-amber-50 transition-colors mb-3 flex items-center justify-center gap-2"
                    >
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