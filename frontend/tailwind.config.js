/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    // Specify the paths to all of the template files in your project
  content: [
    "./index.html", // Include the main HTML file
    "./src/**/*.{ts,tsx,js,jsx}" // Include all JavaScript and TypeScript files in the src directory
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  // Add any plugins here
  plugins: [require('daisyui')],
daisyui: {
  themes: ["light", "dark"], // You can customize more themes if needed
},

  plugins: [require("tailwindcss-animate")],
}