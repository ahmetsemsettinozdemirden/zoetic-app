# Zoetic Assignment
This application is developed by Ahmet Semsettin Ozdemirden. React Native, Redux, Redux Thunk, Redux Logger, Redux Persist, React Navigation, React Native Calendars, React Native Vector Icons, Axios and Detox is used.

## Folder Structure
```
|-- android
|-- e2e
|-- ios
`-- src
    |-- actions
    |-- components
    |   `-- PrimaryButton
    |-- lib
    |-- navigation
    |-- reducers
    |-- screens
    |   |-- MeasureScreen
    |   |   `-- components
    |   |       |-- BloodCard
    |   |       |-- OximeterCard
    |   |       `-- TemperatureCard
    |   `-- OverviewScreen
    |       `-- components
    |           |-- BloodWidget
    |           |-- FloatingButton
    |           |-- OximeterWidget
    |           `-- TemperatureWidget
    `-- store
```

## Server
https://zoetic.ozdemirden.com/

## Automated e2e Tests Detox
[Detox](https://github.com/wix/Detox) is Gray box end-to-end testing and automation library for mobile apps. Tests are included in `e2e` folder. Both IOS and Android environments are ready for local testing.

### IOS e2e
First you need to build project.
```
detox build -c ios
```

Then run tests on IOS.
```
detox test -c ios
```

### Android e2e
First you need to build project.
```
detox build -c android.emu.release
```

Then run tests on Android.
```
detox test -c android.emu.release
```
