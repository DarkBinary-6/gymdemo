import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const titleVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smooth effect
                staggerChildren: 0.1
            }
        }
    };

    const wordVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background with Overlay and Parallax/Zoom */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
                <motion.div
                    style={{ y, scale: 1.1 }}
                    animate={{ scale: 1.05 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                    className="w-full h-full"
                >
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/hero-bg.png')" }}
                    />
                </motion.div>
            </div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="container mx-auto px-4 relative z-20 pt-20"
            >
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-gym-red font-roboto uppercase tracking-[0.2em] font-medium text-lg mb-4 block">
                            Welcome to IronForge
                        </span>
                    </motion.div>

                    <div className="overflow-hidden mb-6">
                        <motion.h1
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-6xl md:text-8xl font-roboto font-bold text-white uppercase leading-none overflow-hidden"
                        >
                            <div className="overflow-hidden">
                                <motion.span variants={wordVariants} className="inline-block">Forging</motion.span>{" "}
                                <motion.span variants={wordVariants} className="inline-block text-stroke">Elite</motion.span>
                            </div>
                            <div className="overflow-hidden">
                                <motion.div variants={wordVariants} className="text-gym-red inline-block">Physiques</motion.div>
                            </div>
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
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#cc0000" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gym-red text-white py-4 px-10 font-roboto font-medium text-xl uppercase tracking-wider clip-path-slant text-center cursor-pointer w-full sm:w-auto"
                            >
                                Start Training
                            </motion.button>
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#0a0a0a" }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-white text-white py-4 px-10 font-roboto font-medium text-xl uppercase tracking-wider clip-path-slant text-center cursor-pointer w-full sm:w-auto"
                            >
                                Book Free Trial
                            </motion.button>
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
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center gap-2 z-20"
            >
                <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gym-red to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
