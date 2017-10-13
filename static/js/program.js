var camera, scene, renderer, controls;
var camPositions = [];
var currentPos;
var roomObject = [];

init();
animate();

function init() {

	// Create a scene
	scene = new THREE.Scene();

	// Add the camera
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.set(0, 100, 250);

	// Add scene elements
	//addSceneElements();

	// Create the WebGL Renderer
	renderer = new THREE.WebGLRenderer({alpha: true});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(0x000000, 0);

	// Append the renderer to the body
	document.body.appendChild(renderer.domElement);

	//document.addEventListener( 'click', onDocumentMouseDown, false );
	//var projector = new THREE.Projector();
	//modal.style.display = "none";
}


function addSceneElements() {
	
}