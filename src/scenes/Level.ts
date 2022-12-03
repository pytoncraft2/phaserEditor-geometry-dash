// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import playerPrefab from "./playerPrefab";
import platformPrefab from "./platformPrefab";
import spikePrefab from "./spikePrefab";
import thrusterPrefab from "./thrusterPrefab";
import pushPrefab from "./pushPrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// spaceKey
		const spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// player
		const player = new playerPrefab(this, 111, 480);
		this.add.existing(player);

		// platformLayer
		const platformLayer = this.add.layer();

		// platform
		const platform = new platformPrefab(this, 240, 537);
		platformLayer.add(platform);

		// platform_1
		const platform_1 = new platformPrefab(this, 776, 465);
		platformLayer.add(platform_1);

		// platform_2
		const platform_2 = new platformPrefab(this, 1170.8280349877548, 466.1200487958029);
		platformLayer.add(platform_2);

		// platform_3
		const platform_3 = new platformPrefab(this, 1595.3263519207894, 475.20178627580094);
		platformLayer.add(platform_3);

		// platform_4
		const platform_4 = new platformPrefab(this, 2014.9345707999596, 541.7057304000468);
		platformLayer.add(platform_4);

		// platform_5
		const platform_5 = new platformPrefab(this, 2603, 613);
		platform_5.scaleX = 6.355418458589321;
		platform_5.scaleY = 0.12569717186818152;
		platformLayer.add(platform_5);

		// platform_6
		const platform_6 = new platformPrefab(this, 3444, 613);
		platform_6.scaleX = 6.355418458589321;
		platform_6.scaleY = 0.12569717186818152;
		platformLayer.add(platform_6);

		// platform_7
		const platform_7 = new platformPrefab(this, 546, 545);
		platform_7.scaleX = 0.12733923091580285;
		platform_7.scaleY = 2.177143716989785;
		platformLayer.add(platform_7);

		// platform_8
		const platform_8 = new platformPrefab(this, 3853, 623);
		platform_8.scaleX = 104.52809151856837;
		platform_8.scaleY = 0.27273448062903644;
		platform_8.setOrigin(0, 0.5);
		platformLayer.add(platform_8);

		// platformPrefabEnd
		const platformPrefabEnd = new platformPrefab(this, 17293, 570);
		platformPrefabEnd.scaleX = 0.3931942925168014;
		platformPrefabEnd.scaleY = 4.617270089795117;
		platformLayer.add(platformPrefabEnd);

		// spikeLayer
		const spikeLayer = this.add.layer();

		// spike
		const spike = new spikePrefab(this, 3223, 590);
		spikeLayer.add(spike);

		// spike_3
		const spike_3 = new spikePrefab(this, 3250, 590);
		spikeLayer.add(spike_3);

		// spike_5
		const spike_5 = new spikePrefab(this, 3584.1840011725612, 589.771774948277);
		spikeLayer.add(spike_5);

		// spike_6
		const spike_6 = new spikePrefab(this, 3611, 590);
		spikeLayer.add(spike_6);

		// spike_7
		const spike_7 = new spikePrefab(this, 3638, 590);
		spikeLayer.add(spike_7);

		// thrusterLayer
		const thrusterLayer = this.add.layer();

		// thrusterCube
		const thrusterCube = new thrusterPrefab(this, 478, 678);
		thrusterLayer.add(thrusterCube);

		// pushLayer
		const pushLayer = this.add.container(410, 366);

		// pushPrefabStarter
		const pushPrefabStarter = new pushPrefab(this, 103, 30);
		pushLayer.add(pushPrefabStarter);

		// pushPrefabStarter_1
		const pushPrefabStarter_1 = new pushPrefab(this, 3449, 175);
		pushPrefabStarter_1.scaleX = 103.68653177593973;
		pushPrefabStarter_1.scaleY = 0.40177635391899447;
		pushPrefabStarter_1.setOrigin(0, 0.5);
		pushLayer.add(pushPrefabStarter_1);

		// pushPrefabGoTop
		const pushPrefabGoTop = new pushPrefab(this, 16806, -233);
		pushPrefabGoTop.scaleX = 0.8298159277594797;
		pushPrefabGoTop.scaleY = 7.201076292141336;
		pushLayer.add(pushPrefabGoTop);

		// polygon_1
		const polygon_1 = this.add.polygon(14972, 273, "35 100 0 50 70 0 140 50 105 100");
		polygon_1.scaleX = 3.2710798295846213;
		polygon_1.scaleY = 3.2710798295846213;
		polygon_1.isFilled = true;

		// polygon
		const polygon = this.add.polygon(6682, 273, "35 100 0 50 70 0 140 50 105 100");
		polygon.scaleX = 3.2710798295846213;
		polygon.scaleY = 3.2710798295846213;
		polygon.isFilled = true;

		// polygon_2
		const polygon_2 = this.add.polygon(8340, 273, "35 100 0 50 70 0 140 50 105 100");
		polygon_2.scaleX = 3.2710798295846213;
		polygon_2.scaleY = 3.2710798295846213;
		polygon_2.isFilled = true;

		// polygon_3
		const polygon_3 = this.add.polygon(13314, 273, "35 100 0 50 70 0 140 50 105 100");
		polygon_3.scaleX = 3.2710798295846213;
		polygon_3.scaleY = 3.2710798295846213;
		polygon_3.isFilled = true;

		// polygon_4
		const polygon_4 = this.add.polygon(11656, 273, "35 100 0 50 70 0 140 50 105 100");
		polygon_4.scaleX = 3.2710798295846213;
		polygon_4.scaleY = 3.2710798295846213;
		polygon_4.isFilled = true;

		// polygon_5
		const polygon_5 = this.add.polygon(5024, 273, "35 100 0 50 70 0 140 50 105 100");
		polygon_5.scaleX = 3.2710798295846213;
		polygon_5.scaleY = 3.2710798295846213;
		polygon_5.isFilled = true;

		// polygon_6
		const polygon_6 = this.add.polygon(9998, 273, "35 100 0 50 70 0 140 50 105 100");
		polygon_6.scaleX = 3.2710798295846213;
		polygon_6.scaleY = 3.2710798295846213;
		polygon_6.isFilled = true;

		// polygon_7
		const polygon_7 = this.add.polygon(16630, 273, "35 100 0 50 70 0 140 50 105 100");
		polygon_7.scaleX = 3.2710798295846213;
		polygon_7.scaleY = 3.2710798295846213;
		polygon_7.isFilled = true;

		// player_platform_collider
		this.physics.add.collider(player, platformLayer.list);

		// player_spike_collider
		this.physics.add.overlap(player, spikeLayer.list, this.playerCollideSpike as any, undefined, this);

		// thruster_player_collider
		this.physics.add.collider(player, thrusterLayer.list, this.thrusterAction as any, undefined, this);

		// push_player_overlap
		this.physics.add.overlap(player, pushLayer.list, this.pushPlayerCollider as any, undefined, this);

		// pushPrefabGoTop (prefab fields)
		pushPrefabGoTop.direction = "y";
		pushPrefabGoTop.puissance = -20;

		this.player = player;
		this.spaceKey = spaceKey;

		this.events.emit("scene-awake");
	}

	private player!: playerPrefab;
	private spaceKey!: Phaser.Input.Keyboard.Key;

	/* START-USER-CODE */

	// Write your code here

	preload()
	{
		//this.load.image("FufuSuperDino", '../../static/assets/FufuSuperDino.png')
	}

	create() {

		this.editorCreate();
		this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
	}

	update() {
		this.playerUpdate();
	}

	playerUpdate() {
		if (this.spaceKey.isDown && this.player.body.touching.down) {
			this.player.body.velocity.y = -400;
			this.player.animationRotate();
		}
	}

	playerCollideSpike(player: playerPrefab, spike: spikePrefab) {
		player.setPosition(111, 480);
	}

	thrusterAction(thruster: thrusterPrefab, player: playerPrefab) {
		thruster.body.setVelocityY(-900);
	}

	pushPlayerCollider(player: playerPrefab, push: pushPrefab) {
		console.log("OVERLAP PUSH");

		player.body.velocity[push.direction] += push.puissance;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here