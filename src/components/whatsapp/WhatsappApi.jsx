import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappApi = () => {
  const phoneNumber = "+2348153127462";
  const message = "Hello, I want to speak with a support-agent.";

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <div>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <motion.div
          className="group md:block fixed bottom-10 md:bottom-30 right-10 md:right-20 bg-green-500/70 md:bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-100"
          animate={{ y: [0, -50, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-xl md:text-4xl">
            <FaWhatsapp />
          </span>

          {/* Tooltip */}
          <span className="absolute bottom-14 right-1/2 translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with Support Agent
          </span>
        </motion.div>
      </a>
    </div>
  );
};

export default WhatsappApi;
