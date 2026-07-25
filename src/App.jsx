import SmoothScroll from './components/SmoothScroll';
import Hero from './components/Hero';
import Countdowns from './components/Countdowns';
import AboutClub from './components/AboutClub';
import Footer from './components/Footer';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans relative selection:bg-cyan-500/30">
        {/* Fixed subtle grid background */}
        <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-grid-pattern mask-radial-faded" />
        <div className="fixed inset-0 z-0 opacity-10 pointer-events-none bg-dot-pattern" />

        {/* Global radial gradient accent */}
        <div className="fixed top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-cyan-950/20 to-transparent pointer-events-none z-0" />

        <main className="flex-1 flex flex-col">
          <Hero />
          <Countdowns />
          <AboutClub />
        </main>
        
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
