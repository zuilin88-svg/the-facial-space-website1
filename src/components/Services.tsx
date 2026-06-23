import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

const services = [
  {
    title: "FIRST TIME Acne Consultation + Treatment",
    description: "Ready to get to the root of your breakouts? This results-driven session combines a deep-dive consultation with a targeted treatment to kickstart your clear skin journey.",
    image: "/services/first-time-client-acne.png",
    imageFit: "contain",
    bookingUrl: "https://book.squareup.com/appointments/a33s1jx2przlil/location/LB2NHD6TZ4K6W/services/EOQVE5AFLTMTKTCUC3BZHQ2G",
  },
  {
    title: "Advanced Acne Treatment & Peel",
    description: "Targeted solutions addressing pigmentation, scarring, and uneven texture. Professional peel to treat stubborn acne and prevent future breakouts.",
    image: "/services/advanced-acne-clinical.png",
    imageFit: "contain",
    bookingUrl: "https://book.squareup.com/appointments/a33s1jx2przlil/location/LB2NHD6TZ4K6W/services/JOHOQURSUMPPFZSVALSGYTBY",
  },
  {
    title: "Virtual Acne Bootcamp",
    description: "Customized virtual acne care by FaceTime or Zoom, with skincare shipped to your door and 90 days of committed support.",
    image: "/services/virtual-acne-bootcamp.png",
    imageFit: "contain",
    bookingUrl: "https://book.squareup.com/appointments/a33s1jx2przlil/location/LB2NHD6TZ4K6W/services/CPVSFF64EJS6QJDH5QV56E77",
  },
  {
    title: "Deep Pore Foaming O2 Facial",
    description: "An oxygenating treatment that deeply purifies pores, reduces congestion, and brings immediate brightness to dull, tired skin.",
    image: "/services/foam-facial.png",
    bookingUrl: "https://book.squareup.com/appointments/a33s1jx2przlil/location/LB2NHD6TZ4K6W/services/P7MYTNCPKWNHZKCCGYY57MMS",
  },
  {
    title: "Glow Up Dermaplane Facial",
    description: "Deep exfoliation removing dead skin and vellus hair for an immediate, intensely radiant glow and perfectly smooth texture.",
    image: "/services/dermaplane-facial-v2.png",
    imageTone: "soft",
    bookingUrl: "https://book.squareup.com/appointments/a33s1jx2przlil/location/LB2NHD6TZ4K6W/services/KFSQ64SE3NJSS3XL57ZYUISW",
  },
  {
    title: "LED Light Therapy Add-On",
    description: "Enhance any treatment. Blue light to target and destroy acne-causing bacteria, and Red light for anti-aging and cellular repair.",
    image: "/services/add-on.png",
    bookingUrl: "https://book.squareup.com/appointments/a33s1jx2przlil/location/LB2NHD6TZ4K6W/services/VM6W3D23NSRCVOPHJ7UZICRZ",
  }
];

export default function Services() {
  const isMobile = useIsMobile();

  return (
    <section id="services" className="py-24 bg-[#eef2f1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-px w-12 bg-spa-blue-dark"></div>
            <span className="uppercase tracking-widest text-sm text-spa-blue-dark font-medium">Treatment Menu</span>
            <div className="h-px w-12 bg-spa-blue-dark"></div>
          </motion.div>
          <motion.h2
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? undefined : { delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-spa-text mb-6"
          >
            Curated For Your Skin
          </motion.h2>
          <motion.p
             initial={isMobile ? false : { opacity: 0, y: 20 }}
             whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={isMobile ? undefined : { delay: 0.2 }}
             className="text-spa-text-light"
          >
            Every treatment plan is personalized and evolves alongside your skin.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={isMobile ? undefined : { delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-white rounded-[24px] overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-[#44d5d2]/50 shadow-[0_0_0_1px_rgba(68,213,210,0.18),7px_7px_0_rgba(68,213,210,0.34),0_12px_28px_-18px_rgba(44,51,56,0.32)] hover:shadow-[0_0_0_1px_rgba(68,213,210,0.28),9px_9px_0_rgba(68,213,210,0.48),0_16px_32px_-18px_rgba(44,51,56,0.38)]"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                    service.imageFit === "contain" ? "object-contain bg-white" : "object-cover"
                  } ${
                    service.imageTone === "soft" ? "brightness-[0.94] contrast-[0.78] saturate-[0.82] blur-[0.2px]" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-spa-blue-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif text-spa-text mb-3">{service.title}</h3>
                <p className="text-sm text-spa-text-light leading-relaxed mb-6">
                  {service.description}
                </p>
                <a
                  href={service.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-spa-cta px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-spa-text"
                >
                  Book Service <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
