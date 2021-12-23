import Phaser from "phaser"
import config from "./config"

const startGame = async window => {
  const game = new Phaser.Game(config)

  return game
}

export default startGame
