import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    defaultBrowser: "chrome",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
