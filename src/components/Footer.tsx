import { LINKS, CONTACT_INFO } from '../constants';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-spa-text text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:pr-8">
            <h3 className="font-serif text-2xl mb-6 tracking-wide">The Facial Space</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Professional Acne Specialist offering customized clear skin programs for teen acne, adult acne, hormonal acne, and acne scars.
            </p>
            <div className="flex items-center gap-4">
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-spa-blue-dark hover:border-spa-blue-dark transition-colors">
                <Instagram size={18} />
              </a>
              <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-spa-blue-dark hover:border-spa-blue-dark transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-gray-300">Location</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <p className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <a
                  href={LINKS.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-spa-blue-light transition-colors"
                >
                  {CONTACT_INFO.address}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <a href={`tel:${CONTACT_INFO.phoneHref}`} className="hover:text-spa-blue-light transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span className="shrink-0 text-gray-500 font-serif italic text-lg leading-none">@</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-spa-blue-light transition-colors">{CONTACT_INFO.email}</a>
              </p>
              <div className="pt-4">
                <a 
                  href={LINKS.maps} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-spa-blue-dark text-xs uppercase tracking-widest hover:text-white transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-gray-300">Hours</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {CONTACT_INFO.hours.map((item) => (
                 <li key={item.day} className="flex justify-between border-b border-gray-800 pb-2">
                   <span>{item.day}</span>
                   <span>{item.hours}</span>
                 </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-gray-300">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-spa-blue-dark transition-colors">Spa Services</a></li>
              <li><a href={LINKS.booking} target="_blank" rel="noopener noreferrer" className="hover:text-spa-blue-dark transition-colors">Book Online</a></li>
              <li><a href={LINKS.shopFaceReality} target="_blank" rel="noopener noreferrer" className="hover:text-spa-blue-dark transition-colors">Shop Face Reality</a></li>
              <li><a href={LINKS.shopGlymed} target="_blank" rel="noopener noreferrer" className="hover:text-spa-blue-dark transition-colors">Shop Glymed</a></li>
            </ul>
             <div className="mt-8">
                <a 
                  href={LINKS.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full rounded bg-spa-cta px-6 py-3 text-center text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-spa-blue-dark"
                >
                  Book Appointment
                </a>
              </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} The Facial Space. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
             <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
