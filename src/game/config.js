import Phaser from "phaser"
import MainScene from "./scenes/main"

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 800,
  parent: "game",
  pixelArt: true,
  scale: {
    parent: "game",
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },

  /* scenes for gameplay */
  scene: [MainScene],
}

export default config
