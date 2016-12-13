var PIXI = require('pixi.js');

require('../css/style.css');
import entities from './entities';
import actions from './actions';
import dialogs from './dialogs';
import Sound from './sound.js';

WebFont.load({
    custom: {
        families: ['Pixilator']
    },
    active: function() {
        main();
    }
});

function rectangle( x, y, width, height, backgroundColor, borderColor, borderWidth ) {
    var box = new PIXI.Graphics();
    box.beginFill(backgroundColor);
    box.lineStyle(borderWidth , borderColor);
    box.drawRect(0, 0, width - borderWidth, height - borderWidth);
    box.endFill();
    box.position.x = x + borderWidth/2;
    box.position.y = y + borderWidth/2;
    return box;
};

const main = () => {
    var game = new Game();
}

const offsetH = 150;

class Game {
    constructor() {

        this.mouseMove = this.mouseMove.bind(this);
        this.click = this.click.bind(this);
        this.clickDialog = this.clickDialog.bind(this);
        this.fadeOut = this.fadeOut.bind(this);

        this.renderer = PIXI.autoDetectRenderer(1000, 480 + offsetH, null, {noWebGl: true, antialias: false});
        this.stage = new PIXI.Container();
        document.getElementById('main-container').appendChild(this.renderer.view);

        this.rendererMap = PIXI.autoDetectRenderer(1000, 480, null, {antialias: false});
        this.imgMap = new PIXI.Container();
        this.rendererMap.view.style.position = 'absolute';
        this.rendererMap.view.style.top = '0px';
        this.rendererMap.view.style.left = '0px';

        this.statusText = new PIXI.Text('',{fontFamily : 'Pixilator', fontSize: '18px', fill : 0xeeeeee, 'text-align' : 'center'});
        this.statusText.anchor.set(0.5, 0.5);
        this.statusText.x = 500;
        this.statusText.y = 500;

        this.talkingText = new PIXI.Text('',{fontFamily : 'Pixilator', fontSize: '18px', fill : 0xeeeeee, 'text-align' : 'center', align: 'center'});
        this.talkingText.anchor.set(0.5, 0.5);
        this.talkingText.x = 500;
        this.talkingText.y = 50;
        this.act = 1

        this.uiState = {
            entity: null,
            action: 'LOOK',
            talkingTextTime: null,
            talkingTextTimeOut: 0,
            dialogOptions: [],
        }

        this.gameState = {
            dialogs: dialogs,
            hasTalked: [],
            loraRelationship: 0
        }

        this.sound = new Sound();

        Promise.all( [this.loadGraphics(), this.sound.load()] )
        .then( ([{loader, resources}, soundResolution]) => {
            this.onLoad(loader, resources)
        });

        this.preLoad();

    }

    preLoad(loader, resources) {
        var elkTexture = PIXI.Texture.fromImage('./dist/img/elk.png');
        var elk = new PIXI.Sprite(elkTexture);
        elk.anchor.x = 0.5;
        elk.anchor.y = 0.5;
        elk.position.x = 500;
        elk.position.y = 315;

        this.elk = elk;

        this.introText = new PIXI.Text('Before Nick arrives',{fontFamily : 'Pixilator', fontSize: '36px', fill : 0xeeeeee, 'text-align' : 'center', align: 'center'});
        this.introText.anchor.set(0.5, 0.5);
        this.introText.x = 500;
        this.introText.y = 60;

        this.introText2 = new PIXI.Text('Press space to play',{fontFamily : 'Pixilator', fontSize: '18px', fill : 0xeeeeee, 'text-align' : 'center', align: 'center'});
        this.introText2.anchor.set(0.5, 0.5);
        this.introText2.x = 500;
        this.introText2.y = 570;
        this.stage.addChild(this.elk);
        this.stage.addChild(this.introText);
        this.stage.addChild(this.introText2);

        this.renderer.render(this.stage);
        this.animate();

        const enterPreload = (evt) => {
            if (evt.keyCode == 32) {
                document.removeEventListener('keydown', enterPreload);
                this.preLoad2();
            }
        }
        document.addEventListener('keydown', enterPreload);
    }

