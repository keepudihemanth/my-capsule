const generateGradient = require("./styles/gradients");
const getShape = require("./shapes");
const getAnimation = require("./animations");
const validateConfig = require("../config/validation");
const generateParticles = require("./effects/particles");
const generateText = require("./text/text");

function generateSvg(config = {}) {

    const {
        text: title,
        subtitle,
        width,
        height,
        type,
        background,
        fontSize,
        fontColor,
        animation
    } = validateConfig(config);

    const isGradient = Array.isArray(background);

    const defs = isGradient
        ? `
<defs>
    ${generateGradient("backgroundGradient", background)}
</defs>
`
        : "";

    const backgroundFill = isGradient
        ? "url(#backgroundGradient)"
        : background;

    const animationGenerator = getAnimation(animation);
    const animationStyles = animationGenerator();

    const particles = generateParticles({
        width,
        height,
        count: 15
    });

    const wave1 = getShape("wave")({
        width,
        height,
        fill: "#ffffff",
        opacity: 0.15,
        duration: 6,
        direction: 1
    });

    const wave2 = getShape("wave")({
        width,
        height,
        fill: "#ffffff",
        opacity: 0.08,
        duration: 10,
        direction: -1
    });

    const textLayer = generateText({
        title,
        subtitle,
        width,
        height,
        titleSize: fontSize,
        subtitleSize: 22,
        color: fontColor
    });

    return `
<svg
    width="${width}"
    height="${height}"
    viewBox="0 0 ${width} ${height}"
    xmlns="http://www.w3.org/2000/svg">

    ${defs}

    ${animationStyles}

    <rect
        width="${width}"
        height="${height}"
        fill="${backgroundFill}"
    />

    ${particles}

    ${wave1}

    ${wave2}

    ${textLayer}

</svg>
`;
}

module.exports = generateSvg;