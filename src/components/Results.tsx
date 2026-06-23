import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { LINKS } from '../constants';
import { useIsMobile } from '../hooks/useIsMobile';

const instagramPosts = [
  {
    image: '/instagram/instagram-01.jpg',
    alt: 'The Facial Space acne journey before Instagram post',
  },
  {
    image: '/instagram/instagram-02.jpg',
    alt: 'The Facial Space studio tour Instagram post',
  },
  {
    image: '/instagram/instagram-03.jpg',
    alt: 'The Facial Space acne client before visit Instagram post',
  },
  {
    image: '/instagram/instagram-04.jpg',
    alt: 'The Facial Space client after acne appointment Instagram post',
  },
  {
    image: '/instagram/instagram-05.jpg',
    alt: 'The Facial Space LED acne treatment Instagram post',
  },
  {
    image: '/instagram/instagram-06.jpg',
    alt: 'The Facial Space founder product education Instagram post',
  },
];

export default function Results() {
  const isMobile = useIsMobile();

  return (
    <section id="instagram" className="border-y border-spa-blue-dark/45 bg-spa-off-white py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <motion.h2
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={isMobile ? undefined : { duration: 0.6 }}
          className="!font-sans text-4xl font-bold tracking-normal !text-spa-blue-dark md:text-5xl"
        >
          Follow us on Instagram @the.facialspace
        </motion.h2>

        <motion.a
          href={LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          initial={isMobile ? false : { opacity: 0, y: 18 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={isMobile ? undefined : { duration: 0.6, delay: 0.1 }}
          className="mt-8 inline-flex items-center justify-center gap-3 bg-spa-blue-dark px-10 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-spa-text"
        >
          <Instagram size={18} strokeWidth={2.2} />
          Follow Us
        </motion.a>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-2 px-2 sm:grid-cols-3 lg:grid-cols-6">
        {instagramPosts.map((post, index) => (
          <motion.a
            key={post.image}
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            initial={isMobile ? false : { opacity: 0, y: 24 }}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? undefined : { duration: 0.5, delay: index * 0.05 }}
            className="group block aspect-[3/4] overflow-hidden bg-white"
          >
            <img
              src={post.image}
              alt={post.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
