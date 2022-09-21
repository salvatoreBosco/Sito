import * as THREE from "three"
import Experience from "./Experience.js";
import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls.js"

export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        console.log(this)
        this.createPerspectiveCamera();
        this.createOrthographicCamera();
        this.setOrbitControls();
    }

    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35,
            this.sizes.aspect,
            0.1,
            1000
        );
        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.position.z = 1;
        this.perspectiveCamera.position.y = 1;
        this.perspectiveCamera.position.x = 100;
        console.log(this.perspectiveCamera);
    }

    createOrthographicCamera() {
        this.frustrum = 5;
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum) / 2,
            (this.sizes.aspect * this.sizes.frustrum) / 2,
            this.sizes.frustrum / 2,
            -this.sizes.frustrum / 2,
            -100,
            100
        );
        this.scene.add(this.orthographicCamera);

        const size = 10;
        const divisions = 10;

        const gridHelper = new THREE.GridHelper(size, divisions);
        this.scene.add(gridHelper);
        const axesHelper = new THREE.AxesHelper(10);
        this.scene.add(axesHelper);

    }

    setOrbitControls() {
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
        this.controls.enableDamping = true;
        this.controls.enableZoom = true;
        
    }

    resize() {
        //Updating Perspective Camera on Resize
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();
        //Updating Orthographic Camera on Resize

        this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.top = this.sizes.frustrum / 2;
        this.orthographicCamera.bottom = -this.sizes.frustrum / 2;
    }

    update() {
        this.controls.update();
        if(this.perspectiveCamera.position.y < 1){
            this.perspectiveCamera.position.y = 1;
        }
    }
}