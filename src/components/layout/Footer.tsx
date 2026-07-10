import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gym-black border-t border-gray-900 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="home" smooth={true} duration={500} className="inline-block cursor-pointer">
                            <span className="text-gym-red text-4xl font-anton tracking-wider">IRONFORGE</span>
                        </Link>
                        <p className="text-gray-400 font-roboto mt-4 max-w-sm">
                            Forging elite physiques and unshakeable discipline. Join the movement and redefine your limits.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="w-10 h-10 bg-gym-gray rounded-full flex items-center justify-center text-white hover:bg-gym-red transition-colors duration-300">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gym-gray rounded-full flex items-center justify-center text-white hover:bg-gym-red transition-colors duration-300">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gym-gray rounded-full flex items-center justify-center text-white hover:bg-gym-red transition-colors duration-300">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gym-gray rounded-full flex items-center justify-center text-white hover:bg-gym-red transition-colors duration-300">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-roboto uppercase tracking-wider mb-6">Quick Links</h4>
                        <ul className="space-y-3 font-roboto text-gray-400">
                            <li>
                                <Link to="programs" smooth={true} duration={500} className="hover:text-gym-red transition-colors cursor-pointer">Programs</Link>
                            </li>
                            <li>
                                <Link to="gallery" smooth={true} duration={500} className="hover:text-gym-red transition-colors cursor-pointer">Gallery</Link>
                            </li>
                            <li>
                                <Link to="trainers" smooth={true} duration={500} className="hover:text-gym-red transition-colors cursor-pointer">Trainers</Link>
                            </li>
                            <li>
                                <Link to="membership" smooth={true} duration={500} className="hover:text-gym-red transition-colors cursor-pointer">Membership</Link>
                            </li>
                            <li>
                                <Link to="testimonials" smooth={true} duration={500} className="hover:text-gym-red transition-colors cursor-pointer">Testimonials</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-roboto uppercase tracking-wider mb-6">Legal</h4>
                        <ul className="space-y-3 font-roboto text-gray-400">
                            <li><a href="#" className="hover:text-gym-red transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gym-red transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-gym-red transition-colors">Liability Waiver</a></li>
                            <li><a href="#" className="hover:text-gym-red transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 font-roboto text-sm uppercase tracking-wider">
                    <p>&copy; {currentYear} IronForge Gym. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Built by <a href="https://enchanted-developers.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gym-red hover:text-white transition-colors">EnchantedDevelopers</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
