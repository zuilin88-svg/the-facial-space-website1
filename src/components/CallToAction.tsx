import { motion } from 'motion/react';
import { LINKS } from '../constants';
import { useIsMobile } from '../hooks/useIsMobile';

export default function CallToAction() {
  const isMobile = useIsMobile();

  return (
    <section className="py-32 bg-spa-blue-light relative overflow-hidden flex items-center justify-center">
      {/* Abstract background elements */}
      <div className="absolute inset-0 z-0 opacity-40">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-spa-blue rounded-full filter blur-[100px]"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full filter blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-serif text-spa-text mb-8 leading-tight">
            Ready To Start Your <br/> <span className="italic">Skin Journey?</span>
          </h2>
          <p className="text-lg text-spa-text-light mb-12 max-w-xl mx-auto">
            Book your personalized consultation or signature treatment today and take the first step towards your healthiest, most radiant skin.
          </p>
          <a
            href={LINKS.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-spa-cta px-10 py-5 text-sm font-bold uppercase tracking-widest text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-spa-text hover:shadow-2xl"
          >
            Book Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
