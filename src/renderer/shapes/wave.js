function generateWave({
    width,
    height,
    fill,
    className = "",
    opacity = 1,
    duration = 8,
    direction = 1
}) {
    const y = height * 0.72;

    const values = direction === 1
        ? "-40 0;40 0;-40 0"
        : "40 0;-40 0;40 0";

    return `
<path
    class="${className}"
    d="
        M 0 ${y}
        Q ${width * 0.25} ${y - 70}
          ${width * 0.5} ${y}
        T ${width} ${y}
        V ${height}
        H 0
        Z
    "
    fill="${fill}"
    opacity="${opacity}">

    <animateTransform
        attributeName="transform"
        type="translate"
        values="${values}"
        dur="${duration}s"
        repeatCount="indefinite"/>

</path>
`;
}

module.exports = generateWave;