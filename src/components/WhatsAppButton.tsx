import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/917500786039?text=Hi%20Muhammad%20Affan,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="pulse-ring fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-green-500/40"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
    </motion.a>
  );
};

export default WhatsAppButton;
