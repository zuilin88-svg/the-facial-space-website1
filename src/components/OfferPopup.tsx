import { useState } from 'react';

type LeadFormConfig = {
  form_ids: string[];
  preview: number;
  asset_domain: string;
  data_domain: string;
};

export default function OfferPopup() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const openLeadForm = () => {
    setMessage('');
    setIsLoading(true);

    const formConfig: LeadFormConfig = {
      form_ids: ['6874eeab-228b-416d-bb38-a327ca5ee0a2'],
      preview: 0,
      asset_domain: 'cdn3.editmysite.com/app/marketing',
      data_domain: 'www.weebly.com/app/marketing',
    };
    const scriptSrc = 'https://cdn3.editmysite.com/app/marketing/js/dist/lead-form.js';

    window.formIds = window.formIds || [];
    if (window.leadForm && 'form_ids' in window.leadForm) {
      window.formIds = window.formIds.concat(window.leadForm.form_ids);
    }

    window.formObject = 'leadForm';
    window.leadForm = (config: LeadFormConfig) => {
      const mergedIds = [...window.formIds, ...config.form_ids].filter(
        (formId, index, allFormIds) => allFormIds.indexOf(formId) === index
      );
      window.leadForm = { ...config, form_ids: mergedIds };
    };
    window.leadForm(formConfig);

    const existingScript = Array.from(document.scripts).find((script) => script.src.includes('lead-form.js'));

    if (existingScript) {
      setIsLoading(false);
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = scriptSrc;
    script.onload = () => setIsLoading(false);
    script.onerror = () => {
      setIsLoading(false);
      setMessage('Offer form could not load. Please refresh and try again.');
    };
    document.head.appendChild(script);
  };

  return (
    <div className="fixed bottom-0 right-4 z-40 md:right-8">
      <button
        type="button"
        onClick={openLeadForm}
        disabled={isLoading}
        className="border border-spa-cta bg-spa-cta px-7 py-4 text-sm font-bold text-white shadow-[0_-8px_28px_rgba(44,51,56,0.12)] transition-colors hover:border-spa-text hover:bg-spa-text disabled:cursor-wait disabled:opacity-75"
      >
        {isLoading ? 'Loading...' : 'Get $10 Off'}
      </button>
      {message && (
        <p
          role="status"
          className="mt-2 max-w-[230px] bg-white px-3 py-2 text-xs font-medium text-spa-text shadow-lg"
        >
          {message}
        </p>
      )}
    </div>
  );
}

declare global {
  interface Window {
    formIds?: string[];
    formObject?: string;
    leadForm?: ((config: LeadFormConfig) => void) | LeadFormConfig;
  }
}
