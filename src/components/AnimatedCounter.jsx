import { motion, AnimatePresence } from 'framer-motion';

export default function AnimatedCounter({ value, label }) {
  // Pad value to ensure it's always 2 digits
  const paddedValue = String(value).padStart(2, '0');
  
  return (
    <div className="flex flex-col items-center gap-2 md:gap-4">
      <div className="flex gap-1 md:gap-2">
        {paddedValue.split('').map((digit, index) => (
          <Digit key={index} digit={digit} />
        ))}
      </div>
      <span className="text-xs md:text-base text-cyan-400/80 font-mono uppercase tracking-wider md:tracking-[0.3em] font-medium drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">{label}</span>
    </div>
  );
}

function Digit({ digit }) {
  return (
    <div className="relative w-7 h-12 sm:w-8 sm:h-14 md:w-16 md:h-24 flex items-center justify-center overflow-hidden" style={{ perspective: '500px' }}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={digit}
          initial={{ y: "80%", opacity: 0, rotateX: -90, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)" }}
          exit={{ y: "-80%", opacity: 0, rotateX: 90, filter: "blur(10px)" }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-7xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-700"
          style={{ 
            filter: 'drop-shadow(0 0 20px rgba(6,182,212,0.8))',
            WebkitTextStroke: '1px rgba(255,255,255,0.3)'
          }}
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
