import Phaser from "phaser"
import PeterFox from "../fox"

class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene")
  }

  preload() {
    this.load.image("bedroom", "/spritesheets/bedroom.png")
    this.load.tilemapTiledJSON("map", "/spritesheets/bedroom.json")
    this.load.aseprite("peterFoxAnim", "/spritesheets/peter.png", "/spritesheets/peter.json")
  }

  create() {
    this.map = this.make.tilemap({ key: "map" })
    this.tileset = this.map.addTilesetImage("bedroom")
    this.floor = this.map.createLayer("floor", this.tileset, 0, 0)
    this.items = this.map.createLayer("items", this.tileset, 0, 0)
    this.walls = this.map.createLayer("walls", this.tileset, 0, 0)
    this.anims.createFromAseprite("peterFoxAnim")
    this.peterFox = new PeterFox(this, 50, 50, "peterFox")
    this.cursors = this.input.keyboard.createCursorKeys()
    this.items.setCollisionByProperty({ collides: true })
    this.walls.setCollisionByProperty({ collides: true })
    this.physics.add.collider(this.peterFox, this.items)
    this.physics.add.collider(this.peterFox, this.walls)
  }

  update() {
    this.peterFox.update(this.cursors)
  }
}

export default MainScene
