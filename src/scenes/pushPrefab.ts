
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface pushPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class pushPrefab extends Phaser.GameObjects.Rectangle {

	constructor(scene: Phaser.Scene, x?: number, y?: number, width?: number, height?: number) {
		super(scene, x ?? 167, y ?? 92, width ?? 128, height ?? 128);

		this.scaleX = 2.082192540850889;
		this.scaleY = 0.8768982168583556;
		scene.physics.add.existing(this, false);
		this.body.moves = false;
		this.body.setSize(128, 128, false);
		this.isFilled = true;
		this.fillColor = 269672;
		this.fillAlpha = 0.2;
		this.strokeAlpha = 0.4;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene.events.once("scene-awake", () => {
			this.fillColor = Phaser.Display.Color.HexStringToColor(this.color).color;
		}, this);

		/* END-USER-CTR-CODE */
	}

	public color: string = "#ffffff";
	public direction: "x"|"y" = "x";
	public puissance: number = 100;

	/* START-USER-CODE */

	// Write your code here.


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
