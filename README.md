# pxt-c32-ultrasonic [![Build Status](https://travis-ci.org/Microsoft/pxt-sonar.svg?branch=master)](https://travis-ci.org/Microsoft/pxt-sonar)

MakeCode extension for C32 Ultrasonic Distance module (Compatiable HC-SR04).

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