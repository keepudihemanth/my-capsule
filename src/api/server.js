const express = require("express");
const generateSvg = require("../renderer/generateSvg");

const app = express();

app.get("/api", (req, res) => {
    const svg = generateSvg(req.query);

    res.setHeader("Content-Type", "image/svg+xml");
    res.send(svg);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});