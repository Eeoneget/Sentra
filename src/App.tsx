
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Solutions } from './components/Solutions';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Losses } from './components/Losses';

function App() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Losses />
        <Solutions />
        <About />
        <FAQ />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
