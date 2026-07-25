import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import { Cpu, Globe } from 'lucide-react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

// Set to hit zero in 15 seconds for testing purposes
const PRIMARY_DATE = new Date('2026-07-27T12:00:00+05:30').getTime();
const SECONDARY_DATE = new Date('2026-08-03T12:00:00+05:30').getTime();

export default function Countdowns() {
  const [timeLeft1, setTimeLeft1] = useState(calculateTimeLeft(PRIMARY_DATE));
  const [timeLeft2, setTimeLeft2] = useState(calculateTimeLeft(SECONDARY_DATE));
  
  // Only render confetti on client
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft1(calculateTimeLeft(PRIMARY_DATE));
      setTimeLeft2(calculateTimeLeft(SECONDARY_DATE));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const showConfetti = isClient && (timeLeft1.isFinished || timeLeft2.isFinished);

  return (
    <section className="py-24 px-4 relative z-10 w-full max-w-6xl mx-auto">
      {showConfetti && <ConfettiWrapper />}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-8 w-full"
      >
        {/* Primary Countdown */}
        <motion.div 
          className="w-full glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden group box-glow transition-all duration-500 hover:border-cyan-500/30 box-glow-hover"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
              <Cpu className="w-5 h-5 text-cyan-400" />
            </div>
            <h2 className="text-lg md:text-xl font-heading font-medium text-zinc-100 leading-tight">
              System Initialization:<br/><span className="text-zinc-400">Club Reveal</span>
            </h2>
          </div>

          {timeLeft1.isFinished ? (
            <FinishedState 
              title="Welcome to STAR!" 
              subtitle="The club has officially launched." 
              colorClass="text-cyan-400" 
            />
          ) : (
            <div className="flex justify-start gap-4 md:gap-8 flex-wrap">
              <AnimatedCounter value={timeLeft1.days} label="Days" />
              <div className="text-2xl md:text-5xl font-mono text-zinc-600 self-start mt-2 md:mt-4">:</div>
              <AnimatedCounter value={timeLeft1.hours} label="Hours" />
              <div className="text-2xl md:text-5xl font-mono text-zinc-600 self-start mt-2 md:mt-4">:</div>
              <AnimatedCounter value={timeLeft1.minutes} label="Minutes" />
              <div className="text-2xl md:text-5xl font-mono text-zinc-600 self-start mt-2 md:mt-4">:</div>
              <AnimatedCounter value={timeLeft1.seconds} label="Seconds" />
            </div>
          )}
        </motion.div>

        {/* Secondary Countdown */}
        <motion.div 
          className="w-full glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden group transition-all duration-500 hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
              <Globe className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-lg md:text-xl font-heading font-medium text-zinc-100 leading-tight">
              Platform Deployment:<br/><span className="text-zinc-400">Website Reveal</span>
            </h3>
          </div>

          {timeLeft2.isFinished ? (
            <FinishedState 
              title="Platform Deployed!" 
              subtitle="The website is now live." 
              colorClass="text-emerald-400" 
            />
          ) : (
            <div className="flex justify-start gap-3 md:gap-4 flex-wrap scale-90 origin-left">
              <AnimatedCounter value={timeLeft2.days} label="Days" />
              <div className="text-xl md:text-3xl font-mono text-zinc-600 self-start mt-2">:</div>
              <AnimatedCounter value={timeLeft2.hours} label="Hours" />
              <div className="text-xl md:text-3xl font-mono text-zinc-600 self-start mt-2">:</div>
              <AnimatedCounter value={timeLeft2.minutes} label="Mins" />
              <div className="text-xl md:text-3xl font-mono text-zinc-600 self-start mt-2">:</div>
              <AnimatedCounter value={timeLeft2.seconds} label="Secs" />
            </div>
          )}
        </motion.div>

      </motion.div>
    </section>
  );
}

function ConfettiWrapper() {
  const { width, height } = useWindowSize();
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <Confetti width={width} height={height} recycle={false} numberOfPieces={1000} gravity={0.2} />
    </div>
  );
}

function FinishedState({ title, subtitle, colorClass }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
      className="flex flex-col items-start justify-center py-6"
    >
      <h3 className={`text-5xl md:text-7xl font-heading font-black mb-4 ${colorClass} text-glow tracking-tight`}>
        {title}
      </h3>
      <p className="text-zinc-300 font-sans text-xl md:text-2xl font-medium">
        {subtitle}
      </p>
    </motion.div>
  );
}

function calculateTimeLeft(targetDate) {
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
