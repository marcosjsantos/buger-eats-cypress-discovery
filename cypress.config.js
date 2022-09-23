const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'uv5sga',
  viewportWidth: 1440,
  viewportHeight: 900,
  e2e: {
    baseUrl: 'https://buger-eats-qa.vercel.app/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
