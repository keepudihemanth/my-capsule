const defaults = require("./defaults");

const shapes = [
    "wave",
    "rectangle",
    "circle",
    "rounded"
];

const animations = [
    "none",
    "fadeIn"
];

function validateConfig(config) {
    const result = {
        ...defaults,
        ...config
    };

    if (!Number.isFinite(result.width) || result.width < 100 || result.width > 2000) {
        result.width = defaults.width;
    }

    if (!Number.isFinite(result.height) || result.height < 50 || result.height > 1000) {
        result.height = defaults.height;
    }

    if (!Number.isFinite(result.fontSize) || result.fontSize < 10 || result.fontSize > 300) {
        result.fontSize = defaults.fontSize;
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