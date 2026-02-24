input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    if (Modus == 1) {
        nachricht = 1
        basic.showNumber(nachricht)
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Modus == 0) {
        Modus = 1
        basic.setLedColor(0xff0000)
    } else {
        Modus = 0
        basic.setLedColor(0x00ff00)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (Modus == 0) {
    	
    }
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    if (Modus == 1) {
        nachricht = 0
        basic.showNumber(nachricht)
    }
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    if (Modus == 1) {
        nachricht = 2
        basic.showNumber(nachricht)
    }
})
let nachricht = 0
let Modus = 0
radio.setGroup(1)
Modus = 0
basic.setLedColor(0x00ff00)
nachricht = 0
basic.forever(function () {
	
})
