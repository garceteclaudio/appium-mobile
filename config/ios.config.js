const { config } = require("./wdio.conf");
const IosInfo = require("./ios.info");
const path = require("path");

// Appium capabilities
config.capabilities = [
  {
    // appWaitDuration: 50000,
    // noReset: true,
    //
    //
    //
    //
    // bundleId: "org.reactjs.native.example.loginExample",
    platformName: "iOS",
    automationName: "XCUITest",
    //bitrise
    udid: "32DF006A-861F-4291-801D-FA5F4CDF4394",
    // udid: "65D5A6EE-FBF1-4C15-A277-6F3C88D9A335",
    deviceName: IosInfo.deviceName(),
    app: path.resolve(`./apps/${IosInfo.appName()}`),
    platformVersion: IosInfo.platFormVersion(),
    isHeadless: true,
  },
];

config.cucumberOpts.tagExpression = "@iosApp"; // pass tag to run tests specific to ios

exports.config = config;

// npm cache clean --force
