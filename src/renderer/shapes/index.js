const generateWave = require("./wave");
const generateRectangle = require("./rectangle");
const generateCircle = require("./circle");
const generateRounded = require("./rounded");

const shapes = {
    wave: generateWave,
    rectangle: generateRectangle,
    circle: generateCircle,
    rounded: generateRounded
};

function getShape(type) {
    return shapes[type] || shapes.wave;
}

module.exports = getShape;