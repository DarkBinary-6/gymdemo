import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const stats = [
    { id: 1, label: 'Active Members', value: 1500, suffix: '+' },
    { id: 2, label: 'Expert Trainers', value: 25, suffix: '+' },
    { id: 3, label: 'Programs', value: 40, suffix: '+' },
    { id: 4, label: 'Awards Won', value: 15, suffix: '+' },
];

const Counter = ({ from, to }: { from: number; to: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        const node = nodeRef.current;
        const controls = {
            value: from,
            stop: false
        };

        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            if (controls.stop) return;

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (easeOutExpo)
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            const current = Math.floor(from + (to - from) * ease);

            if (node) {
                node.textContent = current.toString();
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);

        return () => { controls.stop = true; };
    }, [isInView, from, to]);

    return <span ref={nodeRef} className="text-5xl md:text-7xl font-roboto text-white">{from}</span>;
};

const Stats = () => {
    return (
        <section className="py-20 bg-gym-black relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: stat.id * 0.1 }}
                            className="text-center"
                        >
                            <div className="flex items-center justify-center gap-1 mb-2">
                                <Counter from={0} to={stat.value} />
                                <span className="text-3xl md:text-5xl font-roboto text-gym-red">{stat.suffix}</span>
                            </div>
                            <p className="text-gray-400 font-roboto uppercase tracking-widest text-sm md:text-base">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
