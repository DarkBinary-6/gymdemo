import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Programs', to: 'programs' },
    { name: 'Trainers', to: 'trainers' },
    { name: 'Membership', to: 'membership' },
    { name: 'Testimonials', to: 'testimonials' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gym-black/95 shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-gym-red text-3xl font-roboto tracking-wider">IRONFORGE</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="text-white font-roboto text-lg uppercase tracking-wide font-medium hover:text-gym-red transition-colors cursor-pointer"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="bg-gym-red text-white px-6 py-2 font-roboto uppercase tracking-wider hover:bg-red-600 transition-colors cursor-pointer clip-path-slant"
                    >
                        Join Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white text-2xl z-50 relative"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed inset-0 bg-gym-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white font-roboto text-3xl uppercase tracking-wider hover:text-gym-red transition-colors cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="bg-gym-red text-white px-8 py-3 font-roboto text-xl uppercase tracking-wider clip-path-slant mt-4"
                            >
                                Join Now
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
