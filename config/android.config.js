const {config} = require('./wdio.conf');
const AndroidInfo = require('./android.info');
const path = require('path');

// Appium capabilities
config.capabilities = [{
    platformName: 'Android',
    // noReset: false,
    fullReset: true,
    //maxInstances: 1,
    automationName: 'uiautomator2',
    //deviceName: AndroidInfo.deviceName(),
    udid: AndroidInfo.UDID(),
    platformVersion: AndroidInfo.platFormVersion(),
    app: path.resolve(`./apps/${AndroidInfo.appName()}`),
    appPackage: "com.loginexample",
    appActivity: "com.loginexample.MainActivity",
    newCommandTimeout: "8000",
}];

config.cucumberOpts.tagExpression = '@androidApp'; // pass tag to run tests specific to android

exports.config = config;

//emulator -list-avds
// emulator -avd Pixel_3_API_29

