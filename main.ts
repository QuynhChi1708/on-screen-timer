input.onButtonPressed(Button.B, function () {
    minutes = total_time / 60000
    if (timing) {
        minutes += input.runningTime() - start_time
    }
    displaying = false
    basic.clearScreen()
    basic.showNumber(minutes)
    basic.pause(500)
    displaying = true
})
let end_time = 0
let start_time = 0
let timing = false
let total_time = 0
let minutes = 0
let displaying = false
let level_light = 0
basic.showString("\"L\"")
let LIGHT = 100
let HYSTERESIS = 8
LIGHT += HYSTERESIS / 2
let DARK = LIGHT - HYSTERESIS
let reading = level_light
basic.pause(1000)
displaying = true
basic.forever(function () {
    reading = input.lightLevel()
    if (reading < DARK) {
        if (timing) {
            end_time = input.runningTime()
            total_time += end_time - start_time
            timing = false
        }
    } else {
        if (reading >= LIGHT) {
            if (!(timing)) {
                start_time = input.runningTime()
                timing = true
            }
        }
    }
})
basic.forever(function () {
    if (displaying) {
        if (true) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
    }
})
