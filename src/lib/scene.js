import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let controls;
let camera;
let renderer;
let scene;

export const createScene = (canvas, callback) => {
	renderer = new THREE.WebGLRenderer({
		canvas
	});

	const loader = new THREE.ObjectLoader();

	loader.load(
		'scene.json',

		function (obj) {
			renderer.setClearColor(0x00000f, 0); // the default
			scene = obj;

			camera = scene.getObjectByName('PerspectiveCamera');
			scene.getObjectByName('canvas.glb');

			controls = new OrbitControls(camera, renderer.domElement);
			controls.autoRotate = true;
			controls.enablePan = false;
			controls.enableZoom = false;

			resize();
			animate();
			callback({
				scene,
				controls
			});
		},

		function (xhr) {
			console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
		},

		function (err) {
			console.error('An error happened');
		}
	);
};

const animate = () => {
	requestAnimationFrame(animate);
	controls.update();
	renderer.render(scene, camera);
};

const resize = () => {
	renderer.setSize(600, 600);
	camera.aspect = 1;
	camera.updateProjectionMatrix();
};

export const PauseCamera = () => {
	camera.autoRotate = false;
};

window.addEventListener('resize', resize);
