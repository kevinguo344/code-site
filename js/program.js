var camera, scene, renderer, controls;
var camPositions = [];
var currentPos;
var roomObject = [];


var redMat = new THREE.MeshToonMaterial( { color: 0xff3300, specular: 0x555555, shininess: 30 } );
var blueMat = new THREE.MeshToonMaterial( {color: 0x90C3D4, specular: 0x90C3D4, shininess: 30} );
var greenMat = new THREE.MeshToonMaterial( {color: 0xA1D490, specular: 0xA1D490, shininess: 30} );
var purpleMat = new THREE.MeshToonMaterial( { color: 0x6F6CC5, specular: 0x555555, shininess: 30 } );

var cylinder = new THREE.Mesh(new THREE.CylinderGeometry(), redMat);
var iscoachedron = new THREE.Mesh(new THREE.IcosahedronGeometry(20), blueMat);
var sphere = new THREE.Mesh(new THREE.SphereGeometry(), greenMat);
var torus = new THREE.Mesh(new THREE.TorusGeometry(50, 10, 16, 100), purpleMat);
roomObject.push(cylinder, iscoachedron, sphere, torus);

init();
animate();

//demonstrate clicking on objects works
//demonstrate moving camera works

function init() {

	// Create a scene
	scene = new THREE.Scene();

	// Add the camera
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.set(0, 100, 250);

	// Add scene elements
	addSceneElements();

	currentPos = 0;

	// Create the WebGL Renderer
	renderer = new THREE.WebGLRenderer({alpha: true});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(0x000000, 0);

	// Append the renderer to the body
	document.body.appendChild(renderer.domElement);

	var leftButton = document.getElementById("leftButton");
	var rightButton = document.getElementById("rightButton");

	leftButton.addEventListener('click', function(){
		if(currentPos > 0){
			currentPos--;
			var newPos = camPositions[currentPos];
			camera.position.set(newPos[0], newPos[1], 250);
			animate();
		}
	});

	rightButton.addEventListener('click', function(){
		if(currentPos < camPositions.length - 1){
			currentPos++;
			var newPos = camPositions[currentPos];
			camera.position.set(newPos[0], newPos[1], 250);
			animate();
		}
	});

	// Add a resize event listener
	window.addEventListener( 'resize', onWindowResize, false );

}

function addLights(centerX ,maxY) {
	var light1 = new THREE.PointLight(0xFFFFFF, 1, 300, 2);
	light1.position.set(centerX, maxY - 50, 130);
	scene.add(light1);

	var light2 = new THREE.PointLight(0xFFFFFF, 1, 300, 2);
	light2.position.set(centerX, maxY - 150, 0);
	scene.add(light2);

	var light3 = new THREE.PointLight(0xFFFFFF, 1, 300, 2);
	light3.position.set(centerX, maxY - 150, 130);
	scene.add(light3);

	var light4 = new THREE.PointLight(0xFFFFFF, 0.1, 300, 2);
	light4.position.set(centerX, maxY - 100, 250);
	scene.add(light4);
}

function addSceneElements() {
	for(var i = 0; i < 4; i++){
		camPositions.push(createRoom(i));
	}
}

function createRoom(i) {
	// Create a cube used to build the floor and walls
	var cube = new THREE.CubeGeometry(200, 1, 200);
	
	var centerX = i * 300;
	var minX = centerX - 100;
	var maxX = centerX + 100;

	var centerY = Math.floor(Math.random()*300);
	if(i == 0){centerY = 100;}
	var minY = centerY - 100;
	var maxY = centerY + 100;
	var z = -100;

	var material = new THREE.MeshPhongMaterial( {color: 0xFFFFFF, specular: 0xFFFFFF, shininess: 0.1} );
	//var material = new THREE.MeshToonMaterial();

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

	var a = roomObject[i];
	a.position.set(centerX, centerY, 100);
	//console.log(a.position);
	scene.add(a);

	addLights(centerX, maxY);
	return [centerX, centerY];
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

function onDocumentMouseDown() {

}