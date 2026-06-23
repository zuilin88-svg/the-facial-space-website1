import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

const testimonials = [
  {
    text: "The best facial I have ever received. The environment is so calming and my skin has never looked better. Highly recommend!",
    author: "Sarah M.",
    source: "Google Review"
  },
  {
    text: "So knowledgeable and truly cares about your skin goals. The personalized approach makes all the difference.",
    author: "Emily R.",
    source: "Google Review"
  },
  {
    text: "A completely relaxing experience from start to finish. The space is beautiful and my face is glowing.",
    author: "Jessica T.",
    source: "Google Review"
  }
];

export default function Testimonials() {
  const isMobile = useIsMobile();

  return (
    <section id="testimonials" className="py-24 bg-spa-off-white relative overflow-hidden">
      {/* Decorative large text behind */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif text-spa-silver font-bold whitespace-nowrap opacity-50 z-0 pointer-events-none select-none">
        GLOWING
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-1 text-spa-blue-dark mb-4">
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-spa-text mb-4">5.0 Star Rated</h2>
          <p className="text-spa-text-light">Based on Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={isMobile ? undefined : { delay: index * 0.1, duration: 0.6 }}
              className="bg-white/40 backdrop-blur-md border border-spa-blue-light rounded-[24px] p-10 shadow-lg relative"
            >
               <div className="absolute -top-4 -left-4 text-6xl text-spa-blue-dark/20 font-serif leading-none">"</div>
              <p className="text-spa-text leading-relaxed font-light mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-spa-blue-light">
                <span className="font-serif font-medium text-spa-text">{testimonial.author}</span>
                <span className="text-xs text-spa-text-light uppercase tracking-wider">{testimonial.source}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
