/** @type {import('tailwindcss').Config} */
export default {
    plugins: [],
    theme: {
        extend: {
            colors: {},
        },
    },
    content: ["./index.html", "./src/**/*.{svelte,js,ts}"], //for unused css
    variants: {
        extend: {},
    },
};
