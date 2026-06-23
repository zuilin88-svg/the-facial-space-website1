import { motion } from 'motion/react';
import { LINKS } from '../constants';
import { useIsMobile } from '../hooks/useIsMobile';

const products = [
  {
    brand: "FACE REALITY",
    name: "Ultra Gentle Gel Cleanser",
    price: "$33.00",
    image: "/products/ultra-gentle.jpg",
    bg: "bg-[#e8eceb]",
    link: "https://the-facial-space.square.site/product/ultra-gentle-gel-cleanser-face-reality-skincare/2?cp=true&sa=true&sbp=false&q=false"
  },
  {
    brand: "FACE REALITY",
    name: "Clearderma Moisturizer",
    price: "$33.00",
    image: "/products/clearderma.jpg",
    bg: "bg-spa-blue-light",
    link: "https://the-facial-space.square.site/product/clearderma-moisturizer-face-reality-skincare/5?cp=true&sa=true&sbp=false&q=false"
  },
  {
    brand: "FACE REALITY",
    name: "Sal-C Toner",
    price: "$31.00",
    image: "/products/sal-c.jpg",
    bg: "bg-[#f4ebe6]",
    link: "https://the-facial-space.square.site/product/sal-c-toner-face-reality-skincare/9?cp=true&sa=true&sbp=false&q=false"
  }
];

export default function Products() {
  const isMobile = useIsMobile();

  return (
    <section id="products" className="py-24 bg-spa-off-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="uppercase tracking-widest text-sm text-spa-blue-dark font-medium block mb-3">Shop Skin Favorites</span>
            <h2 className="text-4xl md:text-5xl font-serif text-spa-text">
              Professional <span className="italic">homecare</span> support
            </h2>
          </div>
          <a href={LINKS.shopFaceReality} target="_blank" rel="noopener noreferrer" className="hidden md:block uppercase tracking-widest text-xs font-semibold border-b border-spa-text pb-1 hover:text-spa-blue-dark hover:border-spa-blue-dark transition-colors">
            Shop All Products
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={isMobile ? undefined : { delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <a href={product.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className={`${product.bg} aspect-[4/5] flex items-center justify-center p-12 relative overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[1.02]`}>
                  <div className="bg-white/40 absolute inset-0 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain relative z-10 drop-shadow-xl"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-spa-text-light uppercase tracking-widest mb-2 block">{product.brand}</span>
                  <h3 className="text-xl font-serif text-spa-text mb-2 group-hover:text-spa-blue-dark transition-colors">{product.name}</h3>
                  <p className="text-spa-text font-medium">{product.price}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href={LINKS.shopFaceReality} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-white text-spa-text text-xs font-bold uppercase tracking-widest hover:bg-spa-blue-light transition-colors text-center border border-spa-silver shadow-sm"
          >
            Shop Face Reality
          </a>
          <a 
            href={LINKS.shopGlymed} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-white border border-spa-silver text-spa-text text-xs font-bold uppercase tracking-widest hover:bg-spa-blue-light transition-colors text-center shadow-sm"
          >
            Shop Glymed
          </a>
        </div>
      </div>
    </section>
  );
}
