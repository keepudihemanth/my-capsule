function generateRounded({ width, height, fill }) {
    const radius = Math.min(width, height) * 0.2;

    return `
<rect
    width="${width}"
    height="${height}"
    rx="${radius}"
    ry="${radius}"
    fill="${fill}"
/>
`;
}

module.exports = generateRounded;