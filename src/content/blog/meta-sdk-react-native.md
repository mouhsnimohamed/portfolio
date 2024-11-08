---
path: "/blog/meta-sdk-react-native"
date: "2024-10-31"
title: "How to integrate Facebook SDK into a react-native project?"
featuredImage: ../../images/meta-react.jpg
description: "Recently, we needed to show ads from various platforms, like Facebook and Instagram for our React Native app."
---

To achieve this, having the Facebook SDK installed and properly configured is essential.
Here’s a guide on setting up the SDK in your React Native for both Andriod And IOS:

![meta and react native](https://i.imgur.com/hfOHSvg.png)

# Step 1: Install the Facebook SDK for React Native

### 1. Install the react-native-fbsdk-next package:

```js
npm install react-native-fbsdk-next

```

> This package is a community-maintained alternative to the original react-native-fbsdk and is recommended for compatibility with newer versions of React Native.
> I want the readers to read it carefully as it contains many important docs.

### 2. Link the SDK (for older versions of React Native):

```js
npx react-native link react-native-fbsdk-next

```

If you’re using React Native 0.60 or higher, this step is generally not needed as auto-linking should work.

And for IOS you have to install the SDK using cocopods

```js
cd ios/ && pod install

```

# Step 2: Set Up the Facebook App and Get App ID and Client token

1. Go to the [Facebook for Developers site](https://developers.facebook.com/).
2. Create a new app if you don’t have one already.
3. Copy the App ID from your Facebook app settings. You’ll need this for configuration.
4. Copy the client token as well. You’ll find the it under App ID and App Secret.

# Step 3: Configuration

Let's start by going through the steps for Android setup first.

## Andriod

1. Open the <mark>android/app/build.gradle</mark> file and add this line in the dependencies section.

```java
dependencies {
    your code here
    .................

    // Meta SDK
    implementation 'com.facebook.android:facebook-android-sdk:latest.release'
}

```

2. Now open the <mark>android/app/src/main/res/values/strings.xml</mark> file and add these 2 lines inside resources section. Ensure you replace the App ID and Client Token with the ones you copied from your Facebook dashboard (refer to Step 2).

```java
resources {
    your code here
    .................

    <string name="facebook_app_id">0000000</string>
    <string name="facebook_client_token">000000</string>
}

```

3. Next open the <mark>Android/app/src/main/AndroidManifest.xml</mark> file and add meta-data to the application element

```java
<application android:label="@string/app_name" ...>
    ...
    <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
    <meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>
</application>

```

🎉 that's it 🎉 save all files and build your project. Let's move on to IOS.

## IOS

1. Configure the <mark>Info.plist</mark> file with an XML snippet that contains data about your app. Add these lines to the file and make sur to replace <mark>fbAPP-ID</mark> and <mark>CLIENT-TOKEN</mark> by yours yoy have copied from your facebook APP (see step 2).

```js #

    <key>CFBundleURLTypes</key>
    <array>
    <dict>
    <key>CFBundleURLSchemes</key>
    <array>
        <string>fbAPP-ID</string>
    </array>
    </dict>
    </array>
    <key>FacebookAppID</key>
    <string>APP-ID</string>
    <key>FacebookClientToken</key>
    <string>CLIENT-TOKEN</string>
    <key>FacebookDisplayName</key>
    <string>APP-NAME</string>
```

2. Connect the App Delegate: open AppDelegate.m file and paste this code there.

```swift

#import <AuthenticationServices/AuthenticationServices.h>
#import <SafariServices/SafariServices.h>
#import <FBSDKCoreKit/FBSDKCoreKit-Swift.h>

```

> One thing to keep an eye on here is the location where you past the import if you are using an old version of react-native <mark class="gr">0.67.5</mark> and below. Make sur to past the import outside of <mark class="gr">#ifdef FB_SONARKIT_ENABLED</mark>

```swift

// Meta SDK
#import <FBSDKCoreKit/FBSDKCoreKit-Swift.h>
#import <AuthenticationServices/AuthenticationServices.h>
#import <SafariServices/SafariServices.h>

#ifdef FB_SONARKIT_ENABLED
#import <FlipperKit/FlipperClient.h>
#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>
.....
#endif

```

3. Inside <mark>didFinishLaunchingWithOptions</mark>, add the following:

```swift

  [[FBSDKApplicationDelegate sharedInstance] application:application didFinishLaunchingWithOptions:launchOptions];

```

now in the same file go down and add this:

```swift

  - (BOOL)application:(UIApplication *)app
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  return [[FBSDKApplicationDelegate sharedInstance]application:app
                                                      openURL:url
                                                      options:options];
}

```

If you're using React Native's RCTLinkingManager or deep linking go donw to <mark>(BOOL)application:(UIApplication \*)application</mark> replace it with this:

```swift
- (BOOL)application:(UIApplication *)app
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  if ([[FBSDKApplicationDelegate sharedInstance] application:app openURL:url options:options]) {
    return YES;
  }

  if ([RCTLinkingManager application:app openURL:url options:options]) {
    return YES;
  }

  return NO;
}

```

Now go to <mark>app.tsx</mark> or any other entry point in your project and initiate the SDK by adding these lines:

```js
import { Settings } from "react-native-fbsdk-next"

Settings.initializeSDK()
```

4. Now in the last as I wanted our app for Advertising and for iOS 14 devices facebook asked to enable the Apple Advertising tracking (AAT).
   First install react-native-tracking-transparency to get user consent

```js
npm install react-native-tracking-transparency

cd ios
pod install

```

thene add NSUserTrackingUsageDescription to your <mark>Info.plist</mark>

```swift
  <key>NSUserTrackingUsageDescription</key>

  <string>We use Tracking to fix bugs and improve your experience.</string>
```

Last add this to your <mark>App.tsx</mark> file

```js
import { Settings } from "react-native-fbsdk-next"

import { requestTrackingPermission } from "react-native-tracking-transparency"


useEffect(() => {
const trackingStatus = await requestTrackingPermission()

if (trackingStatus === "authorized" || trackingStatus === "unavailable") {
  await Settings.setAdvertiserTrackingEnabled(true)
}

}, []);
```

> Requires iOS 14. On Android and iOS versions below 14, this will always return 'unavailable'.

# Let's have a look at the result

You'll start seeing events in the Events Manager of your Facebook app like the image below:

![facebook events](https://i.imgur.com/OP5cG8j.png)
