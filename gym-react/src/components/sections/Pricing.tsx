import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-scroll';

const plans = [
    {
        id: 1,
        name: "Basic Iron",
        price: "49",
        features: [
            "Access to Gym Floor",
            "Locker Room Access",
            "1 Free PT Session",
            "Open 6:00 AM - 10:00 PM"
        ],
        recommended: false
    },
    {
        id: 2,
        name: "Forged Elite",
        price: "89",
        features: [
            "24/7 Gym Access",
            "All Classes Included",
            "Monthly PT Session",
            "Sauna & Recovery Zone",
            "Nutrition Guidance"
        ],
        recommended: true
    },
    {
        id: 3,
        name: "Pro Athlete",
        price: "149",
        features: [
            "Weekly PT Sessions",
            "Custom Meal Plans",
            "Performance Tracking",
            "Priority Equipment Access",
            "Guest Passes (2/mo)"
        ],
        recommended: false
    }
];

const Pricing = () => {
    return (
        <section id="membership" className="py-20 bg-gym-dark relative">
            <div className="container mx-auto px-4">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-gym-red font-roboto uppercase tracking-widest font-bold">Membership</span>
                    <h2 className="text-4xl md:text-5xl font-anton text-white mt-2 uppercase">
                        Invest In <span className="text-stroke">Yourself</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className={`p-8 rounded relative border ${plan.recommended
                                    ? 'bg-gym-gray border-gym-red transform md:-translate-y-4 shadow-[0_0_30px_rgba(255,51,51,0.2)]'
                                    : 'bg-gym-black border-gray-800'
                                }`}
                        >
                            {plan.recommended && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gym-red text-white py-1 px-4 font-anton text-sm uppercase tracking-wider clip-path-slant">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-anton text-white uppercase tracking-wide mb-2">
                                {plan.name}
                            </h3>
                            <div className="flex items-end mb-6">
                                <span className="text-4xl md:text-5xl font-anton text-gym-red">${plan.price}</span>
                                <span className="text-gray-400 font-roboto mb-2 ml-1">/month</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-gray-300 font-roboto text-sm">
                                        <span className="text-gym-red mt-1 mr-3"><FaCheck /></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className={`block w-full py-4 text-center font-anton uppercase tracking-wider transition-colors cursor-pointer clip-path-slant ${plan.recommended
                                        ? 'bg-gym-red text-white hover:bg-red-600'
                                        : 'bg-white text-gym-black hover:bg-gray-200'
                                    }`}
                            >
                                Choose Plan
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
