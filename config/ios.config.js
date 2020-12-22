const { config } = require("./wdio.conf");
const IosInfo = require("./ios.info");
const path = require("path");

// Appium capabilities
config.capabilities = [
  {
    appWaitDuration: 50000,
    // bundleId: "org.reactjs.native.example.loginExample",
    platformName: "iOS",
    noReset: true,
    // fullReset: true,
    automationName: "XCUITest",
    // udid: "65D5A6EE-FBF1-4C15-A277-6F3C88D9A335",
    deviceName: IosInfo.deviceName(),
    app: path.resolve(`./apps/${IosInfo.appName()}`),
    platformVersion: IosInfo.platFormVersion(),
    resetOnSessionStartOnly: false,
  },
];

config.cucumberOpts.tagExpression = "@iosApp"; // pass tag to run tests specific to ios

exports.config = config;

// npm cache clean --force
