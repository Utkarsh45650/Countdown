import { motion, AnimatePresence } from 'framer-motion';

export default function AnimatedCounter({ value, label }) {
  // Pad value to ensure it's always 2 digits
  const paddedValue = String(value).padStart(2, '0');
  
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1">
        {paddedValue.split('').map((digit, index) => (
          <Digit key={index} digit={digit} />
        ))}
      </div>
      <span className="text-xs md:text-sm text-zinc-500 font-sans uppercase tracking-widest">{label}</span>
    </div>
  );
}

function Digit({ digit }) {
  return (
    <div className="relative w-10 h-14 md:w-16 md:h-24 bg-black/40 backdrop-blur-md rounded-md overflow-hidden flex items-center justify-center border border-white/5 box-glow shadow-inner">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={digit}
          initial={{ y: "100%", opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: "-100%", opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute inset-0 flex items-center justify-center text-3xl md:text-6xl font-mono text-cyan-50 font-bold text-glow"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
