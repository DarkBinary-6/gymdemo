import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: true
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    <button
                        onClick={scrollToTop}
                        className="bg-gym-red text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-colors focus:outline-none ring-2 ring-transparent hover:ring-white/50"
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
