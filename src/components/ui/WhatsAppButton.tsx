import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const phoneNumber = "919278378772";
    const message = "Hi, I'd like to know more about IronForge Gym!";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 flex items-center justify-center"
        >
            <motion.div
                animate={{
                    boxShadow: [
                        "0 0 0 0 rgba(37, 211, 102, 0.7)",
                        "0 0 0 20px rgba(37, 211, 102, 0)",
                    ],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            >
                <FaWhatsapp size={32} />
            </motion.div>
        </a>
    );
};

export default WhatsAppButton;
