import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Programs from './components/sections/Programs';
import Gallery from './components/sections/Gallery';
import Trainers from './components/sections/Trainers';
import Banner from './components/sections/Banner';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import Contact from './components/sections/Contact';
import WhatsAppButton from './components/ui/WhatsAppButton';

function App() {
  return (
    <div className="bg-gym-black min-h-screen text-white overflow-x-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Programs />
        <Gallery />
        <Trainers />
        <Banner />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
