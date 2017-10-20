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
	$.getJSON("/api/locations/", {"name": roomName})
		.done(function(data) {
			if(data != null){
				console.log(data);
			}
		});
}

function fetchItem(name){
	console.log(name);
	/*$.getJSON("/api/items/", {_id: id})
		.done(function(a){
			console.log(a);
		})*/
}

function addRoom(roomName, position, lookAt, items, id){
	if(typeof position[0] == "number" && typeof lookAt[0] == "number" && typeof items == "object"){
		var newRoom = {
			_roomID: id,
			name: roomName,
			camera_position: position,
			camera_lookAt: lookAt,
			items: items
		}
		console.log(newRoom);
		var response;
		$.post("/api/locations", newRoom)
			.done(function(data) {
				response = data;
			});
	}
}

var n = "Kitchen";
var p = [0.9, 0.7, 0.2];
var l = [0.2, 0.3, 0.1];
var i = [
	{
		//id: "59e97d9d33771f0f8e720dae",
		name: "Sink"
	},
	{
		//id: "59e97da433771f0f8e720daf",
        name: "Wall"
	},
	{
        //id: "59e97da633771f0f8e720db0",
        name: "Fire Alarm"
	}
]

var n2 = "Bedroom";
var p2 = [1.9, 1.7, 1.2];
var l2 = [1.2, 1.3, 1.1];
var i2 = [
	{
		//id: "59e9853ae98ae114730e78bd",
		name: "Bed"
	},
	{
		//id: "59e9853fe98ae114730e78be",
        name: "Door"
	}
]

var it1 = "Sink";
var c1 = "This is a sink. It has this and that."

var it2 = "Wall";
var c2 = "This is a wall. It's a wall. What else do you want?"

var it3 = "Fire Alarm";
var c3 = "You need it";

var it4 = "Bed";
var c4 = "This doesn't do anything";

var it5 = "Door";
var c5 = "Have a door";

var it6 = "Test Post";
var c6 = "Please ignore";

function addItem(itemName, content){
	var newItem = {
		name: itemName,
		info: content
	}
	//console.log(newItem);
	$.post("/api/items", newItem)
		.done(function(data) {
			console.log(data);
		});
}

function addItem2(itemName, content, itemID){
	var newItem = {
		_id: itemID,
		name: itemName,
		info: content
	}
	//console.log(newItem);
	$.post("/api/items", newItem)
		.done(function(data) {
			console.log(data);
		});
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