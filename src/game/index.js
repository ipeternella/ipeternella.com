const startGame = async window => {
  const Phaser = await import("phaser")
  const { default: config } = await import("./config")
  const { default: MainScene } = await import("./scenes/main")
  const game = new Phaser.Game({
    ...config,
    scene: [MainScene],
  })

  return game
}

export default startGame
