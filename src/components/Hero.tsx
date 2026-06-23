import { motion } from 'motion/react';
import { LINKS } from '../constants';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Hero() {
  const isMobile = useIsMobile();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-spa-off-white pt-24">
      <div className="absolute inset-0 z-0">
        <picture className="block h-full w-full">
          <source media="(min-width: 1024px)" srcSet="/hero/liz-studio-hero-desktop.png" />
          <source media="(max-width: 767px)" srcSet="/hero/liz-studio-hero-mobile.jpeg" />
          <img
            src="/hero/liz-studio-hero.jpeg"
            alt="Liz in The Facial Space treatment room"
            className="h-full w-full object-cover object-[50%_52%] brightness-[1.03] saturate-[1.02] md:object-[48%_54%] lg:object-center lg:brightness-[0.98]"
          />
        </picture>
        <div className="absolute inset-0 bg-black/10 lg:bg-black/8"></div>
        <div className="absolute inset-y-0 right-0 hidden w-[48vw] bg-gradient-to-r from-transparent via-black/8 to-black/16 lg:block"></div>
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-black/72 via-black/32 to-transparent lg:hidden"></div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-7xl items-end px-6 pb-14 text-center md:items-end md:justify-center md:px-8 md:pb-20 lg:items-center lg:justify-end lg:pb-0 lg:pt-8">
        <div className="w-full max-w-[520px] md:max-w-[620px] lg:mr-[13%] lg:max-w-[360px] lg:text-left">
        <motion.h1
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          animate={isMobile ? undefined : { opacity: 1, y: 0 }}
          transition={isMobile ? undefined : { duration: 0.8, delay: 0.4 }}
          className="font-serif text-[3.4rem] font-normal leading-[0.98] tracking-wide !text-white drop-shadow-sm md:text-[4.6rem] lg:text-[4.2rem]"
        >
          <span className="block">Your clear</span>
          <span className="block">skin era</span>
          <span className="block">starts now</span>
        </motion.h1>

        <div className="mx-auto mt-7 h-px w-24 bg-white/80 lg:mx-0"></div>

        <motion.p
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          animate={isMobile ? undefined : { opacity: 1, y: 0 }}
          transition={isMobile ? undefined : { duration: 0.8, delay: 0.6 }}
          className="mx-auto mb-9 mt-6 max-w-[390px] text-base font-medium leading-relaxed text-white drop-shadow-sm md:text-lg lg:mx-0 lg:text-base"
        >
          <strong className="font-bold">Expert Acne Care</strong> for teens and adults with over 90% success rate.
        </motion.p>

        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          animate={isMobile ? undefined : { opacity: 1, y: 0 }}
          transition={isMobile ? undefined : { duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center"
        >
          <a
            href={LINKS.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-spa-cta px-10 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-spa-text hover:shadow-xl sm:w-auto lg:min-w-[260px]"
          >
            Book Appointment
          </a>
        </motion.div>
        </div>
      </div>

    </section>
  );
}
