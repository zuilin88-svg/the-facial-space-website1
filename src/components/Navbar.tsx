import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Facebook, Instagram, MapPin, Menu, Phone, X } from 'lucide-react';
import { CONTACT_INFO, LINKS } from '../constants';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    let frameId = 0;
    const handleScroll = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 48);
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Products', href: '#products' },
    { name: 'Testimonials', href: '#testimonials' },
  ];
  const desktopTextClass = isScrolled
    ? 'text-white drop-shadow-sm hover:text-white/80'
    : 'text-white drop-shadow-sm hover:text-white/80';
  const leftNavLinks = navLinks.filter((link) => ['Services', 'About', 'Instagram'].includes(link.name));
  const rightNavLinks = navLinks.filter((link) => ['Products'].includes(link.name));

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={false}
        style={{
          background: isScrolled
            ? 'linear-gradient(180deg, rgba(78, 152, 184, 0.98) 0%, rgba(116, 181, 207, 0.86) 44%, rgba(168, 205, 220, 0.42) 100%)'
            : 'transparent',
          borderBottomColor: isScrolled ? 'rgba(240, 247, 249, 0.72)' : 'transparent',
          boxShadow: isScrolled && !isMobile ? '0 18px 52px rgba(78, 152, 184, 0.72)' : 'none',
          backdropFilter: isScrolled && !isMobile ? 'blur(14px)' : 'none',
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b py-4 transition-colors duration-200 md:transition-all md:duration-300"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6 lg:px-8">
          <nav className="hidden md:flex items-center gap-9">
            {leftNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-[0.24em] transition-colors ${desktopTextClass}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a href="#" className="flex items-center group md:justify-self-center">
            <span
              className={`whitespace-nowrap font-serif text-2xl tracking-wide transition-colors md:text-[32px] ${
                isScrolled
                  ? 'text-white drop-shadow-sm group-hover:text-white/85'
                  : 'text-white drop-shadow-sm group-hover:text-white/85'
              }`}
            >
              The Facial Space
            </span>
          </a>

          <nav className="hidden md:flex items-center justify-end gap-7">
            {rightNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-[0.24em] transition-colors ${desktopTextClass}`}
              >
                Shop
              </a>
            ))}
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`transition-colors ${desktopTextClass}`}
            >
              <Instagram size={19} strokeWidth={1.9} />
            </a>
            <a
              href={LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={`transition-colors ${desktopTextClass}`}
            >
              <Facebook size={19} strokeWidth={1.9} />
            </a>
            <a
              href={LINKS.booking}
              target="_blank"
              rel="noopener noreferrer"
              className={`border px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] transition-colors ${
                isScrolled
                  ? 'border-white bg-white text-spa-text hover:bg-spa-blue-light'
                  : 'border-white text-white drop-shadow-sm hover:bg-white hover:text-spa-text'
              }`}
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`ml-auto md:hidden p-2 transition-colors ${
              isScrolled ? 'text-white drop-shadow-sm' : 'text-white drop-shadow-sm'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-[100] h-dvh bg-spa-blue-light text-spa-text"
          >
            <div className="min-h-screen px-8 pt-12 pb-10 flex flex-col">
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-4xl tracking-wide text-spa-text"
                >
                  The Facial Space
                </a>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-spa-text"
                  aria-label="Close menu"
                >
                  <X size={38} strokeWidth={2} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col items-center justify-center gap-8 -mt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-4xl text-spa-text hover:text-spa-blue-dark transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col items-center gap-8">
                <div className="flex items-center justify-center gap-10 text-spa-text">
                  <a
                    href={LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-spa-blue-dark transition-colors"
                  >
                    <Instagram size={34} strokeWidth={2.2} />
                  </a>
                  <a
                    href={LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="hover:text-spa-blue-dark transition-colors"
                  >
                    <Facebook size={34} strokeWidth={2.2} />
                  </a>
                  <a
                    href={LINKS.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google Maps"
                    className="hover:text-spa-blue-dark transition-colors"
                  >
                    <MapPin size={34} strokeWidth={2.2} />
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phoneHref}`}
                    aria-label="Call The Facial Space"
                    className="hover:text-spa-blue-dark transition-colors"
                  >
                    <Phone size={34} strokeWidth={2.2} />
                  </a>
                </div>

                <a
                  href={LINKS.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full max-w-[330px] bg-spa-text text-white py-5 text-center font-serif text-3xl hover:bg-spa-blue-dark transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
