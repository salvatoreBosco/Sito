import * as THREE from "three"
import Experience from "../Experience.js";

export default class Opere {
    constructor(px, py, pz, rx, ry, rz, painting) {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        const art = new THREE.TextureLoader().load("../../../opere/" + painting)
        const quadro = new THREE.BoxGeometry(0.75, 1.5, 0.1);
        const material = new THREE.MeshBasicMaterial({ map: art });
        this.cube = new THREE.Mesh(quadro, material);
        this.setModel(px, py, pz, rx, ry, rz);
        
    }

    setModel(px, py, pz, rx, ry, rz) {
        this.cube.position.set(px, py, pz);
        this.cube.rotation.set(rx, ry, rz);
        this.cube.scale.set(0.1, 0.1, 0.1);
        this.scene.add(this.cube);
    }

    resize() {

    }

    update() {

    }
}