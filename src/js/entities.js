const entities = {
    '#0000ff' : {
        name: 'sofa',
        actions: {
            LOOK : {
                text: 'A sofa. Looks cozy, but Matt is sitting on it.',
                timeout: 3000,
            },
            TOUCH : {
                text: 'So soft... I wish I had one at home.',
                timeout: 1500,
            },
        }
    },
    '#ff0000' : {
        name: 'moose head',
        actions: {
            LOOK : {
                text: 'Its face reminds me of a past relationship. \nI don\'t really want to talk about it.',
                timeout: 5000,
            },
            TALK : {
                text: 'As therapeutic as it could be, I am not sure\nif it would gain me much respect from the others.',
                timeout: 5000,
            },
            TOUCH : {
                text: 'I have mixed feelings about this.',
                timeout: 1500,
            },
            INSPECT : {
                text: 'The longer I stare at that thing, the sicker I feel.',
                timeout: 2000,
            },
            FRISK : {
                text: 'Oh, something fell from behind...\nIt\'s a picture of Lora wearing a pearl collar...\nActually, wearing ONLY a pearl collar.',
                timeout: 7000,
                trigger: {
                    type: 'FRISK MOOSE',
                }
            }
        }
    },
    '#00ff00' : {
        name: 'Johnny\'s body',
        actions: {
            LOOK : {
                text: 'He is dead.\nBetter sort this out before Nick arrives.',
                timeout: 5000,
                trigger: {
                    type: 'LOOK BODY',
                }
            },
            TOUCH : {
                text: 'It is cold.',
                timeout: 1500,
            },
            TALK : {
                text: 'That would help, ugh?',
                timeout: 2000,
            },
            INSPECT : {
                text: 'He was shot.\nHe has some stuff in his pockets.',
                timeout: 2000,
            },
            FRISK : {
                text: 'Ok... A threatening note with Matt\'s writing,\na promisory note from Joe, a pack of cigarettes,\nand a handwritten phone number that sounds familiar.',
                timeout: 7000,
                trigger: {
                    type: 'FRISK BODY',
                }
            },
            INTERROGATE : {
                text: 'It seems impolite.',
                timeout: 2000,
            },
        }
    },
    '#ae289d' : {
        name: 'the telephone',
        actions: {
            LOOK : {
                text: 'It\'s a phone.',
                timeout: 1500,
            },
            TOUCH : {
                text: 'There is no one I can call to fix this.\nI need to do it myself. Better to hurry.',
                timeout: 3000,
            },
            TALK : {
                text: 'It is not ringing.',
                timeout: 2000,
            },
            INSPECT : {
                text: 'I don\'t see anything remarkable there.',
                timeout: 2000,
            },
        }
    },
    '#2fb068' : {
        name: 'bottle of tequila',
        actions: {
            LOOK : {
                text: 'Jose Cuervo Special Gold.',
                timeout: 1500,
            },
            TOUCH : {
                text: 'I don\'t think is the right time for that...',
                timeout: 1500,
            },
            INSPECT : {
                text: 'I don\'t see anything remarkable there.',
                timeout: 2000,
            },
        }
    },
    '#b32633' : {
        name: 'woman coat',
        actions: {
            LOOK : {
                text: 'It\'s a woman coat.',
                timeout: 1500,
            },
            TOUCH : {
                text: 'It is not mine.',
                timeout: 1500,
            },
            INSPECT : {
                text: 'It must be Lora\'s coat. There is nothing in the pockets.',
                timeout: 2000,
            },
        }
    },
    '#9d9d9d' : {
        name: 'coat',
        actions: {
            LOOK : {
                text: 'It\'s a coat.',
                timeout: 1500,
            },
            TOUCH : {
                text: 'It is not mine.',
                timeout: 1500,
            },
            INSPECT : {
                text: 'I don\'t know from whom is it. There is a pearl collar in one of the pockets.',
                timeout: 4000,
            },
        }
    },
    '#a46422' : {
        name: 'the door',
        actions: {
            LOOK : {
                text: 'That\'s the door. Ronnie is holding it.',
                timeout: 1500,
            },
            TOUCH : {
                text: 'I have no time for a walk.\nI need to figure out what happened here.',
                timeout: 1500,
            },
            INSPECT : {
                text: 'I don\'t see anything remarkable there.\nBut Nick is about to show up.',
                timeout: 3000,
            },
        }
    },
    '#ffffff' : {
        key: 'RONNIE',
        name: 'Ronnie',
        actions: {
            LOOK : {
                text: 'That\'s Ronnie. A nice guy, not our brigthest bulb.',
                timeout: 2300,
            },
            TOUCH : {
                text: 'No, thanks, I\'m gonna keep my hands here.',
                timeout: 1500,
            },
            INSPECT : {
                text: 'He looks confused. Which is not much to say.',
                timeout: 3000,
            },
            FRISK : {
                text: 'A fast diet book...? And a gun.',
                timeout: 5000,
            },
        }
    },
    '#493c2b' : {
        name: 'shelves with books',
        actions: {
            LOOK : {
                text: 'I think I haven\'t read any of these books.',
                timeout: 3000,
            },
            TOUCH : {
                text: 'Maybe in my next life.',
                timeout: 1500,
            },
            INSPECT : {
                text: 'That would take ages...\nLet\'s just hope there are no clues hidden there.',
                timeout: 4000,
            },
        }
    },
    '#ea6112' : {
        name: 'the lamp',
        actions: {
            LOOK : {
                text: 'It\'s a pretty cool lamp.',
                timeout: 2000,
            },
            TOUCH : {
                text: 'I leart some years ago that there it is no need\nto touch something only because it shines.',
                timeout: 4000,
            },
            INSPECT : {
                text: 'I don\'t see anything remarkable there.',
                timeout: 2000,
            },
        }
    },
    '#694fc9' : {
        name: 'tiny table',
        actions: {
            LOOK : {
                text: 'It just holds the phone.',
                timeout: 1500,
            },
            TOUCH : {
                text: 'It is ok there.',
                timeout: 1500,
            },
            INSPECT : {
                text: 'I don\'t see anything remarkable there.',
                timeout: 2000,
            },
        }
    },
    '#a3ce27' : {
        key: 'JOE',
        name: 'Joe',
        actions: {
            LOOK : {
                text: 'He is Joe. He\'s always broke,\nbut he knows how to shake a Martini.',
                timeout: 2500,
            },
            TOUCH : {
                text: 'No, thanks, I\'m gonna keep my hands here.',
                timeout: 2000,
            },
            INSPECT : {
                text: 'He seems happy.\nI thought he was fond of the new guy.',
                timeout: 3000,
            },
            FRISK : {
                text: 'Some unpaid bills, and his gun.',
                timeout: 5000,
            },
        }
    },
    '#44891a' : {
        key: 'LORA',
        name: 'Lora',
        actions: {
            LOOK : {
                text: 'God put some effort into those cheeckbones.\n I think he cut the budget later\nand forgot to put a human heart, but oh well.',
                timeout: 4000,
            },
            TOUCH : {
                text: 'Not my type.',
                timeout: 1500,
            },
            INSPECT : {
                text: 'She looks as she as doesn\'t give a damn.\nShe may sound even more irritated that usually...\nHard to say.',
                timeout: 4000,
            },
            FRISK : {
                text: 'Sorry dear, just a sec.\nOk... Lipstick and a gun. A practical girl.',
                timeout: 5000,
            },
        }
    },
    '#c2c879' : {
        name: 'the bar',
        actions: {
            LOOK : {
                text: 'I could really use a drink.',
                timeout: 2000,
            },
            TOUCH : {
                text: 'I need to focus in solving this mess.',
                timeout: 2500,
            },
            INSPECT : {
                text: 'There are only some bottles there.',
                timeout: 2000,
            },
        }
    },
    '#4dd030' : {
        name: 'the large sofa',
        actions: {
            LOOK : {
                text: 'If that big sofa could talk...',
                timeout: 2000,
            },
            TOUCH : {
                text: 'I wish a could just sit down and forget about all this.',
                timeout: 3000,
            },
            INSPECT : {
                text: 'I don\'t see anything remarkable there.',
                timeout: 2000,
            },
        }
    },
    '#eb8931' : {
        name: 'the clock',
        actions: {
            LOOK : {
                text: 'It is not stopped at the time of the murder, how disappointing.',
                timeout: 2000,
            },
            TOUCH : {
                text: 'It is very old, better not to touch it.',
                timeout: 2000,
            },
            INSPECT : {
                text: 'I don\'t see anything remarkable there.',
                timeout: 2000,
            },
        }
    },
    '#f7e26b' : {
        key: 'TONNY',
        name: 'Tonny',
        actions: {
            LOOK : {
                text: 'He is what we call an asset.\nSome may choose the word sociopath instead.',
                timeout: 3000,
            },
            TOUCH : {
                text: 'No, thanks. Life is hard, but I\'d rather stay around a bit more.',
                timeout: 2500,
            },
            INSPECT : {
                text: 'He looks calm... Thankfully.',
                timeout: 3000,
            },
            FRISK : {
                text: 'I really hate my job.\n Let\'s see... Cigarettes and a gun. Big surprise.',
                timeout: 5000,
            },
        }
    },
    '#1b2632' : {
        name: 'the window',
        actions: {
            LOOK : {
                text: 'Lovely evening out there...',
                timeout: 2000,
            },
            TOUCH : {
                text: 'Let\'s leave it opened. The air is quite dense in here.',
                timeout: 3000,
            },
            INSPECT : {
                text: 'It is already quite dark. I can\'t see anything.',
                timeout: 2000,
            },
        }
    },
    '#005784' : {
        name: 'the curtains',
        actions: {
            LOOK : {
                text: 'The are red.\nI wish the carpet was that same color.',
                timeout: 3500,
            },
            TOUCH : {
                text: 'No way, I\'m allergic to dust.',
                timeout: 2000,
            },
            INSPECT : {
                text: 'Nothing hidden, only dust.\nI will be sneezing for the next couple of hours.',
                timeout: 2000,
            },
        }
    },
    '#31a2f2' : {
        name: 'chest of drawers',
        actions: {
            LOOK : {
                text: 'It has three drawers.',
                timeout: 2000,
            },
            TOUCH : {
                text: 'Nice quality wood...',
                timeout: 2000,
            },
            INSPECT : {
                text: 'There is a camera inside one of the drawers.',
                timeout: 3000,
            }
        }
    },
    '#aa2f7b' : {
        name: 'wineglass',
        actions: {
            LOOK : {
                text: 'There is still some wine on it.',
                timeout: 2000,
            },
            TOUCH : {
                text: 'Someone already finished it.',
                timeout: 2000,
            },
            INSPECT : {
                text: 'I wonder who has been drinking wine.',
                timeout: 2000,
            },
        }
    },
    '#dcdf80' : {
        name: 'wineglass',
        actions: {
            LOOK : {
                text: 'There is still some wine on it.',
                timeout: 2000,
            },
            TOUCH : {
                text: 'Someone already finished it.',
                timeout: 2000,
            },
            INSPECT : {
                text: 'It has some lipstick on it.',
                timeout: 2000,
            },
        }
    },
    '#d05b43' : {
        name: 'glass with tequila',
        actions: {
            LOOK : {
                text: 'It is a glass full with tequila.',
                timeout: 2000,
            },
            TOUCH : {
                text: 'It is not the right time for that.',
                timeout: 2000,
            },
            INSPECT : {
                text: 'I don\'t see anything remarkable there.',
                timeout: 2000,
            },
        }
    },
    '#369e9d' : {
        name: 'glass with tequila',
        actions: {
            LOOK : {
                text: 'It is a glass full with tequila.',
                timeout: 2000,
            },
            TOUCH : {
                text: 'Flynn is drinking it.',
                timeout: 2000,
            },
            INSPECT : {
                text: 'I don\'t see anything remarkable there.',
                timeout: 2000,
            },
        }
    },
    '#2173a0' : {
        name: 'blood',
        actions: {
            LOOK : {
                text: 'That seems to be Johnny\'s blood.',
                timeout: 2000,
            },
            TOUCH : {
                text: 'I better not.',
                timeout: 2000,
            },
            INSPECT : {
                text: 'It makes a beatiful contrast with the carpet.',
                timeout: 2000,
            },
        }
    },
    '#fae661' : {
        name: 'Scotch',
        actions: {
            LOOK : {
                text: 'That looks like some good single malt Scotch.',
                timeout: 3000,
            },
            TOUCH : {
                text: 'I need to solve this mess first.',
                timeout: 3000,
            },
            INSPECT : {
                text: 'I don\'t see anything remarkable there.',
                timeout: 2000,
            },
        }
    },
    '#379d89' : {
        name: 'glass with Scotch',
        actions: {
            LOOK : {
                text: 'That\'s Joe\'s glass.',
                timeout: 2000,
            },
            TOUCH : {
                text: 'Joe is already drinking it.',
                timeout: 2000,
            },
            INSPECT : {
                text: 'I don\'t see anything remarkable there.',
                timeout: 2000,
            },
        }
    },
    '#2448c5' : {
        name: 'shelves with bottles',
        actions: {
            LOOK : {
                text: 'They have some good stuff there.',
                timeout: 2000,
            },
            TOUCH : {
                text: 'I need to solve this mess first.',
                timeout: 2000,
            },
            INSPECT : {
                text: 'I wish.',
                timeout: 2000,
            },
        }
    },
    '#7624C5' : {
        name: 'painting',
        actions: {
            LOOK : {
                text: 'It is a painting with some dogs playing poker.\nI\'m not an expert in art, but I don\'t see the point',
                timeout: 4000,
            },
            TOUCH : {
                text: 'It is not the right time for that.',
                timeout: 2000,
            },
            INSPECT : {
                text: 'Yeap, six dogs playing poker.',
                timeout: 2000,
            },
        }
    },
    '#2f484e' : {
        key: 'FLYNN',
        name: 'Flynn',
        actions: {
            LOOK : {
                text: 'It is said that everyone has a gift.\nWe haven\'t found his yet.',
                timeout: 3000,
            },
            TOUCH : {
                text: 'I\'m not in the mood.',
                timeout: 2000,
            },
            INSPECT : {
                text: 'He looks very concentrated on his guitar.',
                timeout: 3000,
            },
            FRISK : {
                text: 'A gun... And a picture with Lora.\n They were together some time ago.\nI thought he had got over it.',
                timeout: 5000,
            },
        }
    },
    '#e06f8b' : {
        key: 'MATT',
        name: 'Matt',
        actions: {
            LOOK : {
                text: 'That\'s Matt. A sensible man. He could bet his mother in a poker hand,\nbut we all have our issues...',
                timeout: 4000,
            },
            TOUCH : {
                text: 'I don\'t think he would approve.',
                timeout: 2000,
            },
            INSPECT : {
                text: 'He looks nervous.',
                timeout: 3000,
            },
            FRISK : {
                text: 'Just a deck of cards... and a gun.',
                timeout: 5000,
            },
        }
    },
    '#b2dcef' : {
        name: 'the table',
        actions: {
            LOOK : {
                text: 'There are some bottles and glasses.',
                timeout: 2000,
            },
            TOUCH : {
                text: 'Argh, it is sticky.',
                timeout: 2000,
            },
            INSPECT : {
                text: 'I wonder who has been drinking wine.',
                timeout: 2000,
            },
        }
    },
}

export default entities;
