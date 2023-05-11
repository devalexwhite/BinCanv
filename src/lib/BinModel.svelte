<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	export let imageURL = '';
	let canvasEl;
	let scene;
	let controls;

	const setCanvasImage = () => {
		const mesh = scene.getObjectByName('Plane_3');
		const texture = new THREE.TextureLoader().load(imageURL);

		let imgRatio = 1800 / 2400;
		let planeRatio = 1;
		let ratio = planeRatio / imgRatio;

		texture.repeat.x = ratio;
		texture.offset.x = 0.5 * (1 - ratio);
		texture.repeat.y = ratio;
		texture.offset.y = 0.5 * (1 - ratio);
		mesh.material.map = texture;

		controls.autoRotate = false;
		controls.reset();
		controls.object.position.x += 0.5;
	};

	$: imageURL && setCanvasImage();

	onMount(async () => {
		const { createScene } = await import('./scene');
		createScene(canvasEl, (s) => {
			scene = s.scene;
			controls = s.controls;
		});
	});
</script>

<div class="relative flex flex-row justify-center w-full">
	<canvas bind:this={canvasEl} width="600" height="600" class="z-10 bg-transparent" />
</div>
