(function () {
  //constants
  let container, camera, scene, renderer;

  //function call
  init();
  animate();
  function init() {
    container = document.querySelector(".scene");

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.set(250, 450, 650);
    camera.lookAt(scene.position);

    //Lights
    const ambient = new THREE.AmbientLight(0x404040, 7);
    scene.add(ambient);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    var size = 1000,
      step = 5;
    var geometry = new THREE.Geometry();
    var material = new THREE.LineBasicMaterial({ color: 0xffffff });

    for (let i = -size; i <= size; i += step) {
      geometry.vertices.push(new THREE.Vector3(-size, -0.04, i));
      geometry.vertices.push(new THREE.Vector3(size, -0.04, i));

      geometry.vertices.push(new THREE.Vector3(i, -0.04, -size));
      geometry.vertices.push(new THREE.Vector3(i, -0.04, size));
    }
    var line = new THREE.Line(geometry, material);
    scene.add(line);

    //Object

    let loader = new THREE.GLTFLoader();
    loader.load(
      "https://uzomezu.github.io/L-etudient-qui-se-Promene/trafficlight/scene.gltf",
      function (gltf) {
        scene.add(gltf.scene);
        object = gltf.scene.children[0];
        object.position.set(0, 0, 0);

        renderer.render(scene, camera);
      }
    );

    //Controls for Camera
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", render);
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI / 2;
  }
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
  }
  function render() {
    renderer.render(scene, camera);
    console.log(camera.position);
  }
  function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
    render();
  }

  window.addEventListener("resize", onWindowResize);
})();
