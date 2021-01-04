class IosInfo {
  // figura con el siguiente script en mac:
  // xcrun simctl list | egrep '(Booted)'
  // instruments -s devices

  //iPhone 11 Pro (14.3)
  static deviceName() {
    return "iPhone 11 Pro"; // pass the device name
  }
  // 14.3
  static platFormVersion() {
    return "14.3"; // pass the platform version
  }

  static appName() {
    return "loginExample.app"; // pass the bundleid or ipa name
  }
}

module.exports = IosInfo;
