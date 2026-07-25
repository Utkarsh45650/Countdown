import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 px-4 w-full border-t border-white/5 mt-auto overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto flex flex-col items-center text-center z-10 relative"
      >
        {/* Animated Brand / Tagline */}
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2 tracking-tight">
          STAR (TARS)
        </h2>
        <p className="text-zinc-400 font-sans font-light mb-8 max-w-sm">
          Society of Technology and Automation Research.<br />
          Innovating the future of robotics and intelligent systems.<br />
          <span className="text-xs mt-4 block text-zinc-500">GLA University, Mathura, Uttar Pradesh, India</span>
        </p>

        {/* Social Links with hover effects */}
        <div className="flex items-center gap-6">
          <SocialLink href="mailto:s.tarsclubgla@gmail.com" icon={<FaEnvelope className="w-5 h-5" />} hoverColor="hover:text-white" hoverBorder="hover:border-white/30" />
          <SocialLink href="https://www.instagram.com/tars.club_glau?igsh=dWo1ajVnOWtqNXJ4" icon={<FaInstagram className="w-5 h-5" />} hoverColor="hover:text-pink-400" hoverBorder="hover:border-pink-400/30" />
          <SocialLink href="https://www.linkedin.com/in/tars-tars-club-glau-06398939b/" icon={<FaLinkedin className="w-5 h-5" />} hoverColor="hover:text-blue-400" hoverBorder="hover:border-blue-400/30" />
        </div>
        
        {/* Divider */}
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-8" />

        <p className="text-xs text-zinc-600 font-sans tracking-wide">
          &copy; {new Date().getFullYear()} STAR. Society of Technology and Automation Research.
        </p>
      </motion.div>

      {/* Bottom subtle edge glow */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </footer>
  );
}

function SocialLink({ href, icon, hoverColor, hoverBorder }) {
  return (
    <motion.a 
      href={href}
      whileHover={{ y: -4, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`p-3 rounded-full text-zinc-500 bg-zinc-900/50 border border-white/5 backdrop-blur-md ${hoverColor} ${hoverBorder} transition-colors shadow-lg hover:shadow-xl`}
      target="_blank" 
      rel="noreferrer"
    >
      {icon}
    </motion.a>
  );
}
