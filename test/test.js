const fs = require("fs");
const generateSvg = require("../src/renderer/generateSvg");

const svg = generateSvg({
    text: "name",
    subtitle: "Software Engineer | AI & ML",
    width: 1000,
    height: 350,
    background: ["#141E30", "#243B55"],
    fontSize: 65,
    fontColor: "#ffffff",
    animation: "wave"
});

fs.writeFileSync("output.svg", svg);

console.log("Animated header generated");