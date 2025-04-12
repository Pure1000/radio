radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
radio.setGroup(17022015)
radio.setFrequencyBand(1702.2015)
basic.forever(function () {
	
})
