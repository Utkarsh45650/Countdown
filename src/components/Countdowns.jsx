import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import Starfield from './Starfield';
import { PRIMARY_DATE, SECONDARY_DATE, TERTIARY_DATE } from '../constants';

export default function Countdowns() {
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
    <section className="py-24 px-4 relative z-10 w-full flex justify-center overflow-hidden min-h-screen items-center">
      <Starfield />
      <div className="w-full max-w-7xl relative z-10 flex flex-col items-center justify-center gap-32">

        {!timeLeft1.isFinished ? (
          <motion.div
            key="primary-active"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center gap-16 w-full"
          >
            <div className="text-center space-y-6 max-w-4xl px-4">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-zinc-200 to-cyan-200 uppercase tracking-widest md:tracking-[0.3em] drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]">
                THE CONSTELLATION
              </h2>
              <p className="text-amber-100/80 font-mono tracking-widest md:tracking-[0.6em] uppercase text-xs md:text-sm leading-relaxed">
                GRAVITY PULLS US TOGETHER. THE CONSTELLATION GATHERS SOON.
              </p>
            </div>

            <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-12 flex-nowrap">
              <AnimatedCounter value={timeLeft1.days} label="Days" />
              <div className="text-3xl md:text-7xl font-black font-heading text-amber-500/50 self-start mt-2 md:mt-4 animate-pulse drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">:</div>
              <AnimatedCounter value={timeLeft1.hours} label="Hours" />
              <div className="text-3xl md:text-7xl font-black font-heading text-amber-500/50 self-start mt-2 md:mt-4 animate-pulse drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">:</div>
              <AnimatedCounter value={timeLeft1.minutes} label="Mins" />
              <div className="text-3xl md:text-7xl font-black font-heading text-amber-500/50 self-start mt-2 md:mt-4 animate-pulse drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">:</div>
              <AnimatedCounter value={timeLeft1.seconds} label="Secs" />
            </div>
          </motion.div>
        ) : !timeLeft2.isFinished ? (
          <motion.div
            key="secondary-active"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center gap-16 w-full"
          >
            <div className="text-center space-y-6 max-w-4xl px-4">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-zinc-200 to-amber-200 uppercase tracking-widest md:tracking-[0.3em] drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                THE NEXUS
              </h2>
              <p className="text-cyan-100/80 font-mono tracking-widest md:tracking-[0.6em] uppercase text-xs md:text-sm leading-relaxed">
                TRANSMITTING DATA ACROSS SPACE. THE NEXUS IS ABOUT TO GO LIVE.
              </p>
            </div>

            <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-12 flex-nowrap">
              <AnimatedCounter value={timeLeft2.days} label="Days" />
              <div className="text-3xl md:text-7xl font-black font-heading text-cyan-500/60 self-start mt-2 md:mt-4 animate-pulse drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">:</div>
              <AnimatedCounter value={timeLeft2.hours} label="Hours" />
              <div className="text-3xl md:text-7xl font-black font-heading text-cyan-500/60 self-start mt-2 md:mt-4 animate-pulse drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">:</div>
              <AnimatedCounter value={timeLeft2.minutes} label="Mins" />
              <div className="text-3xl md:text-7xl font-black font-heading text-cyan-500/60 self-start mt-2 md:mt-4 animate-pulse drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">:</div>
              <AnimatedCounter value={timeLeft2.seconds} label="Secs" />
            </div>
          </motion.div>
        ) : !timeLeft3.isFinished ? (
          <motion.div
            key="tertiary-active"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center gap-16 w-full"
          >
            <div className="text-center space-y-6 max-w-4xl px-4">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-zinc-200 to-indigo-300 uppercase tracking-widest md:tracking-[0.3em] drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">
                THE STELLAR COUNCIL
              </h2>
              <p className="text-purple-100/80 font-mono tracking-widest md:tracking-[0.6em] uppercase text-xs md:text-sm leading-relaxed">
                THEY ARE BEYOND THE STARS. THE STELLAR COUNCIL APPROACHES.
              </p>
            </div>

            <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-12 flex-nowrap">
              <AnimatedCounter value={timeLeft3.days} label="Days" />
              <div className="text-3xl md:text-7xl font-black font-heading text-purple-400/60 self-start mt-2 md:mt-4 animate-pulse drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">:</div>
              <AnimatedCounter value={timeLeft3.hours} label="Hours" />
              <div className="text-3xl md:text-7xl font-black font-heading text-purple-400/60 self-start mt-2 md:mt-4 animate-pulse drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">:</div>
              <AnimatedCounter value={timeLeft3.minutes} label="Mins" />
              <div className="text-3xl md:text-7xl font-black font-heading text-purple-400/60 self-start mt-2 md:mt-4 animate-pulse drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">:</div>
              <AnimatedCounter value={timeLeft3.seconds} label="Secs" />
            </div>
          </motion.div>
        ) : (
          <FinishedState
            title="THE STELLAR COUNCIL"
            subtitle='"THEY ARE HERE." THE STELLAR COUNCIL HAVE ARRIVED.'
            titleClass="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-indigo-200 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
          />
        )}

      </div>
    </section>
  );
}

function FinishedState({ title, subtitle, titleClass }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
      className="flex flex-col items-center justify-center py-6 text-center max-w-5xl px-4"
    >
      <h3 className={`text-4xl md:text-7xl lg:text-8xl font-heading font-black mb-8 uppercase tracking-widest md:tracking-[0.2em] ${titleClass}`}>
        {title}
      </h3>
      <p className="text-zinc-300 font-mono text-base md:text-xl font-light tracking-widest md:tracking-[0.4em] leading-loose uppercase">
        {subtitle}
      </p>
    </motion.div>
  );
}

export function calculateTimeLeft(targetDate) {
  const difference = targetDate - new Date().getTime();
  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: false };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isFinished: false,
    };
  } else {
    timeLeft.isFinished = true;
  }

  return timeLeft;
}
