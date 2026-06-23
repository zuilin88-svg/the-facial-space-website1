import { motion } from 'motion/react';
import { LINKS } from '../constants';
import { useIsMobile } from '../hooks/useIsMobile';

export default function About() {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="py-24 bg-spa-champagne relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={isMobile ? false : { opacity: 0, x: -30 }}
            whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? undefined : { duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-spa-blue-light rounded-[32px] -z-10 transform -rotate-3"></div>
            <div className="aspect-[4/5] rounded-[24px] overflow-hidden shadow-xl bg-white">
              <img
                src="/about/acne-specialist-about-latest.jpg"
                alt="Acne specialist consultation"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 glass-panel rounded-2xl p-6 shadow-xl max-w-[200px] text-center">
              <span className="block text-3xl font-serif text-spa-blue-dark mb-1">90%+</span>
              <span className="text-xs text-spa-text-light font-medium uppercase tracking-wider">Clear Skin Results</span>
            </div>
          </motion.div>

          <motion.div
            initial={isMobile ? false : { opacity: 0, x: 30 }}
            whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? undefined : { duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-spa-blue-dark"></div>
              <span className="uppercase tracking-widest text-sm text-spa-blue-dark font-medium">Meet The Founder</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-spa-text leading-tight mb-8">
              Liz turned her own acne journey into <span className="italic text-spa-blue-dark">clear-skin care for others.</span>
            </h2>

            <div className="space-y-6 text-spa-text-light leading-relaxed">
              <p className="text-lg text-spa-text">
                Personalized, results-driven acne programs led with education and compassionate care.
              </p>
              <p>
                Liz, the founder of The Facial Space, turned her own personal acne journey into a passion for helping others achieve clear and healthy skin.
              </p>
              <p>
                With over 5 years of experience in the skincare industry, she has served more than 1,000 clients and achieved a success rate of over 90% through personalized, results-driven acne treatment programs.
              </p>
              <p>
                At The Facial Space, Liz combines professional expertise with education and compassionate care, guiding each client through a tailored skin journey designed to deliver lasting, real results.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-spa-silver flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-spa-text mb-1">1,000+</span>
                <span className="text-xs text-spa-text-light uppercase tracking-wider">Clients Served</span>
              </div>
              <div className="w-px h-12 bg-spa-silver"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-spa-text mb-1">5+</span>
                <span className="text-xs text-spa-text-light uppercase tracking-wider">Years Experience</span>
              </div>
            </div>

            <div className="mt-10">
              <a
                href={LINKS.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-spa-cta px-8 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-sm transition-colors duration-300 hover:bg-spa-text"
              >
                Start Your Clear Skin Journey
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
