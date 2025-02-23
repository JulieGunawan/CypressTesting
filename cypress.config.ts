import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // defaultBrowser: "chrome",
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
