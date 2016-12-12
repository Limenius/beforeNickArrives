import howler from 'howler';

export default class Sound {
    constructor() {
    }

    load() {
        return new Promise( (resolve, reject) => {
            this.sounds = {
                song1 : new Howl({
                    src: ['./dist/music/song3.mp3'],
                    loop: true,
                    volume: 0.5,
                    onload: function() {
                        resolve();
                    }
                }),
                song2 : new Howl({
                    src: ['./dist/music/song2.mp3'],
                    loop: true,
                    volume: 0.5,
                    onload: function() {
                        resolve();
                    }
                }),
                song3 : new Howl({
                    src: ['./dist/music/song1.mp3'],
                    loop: true,
                    volume: 0.5,
                    onload: function() {
                        resolve();
                    }
                }),
            }
        } );
    }

    play(soundName) {
        this.sounds[soundName].play();
    }
}
