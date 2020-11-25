class AndroidInfo {
  static deviceName() {
    return "Nexus 5X"; // pass the udid or devicename
  }
  static UDID() {
    return "emulator-5554"; // pass the UDID
  }

  static platFormVersion() {
    return "10"; // pass the platform version
  }

  static appName() {
    return "loginExample.apk"; // pass the apk name
  }
}

module.exports = AndroidInfo;
