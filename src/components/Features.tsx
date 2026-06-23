import { motion } from 'motion/react';
import { Sparkles, HeartHandshake, Award, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: <Sparkles size={28} className="text-spa-blue-dark" />,
    title: "Customized Treatments",
    description: "Every facial is tailored to your exact skin concerns and goals on the day of your visit."
  },
  {
    icon: <HeartHandshake size={28} className="text-spa-blue-dark" />,
    title: "Relaxing Experience",
    description: "A calming, airy sanctuary designed for you to unwind, decompress, and reset."
  },
  {
    icon: <Award size={28} className="text-spa-blue-dark" />,
    title: "Professional Care",
    description: "Expert knowledge and advanced techniques to ensure safe, effective, and nurturing care."
  },
  {
    icon: <BadgeCheck size={28} className="text-spa-blue-dark" />,
    title: "Results Driven",
    description: "Science-backed approaches focused on long-term skin health and a radiant glow."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center p-6 rounded-[24px] hover:bg-spa-blue-light/50 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-spa-blue-light flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg font-serif text-spa-text mb-3">{feature.title}</h3>
              <p className="text-sm text-spa-text-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
