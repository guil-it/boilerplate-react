module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'gradient-radial': 'radial-gradient(circle, rgba(2,4,108,1) 12%, rgba(1,1,46,1) 67%, rgba(2,0,36,1) 100%)',
      },
    },
  },
  plugins: [],
}