input.onButtonPressed(Button.AB, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        for (let index = 0; index < 100; index++) {
            game.addScore(1)
        }
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showString("" + (game.score()))
        poo = 1
        poo = 0
    }
})
let poo = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
basic.forever(function () {
    if (poo == 1) {
        sprite.delete()
        sprite = game.createSprite(2, 2)
    }
})
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(100)
})