    preLoad2() {
        this.introText.renderable = false;
        this.introText2.renderable = false;
        this.elk.renderable = false;

        this.intro2Text = new PIXI.Text('Today Nick was in a very bad mood.\n\nHer daugher Lora was having a party at his house with the boys.\n\nI better check if everything is in order with them.', {fontFamily : 'Pixilator', fontSize: '18px', fill : 0xeeeeee, 'text-align' : 'center', align: 'center'});
        this.intro2Text.anchor.set(0.5, 0.5);
        this.intro2Text.x = 500;
        this.intro2Text.y = 200;
        this.stage.addChild(this.intro2Text);
        this.renderer.render(this.stage);

        const enterStart = (evt) => {
            if (evt.keyCode == 32) {
                if (this.loaded) {
                    this.start();
                }
                document.removeEventListener('keydown', enterStart);
            }
        }
        const checkLoaded = () => {
            this.introText2.renderable = true;
            if (this.loaded) {
                this.introText2.text = 'Press space to continue'
                document.addEventListener('keydown', enterStart);
            } else {
                this.intoText2.text = 'Loading'
                setTimeout(checkLoaded, 200);
            }
            this.renderer.render(this.stage);
        }

        setTimeout(checkLoaded, 20);
    }

    renderDialogUI() {
        this.uiDialog = new PIXI.Container();
        this.uiDialog.position.x = 0;
        this.uiDialog.position.y = 510;
        this.stage.addChild(this.uiDialog);
    }

    renderUI() {
        this.uiActions = new PIXI.Container();
        this.uiActions.position.x = 0;
        this.uiActions.position.y = 530;

        this.action1Text = new PIXI.Text('Talk',{fontFamily : 'Pixilator', fontSize: '18px', fill : 0xeeeeee, 'text-align' : 'center', align: 'center'});
        this.action1Text.anchor.set(0.5, 0.5);
        this.action1Text.x = 166;
        this.action1Text.y = 0;

        this.action2Text = new PIXI.Text('Look',{fontFamily : 'Pixilator', fontSize: '18px', fill : 0xeeeeff, 'text-align' : 'center', align: 'center'});
        this.action2Text.anchor.set(0.5, 0.5);
        this.action2Text.x = 500;
        this.action2Text.y = 0;

        this.action3Text = new PIXI.Text('Touch',{fontFamily : 'Pixilator', fontSize: '18px', fill : 0xeeeeee, 'text-align' : 'center', align: 'center'});
        this.action3Text.anchor.set(0.5, 0.5);
        this.action3Text.x = 833;
        this.action3Text.y = 0;

        this.uiActions.addChild(this.action1Text);
        this.uiActions.addChild(this.action2Text);
        this.uiActions.addChild(this.action3Text);
        this.stage.addChild(this.uiActions);
    }

    renderNewUIActions() {
        this.action4Text = new PIXI.Text('Interrogate',{fontFamily : 'Pixilator', fontSize: '18px', fill : 0xeeeeee, 'text-align' : 'center', align: 'center'});
        this.action4Text.anchor.set(0.5, 0.5);
        this.action4Text.x = 166;
        this.action4Text.y = 30;

        this.action5Text = new PIXI.Text('Inspect',{fontFamily : 'Pixilator', fontSize: '18px', fill : 0xeeeeff, 'text-align' : 'center', align: 'center'});
        this.action5Text.anchor.set(0.5, 0.5);
        this.action5Text.x = 500;
        this.action5Text.y = 30;

        this.action6Text = new PIXI.Text('Frisk',{fontFamily : 'Pixilator', fontSize: '18px', fill : 0xeeeeee, 'text-align' : 'center', align: 'center'});
        this.action6Text.anchor.set(0.5, 0.5);
        this.action6Text.x = 833;
        this.action6Text.y = 30;

        this.uiActions.addChild(this.action4Text);
        this.uiActions.addChild(this.action5Text);
        this.uiActions.addChild(this.action6Text);
        this.stage.addChild(this.uiActions);
    }

    loadGraphics() {
        return new Promise( (resolve, reject) => {
            PIXI.loader
            .add('bg', './dist/img/room.png')
            .add('bgMap', './dist/img/room-map2.png')
            .add('phone', './dist/img/phonering.png')
            .load((loader, resources) => {
                resolve({loader, resources});
            });
        });
    }

