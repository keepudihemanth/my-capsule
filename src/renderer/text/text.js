const escapeXml = require("../../utils/escapeXml");

function generateText({
    title = "HEMANTH",
    subtitle = "",
    width,
    height,
    titleSize = 60,
    subtitleSize = 22,
    color = "#ffffff"
}) {
    const safeTitle = escapeXml(title);
    const safeSubtitle = escapeXml(subtitle);

    return `
<g>

    <g opacity="0">

        <animate
            attributeName="opacity"
            from="0"
            to="1"
            dur="1.2s"
            begin="0s"
            fill="freeze"
        />

        <text
            x="${width / 2}"
            y="${height * 0.40}"
            text-anchor="middle"
            dominant-baseline="middle"
            font-size="${titleSize}"
            font-weight="700"
            fill="${color}">
            ${safeTitle}
        </text>

    </g>

    ${
        subtitle
            ? `
        <g opacity="0">

            <animate
                attributeName="opacity"
                from="0"
                to="1"
                dur="1.2s"
                begin="0.4s"
                fill="freeze"
            />

            <text
                x="${width / 2}"
                y="${height * 0.53}"
                text-anchor="middle"
                dominant-baseline="middle"
                font-size="${subtitleSize}"
                fill="${color}"
                opacity="0.85">
                ${safeSubtitle}
            </text>

        </g>
        `
            : ""
    }

</g>
`;
}

module.exports = generateText;