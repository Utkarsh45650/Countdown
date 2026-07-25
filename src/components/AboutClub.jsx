import { motion } from 'framer-motion';
import { Bot, Cpu, Code, Rocket, Shield, Gamepad2 } from 'lucide-react';

const features = [
  {
    icon: <Bot className="w-6 h-6 text-cyan-400" />,
    title: "Advanced Robotics",
    description: "Competing globally with projects like Agribot for Technoxian 9.0 and pushing the boundaries of mechanical design."
  },
  {
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    title: "Autonomous Systems",
    description: "Developing intelligent self-driving cars with computer vision, deep learning, and sensor fusion."
  },
  {
    icon: <Code className="w-6 h-6 text-purple-400" />,
    title: "AI & Software",
    description: "Building impactful software like the FormSaathi AI extension and robust web applications."
  },
  {
    icon: <Rocket className="w-6 h-6 text-pink-400" />,
    title: "R&D Innovation",
    description: "Prototyping cutting-edge technologies from conceptualization to real-world deployment."
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-400" />,
    title: "Cybersecurity",
    description: "Ensuring the structural integrity and security of our systems against the void."
  },
  {
    icon: <Gamepad2 className="w-6 h-6 text-orange-400" />,
    title: "Competitive Edge",
    description: "Thriving in E-Sports and competitive programming, breaking algorithms at light speed."
  }
];

export default function AboutClub() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 px-4 relative z-10 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-6 tracking-tight">
          About TARS
        </h2>
        <h3 className="text-xl md:text-2xl font-medium text-zinc-200 mb-4 font-heading italic">
          "We don't just write code; we build the future."
        </h3>
        <p className="text-zinc-400 text-lg font-sans font-light leading-relaxed mb-12">
          The Technical Association for Robotics and Systems (TARS) is the nexus where imagination meets engineering. From competing on international stages with autonomous robots to developing AI-powered solutions, we empower the next generation of builders, makers, and innovators to push the boundaries of technology.
        </p>
        
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto mb-16" />
        
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-6 tracking-tight">
          Our Strengths & Domains
        </h2>
        <p className="text-zinc-400 text-lg font-sans font-light leading-relaxed">
          Combining diverse expertise to engineer tomorrow's intelligent systems.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 box-glow-hover"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="w-14 h-14 rounded-xl bg-zinc-900/50 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
              {feature.icon}
            </div>
            <h3 className="text-xl font-heading font-semibold text-zinc-100 mb-3">
              {feature.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans font-light">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
