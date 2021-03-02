const puppeteer = require("puppeteer");

module.exports = {
  ci: {
    collect: {
      url: ["https://lp.saiteki.app"],
      chromePath: puppeteer.executablePath(),
    },
    upload: {
      target: "filesystem",
      outputDir: "./reports",
    },
  },
};
