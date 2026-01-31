import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: "James Rhods",
        role: "Member since 2023",
        content: "The atmosphere here is unlike any other gym. It pushes you to be your absolute best. I've added 20lbs of muscle in 6 months.",
        rating: 5
    },
    {
        id: 2,
        name: "Sarah Miller",
        role: "Member since 2024",
        content: "No distractions, just serious training. The coaches actually care about your form and progress. Best decision I made for my fitness.",
        rating: 5
    },
    {
        id: 3,
        name: "David Chen",
        role: "Competitive Lifter",
        content: "Found my home here. The equipment is top-tier for powerlifting and the community supports your heavy lifts. Highly recommended.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-gym-black">
            <div className="container mx-auto px-4">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-gym-red font-roboto uppercase tracking-widest font-bold">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-anton text-white mt-2 uppercase">
                        Transformations <span className="text-stroke">& Stories</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-gym-gray p-8 rounded border-t-4 border-gym-red relative"
                        >
                            <div className="absolute top-6 right-6 text-gym-red/20 text-4xl">
                                <FaQuoteLeft />
                            </div>

                            <div className="flex gap-1 text-gym-gold mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>

                            <p className="text-gray-300 font-roboto mb-8 italic">
                                "{item.content}"
                            </p>

                            <div>
                                <h4 className="text-white font-anton uppercase tracking-wide text-lg">{item.name}</h4>
                                <p className="text-gym-red text-sm font-roboto uppercase">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
