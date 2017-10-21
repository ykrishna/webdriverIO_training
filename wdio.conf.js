exports.config = {

    specs: [
        './features/*.feature'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome'
    }],

    services: ['selenium-standalone'],

    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    bail: 0,
    screenshotPath: './screenShots/',
    output: './report/',
    baseUrl: 'http://webdriver.io',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./features/step-definitions/step_definitions.js'],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tags: [],
        timeout: 20000,
        ignoreUndefinedDefinitions: false,
    },
}
