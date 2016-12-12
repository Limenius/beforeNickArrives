const dialogs = {
    MATT: {
        'How are you doing, Matt?': {
            response: 'All good, Jack. Trying to enjoy the party here.',
            available: true,
            timeout: 2000,
            tag: 'introductory',
            act: 1,
            interrogate: false

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
            },
            act: 1,
            interrogate: false
        },
        'Have you been here long?': {
            response: 'Not much.\nWas almost everyone already here when I arrived.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'MATT',
            },
            act: 1,
            interrogate: true
        },
        'Talk to you later': {
            response: 'Sure',
            timeout: 2000,
            available: true,
            tag: 'introductory',
            trigger: {
                type: 'END DIALOG',
            },
            act: 1,
            interrogate: false
        }
    },
    FLYNN: {
        'Hi there, Flynn.': {
            response: 'Hi, Jack. This sounds quite good, ugh?',
            available: true,
            timeout: 2500,
            act: 1,
            interrogate: false
        },
        'What happened here?': {
            response: 'Not much, Jack. But I\'m feeling inspired today.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'FLYNN',
            },
            act: 1,
            interrogate: false
        },
        'Have you seen someone acting weird?': {
            response: 'People ARE weird Jack, you should know that.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'FLYNN',
            },
            act: 1,
            interrogate: true
        },
        'Ok, enough for now.': {
            response: 'Ok, buddy',
            timeout: 2000,
            available: true,
            tag: 'introductory',
            trigger: {
                type: 'END DIALOG',
            },
            act: 1,
            interrogate: false
        }
    },
    RONNIE: {
        'Hey, Ronnie.': {
            response: 'Hi, Jack, good to see you.',
            available: true,
            timeout: 2500,
            act: 1,
            interrogate: false
        },
        'What\'s this mess? Nick is going to be mad.': {
            response: 'I guessed you wouldn\'t be happy.\nMaybe I\'m getting better at the guessing thing.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'MATT',
            },
            act: 1,
            interrogate: false
        },
        'Why are you at the door?': {
            response: 'I just arrived. I thought\nyou would like me to watch the door.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'FLYNN',
            },
            act: 1,
            interrogate: true
        },
        'Hold in there.': {
            response: 'As you say, Jack.',
            timeout: 2000,
            available: true,
            tag: 'introductory',
            trigger: {
                type: 'END DIALOG',
            },
            act: 1,
            interrogate: false
        }
    },
    TONNY: {
        'Enjoying some fresh air, Tonny?': {
            response: 'Do I really need to answer that?',
            available: true,
            timeout: 2500,
            act: 1,
            interrogate: false
        },
        'Can you help me out a bit here?': {
            response: 'Not really.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'TONNY',
            },
            act: 1,
            interrogate: false
        },
        'Who was in the room when you came in?': {
            response: 'Just those two at the bar. Lucky me.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'TONNY',
            },
            act: 1,
            interrogate: true
        },
        'Ok... See you later.': {
            response: 'Are you planning to spoil my whole evening?',
            timeout: 2000,
            available: true,
            tag: 'introductory',
            trigger: {
                type: 'END DIALOG',
            },
            act: 1,
            interrogate: false
        }
    },
    LORA: {
        'How are you feeling today, Lora?': {
            response: 'What do you care, Jack?',
            available: true,
            timeout: 2500,
            act: 1,
            interrogate: false
        },
        'Do you know why the new guy is dead in the middle of the room?': {
            response: 'Do you think I waste my precious time\nwith that kind of things, Jack?',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'LORA',
            },
            act: 1,
            interrogate: false
        },
        'Who was here when you arrived?': {
            response: 'You really know how to party, Jack...\nNo one.\nUnless you still want to call THAT someone.',
            available: false,
            timeout: 4000,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'LORA',
            },
            act: 1,
            interrogate: true
        },
        'Nice talking to you...': {
            response: 'I wish I could say the same.',
            timeout: 2000,
            available: true,
            tag: 'introductory',
            trigger: {
                type: 'END DIALOG',
            },
            act: 1,
            interrogate: false
        }
    },
    JOE: {
        'Hi, Joe, how is it going?': {
            response: 'Pretty well, Jack, we have some good Scotch here.',
            available: true,
            timeout: 2500,
            act: 1,
            interrogate: false
        },
        'What happened with Johnny?': {
            response: 'I don\'t know, Jack, he was there when I arrived.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'JOE',
            },
            act: 1,
            interrogate: false
        },
        'For how long have you been here?': {
            response: 'I came a while ago with Lora.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'JOE',
            },
            act: 1,
            interrogate: true
        },
        'Thanks, Joe.': {
            response: 'No problem, man.',
            timeout: 2000,
            available: true,
            tag: 'introductory',
            trigger: {
                type: 'END DIALOG',
            },
            act: 1,
            interrogate: false
        }
    },
}


export default dialogs;
