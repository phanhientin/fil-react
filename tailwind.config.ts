import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./WhoWeAre/**/*.{js,ts,jsx,tsx}",
    "./MissionValues/**/*.{js,ts,jsx,tsx}", 
    "./CodeEthics/**/*.{js,ts,jsx,tsx}", 
    "./Agencies/**/*.{js,ts,jsx,tsx}", 
    "./Developers/**/*.{js,ts,jsx,tsx}", 
    "./GovernanceTeam/**/*.{js,ts,jsx,tsx}", 
    "./MemberDirectory/**/*.{js,ts,jsx,tsx}", 
    "./MemberProfile/**/*.{js,ts,jsx,tsx}", 
    "./News/**/*.{js,ts,jsx,tsx}", 
    "./Article/**/*.{js,ts,jsx,tsx}", 
    "./Documentation/**/*.{js,ts,jsx,tsx}", 
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        display: ['Playfair Display', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: "#0A2540",
          light: "#071F38",
        },
        gold: {
          DEFAULT: "#BBA25A",
        },
        beige: {
          DEFAULT: "#EDEBE7",
          light: "#DFD9CC",
        },
        sage: {
          DEFAULT: "#88938F",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
