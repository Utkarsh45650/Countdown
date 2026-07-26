import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PRIMARY_DATE, SECONDARY_DATE, TERTIARY_DATE } from '../constants';
import { calculateTimeLeft } from './Countdowns';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

export default function LaunchInfo() {
  const [timeLeft1, setTimeLeft1] = useState(calculateTimeLeft(PRIMARY_DATE));
  const [timeLeft2, setTimeLeft2] = useState(calculateTimeLeft(SECONDARY_DATE));
  const [timeLeft3, setTimeLeft3] = useState(calculateTimeLeft(TERTIARY_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft1(calculateTimeLeft(PRIMARY_DATE));
      setTimeLeft2(calculateTimeLeft(SECONDARY_DATE));
      setTimeLeft3(calculateTimeLeft(TERTIARY_DATE));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* 1. CLUB REVEAL (Shows when 1st counter hits zero) */}
      {timeLeft1.isFinished && (
        <section className="py-24 px-4 relative z-10 w-full flex justify-center border-t border-amber-900/30 bg-black/40 backdrop-blur-sm min-h-[50vh] items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0 }}
            className="w-full max-w-5xl flex flex-col items-center justify-center py-6 text-center px-4"
          >
            <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-4 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 tracking-tight drop-shadow-[0_0_20px_rgba(251,191,36,0.3)] uppercase">
              A New Constellation
            </h3>
            <p className="text-zinc-300 font-sans text-lg md:text-3xl font-medium tracking-widest md:tracking-[0.3em] uppercase">
              THE INITIATES HAVE FORMED.
            </p>
            <p className="text-center text-zinc-400 mt-8 md:mt-16 font-sans text-base md:text-xl font-light max-w-3xl leading-relaxed uppercase tracking-wider md:tracking-widest">
              "Like stars pulled by gravity, we are no longer alone in the dark."
              <br /><br />
              The dust has settled. The alliance is now united. The journey begins.
              <br /><br />
              <span className="text-amber-200/80 font-medium">Only those who follow the hidden orbit uncover the secrets of the cosmos.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-12 items-center justify-center">
              <a 
                href="https://www.instagram.com/star.club.glau?igsh=cXJmYzVjY3Vpcmo3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 px-8 py-4 rounded-full border border-amber-500/30 bg-black/40 text-amber-200 hover:bg-amber-500/20 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all duration-300 tracking-[0.2em] uppercase text-sm font-medium"
              >
                <FaInstagram size={20} />
                <span>Establish Link</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/star-club-glau?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 px-8 py-4 rounded-full border border-amber-500/30 bg-black/40 text-amber-200 hover:bg-amber-500/20 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all duration-300 tracking-[0.2em] uppercase text-sm font-medium"
              >
                <FaLinkedinIn size={20} />
                <span>Join Network</span>
              </a>
            </div>
          </motion.div>
        </section>
      )}

      {/* 2. WEBSITE REVEAL (Shows when 2nd counter hits zero) */}
      {timeLeft2.isFinished && (
        <section className="py-24 px-4 relative z-10 w-full flex justify-center border-t border-cyan-900/30 bg-black/60 backdrop-blur-sm min-h-[50vh] items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0 }}
            className="w-full max-w-5xl flex flex-col items-center justify-center py-6 text-center px-4"
          >
            <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-4 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-200 tracking-tight drop-shadow-[0_0_20px_rgba(34,211,238,0.3)] uppercase">
              The Architects Emerge
            </h3>
            <p className="text-zinc-300 font-sans text-lg md:text-3xl font-medium tracking-widest md:tracking-[0.3em] uppercase">
              THEY WHO COMMAND THE GRAVITY.
            </p>
            <p className="text-center text-zinc-400 mt-8 md:mt-16 font-sans text-base md:text-xl font-light max-w-3xl leading-relaxed uppercase tracking-wider md:tracking-widest">
              "Mankind was born on Earth, but we were never meant to die here."
              <br /><br />
              The Architects have arrived to guide us into the unknown. The final ascent begins now.
            </p>
          </motion.div>
        </section>
      )}

      {/* 3. COUNCIL REVEAL (Shows when 3rd counter hits zero) */}
      {timeLeft3.isFinished && (
        <section className="py-24 px-4 relative z-10 w-full flex justify-center border-t border-purple-900/30 bg-black/80 backdrop-blur-sm min-h-[50vh] items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0 }}
            className="w-full max-w-5xl flex flex-col items-center justify-center py-6 text-center px-4"
          >
            <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-4 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-100 to-purple-300 tracking-tight drop-shadow-[0_0_20px_rgba(168,85,247,0.3)] uppercase">
              The Portal is Open
            </h3>
            <p className="text-zinc-300 font-sans text-lg md:text-3xl font-medium tracking-widest md:tracking-[0.3em] uppercase">
              THE ARCHIVES ARE NOW LIVE.
            </p>
            <p className="text-center text-zinc-400 mt-8 md:mt-16 font-sans text-base md:text-xl font-light max-w-3xl leading-relaxed uppercase tracking-wider md:tracking-widest">
              "A new dimension of knowledge has been unlocked."
              <br /><br />
              Step through the digital wormhole and explore the archives.
            </p>
          </motion.div>
        </section>
      )}

    </div>
  );
}
