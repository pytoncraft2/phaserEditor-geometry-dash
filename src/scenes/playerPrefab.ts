
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface playerPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class playerPrefab extends Phaser.GameObjects.Triangle {

	constructor(scene: Phaser.Scene, x?: number, y?: number, x1?: number, y1?: number, x2?: number, y2?: number, x3?: number, y3?: number) {
		super(scene, x ?? 37, y ?? 31, x1 ?? 0, y1 ?? 128, x2 ?? 64, y2 ?? 0, x3 ?? 128, y3 ?? 128);

		this.scaleX = 0.4878821090174235;
		this.scaleY = 0.40621158224912846;
		scene.physics.add.existing(this, false);
		this.body.velocity.x = 400;
		this.body.gravity.y = 800;
		this.body.angularDrag = 200;
		this.body.setSize(128, 128, false);
		this.isFilled = true;
		this.fillColor = 1145539;
		this.isStroked = true;

		/* START-USER-CTR-CODE */
		this.scene.events.once("scene-awake", () => {
			this.fillColor = Phaser.Display.Color.HexStringToColor(this.color).color;
		}, this);
		/* END-USER-CTR-CODE */
	}

	public color: string = "#000000ff";

	/* START-USER-CODE */

	animationRotate() {
		this.scene.tweens.add({
			targets: this,
			angle: 360,
			duration: 200,
			ease: "Linear",
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
