const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    env: {
      viewportWidth: 1440,
      viewportHeight: 900
    },
    // // env: {
    // //   viewportWidth: 375,
    // //   viewportHeight: 667
    // },
    setupNodeEvents(on, config) {
      // e2e testing node events setup code
    },
  },
});