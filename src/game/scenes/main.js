import Phaser from "phaser"

class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene")
  }

  preload() {
    this.load.image("sky", "/images/sky.png")
  }

  create() {
    this.add.image(400, 300, "sky")
  }

  update() {}
}

export default MainScene
