import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105"
                    style={{ backgroundImage: "url('/hero-bg.jpg')" }}
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-20 pt-20">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-gym-red font-roboto uppercase tracking-[0.2em] font-bold text-lg mb-4 block">
                            Welcome to IronForge
                        </span>
                    </motion.div>

                    <div className="overflow-hidden mb-6">
                        <motion.h1
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-6xl md:text-8xl font-anton text-white uppercase leading-none"
                        >
                            Forging <span className="text-stroke">Elite</span> <br />
                            <span className="text-gym-red">Physiques</span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-gray-300 font-roboto text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed"
                    >
                        Join the ultimate hardcore training facility. Where limits are broken, and champions are made.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <Link
                            to="programs"
                            smooth={true}
                            duration={500}
                            className="bg-gym-red text-white py-4 px-10 font-anton text-xl uppercase tracking-wider hover:bg-red-600 transition-all clip-path-slant text-center cursor-pointer"
                        >
                            Start Training
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="border-2 border-white text-white py-4 px-10 font-anton text-xl uppercase tracking-wider hover:bg-white hover:text-gym-black transition-all clip-path-slant text-center cursor-pointer"
                        >
                            Book Free Trial
                        </Link>
                    </motion.div>

                    {/* Stats/Trust Preview */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="mt-16 flex items-center gap-8 text-sm font-roboto text-gray-400 uppercase tracking-widest"
                    >
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-gym-red rounded-full"></span>
                            <span>Premium Equipment</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-gym-red rounded-full"></span>
                            <span>Expert Coaches</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gym-red to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
