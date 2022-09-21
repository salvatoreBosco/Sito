import * as THREE from "three"
import Experience from "../Experience.js";
import Opere from "./Opere.js";

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;

        const opera = new Opere( 0.75, 0.2, -0.99, 0, 0, 0, "WhatsApp Image 2022-08-01 at 6.14.26 PM.jpeg");
        const opera1 = new Opere( 0.5, 0.2, -0.99, 0, 0, 0, "WhatsApp Image 2022-08-01 at 6.14.27 PM.jpeg");
        const opera2 = new Opere( 0.25, 0.2, -0.99, 0, 0, 0, "WhatsApp Image 2022-08-01 at 6.14.28 PM.jpeg");
        const opera3 = new Opere( -0.25, 0.2, -0.99, 0, 0, 0, "WhatsApp Image 2022-08-01 at 6.14.29 PM.jpeg");
        const opera4 = new Opere( -0.5, 0.2, -0.99, 0, 0, 0, "WhatsApp Image 2022-08-01 at 6.14.26 PM.jpeg");
        const opera5 = new Opere( -0.75, 0.2, -0.99, 0, 0, 0, "WhatsApp Image 2022-08-01 at 6.14.27 PM.jpeg");

        this.setModel();

    }

    setModel() {
        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(0.1, 0.1, 0.1);
        this.actualRoom.rotation.y = Math.PI;
    }

    resize() {

    }

    update() {

    }
}