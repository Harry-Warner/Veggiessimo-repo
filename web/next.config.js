const withImages = require("next-images");
const withFonts = require("next-fonts");
const compose = require("next-compose");

module.exports = compose([
  [withImages, withFonts],
  {
    webpack: (config) => {
      return config;
    },
  },
]);
