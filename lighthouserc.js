module.exports = {
  ci: {
    collect: {
      url: ["https://lp.smartlp.site"],
      numberOfRuns: 1,
    },
    upload: {
      target: "filesystem",
      outputDir: "./reports",
      reportFilenamePattern: "lp_smartlp-site.%%EXTENSION%%",
    },
  },
};
