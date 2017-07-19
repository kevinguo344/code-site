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
	addSceneElements();

	// Sphere
	/*
	var sphere = new THREE.Mesh(new THREE.SphereGeometry(20, 70, 20), redMat);
	sphere.position.set(-25, 100, -20);
	scene.add(sphere);

	// Knot thingy
	var knot = new THREE.Mesh(new THREE.TorusKnotGeometry( 40, 3, 100, 16 ), purpleMat);
	knot.position.set(0, 60, 30);
	scene.add(knot);*/

	var btn = document.createElement("BUTTON");

	// Create the WebGL Renderer
	renderer = new THREE.WebGLRenderer({alpha: true});
	//renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor(0x000000, 0);

	// Append the renderer to the body
	document.body.appendChild( renderer.domElement );

	// Add a resize event listener
	window.addEventListener( 'resize', onWindowResize, false );

}

function addLights(centerX ,maxY) {
	var light = new THREE.PointLight(0xFFFFFF, 0.35);
	light.position.set(centerX, maxY - 20, 0);
	scene.add(light);
	scene.add(new THREE.PointLightHelper(light, 10));
}

function addSceneElements() {
	
	for(var i = 0; i < 3; i++){
		camPositions.push(createRoom(i));
	}

	//createRoom(0);

	// Sphere
	/*
	var sphere = new THREE.Mesh(new THREE.SphereGeometry(20, 70, 20), redMat);
	sphere.position.set(-25, 100, -20);
	scene.add(sphere);*/

	// Knot thingy
	/*
	var knot = new THREE.Mesh(new THREE.TorusKnotGeometry( 40, 3, 100, 16 ), purpleMat);
	knot.position.set(0, 60, 30);
	scene.add(knot);*/
}

function createRoom(i) {
	// Create a cube used to build the floor and walls
	var cube = new THREE.CubeGeometry(200, 1, 200);
	
	var centerX = i * 300;
	var minX = centerX - 100;
	var maxX = centerX + 100;

	var centerY = Math.floor(Math.random()*100);
	if(i == 0){centerY = 100;}
	var minY = centerY - 100;
	var maxY = centerY + 100;
	var z = -100;

	var material = new THREE.MeshPhongMaterial( {color: 0xFFFFFF, specular: 0xFFFFFF, shininess: 0.1} );

	var rightWall = new THREE.Mesh(cube, material);
	rightWall.rotation.x = Math.PI/180 * 90;
	rightWall.rotation.z = Math.PI/180 * 90;
	rightWall.position.set(maxX,centerY,0);
	scene.add(rightWall);

	var leftWall = new THREE.Mesh(cube, material);
	leftWall.rotation.x = Math.PI/180 * 90;
	leftWall.rotation.z = Math.PI/180 * 90;
	leftWall.position.set(minX,centerY,0);
	scene.add(leftWall);

 	var backWall = new THREE.Mesh(cube, material);
	backWall.rotation.x = Math.PI/180 * 90;
	backWall.position.set(centerX,centerY,-100);
	scene.add(backWall);

	var ceiling = new THREE.Mesh(cube, material);
	ceiling.position.set(centerX, maxY, 0);
	scene.add(ceiling);

	var floor = new THREE.Mesh(cube, material);
	floor.position.set(centerX, minY, 0);
	scene.add(floor);

	addLights(centerX, maxY);
	return [centerX, centerY];
}

function animate() {
	renderer.render( scene, camera );
	requestAnimationFrame( animate );
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}