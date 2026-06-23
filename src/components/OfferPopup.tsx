import { type FormEvent, useState } from 'react';
import { Mail, X } from 'lucide-react';
import { LINKS } from '../constants';

export default function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!LINKS.firstTreatmentOffer) {
      setMessage('Add your Square signup link to connect this offer.');
      return;
    }

    window.location.href = LINKS.firstTreatmentOffer;
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-0 right-4 z-40 md:right-8">
        <button
          type="button"
          onClick={() => {
            setMessage('');
            setIsOpen(true);
          }}
          className="border border-spa-cta bg-spa-cta px-7 py-4 text-sm font-bold text-white shadow-[0_-8px_28px_rgba(44,51,56,0.12)] transition-colors hover:border-spa-text hover:bg-spa-text"
        >
          Get $10 Off
        </button>
      </div>
    );
  }

  return (
    <aside className="fixed inset-x-0 bottom-0 z-40 border-t border-spa-blue-dark bg-[#fbfaf7]/95 shadow-[0_-18px_60px_rgba(44,51,56,0.14)] md:backdrop-blur-md">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-6 py-7 md:grid-cols-[1fr_auto] lg:px-8">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close offer"
          className="absolute right-4 top-4 text-spa-text-light transition-colors hover:text-spa-text"
        >
          <X size={22} />
        </button>

        <div className="pr-8 text-center md:text-left">
          <p className="mb-3 text-3xl font-bold leading-tight text-spa-blue-dark md:text-4xl">
            Get $10 Off Your First Treatment
          </p>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-spa-text md:mx-0 md:text-lg">
            Drop your email to receive your first-treatment offer and start your clear skin journey.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl md:w-[390px]"
        >
          <label htmlFor="first-treatment-email" className="sr-only">
            Email address
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Mail
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-spa-text-light"
              />
              <input
                id="first-treatment-email"
                name="email"
                type="email"
                required
                placeholder="Email"
                className="h-12 w-full rounded-none border border-spa-blue-dark/45 bg-white pl-11 pr-4 text-sm text-spa-text outline-none transition-colors placeholder:text-spa-text-light focus:border-spa-blue-dark"
              />
            </div>
            <button
              type="submit"
              className="h-12 bg-spa-cta px-7 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-spa-text"
            >
              Get $10 Off
            </button>
          </div>
          {message && (
            <p className="mt-3 text-center text-xs font-medium uppercase tracking-widest text-spa-text-light md:text-left">
              {message}
            </p>
          )}
        </form>
      </div>
    </aside>
  );
}