    onLoad(loader, resources) {
        this.phoneText = new PIXI.Text('',{fontFamily : 'Pixilator', fontSize: '18px', fill : 0xeeeeee, 'text-align' : 'center', align: 'center'});
        this.phoneText.anchor.set(0.5, 0.5);
        this.phoneText.x = 380;
        this.phoneText.y = 305;

        var bgTexture = new PIXI.Texture(resources.bg.texture, new PIXI.Rectangle(0, 0, 1000, 480));
        var background = new PIXI.Sprite(bgTexture);
        background.anchor.x = 0;
        background.anchor.y = 0;
        background.position.x = 0;
        background.position.y = 0;

        this.background = background;

        function getFramesFromSpriteSheet(texture, frameWidth, frameHeight, row, numSprites) {
            var frames = [];
            for(var i = 0; i < numSprites; i++) {
                frames.push(new PIXI.Texture(texture.baseTexture, new PIXI.Rectangle(i * frameWidth, row * frameHeight, frameWidth, frameHeight)));
            }
            return frames;
        }
        var phoneFrames = getFramesFromSpriteSheet(resources.phone.texture, 58, 44, 0, 4);
        var phone = new PIXI.extras.MovieClip(phoneFrames);
        //var phoneTexture = new PIXI.Texture(resources.phone.texture, new PIXI.Rectangle(0, 0, 58, 44));
        //var phone = new PIXI.Sprite(phoneTexture);
        phone.animationSpeed = 0.3;
        phone.position.x = 354;
        phone.position.y = 324;
        //phone.play();

        this.phone = phone;

        var imgMapTexture = new PIXI.Texture(resources.bgMap.texture, new PIXI.Rectangle(0, 0, 1000, 480));
        var imgMapBg = new PIXI.Sprite(imgMapTexture);
        imgMapBg.anchor.x = 0;
        imgMapBg.anchor.y = 0;
        imgMapBg.position.x = 0;
        imgMapBg.position.y = 0;

        this.imgMap.addChild(imgMapBg);


        this.rendererMap.render(this.imgMap);

        this.loaded = true;
    }

    start() {
        this.introText2.renderable = false;

        this.songId = this.sound.play('song1');
        this.stage.addChild(this.background);
        this.stage.addChild(this.phone);
        this.stage.addChild(this.statusText);
        this.stage.addChild(this.talkingText);
        this.renderUI();
        this.renderDialogUI();

        this.stage.addChild(this.elk);
        this.stage.addChild(this.phoneText);
        this.renderer.render(this.stage);

        this.setUpUIEvents();

        this.screenFadeContainer = new PIXI.Container();
        this.screenFadeContainer.scale.x = this.screenFadeContainer.scale.y = 1;
        this.stage.addChild(this.screenFadeContainer);
        var fullSceenCover = rectangle(0, 0, 1000, 480 + offsetH, 0x000000, 0x000000, 0 );
        this.screenFadeContainer.addChild(fullSceenCover);
        this.fadeIn();

        //this.animate();
    }

    fadeIn(callback) {
        this.screenFadeContainer.alpha = this.screenFadeContainer.alpha - 0.05;
        if (this.screenFadeContainer.alpha > 0) {
            setTimeout(this.fadeIn.bind(this), 100);
        } else {
            callback && callback();
        }
    }

    fadeOut(callback) {
        console.log(callback);
        this.screenFadeContainer.alpha = this.screenFadeContainer.alpha + 0.05;
        if (this.screenFadeContainer.alpha < 1) {
            setTimeout(() => {this.fadeOut(callback)}, 100);
        } else {
        console.log('go');
            this.screenFadeContainer.alpha = 1
            console.log(callback);
            callback && callback();
        }
    }

    setUpUIEvents() {
        this.removeEvents();
        this.renderer.view.addEventListener('mousemove', this.mouseMove);
        this.renderer.view.addEventListener('click', this.click);
    }
    setUpDialogEvents() {
        this.removeEvents();
        //this.renderer.view.addEventListener('mousemove', this.mouseMove);
        this.renderer.view.addEventListener('click', this.clickDialog);
    }

    clickDialog(evt) {
        var mousePos = this.getMousePos(evt);
        const line = this.getDialogOption(mousePos.x, mousePos.y);
        if (!line) {
            return;
        }
        this.setTalkingText(line.response, line.timeout);
        line.trigger && this.dispatch(line.trigger);
    }

    getDialogOption(x, y) {
        if (y < 510) {
            return null;
        }
        const index = Math.floor((y - 510) / 30);
        const line = this.uiState.dialogOptions[index];
        return line;
    }

