// Import Playwright's config helper and device descriptors
import { defineConfig, devices } from '@playwright/test';

// Export the configuration object
export default defineConfig({
  // Directory where your test files live
  testDir: './tests',

  // Run tests fully in parallel
  fullyParallel: true,

  /* Prevent accidental use of test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failing tests twice in CI, none locally
  retries: process.env.CI ? 2 : 0,

  // Limit workers to 1 in CI, unlimited locally
  workers: process.env.CI ? 1 : undefined,
  */
  
  // Reporters: HTML report, line reporter, and Allure integration
  reporter: [["html"], ["line"], ["allure-playwright"]],

  // Default settings applied to all tests
  use: {
    // Collect trace for debugging
    trace: 'on',

    // Grant permissions for notifications and geolocation
    permissions: ['notifications', 'geolocation'],

    // Always capture screenshots
    screenshot: 'on',

    // Always record video
    video: 'on',

    // Run browsers in headed mode (visible window)
    headless: false,

    // Use the actual browser window size (no fixed viewport)
    viewport: null,

    // Launch browser maximized (Chromium/Edge only)
    launchOptions: {
      args: ['--start-maximized'],
      // CRITICAL: Tells Playwright not to suppress the OS window initialization step
      ignoreDefaultArgs: ['--no-startup-window'],
    },
  },

  // Define projects (different browsers/devices)
  projects: [
    {
      // Chromium project (Google Chrome)
      name: 'chromium',
      use: {
        browserName: "chromium",
        viewport: null, // disable the default 1280x720
        launchOptions: {
          args: ['--start-maximized'],
          ignoreDefaultArgs: ['--no-startup-window'],
        },
      },
    }, 
  //   {
  //     // Edge project
  //     name: 'msedge',
  //     use: {
  //       channel: 'msedge',
  //       viewport: null,
  //       launchOptions: { 
  //         args: ['--start-maximized'],
  //         ignoreDefaultArgs: ['--no-startup-window'],
  //       },
  //     },
  //   },
  //   {
  //     // Firefox project (doesn't support --start-maximized)
  //     name: 'firefox',
  //     use: {
  //       ...devices['Desktop Firefox'],
  //       viewport: null, // use system window size
  //     },
  //   },
  //   {
  //     // WebKit project (Safari)
  //     name: 'webkit',
  //     use: {
  //       ...devices['Desktop Safari'],
  //       viewport: null, // use system window size
  //     },
  //   },
  // ],
]
}
);
