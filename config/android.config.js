const { config } = require("./wdio.conf");
const AndroidInfo = require("./android.info");
const path = require("path");

// Appium capabilities

//Todos los permisos true, noReset=false y fullRset comentado
config.capabilities = [
  {
    //probar con  appWaitDuration: 30000,
    newCommandTimeout: 180,
    // 	Timeout in seconds while waiting for device to become ready
    deviceReadyTimeout: 100,
    appWaitDuration: 50000,
    platformName: "Android",
    noReset: false,
    // fullReset: true,
    //maxInstances: 1,
    automationName: "UiAutomator2",
    // deviceName: AndroidInfo.deviceName(),
    udid: AndroidInfo.UDID(),
    platformVersion: AndroidInfo.platFormVersion(),
    // app: path.resolve(`./apps/${AndroidInfo.appName()}`),
    // isHeadless: true,
    appPackage: "com.loginexample",
    appActivity: "com.loginexample.MainActivity",
    // newCommandTimeout: "8000",
    // skipServerInstallation: true,
    // appWaitPackage: 20000,
    // appWaitActivity: 20000,
  },
];

config.cucumberOpts.tagExpression = "@androidApp"; // pass tag to run tests specific to android

exports.config = config;

//emulator -list-avds
// emulator -avd Pixel_3_API_29
