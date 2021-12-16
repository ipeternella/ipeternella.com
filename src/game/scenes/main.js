import Phaser from "phaser"
import Fox from "../fox"

class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene")
    this.fox = null
  }

  preload() {
    this.load.image("fox", "/spritesheets/fox-front.png")
    this.load.image("bedroomImg", "/spritesheets/bedroom.png")
    this.load.tilemapTiledJSON("map", "/spritesheets/bedroom.json")
  }

  create() {
    this.map = this.make.tilemap({ key: "map" })
    this.tileset = this.map.addTilesetImage("bedroom", "bedroomImg")
    this.floor = this.map.createStaticLayer("floor", this.tileset, 0, 0).setScale(10)
    this.items = this.map.createStaticLayer("items", this.tileset, 0, 0).setScale(10)
    this.fox = new Fox(this, 400, 300, "fox")
    this.cursors = this.input.keyboard.createCursorKeys()
  }

  update() {
    this.fox.update(this.cursors)
  }
}

export default MainScene
