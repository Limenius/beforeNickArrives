var PIXI = require('pixi.js')

window.onload = function ()
{
    var game = new Game();
    //game.load();
    //game.animate();
};

class Game {
    constructor() {
        this.renderer = PIXI.autoDetectRenderer(1000, 480, null, {noWebGl: true, antialias: false});
        // create an empty container
        this.stage = new PIXI.Container();
        document.getElementById('main-container').appendChild(this.renderer.view);
        this.renderer.view.style.position = 'absolute';
        this.renderer.view.style.top = '0px';
        this.renderer.view.style.left = '0px';

        this.rendererMap = PIXI.autoDetectRenderer(1000, 480, null, {antialias: false});
        this.imgMap = new PIXI.Container();
        this.rendererMap.view.style.position = 'absolute';
        this.rendererMap.view.style.top = '0px';
        this.rendererMap.view.style.left = '0px';

        Promise.all( [this.loadGraphics()] )
        .then( ([{loader, resources}]) => {
            this.onLoad(loader, resources)
        });
    }

    loadGraphics() {
        return new Promise( (resolve, reject) => {
            PIXI.loader
            .add('bg', '/dist/img/room.png')
            .add('bgMap', '/dist/img/room-map2.png')
            .load((loader, resources) => {
                resolve({loader, resources});
            });
        });
    }

    onLoad(loader, resources) {
        var bgTexture = new PIXI.Texture(resources.bgMap.texture, new PIXI.Rectangle(0, 0, 1000, 480));
        var background = new PIXI.Sprite(bgTexture);
        background.anchor.x = 0;
        background.anchor.y = 0;
        background.position.x = 0;
        background.position.y = 0;
        this.stage.addChild(background);
        this.renderer.render(this.stage);


        var imgMapTexture = new PIXI.Texture(resources.bgMap.texture, new PIXI.Rectangle(0, 0, 1000, 480));
        var imgMapBg = new PIXI.Sprite(imgMapTexture);
        imgMapBg.anchor.x = 0;
        imgMapBg.anchor.y = 0;
        imgMapBg.position.x = 0;
        imgMapBg.position.y = 0;

        this.imgMap.addChild(imgMapBg);
        this.rendererMap.render(this.imgMap);

        console.log(this.rendererMap.view)
        var imgd = this.renderer.view.getContext('2d').getImageData(250, 350, 1, 1);
        var pix = imgd.data;
        var hex = "#" + ("000000" + rgbToHex(pix[0], pix[1], pix[2])).slice(-6); 
        console.log(hex);
    }
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}
