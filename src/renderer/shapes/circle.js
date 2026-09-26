function generateCircle({ width, height, fill }) {
    const radius = Math.min(width, height) / 2;

    return `
<circle
    class="animated-element"
    cx="${width / 2}"
    cy="${height / 2}"
    r="${radius}"
    fill="${fill}"
/>
`;
}

module.exports = generateCircle;