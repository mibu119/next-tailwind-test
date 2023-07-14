/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "1dp": "0px 1px 2px 0px #00000030",
        "2dp": "0px 2px 4px 0px #0000001A",
        "4dp": "0px 4px 8px 0px #00000030",
        "8dp": "0px 8px 16px 0px #00000030",
        "16dp": "0px 16px 32px 0px #00000030",
        "24dp": "0px 24px 32px 0px #00000030",
      },
      fontSize: {
        Body5_12_R: [
          "0.75rem",
          {
            lineHeight: "14.32px",
            letterSpacing: "-2%",
            fontWeight: "400",
          },
        ],
        Body5_12_M: [
          "0.75rem",
          {
            lineHeight: "14.32px",
            letterSpacing: "-2%",
            fontWeight: "500",
          },
        ],
        Body5_12_B: [
          "0.75rem",
          {
            lineHeight: "14.32px",
            letterSpacing: "-2%",
            fontWeight: "700",
          },
        ],
        Body4_14_R: [
          "0.875rem",
          {
            lineHeight: "16.71px",
            letterSpacing: "-2%",
            fontWeight: "400",
          },
        ],
        Body4_14_M: [
          "0.875rem",
          {
            lineHeight: "16.71px",
            letterSpacing: "-2%",
            fontWeight: "500",
          },
        ],
        Body4_14_B: [
          "0.875rem",
          {
            lineHeight: "16.71px",
            letterSpacing: "-2%",
            fontWeight: "700",
          },
        ],
        Body3_16_B: [
          "16px",
          {
            lineHeight: "19.09px",
            letterSpacing: "-2%",
            fontWeight: "700",
          },
        ],
        Body3_16_M: [
          "16px",
          {
            lineHeight: "19.09px",
            letterSpacing: "-2%",
            fontWeight: "500",
          },
        ],
        Body3_16_R: [
          "16px",
          {
            lineHeight: "19.09px",
            letterSpacing: "-2%",
            fontWeight: "400",
          },
        ],
        Body2_18_B: [
          "18px",
          {
            lineHeight: "21.48px",
            letterSpacing: "-2%",
            fontWeight: "700",
          },
        ],
        Body2_18_M: [
          "18px",
          {
            lineHeight: "21.48px",
            letterSpacing: "-2%",
            fontWeight: "500",
          },
        ],
        Body2_18_R: [
          "18px",
          {
            lineHeight: "21.48px",
            letterSpacing: "-2%",
            fontWeight: "400",
          },
        ],
        Body1_20_B: [
          "20px",
          {
            lineHeight: "23.87px",
            letterSpacing: "-2%",
            fontWeight: "700",
          },
        ],
        Body1_20_M: [
          "20px",
          {
            lineHeight: "23.87px",
            letterSpacing: "-2%",
            fontWeight: "500",
          },
        ],
        Body1_20_R: [
          "20px",
          {
            lineHeight: "23.87px",
            letterSpacing: "-2%",
            fontWeight: "400",
          },
        ],
        H1_32_B: [
          "32px",
          {
            lineHeight: "38.19px",
            letterSpacing: "-2%",
            fontWeight: "700",
          },
        ],
        H2_28_B: [
          "28px",
          {
            lineHeight: "33.41px",
            letterSpacing: "-2%",
            fontWeight: "700",
          },
        ],
        H3_24_B: [
          "24px",
          {
            lineHeight: "28.64px",
            letterSpacing: "-2%",
            fontWeight: "700",
          },
        ],
        H4_20_B: [
          "20px",
          {
            lineHeight: "23.87px",
            letterSpacing: "-2%",
            fontWeight: "700",
          },
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
