function generateParticles({
    width,
    height,
    count = 15
}) {
    let particles = "";

    for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height * 0.65;
        const radius = 1 + Math.random() * 3;
        const duration = 3 + Math.random() * 5;
        const delay = Math.random() * 3;

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