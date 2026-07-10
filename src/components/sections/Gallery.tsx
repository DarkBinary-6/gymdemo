import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaTimes } from 'react-icons/fa';

const categories = ['All', 'Strength', 'Cardio', 'CrossFit', 'Recovery'];

const galleryItems = [
  {
    id: 1,
    category: 'Strength',
    title: 'Heavy Dumbbell Zone',
    description: 'Dumbbells ranging from 2kg up to 80kg, custom-forged steel racks, and multiple adjustable incline benches.',
    specifications: ['Urethane dumbbells', 'Steel knurled grips', 'Commercial benches'],
    image: 'https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4be?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    category: 'Strength',
    title: 'Powerlifting Platforms',
    description: 'Competition-grade Eleiko barbell setups, calibrated cast iron plates, and heavy-duty steel squat cages.',
    specifications: ['Eleiko IPF bars', 'Calibrated plates', 'Shock-absorbing platforms'],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    category: 'Cardio',
    title: 'Precision Cardio Deck',
    description: 'Commercial treadmills, curved self-powered runners, air bikes, and concept2 rowers facing the main floor.',
    specifications: ['Slat-belt treadmills', 'Air resistance bikes', 'Concept2 PM5 monitors'],
    image: 'https://images.unsplash.com/photo-1538797563031-92040280c15f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    category: 'CrossFit',
    title: 'Functional CrossFit Rig',
    description: 'Massive multi-station modular cage with monkey bars, gymnastics rings, climbing ropes, and target walls.',
    specifications: ['Modular rig', 'Gymnastic rings', 'Rope climbs'],
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    category: 'Recovery',
    title: 'Infrared Sauna & Recovery',
    description: 'Contrast therapy zone featuring a high-temperature cedar dry sauna and premium cold plunge tubs.',
    specifications: ['Full-spectrum infrared', '4°C Cold plunge', 'Contrast therapy'],
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    category: 'CrossFit',
    title: 'Bumper Plates & Kettlebells',
    description: 'High-density rubber bumper plates for Olympic lifts, and competition kettlebells ranging from 8kg to 48kg.',
    specifications: ['Color-coded bumpers', 'Steel kettlebells', 'Chalk stations'],
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop',
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gym-black relative">
      <div className="container mx-auto px-4">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-gym-red font-roboto uppercase tracking-widest font-medium">Our Space</span>
          <h2 className="text-4xl md:text-5xl font-roboto text-white mt-2 uppercase">
            Facility <span className="text-stroke">Gallery</span>
          </h2>
        </motion.div>

        {/* Categories Tab Bar */}
        <div className="flex justify-start md:justify-center overflow-x-auto pb-6 mb-10 scrollbar-none gap-3 px-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-6 py-2 font-roboto uppercase text-sm tracking-wider transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-gym-red border-gym-red text-white'
                  : 'bg-gym-gray border-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedItem(item)}
                className="relative group aspect-[4/3] bg-gym-gray rounded-sm overflow-hidden border border-gray-900 cursor-pointer hover:border-gym-red/50 transition-colors"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gym-red text-xs font-roboto uppercase tracking-widest font-semibold">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-roboto text-white uppercase tracking-wide mt-1">
                        {item.title}
                      </h3>
                    </div>
                    <div className="bg-gym-red text-white p-3 rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <FaEye size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Modal Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative bg-gym-dark w-full max-w-4xl rounded-lg overflow-hidden border border-gray-800 shadow-2xl flex flex-col md:flex-row z-10 max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-y-visible"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 bg-black/60 text-white p-2 rounded-full hover:bg-gym-red transition-colors duration-300"
              >
                <FaTimes size={18} />
              </button>

              {/* Left Side - Image */}
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:h-auto bg-black relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Side - Info */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <span className="text-gym-red text-sm font-roboto uppercase tracking-widest font-semibold mb-2">
                  {selectedItem.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-roboto text-white uppercase tracking-wider mb-4">
                  {selectedItem.title}
                </h3>
                <p className="text-gray-400 font-roboto text-base leading-relaxed mb-6">
                  {selectedItem.description}
                </p>

                {/* Specs */}
                <div>
                  <h4 className="text-white font-roboto text-sm uppercase tracking-wider mb-3 font-semibold">
                    Features / Specs
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300 font-roboto text-sm">
                    {selectedItem.specifications.map((spec, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gym-red rounded-full flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
