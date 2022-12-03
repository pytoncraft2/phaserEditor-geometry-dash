
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface spikePrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class spikePrefab extends Phaser.GameObjects.Triangle {

	constructor(scene: Phaser.Scene, x?: number, y?: number, x1?: number, y1?: number, x2?: number, y2?: number, x3?: number, y3?: number) {
		super(scene, x ?? 0, y ?? 0, x1 ?? 0, y1 ?? 128, x2 ?? 64, y2 ?? 0, x3 ?? 128, y3 ?? 128);

		this.scaleX = 0.13826396206232205;
		this.scaleY = 0.23898157132549264;
		scene.physics.add.existing(this, false);
		this.body.moves = false;
		this.body.pushable = false;
		this.body.immovable = true;
		this.body.setSize(128, 128, false);
		this.isFilled = true;
		this.fillColor = 14944264;
		this.isStroked = true;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
