import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Results from './components/Results';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import OfferPopup from './components/OfferPopup';

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Products />
      <Testimonials />
      <FAQ />
      <Results />
      <CallToAction />
      <Footer />
      <OfferPopup />
    </main>
  );
}
