function generateWave({
    width,
    height,
    fill,
    className = "",
    opacity = 1,
    duration = 8,
    direction = 1,
    offset = 0
}) {
    const y = height * 0.72 + offset;

    const values = direction === 1
        ? "-50 0;50 0;-50 0"
        : "50 0;-50 0;50 0";

    const extra = 250;

    const x1 = -extra;
    const x2 = width + extra;

    const q1 = width * 0.15;
    const q2 = width * 0.40;
    const q3 = width * 0.65;
    const q4 = width * 0.90;

    return `
<path
    class="${className}"
    d="
        M ${x1} ${y}

        C ${q1 - extra} ${y - 80},
          ${q2 - extra} ${y + 80},
          ${q2} ${y}

        C ${q3 - extra} ${y - 80},
          ${q4 - extra} ${y + 80},
          ${x2} ${y}

        V ${height + 100}
        H ${x1}
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