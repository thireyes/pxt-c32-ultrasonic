# pxt-c32-ultrasonic

Based on [microsoft/pxt-sonar](https://github.com/microsoft/pxt-sonar).

MakeCode extension for C32 Ultrasonic Distance module (Compatiable HC-SR04).

## Wiring diagram of C32 ultrasonic distance module

| ![C32 Ultrasonic Distance](https://github.com/thireyes/pxt-c32-ultrasonic/blob/master/icon.png "Connect C32 Ultrasonic Distance module and C203 microbit Shield") | 
| :-------------------------------------------------------------------------------------------------------------------------------------: | 
|                                _Connect C32 Ultrasonic Distance module and C203 microbit Shield_                                        |  

## Usage

This package contains a ``ping`` block that can return the distance to an obstacle detected by the sonar.

```sig
ultrasonic.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Inches);
```

## Charting the distance

Use the ``plot bar graph`` block to visualize the distance reported by your sensor.

```blocks
basic.forever(() => {
    let p = ultrasonic.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Inches);
    led.plotBarGraph(p, 0);
})
```

## License
Licensed under the MIT License (MIT). See LICENSE file for more details.

## Supported targets
* for PXT/microbit
* for PXT/calliope