    removeEvents() {
        this.renderer.view.removeEventListener('mousemove', this.mouseMove);
        this.renderer.view.removeEventListener('click', this.click);
        this.renderer.view.removeEventListener('click', this.clickDialog);
    }

    click(evt) {
        var mousePos = this.getMousePos(evt);
        const verb = this.getVerb(mousePos.x, mousePos.y);
        if (verb) {
            this.uiState.action = verb;
            this.renderer.render(this.stage);
            return;
        }

        const entity = this.getMapCoord(mousePos.x, mousePos.y);
        if (entity) {
            this.runAction(entity, this.uiState.action);
        } else {
            this.talkingText.text = '';
        }
        this.renderer.render(this.stage);
    }

    runAction(entity, action) {
        if (action == 'TALK' || action == 'INTERROGATE') {
            if (dialogs[entity.key]) {
                this.uiDialog.renderable = true;
                return this.runDialog(dialogs[entity.key]);
            }
        }
        if (!entity.actions[action]) {
            this.setTalkingText("I can\'t do that.", 1500);
            return;
        }
        if (entity.actions[action].trigger) {
            this.dispatch(entity.actions[action].trigger);
        }
        this.setTalkingText(entity.actions[action].text, entity.actions[action].timeout);
    }

    setTalkingText(text, timeout) {
        this.talkingText.text = text;
        this.uiState.talkingTextTime = new Date();
        this.uiState.talkingTextTimeout = timeout;
    }

    runDialog(dialog) {
        this.renderDialogOptions(dialog);
    }

    renderDialogOptions(dialog) {
        this.uiActions.renderable = false;
        this.uiDialog.removeChildren();
        const keys = Object.keys(dialog);
        const textStyle = {fontFamily : 'Pixilator', fontSize: '18px', fill : 0xeeeeee, 'text-align' : 'left', align: 'left'}
        this.uiState.dialogOptions = [];

        const availableKeys = keys.filter((key) => {
            return dialog[key].available && dialog[key].interrogate == (this.uiState.action == 'TALK' ? false : true);
        });

        for (let i = 0; i < availableKeys.length; i++) {
            const key = availableKeys[i];
            var option = new PIXI.Text(key, textStyle);
            option.x = 20;
            option.y = i * 30;
            this.uiState.dialogOptions.push(dialog[key]);
            this.uiDialog.addChild(option);
        }
        this.setUpDialogEvents();
    }

    mouseMove(evt) {
        var mousePos = this.getMousePos(evt);
        const entity = this.getMapCoord(mousePos.x, mousePos.y);
        if (entity) {
            this.statusText.text = actions[this.uiState.action] + ' ' + entity.name;
        } else {
            this.statusText.text = actions[this.uiState.action];
        }
        this.renderer.render(this.stage);
    }

    getVerb(x, y) {
        if (this.act == 1) {
            if (x > 0 && x < 333 && y > 510 && y < 540) {
                return 'TALK';
            }
            if (x > 333 && x < 666 && y > 510 && y < 540) {
                return 'LOOK';
            }
            if (x > 666 && x < 1000 && y > 510 && y < 540) {
                return 'TOUCH';
            }
        } else {
            if (x > 0 && x < 333 && y > 510 && y < 540) {
                return 'TALK';
            }
            if (x > 333 && x < 666 && y > 510 && y < 540) {
                return 'LOOK';
            }
            if (x > 666 && x < 1000 && y > 510 && y < 540) {
                return 'TOUCH';
            }
            if (x > 0 && x < 333 && y > 540 && y < 570) {
                return 'INTERROGATE';
            }
            if (x > 333 && x < 666 && y > 540 && y < 570) {
                return 'INSPECT';
            }
            if (x > 666 && x < 1000 && y > 540 && y < 570) {
                return 'FRISK';
            }
        }
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
        var imgd = this.rendererMap.view.getContext('2d').getImageData(x, y, 1, 1);
        var pix = imgd.data;
        var hex = '#' + ('000000' + rgbToHex(pix[0], pix[1], pix[2])).slice(-6);
        return entities[hex];
    }

