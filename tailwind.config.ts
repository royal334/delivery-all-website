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
          'color-dark-black':'#111111',
          'color-light-grey': '#D9D9D9',
          'color-light-grey-2': '#F6F6F6',
          'color-border-gray':'#DEDEDE',
        
      },
    },
  },
  plugins: [],
};
export default config;
