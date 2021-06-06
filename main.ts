namespace SpriteKind {
    export const cofre = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(true)
})
let chuchu: Sprite = null
let link = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
link.setKind(SpriteKind.Player)
controller.moveSprite(link, 10, 10)
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`niveau1`)
tiles.placeOnRandomTile(link, sprites.dungeon.stairNorth)
scene.cameraFollowSprite(link)
game.onUpdateInterval(500, function () {
    chuchu = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . 3 3 3 3 . . . . . . . 
        . . . . 3 3 3 3 3 3 . . . . . . 
        . . . 3 1 9 3 3 9 1 3 . . . . . 
        . . . 3 3 3 3 3 3 3 3 . . . . . 
        . . 3 3 3 3 3 3 3 3 3 3 . . . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
        `, SpriteKind.Enemy)
    chuchu.setPosition(randint(75, 145), randint(30, 110))
})
