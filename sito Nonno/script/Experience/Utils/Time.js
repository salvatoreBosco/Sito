import * as EventEmitter from "events";

export default class Time extends EventEmitter{
    constructor(){
        this.start = Date.now();
        this.current = this.start;
        this.elapsed = 0;
        this.delta = 16;

        this.update();
    }

    update(){
        const currentTime = Date.now();
        this.delta = currentTime - this.current;
        this.current = currentTime;
        this.elapsed = this.current -this.start;

        console.log(delta);
        window.requestAnimationFrame(()=>this.update())
    }
}