import * as THREE from "three"
import Experience from "../Experience.js";

export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;
        
        this.setSunLight();


    }

    setSunLight(){
        this.sunLight = new THREE.DirectionalLight("#ffffff", 1);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(1024,1024);
        this.sunLight.shadow.normalBias = 0.05;
        this.sunLight.position.set(1.5, 7, 3);
        this.scene.add(this.sunLight);

        const ambientLight = new THREE.AmbientLight("#00ff00", 1);
        console.log(ambientLight)
        this.scene.add(ambientLight);

    }

    resize() {

    }

    update() {

    }
}