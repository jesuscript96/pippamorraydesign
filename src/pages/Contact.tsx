export default function Contact() {
  return (
    <div className="animate-in fade-in duration-1000 max-w-4xl mx-auto">
      <h1 className="text-[26px] font-light tracking-[0.05em] text-gray-400 mb-16 text-center">
        GET IN TOUCH
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: Contact Info */}
        <div className="flex flex-col space-y-12">
          <div>
            <h2 className="text-xs tracking-[0.2em] font-medium text-gray-400 mb-4">STUDIO</h2>
            <p className="text-[14px] leading-[1.8] font-light text-gray-600">
              Av. 16 de Septiembre 82,<br />
              Centro Histórico de la Cdad. de México,<br />
              Centro, Cuauhtémoc, 06000<br />
              Ciudad de México, CDMX, Mexico
            </p>
          </div>
          
          <div>
            <h2 className="text-xs tracking-[0.2em] font-medium text-gray-400 mb-4">ENQUIRIES</h2>
            <div className="space-y-2 text-[14px] font-light text-gray-600">
              <p>For commissions and collaborations:</p>
              <a href="mailto:studio@pippamorray.com" className="inline-block border-b border-gray-300 hover:border-black hover:text-black transition-colors pb-0.5">
                studio@pippamorray.com
              </a>
            </div>
          </div>
          
          <div>
            <h2 className="text-xs tracking-[0.2em] font-medium text-gray-400 mb-4">SOCIAL</h2>
            <div className="space-y-2 text-[14px] font-light text-gray-600">
              <a href="#" className="block hover:text-black transition-colors">Instagram</a>
              <a href="#" className="block hover:text-black transition-colors">Pinterest</a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label htmlFor="name" className="text-xs tracking-[0.1em] text-gray-500 block">NAME</label>
              <input 
                type="text" 
                id="name"
                className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black bg-transparent transition-colors text-[14px] font-light"
                placeholder="Your full name"
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs tracking-[0.1em] text-gray-500 block">EMAIL</label>
              <input 
                type="email" 
                id="email"
                className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black bg-transparent transition-colors text-[14px] font-light"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="text-xs tracking-[0.1em] text-gray-500 block">MESSAGE</label>
              <textarea 
                id="message"
                rows={5}
                className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black bg-transparent transition-colors text-[14px] font-light resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="px-8 py-3 bg-black text-white text-xs tracking-[0.2em] hover:bg-gray-800 transition-colors"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
