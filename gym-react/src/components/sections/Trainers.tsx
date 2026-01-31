import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const trainers = [
    {
        id: 1,
        name: 'Alex "The Rock" Stern',
        role: 'Head Strength Coach',
        image: '/trainer-1.jpg'
    },
    {
        id: 2,
        name: 'Sarah Connor',
        role: 'CrossFit Specialist',
        image: '/trainer-2.jpg'
    },
    {
        id: 3,
        name: 'Mike Tyson',
        role: 'Boxing Instructor',
        image: '/trainer-3.jpg'
    },
    {
        id: 4,
        name: 'Jessica Jones',
        role: 'Mobility Expert',
        image: '/trainer-4.jpg'
    }
];

const Trainers = () => {
    return (
        <section id="trainers" className="py-20 bg-gym-dark relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gym-red/5 skew-x-12 transform translate-x-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-gym-red font-roboto uppercase tracking-widest font-bold">The Team</span>
                    <h2 className="text-4xl md:text-5xl font-anton text-white mt-2 uppercase">
                        Expert <span className="text-stroke">Coaches</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trainers.map((trainer, index) => (
                        <motion.div
                            key={trainer.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group overflow-hidden rounded-sm"
                        >
                            <div className="aspect-[3/4] overflow-hidden bg-gym-black">
                                <img
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-anton text-white uppercase tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {trainer.name}
                                </h3>
                                <p className="text-gym-red font-roboto text-sm uppercase tracking-wider mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {trainer.role}
                                </p>
                                <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors"><FaInstagram /></a>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors"><FaTwitter /></a>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors"><FaFacebookF /></a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trainers;
