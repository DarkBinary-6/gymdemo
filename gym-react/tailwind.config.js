/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'gym-black': '#050505',
                'gym-dark': '#0a0a0a',
                'gym-gray': '#1a1a1a',
                'gym-red': '#ff3333',
                'gym-gold': '#ffd700',
            },
            fontFamily: {
                'anton': ['Anton', 'sans-serif'],
                'roboto': ['Roboto Condensed', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "linear-gradient(to right bottom, rgba(5, 5, 5, 0.9), rgba(5, 5, 5, 0.7)), url('/hero-bg.jpg')",
            }
        },
    },
    plugins: [],
}
