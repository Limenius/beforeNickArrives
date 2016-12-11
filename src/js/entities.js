import actions from './actions';

const entities = {
    '#0000ff' : {
        name: 'sofa',
        actions: {
            LOOK : {
                text: 'A sofa. Looks cozy, but Matt is sitting on it.',
                timeout: 3000,
            }
        }
    },
    '#ff0000' : {
        name: 'elk head',
        actions: {
            LOOK : {
                text: 'Its face reminds me of a past relationship. \nI don\'t really want to talk about it.',
                timeout: 5000,
            }
        }
    },
    '#00ff00' : {
        name: 'Johnny\s body',
        actions: {
            LOOK : {
                text: 'He is dead.\nBetter sort this out before Nick arrives.',
                timeout: 5000,
            }
        }
    },
}

export default entities;
