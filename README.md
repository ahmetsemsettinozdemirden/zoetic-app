# Zoetic Assignment
This application is developer by Ahmet Semsettin Ozdemirden.

# React Native


# Automated e2e Tests Detox
[Detox](https://github.com/wix/Detox) is Gray box end-to-end testing and automation library for mobile apps. Tests are included in `e2e` folder. Both IOS and Android environments are ready for testing.

## IOS e2e
First you need to build project.
```
detox build -c ios
```

Then run tests on IOS.
```
detox test -c ios
```

## Android e2e
First you need to build project.
```
detox build -c android.emu.release
```

Then run tests on Android.
```
detox test -c android.emu.release
```
