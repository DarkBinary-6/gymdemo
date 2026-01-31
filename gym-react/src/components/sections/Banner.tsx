import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Banner = () => {
    return (
        <section className="relative py-32 flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
                style={{ backgroundImage: "url('/banner-bg.jpg')" }} /* Assuming image exists, or uses hero */
            >
                <div className="absolute inset-0 bg-gym-red/90 mix-blend-multiply" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.h2
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                    className="text-4xl md:text-6xl font-anton text-white uppercase mb-8 leading-tight"
                >
                    Are You Ready To <br />
                    <span className="text-black">Change Your Life?</span>
                </motion.h2>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="inline-block bg-white text-gym-red py-4 px-12 font-anton text-xl uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300 clip-path-slant cursor-pointer"
                    >
                        Join Introduction Session
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;
