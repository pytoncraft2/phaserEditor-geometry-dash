
// You can write more code here

import UserComponent from "./UserComponent";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class HorizontalMove extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Rectangle) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__HorizontalMove"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Rectangle): HorizontalMove {
		return (gameObject as any)["__HorizontalMove"];
	}

	private gameObject: Phaser.GameObjects.Rectangle;
	public horizontalvel: number = 200;
	public minX: number = 0;
	public maxX: number = 3070;

	/* START-USER-CODE */

	update() {
		this.gameObject.x += 5
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
