// 在此处测试；当此软件包作为插件使用时，将不会编译此软件包。
basic.forever(() => {
    let p = ultrasonic.ping(DigitalPin.P15, DigitalPin.P14, PingUnit.Inches);
    led.plotBarGraph(p, 0);
})
