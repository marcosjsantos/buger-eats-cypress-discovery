const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'uv5sga',
  retries: {
    runMode: 2,
    openMode: 0,
  },

  e2e: {
  // We've imported your old cypress plugins here.
  // You may want to clean this up later by importing these.
  setupNodeEvents(on, config) {
    return require('./cypress/plugins/index.js')(on, config)
  },
  baseUrl: 'https://buger-eats-qa.vercel.app/',
  specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
},
  component: {
    setupNodeEvents(on, config) {},
  viewportWidth: 1440,
  viewportHeight: 900,
  specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
},
})