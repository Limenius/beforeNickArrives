const dialogs = {
    MATT: {
        'How are you doing, Matt?': {
            response: 'All good, Jack. Trying to enjoy the party here.',
            available: true,
            timeout: 2000,
            tag: 'introductory',
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
            interrogate: false
        },
        'Have you been here long?': {
            response: 'Not much.\nWas almost everyone already here when I arrived.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            interrogate: true
        },
        'Why does Jhonny have a threatening note with your handwriting in his pocket, Matt?': {
            response: 'Mmm... He caught me gambling again and suggested\nthat he could tell Nick.\nI explained to him that we don\'t like rats.',
            available: false,
            timeout: 5000,
            tag: 'after-frisk-body',
            trigger: {
                type: 'HAS TALKED',
                character: 'MATT',
            },
            interrogate: true
        },
        'Do you recognize this phone number?': {
            response: 'I don\'t think so.',
            available: false,
            timeout: 2000,
            tag: 'after-frisk-flynn',
            interrogate: true
        },
        'Any idea why there was a picture of Lora naked behind the moose?': {
            response: 'No, but she has a problem now.\nNick told her to stop doing that sort of thing\nor he would move her away from the business.',
            available: false,
            timeout: 6000,
            tag: 'after-frisk-moose',
            interrogate: true
        },
        'Why would Jonnhy have Lora\'s number in his pocket?': {
            response: 'Well, I\'m not the detective here, \nbut what do you think, Jack...?.',
            available: false,
            timeout: 6000,
            tag: 'after-lora-number',
            trigger: {
                type: 'LORA RELATIONSHIP',
            },
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
            interrogate: false,
            ending: true
        },
        'I\'ll be back.': {
            response: 'Ok.',
            timeout: 2000,
            available: false,
            tag: 'ending-interrogate',
            trigger: {
                type: 'END DIALOG',
            },
            interrogate: true,
            ending: true
        }
    },
    FLYNN: {
        'Hi there, Flynn.': {
            response: 'Hi, Jack. This sounds quite good, ugh?',
            available: true,
            timeout: 2500,
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
            interrogate: false
        },
        'Have you seen someone acting weird?': {
            response: 'People ARE weird Jack, you should know that.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            interrogate: true
        },
        'Why are you still carrying a picture of Lora?': {
            response: 'For an artist, there is nothing\nlike digging into his own misery.',
            available: false,
            timeout: 4000,
            tag: 'after-frisk-flynn',
            trigger: {
                type: 'HAS INTERROGATED',
                character: 'FLYNN',
            },
            interrogate: true
        },
        'Do you recognize this phone number?': {
            response: 'Sure, it\'s Lora\'s.',
            available: false,
            timeout: 3000,
            tag: 'after-frisk-flynn',
            trigger: {
                type: 'LORA NUMBER',
            },
            interrogate: true
        },
        'Do you recognize this collar before, Flynn?': {
            response: 'I recognize everything but the collar.',
            available: false,
            timeout: 3000,
            tag: 'after-frisk-moose',
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
            interrogate: false,
            ending: true
        },
        'I\'ll be back.': {
            response: 'Ok, Jack.',
            timeout: 2000,
            available: false,
            tag: 'ending-interrogate',
            trigger: {
                type: 'END DIALOG',
            },
            interrogate: true,
            ending: true
        }
    },
    RONNIE: {
        'Hey, Ronnie.': {
            response: 'Hi, Jack, good to see you.',
            available: true,
            timeout: 2500,
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
            interrogate: false
        },
        'Why are you at the door?': {
            response: 'I thought\nyou would like me to watch the door.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
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
            interrogate: true
        },
        'Do you recognize this phone number?': {
            response: 'Nope.',
            available: false,
            timeout: 2000,
            tag: 'after-frisk-flynn',
            interrogate: true
        },
        'Any idea why there was a picture of Lora naked behind the moose?': {
            response: 'Maybe is not what it looks.',
            available: false,
            timeout: 3000,
            tag: 'after-frisk-moose',
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
            interrogate: false,
            ending: true
        },
        'I\'ll be back.': {
            response: 'Sure.',
            timeout: 2000,
            available: false,
            tag: 'ending-interrogate',
            trigger: {
                type: 'END DIALOG',
            },
            interrogate: true,
            ending: true
        }
    },
    TONNY: {
        'Enjoying some fresh air, Tonny?': {
            response: 'Do I really need to answer that?',
            available: true,
            timeout: 2500,
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
            interrogate: false
        },
        'Who was in the room when you came in?': {
            response: 'Just those two at the bar. Lucky me.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
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
            interrogate: true
        },
        'Do you recognize this phone number?': {
            response: 'No idea, Jack.',
            available: false,
            timeout: 2000,
            tag: 'after-frisk-flynn',
            interrogate: true
        },
        'Any idea why there was a picture of Lora naked behind the moose?': {
            response: 'Nope. But it doesn\'t sound too surprising to me.',
            available: false,
            timeout: 3000,
            tag: 'after-frisk-moose',
            interrogate: true
        },
        'Lora had a secret relationship with Johnny. I wonder if she killed him. But why would?': {
            response: 'To steal that necklace from him? Because he was\nbecoming a problem for her? Just for fun?\nThat woman doesn\'t need much reason to kill someone.',
            available: false,
            timeout: 8000,
            tag: 'after-lora-confession',
            trigger: {
                type: 'LORA MOTIVATION',
            },
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
            interrogate: false
        },
        'I\'ll be back.': {
            response: 'Ok...',
            timeout: 2000,
            available: false,
            tag: 'ending-interrogate',
            trigger: {
                type: 'END DIALOG',
            },
            interrogate: true,
            ending: true
        }
    },
    LORA: {
        'How are you feeling today, Lora?': {
            response: 'What do you care, Jack?',
            available: true,
            timeout: 2500,
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
            interrogate: false
        },
        'Who was here when you arrived?': {
            response: 'You really know how to party, Jack...\nNo one.\nUnless you still want to call THAT someone.',
            available: false,
            timeout: 4000,
            tag: 'after-look-body',
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
            interrogate: true
        },
        'Do you recognize this phone number?': {
            response: 'Oh, leave me alone.',
            available: false,
            timeout: 2000,
            tag: 'after-frisk-body',
            interrogate: true
        },
        'Ehem... nice pearls in this picture, Lora.': {
            response: 'WHERE DID YOU GET THAT FROM?!',
            available: false,
            timeout: 3000,
            tag: 'after-frisk-moose',
            interrogate: true
        },
        'I think you were having an affair with Johnny, Lora.': {
            response: 'Oh, you are a pain. Ok, YES. I was. And what about that?\nThat doesn\'t mean that I killed him.\nBut I will kill YOU if you mention any of this to Nick.',
            available: false,
            timeout: 8000,
            tag: 'after-lora-relationship',
            trigger: {
                type: 'LORA CONFESSION',
            },
            interrogate: true
        },
        'I\'m sure you killed him, Lora. EVERYTHING is pointing to you.\nIT MUST BE YOU.': {
            response: 'How you dare...?! It wasn\'t me!!',
            available: false,
            timeout: 8000,
            tag: 'after-lora-opportunity',
            trigger: {
                type: 'LORA ACCUSATION',
            },
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
            interrogate: false
        },
        'I\'ll be back.': {
            response: 'Oh, well...',
            timeout: 2000,
            available: false,
            tag: 'ending-interrogate',
            trigger: {
                type: 'END DIALOG',
            },
            interrogate: true,
            ending: true
        }
    },
    JOE: {
        'Hi, Joe, how is it going?': {
            response: 'Pretty well, Jack, we have some good Scotch here.',
            available: true,
            timeout: 2500,
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
            interrogate: false
        },
        'For how long have you been here?': {
            response: 'I came a while ago with Lora.',
            available: false,
            timeout: 2500,
            tag: 'after-look-body',
            interrogate: true
        },
        'Do you recognize this phone number?': {
            response: 'Not really.',
            available: false,
            timeout: 2000,
            tag: 'after-frisk-flynn',
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
            interrogate: true
        },
        'I think Lora may have killed Johnny. But how could she? She came with you...': {
            response: 'Well, technically, I didn\'t came WITH her. I saw her entering the room.\nBut we didn\'t arrive together to the building.\nMaybe she was here before.',
            available: false,
            timeout: 8000,
            tag: 'after-lora-motivation',
            trigger: {
                type: 'LORA OPPORTUNITY',
            },
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
            interrogate: false
        },
        'I\'ll be back.': {
            response: 'Good.',
            timeout: 2000,
            available: false,
            tag: 'ending-interrogate',
            trigger: {
                type: 'END DIALOG',
            },
            interrogate: true,
            ending: true
        }
    },
}


export default dialogs;
