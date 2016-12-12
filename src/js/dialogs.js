const dialogs = {
    MATT: {
        'How are you doing, Matt?': {
            response: 'All good, Jack. Trying to enjoy the party here.',
            available: true,
            timeout: 2000,
            tag: 'introductory',

            //dispatch(state) => {dis
            //    state.hasTalked.push('MATT');
            //    {...state, hasTalked} }
        },
        'Have you even noticed that Johnny is dead on the floor?': {
            response: 'Really? I thought he was taking a nap.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'MATT',
            }
        },
        'Talk to you later': {
            response: 'Sure',
            timeout: 2000,
            available: true,
            tag: 'introductory',
            trigger: {
                type: 'END DIALOG',
            }
        }
    },
    FLYNN: {
        'Hi there, Flynn': {
            response: 'Hi, Jack. This sounds quite good, ugh?',
            available: true,
            timeout: 2500,
        },
        'What happened here?': {
            response: 'Not much, Jack. But I\'m feeling inspired today.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'MATT',
            }
        },
        'Ok, enough for now.': {
            response: 'Ok, buddy',
            timeout: 2000,
            available: true,
            tag: 'introductory',
            trigger: {
                type: 'END DIALOG',
            }
        }
    },
    RONNIE: {
        'Hey, Ronnie.': {
            response: 'Hi, Jack, good to see you.',
            available: true,
            timeout: 2500,
        },
        'What\'s this mess? Nick is going to be mad.': {
            response: 'I guessed you wouldn\'t be happy.\nMaybe I\'m getting better at the guessing thing.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'MATT',
            }
        },
        'Hold in there.': {
            response: 'As you say, Jack.',
            timeout: 2000,
            available: true,
            tag: 'introductory',
            trigger: {
                type: 'END DIALOG',
            }
        }
    },
    TONNY: {
        'Enjoying some fresh air, Tonny?': {
            response: 'Do I really need to answer that?',
            available: true,
            timeout: 2500,
        },
        'Can you help me out a bit here?': {
            response: 'Not really.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'MATT',
            }
        },
        'Ok... See you later.': {
            response: 'Are you planning to spoil my whole evening?',
            timeout: 2000,
            available: true,
            tag: 'introductory',
            trigger: {
                type: 'END DIALOG',
            }
        }
    },
    LORA: {
        'How are you feeling today, Lora?': {
            response: 'What do you care, Jack?',
            available: true,
            timeout: 2500,
        },
        'Do you know why the new guy is dead in the middle of the room?': {
            response: 'Do you think I waste my precious time\nwith that kind of things, Jack?',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'MATT',
            }
        },
        'Nice talking to you, Lora...': {
            response: 'I wish I could say the same.',
            timeout: 2000,
            available: true,
            tag: 'introductory',
            trigger: {
                type: 'END DIALOG',
            }
        }
    },
    JOE: {
        'Hi, Joe, how is it going?': {
            response: 'Pretty well, Jack, we have some good Scotch here.',
            available: true,
            timeout: 2500,
        },
        'What happened with Johnny?': {
            response: 'I don\'t know, Jack, he was there when I arrived.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'MATT',
            }
        },
        'Thanks, Joe.': {
            response: 'No problem, man.',
            timeout: 2000,
            available: true,
            tag: 'introductory',
            trigger: {
                type: 'END DIALOG',
            }
        }
    },
}


export default dialogs;
