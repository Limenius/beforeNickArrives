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
            act: 1,
            interrogate: true
        },
        'Why does Jhonny have a threatening note with your handwriting in his pocket, Matt?': {
            response: 'Mmm... He caught me gambling again and suggested\nthat he could tell Nick.\nI explained to him that we don\'t like rats.',
            available: false,
            timeout: 3500,
            tag: 'after-frisk-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'MATT',
            },
            act: 1,
            interrogate: true
        },
        'Do you recognize this phone number?': {
            response: 'I don\'t think so.',
            available: false,
            timeout: 2000,
            tag: 'after-frisk-flynn',
            act: 1,
            interrogate: true
        },
        'Talk to you later.': {
            response: 'Sure.',
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
            act: 1,
            interrogate: true
        },
        'Why are you still carrying a picture of Lora?': {
            response: 'For an artist, there is nothing\nlike digging into his own misery.',
            available: false,
            timeout: 4000,
            tag: 'after-frisk-flynn',
            trigger: {
                type: 'HAS TALKED',
                character: 'FLYNN',
            },
            act: 1,
            interrogate: true
        },
        'Do you recognize this phone number?': {
            response: 'Sure, it\'s Lora\'s.',
            available: false,
            timeout: 3000,
            tag: 'after-frisk-flynn',
            trigger: {
                type: 'LORA CLUE',
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
            timeout: 3500,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'RONNIE',
            },
            act: 1,
            interrogate: false
        },
        'Why are you at the door?': {
            response: 'I thought\nyou would like me to watch the door.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            act: 1,
            interrogate: true
        },
        'A fast diet book...?': {
            response: 'I\'m considering losing some weight. For the beach, you know...',
            available: false,
            timeout: 2500,
            tag: 'after-frisk-ronnie',
            trigger: {
                type: 'HAS INTERROGATED',
                character: 'RONNIE',
            },
            act: 1,
            interrogate: true
        },
        'Do you recognize this phone number?': {
            response: 'Nope.',
            available: false,
            timeout: 2000,
            tag: 'after-frisk-flynn',
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
            act: 1,
            interrogate: true
        },
        'Johnny has a pack of cigarettes in his pocket. Same brand you have.': {
            response: 'And that proves...?',
            available: false,
            timeout: 4000,
            tag: 'after-frisk-body',
            trigger: {
                type: 'HAS INTERROGATED',
                character: 'TONNY',
            },
            act: 1,
            interrogate: true
        },
        'Do you recognize this phone number?': {
            response: 'No idea, Joe.',
            available: false,
            timeout: 2000,
            tag: 'after-frisk-flynn',
            act: 1,
            interrogate: true
        },
        'Ok... See you later.': {
            response: 'If you say so',
            timeout: 1500,
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
            act: 1,
            interrogate: true
        },
        'Who do you think did this?': {
            response: 'You know that I don\'t like to talk, Jack, but many in this room wanted him dead.',
            available: false,
            timeout: 2500,
            tag: 'after-frisk-body',
            trigger: {
                type: 'HAS INTERROGATED',
                character: 'LORA',
            },
            act: 1,
            interrogate: true
        },
        'Do you recognize this phone number?': {
            response: 'Oh, leave me alone!',
            available: false,
            timeout: 2000,
            tag: 'after-frisk-flynn',
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
            act: 1,
            interrogate: true
        },
        'Do you recognize this phone number?': {
            response: 'Not really.',
            available: false,
            timeout: 2000,
            tag: 'after-frisk-flynn',
            act: 1,
            interrogate: true
        },
        'Were you borrowing money from Johnny, Joe?': {
            response: 'He offered! And I was about to pay him back, Jack.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            trigger: {
                type: 'HAS INTERROGATED',
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
