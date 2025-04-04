import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'bluish-green' :'#0E5F76',
          'bright-green': '#B5C020',
          'dark-black':'#111111',
          'light-grey': '#D9D9D9',
          'light-grey-2': '#F6F6F6',
          'border-gray':'#DEDEDE',
          'light-grey-3':'#8A8A8A',
          'light-grey-4':'#B9B9B9',
          'black-1':'#1E1E1E',
        
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      screens:{
        xs:'350px'
      },
    },
  },
  plugins: [],
};
export default config;