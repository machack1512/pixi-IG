
let app;
let  car;
window.onload = function() {
    app = new PIXI.Application(
        {
            width: 850,
            height: 620,
            backgroundColor: 0xAAAAAA
        }
    );
    document.getElementById("game").appendChild(app.view);
    
    car = new PIXI.Sprite.from("transparent.png");
    car.anchor.set(0.5);
    car.x = app.view.width / 2;
    car.width = 390;
    car.height = 290;
    car.y = app.view.height/ 2;
    app.stage.addChild(car);

    const basicText = new PIXI.Text('ASSIGNMENT 1 HELLO, PIXI');
     basicText.y = app.view.height/ 2;
     basicText.x = 240;
     app.stage.addChild(basicText);

}