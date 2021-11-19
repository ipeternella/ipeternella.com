import Phaser from "phaser"
import MainScene from "./scenes/main"

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game",
  scale: {
    parent: "game",
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },

  /* scenes for gameplay */
  scene: [MainScene],
}

export default config
