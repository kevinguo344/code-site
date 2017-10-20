var camera, scene, renderer, controls;
var camPositions = [];
var currentPos;

init();
animate();

function init() {
	// Create a scene
	scene = new THREE.Scene();

	// Add the camera
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.set(0, 50, 100);

	// Add scene elements
	addSceneElements();

	// Create the WebGL Renderer
	renderer = new THREE.WebGLRenderer({alpha: true});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(0xffffff, 0);

	// Append the renderer to the body
	document.body.appendChild(renderer.domElement);
}

function getRoom(roomName){
	$.getJSON({ "/api/locations" + roomName,
		function(data){
			console.log(data);
		}
	});
}

function addRoom(){
	
}

function addSceneElements() {
	var room = new THREE.CubeGeometry(50, 50, 50);
	var matColor = new THREE.Color("#ECECEC");
	var specColor = new THREE.Color("#FFFFFF");
	var buildingMaterial = new THREE.MeshLambertMaterial({color: matColor});
	var cube = new THREE.Mesh(room, buildingMaterial);
	cube.position.x = 0;
	cube.position.y = 0;
	cube.position.z = -20;
	scene.add(cube);

	var ambientLight = new THREE.AmbientLight(0xffffff, 1); 
	scene.add(ambientLight);

	//var ptLight = new THREE.PointLight();
	//scene.add();
}

function animate() {
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}