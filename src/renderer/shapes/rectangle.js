function generateRectangle({ width, height, fill }) {
    return `
<rect
    width="${width}"
    height="${height}"
    fill="${fill}"
/>
`;
}

module.exports = generateRectangle;