class IosInfo {
  // figura con el siguiente script en mac:
  // xcrun simctl list | egrep '(Booted)'
  // instruments -s devices

  //iPhone 11 Pro (14.3)
  static deviceName() {
    return "iPhone 13"; // pass the device name
  }
  // 14.3
  static platFormVersion() {
    return "15.0"; // pass the platform version
  }

  static appName() {
    return "loginExample.app"; // pass the bundleid or ipa name
  }
  static UDID() {
    return "30B088C1-1859-4982-811F-8230547CE08F"; // pass the bundleid or ipa name
  }
}

module.exports = IosInfo;
