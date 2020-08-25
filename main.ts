let LED_X = 0
let LED_Y = 0
basic.forever(function () {
    led.plot(LED_X, LED_Y)
    basic.pause(500)
    if (LED_X == 4) {
        LED_X = 0
        LED_Y = 0
    } else {
        LED_X += 1
        if (LED_X <= 2) {
            LED_Y += 2
        } else {
            LED_Y += -2
        }
    }
})
