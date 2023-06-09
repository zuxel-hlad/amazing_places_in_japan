/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{html,js, svg, png}'],
    theme: {
        fontFamily: {
            lato: ['Lato, sans-serif'],
        },
        extend: {
            gridTemplateRows: {
                layout: 'auto 1fr auto',
            },

            backgroundImage: {
                hero: "url('/src/assets/img/hero_bg.png')",
            },

            fontSize: {
                md: '1.13rem',
            },

            colors: {
                'main-blue': '#1B7DFF',
            },

            container: {
                '2xl': {
                    'max-width': '1440px',
                },
            },
        },
    },
    plugins: [],
};
