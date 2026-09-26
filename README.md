<img src="https://my-capsule-phi.vercel.app/api?text=Name&subtitle=Software%20Engineer" width="100%"/>


## Animated Capsule Renderer

A lightweight animated SVG generator for creating customizable animated banners for GitHub README profiles.

The banner is generated dynamically through a URL, allowing you to customize the text, subtitle, waves, particles, colors, and animation without manually creating an image.

## Demo

https://my-capsule-phi.vercel.app/api?text=Name&subtitle=Software%20Engineer



## GitHub Profile Example

Add the generated SVG directly to your GitHub README:

    <p align="center">
      <img
        src="https://my-capsule-phi.vercel.app/api?text=Your text&subtitle=Your subtite%20%7C%20AI%20%26%20ML"
        alt="Animated Capsule"
      /> or
      <img src="https://my-capsule-phi.vercel.app/api?text=Yourname&subtitle=Software%20Engineer" alt="Animated Capsule" />
    </p>

## Customization

The capsule can be customized through URL query parameters.

| Parameter | Description | Example |
|---|---|---|
| `text` | Main title | `Student` |
| `subtitle` | Subtitle text | `Software Engineer` |
| `width` | Banner width | `1000` |
| `height` | Banner height | `350` |
| `fontSize` | Main title size | `65` |
| `fontColor` | Text color | `%23ffffff` |
| `background` | Background gradient colors | `%23141E30,%23243B55` |
| `particleCount` | Number of particles | `25` |
| `waveSpeed1` | First wave speed | `6` |
| `waveSpeed2` | Second wave speed | `10` |
| `waveOffset` | Second wave vertical offset | `30` |



## Architecture

    Request
       │
       ▼
    Vercel API
       │
       ▼
    Query Parameters
       │
       ▼
    Configuration
       │
       ▼
    SVG Renderer
       │
       ├── Gradient
       ├── Waves
       ├── Particles
       └── Text
       │
       ▼
    Animated SVG
       │
       ▼
    GitHub README

## Project Structure

    animated-svg-renderer/
    │
    ├── api/
    │   └── index.js
    │
    ├── src/
    │   ├── api/
    │   │   └── server.js
    │   │
    │   ├── config/
    │   │   ├── defaults.js
    │   │   └── validation.js
    │   │
    │   ├── renderer/
    │   │   ├── generateSvg.js
    │   │   │
    │   │   ├── animations/
    │   │   │   ├── fadeIn.js
    │   │   │   └── wave.js
    │   │   │
    │   │   ├── effects/
    │   │   │   └── particles.js
    │   │   │
    │   │   ├── shapes/
    │   │   │   ├── wave.js
    │   │   │   ├── circle.js
    │   │   │   ├── rectangle.js
    │   │   │   ├── rounded.js
    │   │   │   └── index.js
    │   │   │
    │   │   ├── styles/
    │   │   │   └── gradients.js
    │   │   │
    │   │   └── text/
    │   │       └── text.js
    │   │
    │   └── utils/
    │       └── escapeXml.js
    │
    ├── test/
    │   └── test.js
    │
    ├── package.json
    └── README.md

## How It Works

1. A user creates a URL containing the desired configuration.
2. Vercel receives the request.
3. `api/index.js` parses the query parameters.
4. The configuration is validated.
5. `generateSvg()` builds the SVG.
6. Gradients, waves, particles, and text are added.
7. The generated SVG is returned as an image.
8. SVG animations run directly in the browser or GitHub.







## Tech Stack

- Node.js
- JavaScript
- Express
- SVG
- Vercel
- GitHub

## Note

Built it just for personal github profile enhancement
