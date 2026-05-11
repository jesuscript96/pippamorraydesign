import { useParams, Link } from 'react-router-dom';
import { works } from '../data/works';
import { useEffect } from 'react';

export default function WorkDetail() {
  const { id } = useParams();
  const work = works.find(w => w.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!work) {
    return (
      <div className="text-center py-32">
        <h2 className="text-2xl font-light mb-4">Work not found</h2>
        <Link to="/" className="text-sm border-b border-black pb-1 hover:text-gray-500">Return to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-1000">
      <h1 className="text-[26px] font-light tracking-[0.05em] text-gray-400 mb-10">
        INTERIOR & FURNITURE DESIGN
      </h1>
      
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
        {/* Left: Main Image */}
        <div className="w-full lg:w-2/3">
          <img 
            src={work.mainImage} 
            alt={work.title} 
            className="w-full h-auto aspect-[4/3] object-cover" 
          />
        </div>

        {/* Right: Info */}
        <div className="w-full lg:w-1/3 pt-2">
          <h2 className="text-[20px] font-light tracking-[0.1em] text-gray-800 mb-6">
            {work.title}
          </h2>
          
          <div className="space-y-6 text-[14px] leading-[1.8] font-light text-gray-600 mb-12">
            <p>{work.description}</p>
          </div>

          <div className="space-y-4">
            {work.details.map((detail, index) => (
              <div key={index} className="text-[13px] font-light text-gray-600 flex gap-2">
                <span className="font-medium">{detail.label}:</span>
                <span>{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Secondary Images Mosaic */}
      <div className="mt-16 pt-16 border-t border-gray-100">
        <h3 className="text-xs tracking-[0.2em] text-center text-gray-400 mb-12">GALLERY</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {work.secondaryImages.map((src, idx) => (
            <img 
              key={idx} 
              src={src} 
              alt={`${work.title} detail ${idx + 1}`} 
              className={`w-full object-cover bg-gray-50 ${idx % 3 === 0 ? 'aspect-square md:col-span-2' : 'aspect-[4/3] md:col-span-1'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
