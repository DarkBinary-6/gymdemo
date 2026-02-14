import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        age: '',
        enquiryFor: 'Self',
        goal: 'General Enquiry'
    });



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct WhatsApp Message
        const message = `🏋️ *New Enquiry from IronForge Website*

👤 *Name:* ${formData.name || 'Not provided'}
📱 *Phone:* ${formData.phone || 'Not provided'}
🎂 *Age:* ${formData.age || 'Not provided'}
👥 *Enquiring For:* ${formData.enquiryFor}
🎯 *Goal:* ${formData.goal}

I'd like to know more about joining IronForge Gym!`;

        const whatsappURL = `https://wa.me/919278378772?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    const inputClasses = "w-full bg-gym-black border border-gray-700 text-white px-4 py-3 focus:outline-none transition-all duration-300";

    return (
        <section id="contact" className="py-20 bg-gym-black">
            <div className="container mx-auto px-4">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-gym-red font-roboto uppercase tracking-widest font-medium">Get Started</span>
                    <h2 className="text-4xl md:text-5xl font-roboto text-white mt-2 uppercase">
                        Contact <span className="text-stroke">Us</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/3 space-y-8"
                    >
                        <div className="flex items-start group">
                            <div className="bg-gym-dark p-4 rounded text-gym-red text-xl mr-4 group-hover:bg-gym-red group-hover:text-white transition-colors duration-300">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h4 className="text-white font-roboto uppercase text-xl mb-1">Our Location</h4>
                                <p className="text-gray-400 font-roboto group-hover:text-gray-300 transition-colors">
                                    123 Iron Street, Muscle District<br />
                                    Metro City, MC 10001
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start group">
                            <div className="bg-gym-dark p-4 rounded text-gym-red text-xl mr-4 group-hover:bg-gym-red group-hover:text-white transition-colors duration-300">
                                <FaPhone />
                            </div>
                            <div>
                                <h4 className="text-white font-roboto uppercase text-xl mb-1">Phone</h4>
                                <p className="text-gray-400 font-roboto group-hover:text-gray-300 transition-colors">+91 927 837 8772</p>
                            </div>
                        </div>

                        <div className="flex items-start group">
                            <div className="bg-gym-dark p-4 rounded text-gym-red text-xl mr-4 group-hover:bg-gym-red group-hover:text-white transition-colors duration-300">
                                <FaClock />
                            </div>
                            <div>
                                <h4 className="text-white font-roboto uppercase text-xl mb-1">Hours</h4>
                                <p className="text-gray-400 font-roboto group-hover:text-gray-300 transition-colors">
                                    Mon-Fri: 5am - 11pm<br />
                                    Sat-Sun: 7am - 9pm
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-2/3 bg-gym-gray p-8 md:p-10 rounded border border-gray-800"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-400 font-roboto text-sm uppercase tracking-wider mb-2">Name</label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02, borderColor: "#ff3333" }}
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 font-roboto text-sm uppercase tracking-wider mb-2">Phone</label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02, borderColor: "#ff3333" }}
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder="+91..."
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-400 font-roboto text-sm uppercase tracking-wider mb-2">Age</label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02, borderColor: "#ff3333" }}
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder="25"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 font-roboto text-sm uppercase tracking-wider mb-2">Enquiry For</label>
                                    <motion.select
                                        whileFocus={{ scale: 1.02, borderColor: "#ff3333" }}
                                        name="enquiryFor"
                                        value={formData.enquiryFor}
                                        onChange={handleChange}
                                        className={inputClasses}
                                    >
                                        <option value="Self">Self</option>
                                        <option value="Spouse">Spouse</option>
                                        <option value="Friend">Friend</option>
                                        <option value="Group">Group</option>
                                    </motion.select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-400 font-roboto text-sm uppercase tracking-wider mb-2">Primary Goal</label>
                                <motion.select
                                    whileFocus={{ scale: 1.02, borderColor: "#ff3333" }}
                                    name="goal"
                                    value={formData.goal}
                                    onChange={handleChange}
                                    className={inputClasses}
                                >
                                    <option value="General Enquiry">General Enquiry</option>
                                    <option value="Weight Loss">Weight Loss</option>
                                    <option value="Muscle Building">Muscle Building</option>
                                    <option value="Personal Training">Personal Training</option>
                                    <option value="Competition Prep">Competition Prep</option>
                                </motion.select>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "#cc0000" }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gym-red text-white py-4 font-roboto text-xl uppercase tracking-wider hover:bg-red-600 transition-all clip-path-slant mt-4"
                            >
                                Send Enquiry via WhatsApp
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
