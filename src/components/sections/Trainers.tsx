import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const trainers = [
    {
        id: 1,
        name: 'Alex "The Rock" Stern',
        role: 'Head Strength Coach',
        image: '/trainer-1.png'
    },
    {
        id: 2,
        name: 'Sarah Connor',
        role: 'CrossFit Specialist',
        image: '/trainer-2.png'
    },
    {
        id: 3,
        name: 'Mike Tyson',
        role: 'Boxing Instructor',
        image: '/trainer-3.png'
    },
    {
        id: 4,
        name: 'Jessica Jones',
        role: 'Mobility Expert',
        image: '/trainer-4.png'
    }
];

const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < breakpoint);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, [breakpoint]);

    return isMobile;
};

const Trainers = () => {
    const isMobile = useIsMobile();

    return (
        <section id="trainers" className="py-20 bg-gym-dark relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gym-red/5 skew-x-12 transform translate-x-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-gym-red font-roboto uppercase tracking-widest font-medium">The Team</span>
                    <h2 className="text-4xl md:text-5xl font-roboto text-white mt-2 uppercase">
                        Expert <span className="text-stroke">Coaches</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trainers.map((trainer, index) => (
                        <motion.div
                            key={trainer.id}
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="relative group overflow-hidden rounded-sm"
                        >
                            <div className="aspect-[3/4] overflow-hidden bg-gym-black">
                                <img
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className={`w-full h-full object-cover transition-transform duration-700 ease-out ${!isMobile ? 'group-hover:scale-110' : ''}`}
                                />
                            </div>

                            {isMobile ? (
                                /* Mobile: Always-visible overlay with name, role & socials */
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-5">
                                    <h3 className="text-lg font-roboto text-white uppercase tracking-wide">
                                        {trainer.name}
                                    </h3>
                                    <p className="text-gym-red font-roboto text-sm uppercase tracking-wider mb-3">
                                        {trainer.role}
                                    </p>
                                    <div className="flex gap-4">
                                        <a href="#" className="text-white/80 text-lg"><FaInstagram /></a>
                                        <a href="#" className="text-white/80 text-lg"><FaTwitter /></a>
                                        <a href="#" className="text-white/80 text-lg"><FaFacebookF /></a>
                                    </div>
                                </div>
                            ) : (
                                /* Desktop: Hover-reveal overlay (unchanged) */
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-xl font-roboto text-white uppercase tracking-wide translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                                        {trainer.name}
                                    </h3>
                                    <p className="text-gym-red font-roboto text-sm uppercase tracking-wider mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-75 ease-out">
                                        {trainer.role}
                                    </p>
                                    <div className="flex gap-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-100 ease-out">
                                        <a href="#" className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform"><FaInstagram /></a>
                                        <a href="#" className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform"><FaTwitter /></a>
                                        <a href="#" className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform"><FaFacebookF /></a>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trainers;
