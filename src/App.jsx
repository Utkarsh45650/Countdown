import Countdowns from './components/Countdowns';
import LaunchInfo from './components/LaunchInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans relative selection:bg-cyan-500/30">
      {/* Global Background GIF - Fixed to viewport */}
      <div className="fixed inset-0 w-full h-full z-0 opacity-40">
        <img
          src="/SpaceTheme.gif"
          alt="Interstellar space background"
          className="w-full h-full object-cover"
        />
      </div>

      <main className="flex-1 flex flex-col relative z-10 w-full min-h-screen">
        <Countdowns />
        <LaunchInfo />
        <Footer />
      </main>
    </div>
  );
}

export default App;
