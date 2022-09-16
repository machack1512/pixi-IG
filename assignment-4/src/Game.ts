import {Application, Sprite, Text} from 'pixi.js';
import {gsap} from 'gsap';
export class Game extends Application{
    private spin:boolean;
    private sliceAngle = 360/7;
    constructor(opts:any) {
        super(opts);
        this.preload([
            {name:'wheel', url:'assets/wheel.png'}
        ], this.onLoad.bind(this));
    }
    preload(list:any[], cb:()=>{}):void {
        this.loader.add(list);
        this.loader.load(cb);
    }
    onLoad():void {
        const wheel = new Sprite(this.loader.resources['wheel'].texture);
        wheel.anchor.set(0.5);
        wheel.x = this.screen.width/2;
        wheel.y = this.screen.height/2;
        this.stage.addChild(wheel);
        wheel.interactive = true;
        wheel.buttonMode = true;
        console.log(this.stage);
        wheel.on('pointerup', ()=>{
            let random = Math.floor(Math.random()*7);
            let stopAngle = random * this.sliceAngle;
            gsap.fromTo(wheel,{angle:0},{angle:3600+stopAngle, duration:5, ease:'expo.out'});
            const myTimeout = setTimeout(myStopFunction.bind(this), 5000);

             function myStopFunction(

             ):void {
               
               var i=0;
               var ar:number[]=[1,12,11,10,9,8,7,6,5,4,3,2,1];
               let  finalMessage = new Text("YOU WON "+ar[random]);
                        
                    finalMessage.x = 700;
                     finalMessage.y = 640;
                    this.stage.addChild(finalMessage);

                    console.log(ar[random]);
                    setTimeout(displa,3000);
                    function displa():void{
                     finalMessage.visible=false;
                    }
}
        });
    }
}