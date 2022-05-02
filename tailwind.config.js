module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        smoothChange: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        smoothChange: "smoothChange 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};

// keyframes: {
//   wave: {
//     "0%": { transform: "rotate(0.0deg)" },
//     "10%": { transform: "rotate(14deg)" },
//     "20%": { transform: "rotate(-8deg)" },
//     "30%": { transform: "rotate(14deg)" },
//     "40%": { transform: "rotate(-4deg)" },
//     "50%": { transform: "rotate(10.0deg)" },
//     "60%": { transform: "rotate(0.0deg)" },
//     "100%": { transform: "rotate(0.0deg)" },
//   },
// },
// animation: {
//   "waving-hand": "wave 2s linear infinite",
// },
