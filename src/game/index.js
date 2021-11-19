import config from "./config"

const startGame = async () => {
  /* Need to initialize Phaser here otherwise Gatsby will try to SSR it
   https://pablo.gg/en/blog/coding/i-made-a-top-down-game-version-of-my-blog-with-phaser-and-react/ */
  const Phaser = await import("phaser")
  const game = new Phaser.Game(config)
}

export default startGame
