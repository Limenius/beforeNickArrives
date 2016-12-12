const dialogs = {
    MATT: {
        'Hi there': {
            response: 'Can\'t I just enjoy the party for a while?',
            available: true,
            timeout: 2000,
            tag: 'introductory',

            //dispatch(state) => {dis
            //    state.hasTalked.push('MATT');
            //    {...state, hasTalked} }
        },
        'Have you even notice that Johnny is dead on the floor?': {
            response: 'Oh really?\nWell, so what?',
            available: false,
            timeout: 2000,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'MATT',
            }
        },
        'Ok, enough for now': {
            response: 'Ok, buddy',
            timeout: 2000,
            available: true,
            tag: 'introductory',
            trigger: {
                type: 'END DIALOG',
            }
        }
    },
    FLYNN: {
        'Hi there': {
            response: 'Can\'t I just enjoy the party for a while?',
            available: true,
        }
    },
}


export default dialogs;
