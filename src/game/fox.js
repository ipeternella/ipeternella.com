import Phaser from "phaser"

class Fox extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key)
    this.setScale(10)
    scene.add.existing(this)
    scene.physics.add.existing(this)
  }

  update(cursors) {
    if (cursors.left.isDown) {
      this.body.x -= 16
    } else if (cursors.right.isDown) {
      this.body.x += 16
    } else if (cursors.up.isDown) {
      this.body.y -= 16
    } else if (cursors.down.isDown) {
      this.body.y += 16
    } else {
      this.body.setVelocityX(0)
    }
  }
}

export default Fox
