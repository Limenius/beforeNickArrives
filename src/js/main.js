var PIXI = require('pixi.js');

require('../scss/style.scss');
import entities from './entities';
import actions from './actions';

WebFont.load({
    google: {
        families: ['VT323', 'Droid Serif']
    },
    custom: {
        families: ["Foo"]
    },
    active: function() {
        main();
    }
});

const main = () => {
    var game = new Game();
}

const offsetH = 100;

class Game {
    constructor() {
        this.renderer = PIXI.autoDetectRenderer(1000, 480 + offsetH, null, {noWebGl: true, antialias: false});
        this.stage = new PIXI.Container();
        document.getElementById('main-container').appendChild(this.renderer.view);

        this.rendererMap = PIXI.autoDetectRenderer(1000, 480, null, {antialias: false});
        this.imgMap = new PIXI.Container();
        this.rendererMap.view.style.position = 'absolute';
        this.rendererMap.view.style.top = '0px';
        this.rendererMap.view.style.left = '0px';

        this.statusText = new PIXI.Text('',{font : '18px Pixilator', fill : 0xffffff, 'text-align' : 'center'});
        this.statusText.anchor.set(0.5, 0.5);
        this.statusText.x = 500;
        this.statusText.y = 520;

        this.talkingText = new PIXI.Text('',{font : '18px Pixilator', fill : 0xffffff, 'text-align' : 'center'});
        this.talkingText.anchor.set(0.5, 0.5);
        this.talkingText.x = 500;
        this.talkingText.y = 50;

        this.state = {
            entity: null,
            action: 'LOOK',
        }
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
        this.stage.addChild(this.statusText);
        this.stage.addChild(this.talkingText);
        this.renderer.render(this.stage);


        var imgMapTexture = new PIXI.Texture(resources.bgMap.texture, new PIXI.Rectangle(0, 0, 1000, 480));
        var imgMapBg = new PIXI.Sprite(imgMapTexture);
        imgMapBg.anchor.x = 0;
        imgMapBg.anchor.y = 0;
        imgMapBg.position.x = 0;
        imgMapBg.position.y = 0;

        this.imgMap.addChild(imgMapBg);
        this.rendererMap.render(this.imgMap);

        this.renderer.view.addEventListener('mousemove', this.mouseMove.bind(this));
        this.renderer.view.addEventListener('click', this.click.bind(this));
    }

    click(evt) {
        var mousePos = this.getMousePos(evt);
        const entity = this.getMapCoord(mousePos.x, mousePos.y);
        if (entity) {
            this.talkingText.text = entity.actions[this.state.action];
        } else {
            this.talkingText.text = '';
        }
        this.renderer.render(this.stage);
    }

    mouseMove(evt) {
        var mousePos = this.getMousePos(evt);
        const entity = this.getMapCoord(mousePos.x, mousePos.y);
        if (entity) {
            this.statusText.text = actions[this.state.action] + ' ' + entity.name;
        } else {
            this.statusText.text = '';
        }
        this.renderer.render(this.stage);
    }

    getMousePos(evt) {
        var canvas = document.querySelector('canvas');
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top,
        };
    }

    getMapCoord(x, y) {
        var imgd = this.renderer.view.getContext('2d').getImageData(x, y, 1, 1);
        var pix = imgd.data;
        var hex = '#' + ('000000' + rgbToHex(pix[0], pix[1], pix[2])).slice(-6);
        return entities[hex];
    }

    animate() {
        var now = new Date();
        if (this.time) {
            this.renderer.render(this.stage);
        }
        this.time = now;
        requestAnimationFrame(this.animate.bind(this));
        return this;
    }

}


function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw 'Invalid color component';
    return ((r << 16) | (g << 8) | b).toString(16);
}
