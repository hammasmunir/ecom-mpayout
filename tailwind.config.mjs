/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e6efff',
                    100: '#cde0ff',
                    200: '#9bc2ff',
                    300: '#69a3ff',
                    400: '#3785ff',
                    500: '#0357F0', // Your primary color
                    600: '#0246c0',
                    700: '#023490',
                    800: '#012360',
                    900: '#011230',
                },
                secondary: {
                    50: '#fdf4ff',
                    100: '#fae8ff',
                    200: '#f5d0fe',
                    300: '#f0abfc',
                    400: '#e879f9',
                    500: '#d946ef', // Default secondary
                    600: '#c026d3',
                    700: '#a21caf',
                    800: '#86198f',
                    900: '#701a75',
                },
            },
        },
    },
    plugins: [],
}

export default config;