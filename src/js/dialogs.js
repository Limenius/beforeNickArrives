const dialogs = {
    MATT: {
        'Hi there': {
            response: 'Can\'t I just enjoy the party for a while?',
            available: true,
            tag: 'introductory',
            action: {
                type: 'hasTalked',
                character: 'MATT',
            }

            //dispatch(state) => {dis
            //    state.hasTalked.push('MATT');
            //    {...state, hasTalked} }
        },
        'Ok, enough for now': {
            response: 'Ok, buddy',
            available: true,
            tag: 'introductory',
            action: {
                type: 'hasTalked',
                character: 'MATT',
            }

            //dispatch(state) => {dis
            //    state.hasTalked.push('MATT');
            //    {...state, hasTalked} }
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
