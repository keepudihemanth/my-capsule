function generateGradient(id, colors, angle = 90) {
    return `
<linearGradient
    id="${id}"
    x1="0%"
    y1="0%"
    x2="100%"
    y2="0%"
    gradientTransform="rotate(${angle} .5 .5)">

    <stop offset="0%" stop-color="${colors[0]}"/>
    <stop offset="100%" stop-color="${colors[1]}"/>

</linearGradient>
`;
}

module.exports = generateGradient;