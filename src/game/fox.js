import Phaser from "phaser"

class PeterFox extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key)
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.speed = 100
    this.lastAnimationKey = "front-walking"
    this.setBodySize(15, 15, false)
  }

  update(cursors) {
    this.setVelocity(0, 0)

    if (cursors.left.isDown) {
      this.setVelocity(-this.speed, 0)
      this.play({ key: "left-walking", frameRate: 10 }, true)
      this.flipX = false
      this.lastAnimationKey = "left-walking"
    } else if (cursors.right.isDown) {
      this.setVelocity(this.speed, 0)
      this.flipX = true
      this.play({ key: "left-walking", frameRate: 10 }, true)
      this.lastAnimationKey = "right-walking"
    } else if (cursors.up.isDown) {
      this.setVelocity(0, -this.speed)
      this.play({ key: "back-walking", frameRate: 10 }, true)
      this.lastAnimationKey = "back-walking"
    } else if (cursors.down.isDown) {
      this.setVelocity(0, this.speed)
      this.play({ key: "front-walking", frameRate: 10 }, true)
      this.lastAnimationKey = "front-walking"
    } else {
      let standingAnimation = ""

      if (this.lastAnimationKey === "front-walking") {
        standingAnimation = "front-standing"
      } else if (this.lastAnimationKey === "left-walking") {
        standingAnimation = "left-standing"
        this.flipX = false
      } else if (this.lastAnimationKey === "right-walking") {
        standingAnimation = "left-standing" // but we flip
        this.flipX = true
      } else if (this.lastAnimationKey === "back-walking") {
        standingAnimation = "back-standing"
      }
      if (standingAnimation !== "") {
        this.play({ key: standingAnimation, frameRate: 2 }, true)
      }
    }
  }
}

export default PeterFox
