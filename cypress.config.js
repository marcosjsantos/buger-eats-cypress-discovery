const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'uv5sga',
  viewportWidth: 1440,
  viewportHeight: 900,
  integrationFolder: ".",
  testFiles: "**.e2e.js",
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://buger-eats-qa.vercel.app/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
