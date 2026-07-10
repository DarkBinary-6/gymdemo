import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section ref={containerRef} className="py-20 bg-gym-dark overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Visuals - Grid Layout */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4 relative">
                            <motion.div
                                style={{ y: y1 }}
                                className="space-y-4 mt-8"
                            >
                                <img
                                    src="/about-1.png"
                                    alt="Gym Interior"
                                    className="w-full h-64 object-cover rounded-sm md:grayscale md:hover:grayscale-0 transition-all duration-500 md:hover:scale-[1.02]"
                                />
                                <img
                                    src="/about-2.png"
                                    alt="Training"
                                    className="w-full h-48 object-cover rounded-sm md:grayscale md:hover:grayscale-0 transition-all duration-500 md:hover:scale-[1.02]"
                                />
                            </motion.div>

                            <motion.div
                                style={{ y: y2 }}
                                className="space-y-4"
                            >
                                <img
                                    src="/about-3.png"
                                    alt="Weights"
                                    className="w-full h-48 object-cover rounded-sm md:grayscale md:hover:grayscale-0 transition-all duration-500 md:hover:scale-[1.02]"
                                />
                                <img
                                    src="/about-4.png"
                                    alt="Cardio"
                                    className="w-full h-64 object-cover rounded-sm md:grayscale md:hover:grayscale-0 transition-all duration-500 md:hover:scale-[1.02]"
                                />
                            </motion.div>

                            {/* Decorative Element */}
                            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gym-red/5 rounded-full blur-3xl"></div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 48 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="h-1 bg-gym-red"
                                ></motion.div>
                                <span className="text-gym-red font-roboto uppercase tracking-widest font-medium">About Us</span>
                            </div>

                            <h2 className="text-5xl font-roboto text-white mb-6 uppercase leading-tight">
                                More Than Just <br />
                                <span className="text-gym-red">A Gym</span>
                            </h2>

                            <div className="space-y-6 text-gray-400 font-roboto text-lg leading-relaxed">
                                <p>
                                    IronForge isn't just a place to workout. It's a sanctuary for those who refuse to be average.
                                    Founded on principles of discipline and intensity, we provide a raw, no-nonsense environment
                                    engineered for results.
                                </p>
                                <p>
                                    We stripped away the comfortable amenities found in commercial gyms and replaced them with
                                    what actually builds muscle: heavy iron, calibrated plates, and an atmosphere of relentless progress.
                                </p>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#ff3333", color: "#ffffff" }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-10 px-8 py-3 border border-gym-red text-gym-red font-roboto uppercase tracking-wider transition-all duration-300"
                            >
                                Read Our Story
                            </motion.button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
