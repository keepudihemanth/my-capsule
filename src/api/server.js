const express = require("express");
const cors = require("cors");
const generateSvg = require("../renderer/generateSvg");

const app = express();

app.use(cors());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

app.get("/api", (req, res) => {
  try {
    const config = {
      ...req.query,

      width: req.query.width ? Number(req.query.width) : undefined,

      height: req.query.height ? Number(req.query.height) : undefined,

      fontSize: req.query.fontSize ? Number(req.query.fontSize) : undefined,

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
        : undefined,
    };

    const svg = generateSvg(config);

    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "public, max-age=300");

    res.send(svg);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to generate SVG",
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
