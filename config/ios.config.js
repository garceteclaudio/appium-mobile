const {config} = require('./wdio.conf');
const IosInfo = require('./ios.info');
const path = require('path');

// Appium capabilities
config.capabilities = [{
    bundleId: "org.reactjs.native.example.loginExample",
    platformName: 'iOS',
    noReset: false,
    // fullReset: false,
    automationName: 'XCUITest',
    udid: "65D5A6EE-FBF1-4C15-A277-6F3C88D9A335",
    deviceName: IosInfo.deviceName(),
    app: path.resolve(`./apps/${IosInfo.appName()}`),
    platformVersion: IosInfo.platFormVersion(),
    // app: IosInfo.appName() //use - path.resolve(`./apps/${IosInfo.appName()}`) if passing a custom app
}];

config.cucumberOpts.tagExpression = '@iosApp';// pass tag to run tests specific to ios

exports.config = config;


// npm cache clean --force