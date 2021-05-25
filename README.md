# Rinkl: Mobile App

This is the React Native mobile app for Rinkl.

## Install

Clone the project from github and install dependencies 

- Use node version 12 or greater
- Run `yarn install`
- Run `cd ios && pod install`

You will now be able to run the project on a iOS device through XCode or: `npx react-native run-ios`

### Additional steps for Android

To run the device on a Android simulator or device follow these instructions:

- Make sure you have the Android SDK installed 
  - Can be installed with Homebrew `brew cask install android-sdk`
- Create a new file in `local.properties` in the `android/` folder. 
  - Location `android/local.properties` relative to project root.
- Add the Android SDK location to local.properties prefixed by `sdk.dir = `
  - Example contents of local.properties: `sdk.dir = /Users/garethmatson/Library/Android/sdk`

You are now able to run the app on a device: `npx react-native run-android`

## Run

### Run instructions for iOS:

- `npx react-native run-ios`

### Run instructions for Android:

- Have an Android emulator running (quickest way to get started), or a device connected.
- `npx react-native run-android`
