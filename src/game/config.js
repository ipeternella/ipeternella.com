import Phaser from "phaser"
import MainScene from "./scenes/main"

const config = {
  type: Phaser.AUTO,
  width: 128,
  height: 112,
  parent: "game",
  pixelArt: true,
  transparent: true,
  scale: {
    mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  scene: [MainScene],
}

export default config
