const defaults = require("./defaults");

const shapes = [
    "wave",
    "rectangle",
    "circle",
    "rounded"
];

const animations = [
    "none",
    "fadeIn",
    "wave"
];

function validNumber(value, min, max) {
    return Number.isFinite(value) && value >= min && value <= max;
}

function validateConfig(config) {

    const result = {
        ...defaults,
        ...config
    };

    if (
        !validNumber(result.width, 100, 2000)
    ) {
        result.width = defaults.width;
    }

    if (
        !validNumber(result.height, 50, 1000)
    ) {
        result.height = defaults.height;
    }

    if (
        !validNumber(result.fontSize, 10, 300)
    ) {
        result.fontSize = defaults.fontSize;
    }

    if (
        !validNumber(result.particleCount, 0, 100)
    ) {
        result.particleCount = defaults.particleCount;
    }

    if (
        !validNumber(result.waveSpeed1, 2, 30)
    ) {
        result.waveSpeed1 = defaults.waveSpeed1;
    }

    if (
        !validNumber(result.waveSpeed2, 2, 30)
    ) {
        result.waveSpeed2 = defaults.waveSpeed2;
    }

    if (
        !validNumber(result.waveOffset, -100, 100)
    ) {
        result.waveOffset = defaults.waveOffset;
    }

    if (!shapes.includes(result.type)) {
        result.type = defaults.type;
    }

    if (!animations.includes(result.animation)) {
        result.animation = defaults.animation;
    }

    return result;
}

module.exports = validateConfig;