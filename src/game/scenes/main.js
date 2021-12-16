import Phaser from "phaser"
import PeterFox from "../fox"

class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene")
    this.peterFox = null
  }

  preload() {
    this.load.image("bedroomImg", "/spritesheets/bedroom.png")
    this.load.tilemapTiledJSON("map", "/spritesheets/bedroom.json")
    this.load.aseprite("peterFoxAnim", "/spritesheets/peter.png", "/spritesheets/peter.json")
  }

  create() {
    this.map = this.make.tilemap({ key: "map" })
    this.tileset = this.map.addTilesetImage("bedroom", "bedroomImg")
    this.floor = this.map.createLayer("floor", this.tileset, 0, 0).setScale(10)
    this.items = this.map.createLayer("items", this.tileset, 0, 0).setScale(10)
    this.anims.createFromAseprite("peterFoxAnim")
    this.peterFox = new PeterFox(this, 400, 300, "peterFox")
    this.cursors = this.input.keyboard.createCursorKeys()
  }

  update() {
    this.peterFox.update(this.cursors)
  }
}

export default MainScene
