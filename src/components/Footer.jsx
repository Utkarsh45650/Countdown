import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PRIMARY_DATE } from '../constants';
import { calculateTimeLeft } from './Countdowns';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

export default function Footer() {
  const [timeLeft1, setTimeLeft1] = useState(calculateTimeLeft(PRIMARY_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft1(calculateTimeLeft(PRIMARY_DATE));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft1.isFinished) return null;

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, delay: 0.5 }}
      className="w-full relative z-10 border-t border-cyan-900/30 bg-black/60 backdrop-blur-xl mt-auto"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Brand / Name */}
        <div className="flex flex-col items-center lg:items-start gap-2">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-cyan-200 tracking-[0.3em] drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
            STAR
          </h2>
          <p className="text-zinc-400 font-mono text-xs tracking-widest uppercase mt-1">
            Society of Technological & Astronomical Research
          </p>
        </div>

        {/* Motto & Punchline */}
        <div className="flex flex-col items-center text-center max-w-lg gap-4">
          <p className="text-cyan-200/90 font-sans font-medium text-sm md:text-base tracking-[0.3em] uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
            "GRAVITY BINDS US. KNOWLEDGE FREES US."
          </p>
          <p className="text-zinc-500 font-sans text-xs md:text-sm tracking-widest uppercase font-light leading-relaxed">
            We survived the event horizon. The singularity is our playground.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-8">
          <SocialLink href="https://www.instagram.com/star.club.glau?igsh=cXJmYzVjY3Vpcmo3" icon={<FaInstagram size={24} />} />
          <SocialLink href="https://www.linkedin.com/in/star-club-glau?utm_source=share_via&utm_content=profile&utm_medium=member_android" icon={<FaLinkedinIn size={24} />} />
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="w-full border-t border-white/5 py-6 text-center bg-black/40">
        <p className="text-zinc-600 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase">
          &copy; {new Date().getFullYear()} STAR. All systems operational.
        </p>
      </div>
    </motion.footer>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a 
      href={href}
      className="text-zinc-500 hover:text-cyan-300 transition-all duration-300 transform hover:scale-110 drop-shadow-[0_0_10px_rgba(34,211,238,0)] hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
