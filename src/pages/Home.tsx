import { Link } from 'react-router-dom';
import { works } from '../data/works';

export default function Home() {
  return (
    <div className="animate-in fade-in duration-1000">
      <h1 className="text-[26px] font-light tracking-[0.05em] text-gray-400 mb-10">
        INTERIOR & FURNITURE DESIGN
      </h1>
      
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-12">
        {works.map((work, index) => {
          const isFirst = index === 0;
          return (
            <Link 
              key={work.id} 
              to={`/work/${work.id}`}
              className={`group flex flex-col ${isFirst ? 'col-span-2 md:col-span-2 lg:col-span-3 mb-8' : 'col-span-1'}`}
            >
              <div className="relative overflow-hidden bg-gray-100">
                <img 
                  src={work.mainImage} 
                  alt={work.title} 
                  className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] ${isFirst ? 'aspect-[4/3] md:aspect-[16/7]' : 'aspect-square'}`} 
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-[10px] md:text-[11px] tracking-[0.15em] text-gray-600 font-medium group-hover:text-black transition-colors px-1">
                  {work.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
