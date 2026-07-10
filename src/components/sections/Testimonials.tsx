import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useRef, useCallback } from 'react';

const reviews1 = [
    { id: 1, name: "Rahul Sharma", role: "Software Engineer", content: "Best gym in Indiranagar! The trainers are super knowledgeable.", rating: 5 },
    { id: 2, name: "Priya Patel", role: "Entrepreneur", content: "Lost 10kgs in 3 months. The diet plans are very practical for Indian households.", rating: 5 },
    { id: 3, name: "Amit Verma", role: "Bodybuilder", content: "IronForge has the best deadlift platforms. Pure intense vibe.", rating: 5 },
    { id: 4, name: "Sneha Reddy", role: "Yoga Instructor", content: "Love the community here. It's safe, clean, and very motivating.", rating: 5 },
    { id: 5, name: "Vikram Singh", role: "Athlete", content: "Training here for my cricket tournaments. Agility drills are top notch.", rating: 5 },
    { id: 6, name: "Anjali Gupta", role: "Student", content: "Affordable student packages and very helpful staff.", rating: 4 },
    { id: 7, name: "Rohan Das", role: "Banker", content: "Perfect for late night workouts. 24/7 access is a lifesaver.", rating: 5 },
    { id: 8, name: "Karthik R", role: "Techie", content: "No nonsense gym. Just weights and gains. Love it.", rating: 5 },
    { id: 9, name: "Meera Nair", role: "Doctor", content: "Hygiene is my priority and IronForge nails it every time.", rating: 5 },
    { id: 10, name: "Arjun Kapoor", role: "Actor", content: "The privacy and premium equipment are exactly what I needed.", rating: 5 },
];

const reviews2 = [
    { id: 11, name: "Deepak Chopra", role: "Consultant", content: "Finally a gym that understands serious lifting. No waiting for racks.", rating: 5 },
    { id: 12, name: "Neha Dhupia", role: "Marketing Head", content: "The group classes are insane! High energy and great music.", rating: 5 },
    { id: 13, name: "Suresh Raina", role: "Cricketer", content: "Recommendation for all athletes. The recovery zone is amazing.", rating: 5 },
    { id: 14, name: "Kavita Krishnamurthy", role: "Singer", content: "Helps me maintain my stamina. Breathing exercises helper is great.", rating: 4 },
    { id: 15, name: "Manish Malhotra", role: "Designer", content: "Aesthetically pleasing and very functional usage of space.", rating: 5 },
    { id: 16, name: "Ranveer Singh", role: "Actor", content: "Energy is infectious! BOOM! Best workout ever.", rating: 5 },
    { id: 17, name: "Shilpa Shetty", role: "Fitness Icon", content: "Yoga studio is peaceful and spacious. love the vibe.", rating: 5 },
    { id: 18, name: "Varun Dhawan", role: "Actor", content: "Hardcore training for hardcore results. This is the place.", rating: 5 },
    { id: 19, name: "Tiger Shroff", role: "Action Star", content: "Great place for gymnastics and parkour training setups.", rating: 5 },
    { id: 20, name: "Hrithik Roshan", role: "Actor", content: "Details matter. IronForge gets every detail right.", rating: 5 },
];

const TestimonialCard = ({ review }: { review: typeof reviews1[0] }) => (
    <div className="bg-gym-gray p-6 rounded-lg border border-gray-800 w-[260px] sm:w-[300px] md:w-[400px] flex-shrink-0 mx-3 md:mx-4 relative group hover:border-gym-red transition-colors duration-300">
        <div className="absolute top-4 right-4 text-gym-red/20 text-2xl group-hover:text-gym-red/40 transition-colors">
            <FaQuoteLeft />
        </div>
        <div className="flex gap-1 text-gym-gold mb-3 text-sm">
            {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
        </div>
        <p className="text-gray-300 font-roboto mb-4 italic text-sm md:text-base line-clamp-3">"{review.content}"</p>
        <div>
            <h4 className="text-white font-roboto uppercase tracking-wide text-base">{review.name}</h4>
            <p className="text-gym-red text-xs font-roboto uppercase">{review.role}</p>
        </div>
    </div>
);

const Testimonials = () => {
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);

    const handleTouchStart = useCallback((ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            ref.current.style.animationPlayState = 'paused';
        }
    }, []);

    const handleTouchEnd = useCallback((ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            ref.current.style.animationPlayState = 'running';
        }
    }, []);

    return (
        <section id="testimonials" className="py-20 bg-gym-black overflow-hidden">
            <div className="container mx-auto px-4 mb-10 text-center">
                <span className="text-gym-red font-roboto uppercase tracking-widest font-medium">Community</span>
                <h2 className="text-4xl md:text-5xl font-roboto text-white mt-2 uppercase">
                    What India <span className="text-stroke">Says</span>
                </h2>
            </div>

            {/* Row 1: Left to Right */}
            <div className="relative w-full mb-8">
                <div
                    ref={row1Ref}
                    className="flex animate-scroll-left hover:pause"
                    onTouchStart={() => handleTouchStart(row1Ref)}
                    onTouchEnd={() => handleTouchEnd(row1Ref)}
                >
                    {[...reviews1, ...reviews1].map((review, idx) => (
                        <TestimonialCard key={`${review.id}-${idx}`} review={review} />
                    ))}
                </div>
            </div>

            {/* Row 2: Right to Left */}
            <div className="relative w-full">
                <div
                    ref={row2Ref}
                    className="flex animate-scroll-right hover:pause"
                    onTouchStart={() => handleTouchStart(row2Ref)}
                    onTouchEnd={() => handleTouchEnd(row2Ref)}
                >
                    {[...reviews2, ...reviews2].map((review, idx) => (
                        <TestimonialCard key={`${review.id}-${idx}`} review={review} />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Testimonials;

