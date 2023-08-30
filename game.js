export class Game extends Phaser.Scene {

    constructor() {
      super({ key: 'game' });
    }
  
    preload() {
      this.load.image('background', 'fondo.jpg');
      this.load.image('gameover', 'game_over.jpg');
      this.load.image('platform', 'plataforma.jpg');
      this.load.image('ball', 'bola.png');

    }
  
    create() {
      this.physics.world.setBoundsCollision(true, true, true, false);

      this.add.image(410, 250, 'background');
      this.gameoverImage = this.add.image(400, 60, 'gameover');
      this.gameoverImage.visible = false;

      this.platform = this.physics.add.image(400,460, 'platform').setImmovable();
      this.platform.body.allowGravity = false;

      this.ball = this.physics.add.image(400, 30, 'ball');
      this.ball.setCollideWorldBounds(true);

      let velocity = 100 * Phaser.Math.Between(1.3, 2);
      if (Phaser.Math.Between(0, 10) > 5){
        velocity = 0 - velocity;
      }
      this.ball.setVelocity(velocity, 10);

      this.physics.add.collider(this.ball, this.platform);

      this.ball.setBounce(1);

      this.cursos = this.input.keyboard.createCursorKeys();

    }

    update() {
      if(this.cursos.left.isDown){
        this.platform.setVelocityX(-500);
      }
      else if (this.cursos.right.isDown) {
        this.platform.setVelocityX(500);
      }
      else {
        this.platform.setVelocityX(0);
      }

      if (this.ball.y > 500) {
        console.log('fin');
        this.gameoverImage.visible = true;
      }

    }
  
  }