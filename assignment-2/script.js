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
    car.speed = 10;
    car.y = app.view.height/ 2;
    app.stage.addChild(car);

    app.stage.interactive = true;
    app.stage.on("pointerdown",movecar);

    const basicText = new PIXI.Text('CLICK ON THE CAR IT WILL ROTATE');
     basicText.y = 50;
     basicText.x = 210;
     app.stage.addChild(basicText);
}
function movecar()
{
    app.ticker.add(gameloop);
}
function gameloop(delta)
{
    car.rotation += 0.1 * delta;
}
