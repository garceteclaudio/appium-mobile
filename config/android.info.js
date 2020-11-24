class AndroidInfo {
  static deviceName() {
    return "emulator-5554"; // pass the udid or devicename
  }

  static platFormVersion() {
    return "10"; // pass the platform version
  }

  static appName() {
    return "loginExample.apk"; // pass the apk name
  }
}

module.exports = AndroidInfo;
