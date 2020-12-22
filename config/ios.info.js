class IosInfo {
  // figura con el siguiente script en mac:
  // xcrun simctl list | egrep '(Booted)'
  // instruments -s devices
  static deviceName() {
    return "iPhone 11 Pro Max (14.3)"; // pass the device name
  }

  static platFormVersion() {
    return "13.0"; // pass the platform version
  }

  static appName() {
    return "loginExample.app"; // pass the bundleid or ipa name
  }
}

module.exports = IosInfo;
