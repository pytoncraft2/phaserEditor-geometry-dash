
// You can write more code here

/* START OF COMPILED CODE */

import platformPrefab from "./platformPrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class thrusterPrefab extends platformPrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number, width?: number, height?: number) {
		super(scene, x ?? 0, y ?? 0, width, height);

		this.scaleX = 0.7528660808211133;
		this.scaleY = 0.08613310073529055;
		this.body.moves = true;
		this.body.allowGravity = false;
		this.fillColor = 16306769;

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
