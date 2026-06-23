const OFFER_URL = 'https://squareup.com/outreach/CH34cw/subscribe';

export default function OfferPopup() {
  return (
    <div className="fixed bottom-0 right-4 z-40 md:right-8">
      <a
        href={OFFER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block border border-spa-cta bg-spa-cta px-7 py-4 text-sm font-bold text-white shadow-[0_-8px_28px_rgba(44,51,56,0.12)] transition-colors hover:border-spa-text hover:bg-spa-text"
      >
        Get $10 Off
      </a>
    </div>
  );
}
