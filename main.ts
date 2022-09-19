let temp = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(temp)
})
basic.forever(function () {
    temp = input.temperature()
    if (temp == 10) {
        basic.showIcon(IconNames.Heart)
    }
    if (temp == 20) {
        basic.showIcon(IconNames.Meh)
    }
    if (temp == 30) {
        basic.showIcon(IconNames.TShirt)
    }
    if (temp == 40) {
        basic.showIcon(IconNames.Duck)
    }
})
