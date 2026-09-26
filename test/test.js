const fs = require("fs");
const generateSvg = require("../src/renderer/generateSvg");

const svg = generateSvg({
    text: "HEMANTH",
    subtitle: "Software Engineer | AI & ML",

    width: 1000,
    height: 350,

    background: ["#010203", "#4c5524"],

    fontSize: 65,
    fontColor: "#ffffff",

    particleCount: 35,
waveSpeed1: 12,
waveSpeed2: 18,

    waveOffset: 40
});

fs.writeFileSync("output.svg", svg);

console.log("Animated header generated");