let camera, scene, renderer, mesh, material, carbon, carbonNormal, ok, boxX =1, boxY=1, boxZ=1 , tileBaseColor;

let btnOne = document.getElementById('Carbon');
let btnTwo = document.getElementById('CarbonNormal');
let btnThree = document.getElementById('Change');
// let btnSmall = document.getElementById('size-small');
// let btnMedium = document.getElementById('size-medium');
// let btnLarge = document.getElementById('size-large');

let xSlider = document.getElementById('x-slider');
let ySlider = document.getElementById('y-slider');
let zSlider = document.getElementById('z-slider');

xSlider.addEventListener('change', (e) => mesh.scale.x = e.target.value)
ySlider.addEventListener('change', e => mesh.scale.y = e.target.value)
zSlider.addEventListener('change', e => mesh.scale.z = e.target.value)

// function changeSize (size) {
//     mesh.scale.x = size;
//     mesh.scale.y = size;
//     mesh.scale.z = size;
// }


carbon = new THREE.TextureLoader().load('./textures/Carbon.png');
carbonNormal = new THREE.TextureLoader().load('./textures/Carbon_Normal.png');

let texture = carbon;

function init() {
	// Init scene
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
    camera.position.z = 5;

	// Init renderer
	renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor("#e5e5e5");
	// Set size (whole window)
	renderer.setSize(window.innerWidth, window.innerHeight);

	// Render to canvas element
	document.body.appendChild(renderer.domElement);

	geometry = new THREE.BoxGeometry(boxX, boxY, boxZ);
    // material = new THREE.MeshLambertMaterial({color: 0xFFCC00});

    // carbon = new THREE.TextureLoader().load('./textures/Carbon.png');
    // carbonNormal = new THREE.TextureLoader().load('./textures/Carbon_Normal.png');
    
	// Create material with texture
	material = new THREE.MeshBasicMaterial({ map: texture });
    geometry.needsUpdate = true;
    material.needsUpdate = true;

    // Create mesh with geo and material
    mesh = new THREE.Mesh(geometry, material);
    // Add to scene
	scene.add(mesh);

	// Light 
    var light = new THREE.PointLight(0xFFFFFF, 1, 500);
    light.position.set(10,0,25);
    scene.add(light);   
}

btnOne.addEventListener("click", ()=>{
    texture = carbon;
    material.map = texture
    // material.texture = texture;
    // init();
});

btnTwo.addEventListener("click", ()=>{
    texture = carbonNormal;
    // init();
    
    material.map = texture
    // material.texture = texture;
});

btnThree.addEventListener("click", ()=>{
    texture = tileBaseColor;
    // init();
    
    material.map = texture
    // material.texture = texture;
});




// Draw the scene every time the screen is refreshed
function animate() {
	requestAnimationFrame(animate);

	// Rotate cube (Change values to change speed)
	mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;

	renderer.render(scene, camera);
}

function onWindowResize() {
	// Camera frustum aspect ratio
	camera.aspect = window.innerWidth / window.innerHeight;
	// After making changes to aspect
	camera.updateProjectionMatrix();
	// Reset size
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();






// const texture = new THREE.TextureLoader().load('./textures/Fabric_Mesh_003_SD/Fabric_basecolor.jpg');
    // const tileBaseColor = new THREE.TextureLoader().load('./textures/Fabric_Mesh003_SD/Fabric_basecolor.jpg');
    // const tileNormalMap = new THREE.TextureLoader().load('./textures/Fabric_Mesh003_SD/Material.jpg');
    // const tileHeightMap = new THREE.TextureLoader().load('./textures/Fabric_Mesh003_SD/Fabric_height.jpg');
    // const tileRoughtnessMap = new THREE.TextureLoader().load('./textures/Fabric_Mesh003_SD/Fabric_roughness.jpg');
    // const tileAmbientOcclusionMap = new THREE.TextureLoader().load('./textures/Fabric_Mesh003_SD/Fabric_ambientOcclusion.jpg');
    // const tileMetallic = new THREE.TextureLoader().load('./textures/Fabric_Mesh003_SD/Fabric_metallic.jpg');