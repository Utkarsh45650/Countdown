import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const title = "STAR".split("");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4">
      {/* Background radial gradient for subtle glow behind hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10"
      >
        <motion.div variants={textVariants} className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm text-cyan-400 text-sm font-mono tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          System Initializing
        </motion.div>
        
        <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-heading font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500 tracking-tighter mb-4 flex justify-center">
          {title.map((char, index) => (
            <motion.span
              key={index}
              variants={textVariants}
              className={char === " " ? "w-[0.3em]" : ""}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.p variants={textVariants} className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto font-sans font-light leading-relaxed">
          <span className="text-zinc-200 font-medium">Society of Technology and Automation Research (TARS).</span><br/> Forging the future of robotics, automation, and intelligent systems—one innovation at a time.
        </motion.p>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
      </motion.div>
    </section>
  );
}
