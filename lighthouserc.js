const puppeteer = require("puppeteer");

module.exports = {
  ci: {
    collect: {
      url: ["https://lp.saiteki.site"],
      chromePath: puppeteer.executablePath(),
      numberOfRuns: 1,
    },
    upload: {
      target: "filesystem",
      outputDir: "./reports",
      reportFilenamePattern: "lp_saiteki-site.%%EXTENSION%%",
    },
  },
};
