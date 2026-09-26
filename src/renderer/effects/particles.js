function pseudoRandom(seed) {
    const value = Math.sin(seed) * 10000;
    return value - Math.floor(value);
}

function generateParticles({
    width,
    height,
    count = 15
}) {
    let particles = "";

    for (let i = 0; i < count; i++) {

        const x = pseudoRandom(i + 1) * width;
        const y = pseudoRandom(i + 20) * height * 0.65;

        const radius =
            1 + pseudoRandom(i + 40) * 3;

        const duration =
            3 + pseudoRandom(i + 60) * 5;

        const delay =
            pseudoRandom(i + 80) * 3;

        particles += `
<circle
    cx="${x}"
    cy="${y}"
    r="${radius}"
    fill="#ffffff"
    opacity="0.5">

    <animate
        attributeName="opacity"
        values="0.1;0.7;0.1"
        dur="${duration}s"
        begin="${delay}s"
        repeatCount="indefinite"/>

</circle>
`;
    }

    return particles;
}

module.exports = generateParticles;