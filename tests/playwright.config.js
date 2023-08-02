const { PlaywrightTestConfig } = require("@playwright/test");

const config = {
    retries: 0,
    timeout: 20000,
    repoter: './repoters.js',
    use: {

        headless: false,
        viweport: { width: 1280, height: 720 },
        video: "retain-on-failure",
        screeenshort: "off"
    },

    projects: [{
            name: 'Chrome',
            use: { browserName: "chromium" }
        },
        {
            name: "Firefox",
            use: { browserName: "firefox" }
        },
        {
            name: "Webkit",
            use: { browserName: "webkit" }
        }

    ]
}
module.exports = config;