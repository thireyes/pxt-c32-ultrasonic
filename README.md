# C32 Ultrasonic Distance

A MakeCode extension for C32 Ultrasonic Distance module (Compatiable with HC-SR04), based on [microsoft/pxt-sonar](https://github.com/microsoft/pxt-sonar).

## Wiring diagram of C32 ultrasonic distance module

| ![C32 Ultrasonic Distance](https://github.com/thireyes/pxt-c32-ultrasonic/blob/master/icon.png "Connect C32 Ultrasonic Distance module and C203 microbit Shield") | 
| :-------------------------------------------------------------------------------------------------------------------------------------: | 
|                                _Connect C32 Ultrasonic Distance module and C203 microbit Shield_                                        |  

## Usage

This package contains a ``ping`` block that can return the distance to an obstacle detected by the sonar.

```sig
ultrasonic.ping(DigitalPin.P15, DigitalPin.P14, PingUnit.Centimeters);
```

## Charting the distance

Use the ``plot bar graph`` block to visualize the distance reported by your sensor.

```blocks
basic.forever(() => {
    let p = ultrasonic.ping(DigitalPin.P15, DigitalPin.P14, PingUnit.Centimeters);
    led.plotBarGraph(p, 0);
})
```

## License
Licensed under the MIT License (MIT). See LICENSE file for more details.

## Supported targets
* for PXT/microbit