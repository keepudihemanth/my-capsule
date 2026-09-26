const fadeIn = require("./fadeIn");
const waveAnimation = require("./wave");
const textEntrance = require("./textEntrance");

const animations = {
    fadeIn,
    wave: waveAnimation,
    textEntrance
};

function getAnimation(type) {
    return animations[type] || (() => "");
}

module.exports = getAnimation;