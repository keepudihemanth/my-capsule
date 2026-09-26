const generateSvg = require("../src/renderer/generateSvg");

module.exports = (req, res) => {
    try {
        const config = {
            ...req.query,

            width: req.query.width
                ? Number(req.query.width)
                : undefined,

            height: req.query.height
                ? Number(req.query.height)
                : undefined,

            fontSize: req.query.fontSize
                ? Number(req.query.fontSize)
                : undefined,

            particleCount: req.query.particleCount
                ? Number(req.query.particleCount)
                : undefined,

            waveSpeed1: req.query.waveSpeed1
                ? Number(req.query.waveSpeed1)
                : undefined,

            waveSpeed2: req.query.waveSpeed2
                ? Number(req.query.waveSpeed2)
                : undefined,

            waveOffset: req.query.waveOffset
                ? Number(req.query.waveOffset)
                : undefined,

            background: req.query.background
                ? req.query.background.split(",")
                : undefined
        };

        const svg = generateSvg(config);

        res.setHeader("Content-Type", "image/svg+xml");
        res.setHeader(
            "Cache-Control",
            "public, max-age=300"
        );

        res.status(200).send(svg);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to generate SVG"
        });
    }
};