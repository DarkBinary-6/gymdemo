import { motion, type Variants } from 'framer-motion';
import { FaDumbbell, FaRunning, FaHeartbeat, FaFistRaised } from 'react-icons/fa';

const programs = [
  {
    id: 1,
    icon: <FaDumbbell />,
    title: 'Strength Training',
    description: 'Build raw power and muscle density with our specialized lifting protocols designed for serious gains.'
  },
  {
    id: 2,
    icon: <FaRunning />,
    title: 'HIIT Cardio',
    description: 'High-intensity intervals to torch fat and boost endurance levels beyond your limits.'
  },
  {
    id: 3,
    icon: <FaFistRaised />,
    title: 'CrossFit',
    description: 'Functional movements performed at high intensity to prepare you for any physical challenge.'
  },
  {
    id: 4,
    icon: <FaHeartbeat />,
    title: 'Health & Balance',
    description: 'Recovery and mobility sessions to keep your body functioning at peak performance levels.'
  }
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15
    }
  }
};

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-gym-black">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gym-red font-roboto uppercase tracking-widest font-medium">Our Programs</span>
          <h2 className="text-4xl md:text-5xl font-roboto text-white mt-2 uppercase">
            Choose Your <span className="text-stroke">Path</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={item}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-gym-gray p-8 rounded border border-gray-800 hover:border-gym-red group transition-colors duration-300"
            >
              <div className="text-4xl text-gym-red mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {program.icon}
              </div>
              <h3 className="text-2xl font-roboto text-white mb-4 uppercase tracking-wide">
                {program.title}
              </h3>
              <p className="text-gray-400 font-roboto leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Programs;
