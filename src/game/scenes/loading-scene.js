// Damit importieren wir die Game-Engine phaser
import Phaser from "phaser"

// Damit erstellen wir die Klasse für die Lade-Szene und übernehmen die Eigenschaften von `Phaser.Szene`.
// Das müssen Sie noch nicht genau verstehen.
export default class LoadingScene extends Phaser.Scene {
  /**
   * Das ist eine spezielle Methode die bei der Instanziierung der Klasse
   * aufgerufen wird. Wir brauchen diese Methode hier, damit wir `Phaser`
   * den Namen/Schlüssel für unsere Szene übergeben können, damit wir die
   * Szene später selber aufrufen können.
   */
  constructor() {
    // Damit wir der Konstuktor von `Phaser.Scene` aufgerufen, und wir übergeben
    // den Schlüssel/Namen.
    super({ key: "loading" })
  }

  /**
   * Mit dieser Methode werden alle Resourcen geladen die vom Spiel gebraucht
   * werden. Hier werden alle Grafiken und auch Töne geladen. Diese können
   * danach im ganzen Spiel verwendet werden.
   */
  preload() {
    // Lade das Spritesheet für den Spieler.
    this.load.spritesheet("player", "./assets/player.png", {
      frameWidth: 32,
      frameHeight: 32,
    })

    // Lade das Tileset für die Karten und die Objekte.
    this.load.image("tileset", "./assets/tileset.png")

    // Lade einen Atlas von einem Tileset. Damit können einzelne Kacheln aus
    // einem Tileset definiert werden.
    this.load.atlas(
      "pickups",
      "./assets/tileset.png",
      "./assets/atlas/atlas-pickups.json",
    )
    this.load.atlas(
      "doors",
      "./assets/tileset.png",
      "./assets/atlas/atlas-doors.json",
    )

    // Wir möchten auf das Drücken der Leertaste reagieren können, daher müssen
    // wir das hier registrieren.
    this.SPACE = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE,
    )
  }

  create() {
    this.createAnimations()

    this.add
      .text(320, 240, "Press SPACE to start the Game.")
      .setOrigin(0.5, 0.5)
  }

  update() {
    if (this.SPACE.isDown) {
      this.scene.start("level-01")
    }
  }

  createAnimations() {
    this.anims.create({
      key: "player_idle",
      frames: this.anims.generateFrameNumbers("player", {
        start: 1,
        end: 1,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: "player_right",
      frames: this.anims.generateFrameNumbers("player", {
        start: 6,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: "player_left",
      frames: this.anims.generateFrameNumbers("player", {
        start: 3,
        end: 5,
      }),
      frameRate: 10,
      repeat: -1,
    })
    this.anims.create({
      key: "player_up",
      frames: this.anims.generateFrameNumbers("player", {
        start: 9,
        end: 11,
      }),
      frameRate: 10,
      repeat: -1,
    })
    this.anims.create({
      key: "player_down",
      frames: this.anims.generateFrameNumbers("player", {
        start: 0,
        end: 2,
      }),
      frameRate: 10,
      repeat: -1,
    })
  }
}
