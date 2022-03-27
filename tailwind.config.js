module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    borderRadius: {
      DEFAULT: "5px",
    },
    colors: {
      amber: "#862910",
      ash: "##DADADA",
      black: "#000000",
      blue: "#0577FF",
      blush: "#FFCEC2",
      cream: "#FFB257",
      gold: "#FFD31F",
      lime: "#00EC25",
      mint: "#5AFFE2",
      ocean: "#091F83",
      peach: "#C17C87",
      sand: "#FFEFB2",
      sky: "#6BB6FB",
      slate: "##F0F8F",
      white: "#FFFFFF",
    },
    fontSize: {
      b4: [rem("6.8px"), { lineHeight: "normal" }],
      b3: [rem("9px"), { lineHeight: "normal" }],
      b2: [rem("12px"), { lineHeight: rem("14.4px") }],
      b1: [rem("16px"), { lineHeight: rem("19.2px") }],
      sh3: [rem("21.3px"), { lineHeight: rem("25.6px") }],
      sh2: [rem("28.4px"), { lineHeight: rem("34.1px") }],
      sh1: [rem("35px"), { lineHeight: rem("42px") }],
      h4: [rem("37.9px"), { lineHeight: rem("45.5px") }],
      h3: [rem("45px"), { lineHeight: rem("54px") }],
      h2: [rem("50.5px"), { lineHeight: rem("60.6px") }],
      h1: [rem("67.3px"), { lineHeight: rem("80.8px") }],
    },
    extend: {},
  },
  plugins: [],
};

function rem(px, base = 16) {
  return `${px.replace("px", "") / base}rem`;
}
