import { motion } from 'motion/react';
import { useIsMobile } from '../hooks/useIsMobile';

const faqs = [
  {
    question: 'Why am I still getting acne as an adult?',
    answer:
      "Adult acne is way more common than many people realize. Hormonal fluctuations, stress, genetics, certain medications, and skincare products can all contribute to breakouts. Acne can occur at any age, even if you didn't have it as a teenager.",
  },
  {
    question: 'Does diet affect acne?',
    answer:
      'For some people, diet may play a role in acne. Foods with a high glycemic index, such as sugary snacks and refined carbohydrates, and certain dairy products have been linked to breakouts in some studies. Triggers vary from person to person, so it is helpful to track your diet and skin changes over time.',
  },
  {
    question: 'How long does it take to see results from acne treatments?',
    answer:
      "Most clients start seeing a visible difference after at least 90 days of consistent treatments and proper home care. Healing acne is gradual and requires commitment, patience, and consistency. While some improvements may appear sooner, lasting results typically come from following a customized treatment plan, using recommended skincare products, and staying consistent with aftercare.",
  },
];

export default function FAQ() {
  const isMobile = useIsMobile();

  return (
    <section id="faq" className="bg-[#eef2f1] py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={isMobile ? undefined : { duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-spa-blue-dark"></div>
            <span className="text-sm font-medium uppercase tracking-widest text-spa-blue-dark">
              Acne FAQ
            </span>
            <div className="h-px w-12 bg-spa-blue-dark"></div>
          </div>
          <h2 className="font-serif text-4xl leading-tight text-spa-text md:text-5xl">
            Clear Answers For Your Skin Journey
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <motion.details
              key={item.question}
              initial={isMobile ? false : { opacity: 0, y: 18 }}
              whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={isMobile ? undefined : { delay: index * 0.08, duration: 0.5 }}
              className="group rounded-[18px] border border-spa-blue-dark/25 bg-white p-6 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-2xl text-spa-text">
                <span>{item.question}</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-spa-blue-light text-xl text-spa-blue-dark transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-5 leading-relaxed text-spa-text-light">{item.answer}</p>
            </motion.details>
          ))}
        </div>

        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 18 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={isMobile ? undefined : { delay: 0.25, duration: 0.5 }}
          className="mt-8 rounded-[18px] bg-spa-text p-8 text-white shadow-lg"
        >
          <p className="font-serif text-3xl leading-tight">
            Acne isn't cured. It's maintained.
          </p>
          <p className="mt-4 leading-relaxed text-white/78">
            At The Facial Space, we focus on creating personalized acne-clearing programs
            designed to support long-term skin health and lasting results. Your skin's journey is
            unique, and our team is here to guide you every step of the way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
