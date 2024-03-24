# react-native

- npm i -g expo-cli
- npx create-expo-app demo-app -t expo-template-blank-typescript
- cd demo-app
- npx expo install react-dom react-native-web @expo/metro-runtime
- npm i @react-navigation/native @react-navigation/native-stack
- npx expo install react-native-screens react-native-safe-area-context
- npx expo install firebase
- npx expo customie metro.config.js
- Ejecutar:
    - cd demo-app
    - npm start # you can open iOS, Android, or web from here, or run them directly with the commands below.
    - npm run android
    - npm run ios # requires an iOS device or macOS for access to an iOS simulator
    - npm run web