    animate() {
        var now = new Date();
        if (this.uiState.talkingTextTime) {
            if (now.getTime() - this.uiState.talkingTextTime.getTime() > this.uiState.talkingTextTimeout) {
                this.talkingText.text = '';
            }
        }
        if (this.time) {
            this.renderer.render(this.stage);
        }
        this.time = now;
        requestAnimationFrame(this.animate.bind(this));
        return this;
    }

    startAct2() {
        console.log('startAct2');
        var spacePlay = new PIXI.Text('Press space to play',{fontFamily : 'Pixilator', fontSize: '18px', fill : 0xeeeeee, 'text-align' : 'center', align: 'center'});
        spacePlay.anchor.set(0.5, 0.5);
        spacePlay.x = 500;
        spacePlay.y = 570;

        var nickText = new PIXI.Text('It was Nick.\n\nHe is coming.\n\nIf he sees the new guy dead without explanation he will kill me.', {fontFamily : 'Pixilator', fontSize: '18px', fill : 0xeeeeee, 'text-align' : 'center', align: 'center'});
        nickText.anchor.set(0.5, 0.5);
        nickText.x = 500;
        nickText.y = 200;

        const enterAct2 = (evt) => {
            this.songId = this.sound.play('song2');
            if (evt.keyCode == 32) {
                this.stage.removeChild(spacePlay);
                document.removeEventListener('keydown', enterAct2);
                this.phone.gotoAndStop(0);
                this.phoneText.renderable = false;
                this.renderNewUIActions();
                this.introText2.renderable = false;
                this.fadeIn();
            }
        }
        this.stage.addChild(spacePlay);
        this.stage.addChild(nickTextPlay);
        document.addEventListener('keydown', enterAct2);
    }


    dispatch(action) {
        switch (action.type) {
            case 'END DIALOG':
                this.uiDialog.renderable = false;
                this.uiActions.renderable = true;
                this.setUpUIEvents();
                if (this.gameState.hasTalked.length == 1) {
                    setTimeout(() => {
                        this.setTalkingText('Ok, I think I have talked to everybody, now what?', 4000);
                        setTimeOut(() => {
                            this.phone.play();
                            this.phoneText.text = 'RIIIING\nRIIING';
                            setTimeout(() => {
                                this.sound.stop('song1', this.songId);
                                this.fadeOut(() => {this.startAct2()});
                            }, 4000);
                        }, 3000);
                    }, 3000);
                    this.act = 2;
                }
                return;
            case 'LOOK BODY':
                this.makeDialogAvailableByTag('after-look-body');
                return;
            case 'FRISK BODY':
                this.makeDialogAvailableByTag('after-frisk-body');
                return;
            case 'FRISK RONNIE':
                this.makeDialogAvailableByTag('after-frisk-ronnie');
                return;
            case 'FRISK FLYNN':
                this.makeDialogAvailableByTag('after-frisk-flynn');
                return;
            case 'FRISK MOOSE':
                this.makeDialogAvailableByTag('after-frisk-moose');
                return;
            case 'LORA NUMBER':
                this.makeDialogAvailableByTag('after-lora-number');
                return;
            case 'LORA RELATIONSHIP':
                this.makeDialogAvailableByTag('after-lora-relationship');
                return;
            case 'LORA CONFESSION':
                this.makeDialogAvailableByTag('after-lora-confession');
                return;
            case 'LORA MOTIVATION':
                this.makeDialogAvailableByTag('after-lora-motivation');
                this.makeDialogUnavailableByTag('after-frisk-body');
                return;
            case 'LORA OPPORTUNITY':
                this.makeDialogAvailableByTag('after-lora-opportunity');
                return;
            case 'HAS TALKED':
                if (this.gameState.hasTalked.indexOf(action.character) == -1) {
                    this.gameState.hasTalked.push(action.character);
                }
                return;
            default:
                return;
        }
    }

    makeDialogAvailableByTag(tag) {
        for (var character in dialogs) {
            for (var line in dialogs[character]) {
                if (dialogs[character][line].tag && dialogs[character][line].tag == tag) {
                    dialogs[character][line].available = true;

                }
            }
        }
    }
    makeDialogUnvailableByTag(tag) {
        for (var character in dialogs) {
            for (var line in dialogs[character]) {
                if (dialogs[character][line].tag && dialogs[character][line].tag == tag) {
                    dialogs[character][line].available = false;

                }
            }
        }
    }
}


function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw 'Invalid color component';
    return ((r << 16) | (g << 8) | b).toString(16);
}
