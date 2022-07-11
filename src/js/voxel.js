if (!THREE || !THREE?.GLTFLoader || !THREE?.OrbitControls) {
  throw new Error('ThreeJs or one of it modules could not be loaded.');
}

// get container where voxel char should be mounted
const voxelContainer = document.querySelector('.content__voxel');

// create new scene instance
const scene = new THREE.Scene();

// create new vector instance
const target = new THREE.Vector3(12, 5, 3);

// set camera type and position
const scale = 800 * 0.005 + 5;
const voxelCamera = new THREE.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 500);
voxelCamera.lookAt(target);

// create new webgl renderer instance and add html canvas to dom
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(400, 400);
voxelContainer.appendChild(renderer.domElement);

// initialize loader
const loader = new THREE.GLTFLoader();

// initialize light type and settings
const voxelLight = new THREE.AmbientLight(0xcccccc, 1);

// initialize mouse control settings
const mouseControls = new THREE.OrbitControls(voxelCamera, renderer.domElement);
mouseControls.autoRotate = true;
mouseControls.target = target;

// load voxel char and set position and size
const dynmaicEndpoint = window.location?.href?.substring(0, window.location?.href?.lastIndexOf('/')) + '/media/voxel/character.glb';
loader.load(dynmaicEndpoint, async (gltf) => {
  const voxelChar = gltf.scene;
  voxelChar.name = 'daniel_portfolio_work';
  await voxelChar.scale.set(0.5, 0.5, 0.5);
  await voxelChar.position.set(0, 1, 0);

  await scene.add(voxelLight, voxelChar);
});

// rotate the voxel char every frame
let frame = 0;
const animate = () => {
  requestAnimationFrame(animate);
  frame = frame <= 100 ? frame + 1 : frame;

  if (frame <= 100) {
    voxelCamera.position.y = 10;
    voxelCamera.lookAt(target);
  } else {
    mouseControls.update();
  }
  renderer.render(scene, voxelCamera);
};

animate();
