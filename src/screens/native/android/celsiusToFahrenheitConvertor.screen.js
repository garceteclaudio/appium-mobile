class CelsiusToFahrenheitConvertorScreen {
  constructor() {
    // this.celsiusTextField =
    //   '//android.widget.EditText[@resource-id="com.androiddev2015.cfconverter:id/editTextC"]';
    this.celsiusTextField =
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.EditText[1]";
    this.fahrenheitTextField =
      '//android.widget.EditText[@resource-id="com.androiddev2015.cfconverter:id/editTextF"]';
    this.submitButton =
      '//android.widget.Button[@resource-id="com.androiddev2015.cfconverter:id/btncnvCF"]';
    this.rateAppMessage =
      '//android.widget.TextView[@resource-id="android:id/message"]';
    this.laterButton =
      '//android.widget.Button[@resource-id="android:id/button3"]';
  }
}

module.exports = new CelsiusToFahrenheitConvertorScreen();

class WelcomeFPayScreen {
  constructor() {
    this.yaTengoCuentaButton =
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.TextView";
  }
}

module.exports = new WelcomeFPayScreen();
