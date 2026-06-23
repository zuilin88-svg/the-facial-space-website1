import { useState } from 'react';

const OFFER_FORM_ID = '6874eeab-228b-416d-bb38-a327ca5ee0a2';

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
      form_ids: [OFFER_FORM_ID],
      preview: 0,
      asset_domain: 'cdn3.editmysite.com/app/marketing',
      data_domain: 'www.weebly.com/app/marketing',
    };
    const scriptSrc = 'https://cdn3.editmysite.com/app/marketing/js/dist/lead-form.js';

    const handleNoShow = (event: MessageEvent) => {
      if (event.data?.action !== 'noShow' || event.data?.id !== OFFER_FORM_ID) {
        return;
      }

      setIsLoading(false);
      setMessage('Offer form is not active yet. Please activate this form in Square/Weebly.');
      window.removeEventListener('message', handleNoShow);
    };

    window.addEventListener('message', handleNoShow);

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
      window.setTimeout(() => {
        window.removeEventListener('message', handleNoShow);
        const widget = window.leadFormWidget?.[OFFER_FORM_ID];
        if (widget?.forms?.[OFFER_FORM_ID]?.formData) {
          widget.open(OFFER_FORM_ID, widget.forms[OFFER_FORM_ID].formData);
        } else {
          setMessage('Offer form is not active yet. Please activate this form in Square/Weebly.');
        }
      }, 300);
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = scriptSrc;
    script.onload = () => {
      window.setTimeout(() => {
        window.removeEventListener('message', handleNoShow);
        setIsLoading(false);
      }, 1200);
    };
    script.onerror = () => {
      window.removeEventListener('message', handleNoShow);
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
    leadFormWidget?: Record<
      string,
      {
        forms?: Record<string, { formData: LeadFormConfig & Record<string, unknown> }>;
        open: (formId: string, formData: LeadFormConfig & Record<string, unknown>) => void;
      }
    >;
  }
}
