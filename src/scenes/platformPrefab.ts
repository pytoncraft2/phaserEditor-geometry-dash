
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface platformPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class platformPrefab extends Phaser.GameObjects.Rectangle {

	constructor(scene: Phaser.Scene, x?: number, y?: number, width?: number, height?: number) {
		super(scene, x ?? 0, y ?? 0, width ?? 128, height ?? 128);

		this.scaleX = 2.7550546946027996;
		this.scaleY = 0.15825362320858832;
		scene.physics.add.existing(this, false);
		this.body.moves = false;
		this.body.pushable = false;
		this.body.immovable = true;
		this.body.setSize(128, 128, false);
		this.isFilled = true;
		this.fillColor = 5367032;

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
