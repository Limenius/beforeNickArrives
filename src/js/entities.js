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
        name: 'elk head',
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
        }
    },
    '#ae289d' : {
        name: 'the telephone',
        actions: {
            LOOK : {
                text: 'It\'s a phone.',
                timeout: 1000,
            },
            TOUCH : {
                text: 'There is no one I can call to fix this.\nI need to do it myself. Better to hurry.',
                timeout: 3000,
            },
            TALK : {
                text: 'It is not ringing.',
                timeout: 2000,
            },
        }
    },
    '#2fb068' : {
        name: 'bottle of tequila',
        actions: {
            LOOK : {
                text: 'Jose Cuervo Special Gold.',
                timeout: 1000,
            },
            TOUCH : {
                text: 'I don\'t think is the right time for that...',
                timeout: 1500,
            }
        }
    },
    '#b32633' : {
        name: 'coat',
        actions: {
            LOOK : {
                text: 'It\'s a coat.',
                timeout: 1000,
            },
            TOUCH : {
                text: 'It is not mine.',
                timeout: 1500,
            }
        }
    },
    '#9d9d9d' : {
        name: 'coat',
        actions: {
            LOOK : {
                text: 'It\'s a coat.',
                timeout: 1000,
            },
            TOUCH : {
                text: 'It is not mine.',
                timeout: 1500,
            }
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
            }
        }
    },
    '#ffffff' : {
        key: 'RONNIE',
        name: 'Ronnie',
        actions: {
            LOOK : {
                text: 'That\'s Ronnie. A nice guy, not our brigthest bulb.',
                timeout: 1000,
            },
            TOUCH : {
                text: 'No, thanks, I\'m gonna keep my hands here.',
                timeout: 1500,
            }
        }
    },
    '#493c2b' : {
        name: 'the shelves',
        actions: {
            LOOK : {
                text: 'I think I haven\'t read any of these books.',
                timeout: 3000,
            },
            TOUCH : {
                text: 'Maybe in my next life.',
                timeout: 1500,
            }
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
            }
        }
    },
    '#694fc9' : {
        name: 'the tiny table',
        actions: {
            LOOK : {
                text: 'It just holds the phone.',
                timeout: 1000,
            },
            TOUCH : {
                text: 'It is ok there.',
                timeout: 1500,
            }
        }
    },
    '#a3ce27' : {
        key: 'JOE',
        name: 'Joe',
        actions: {
            LOOK : {
                text: 'He is Joe. He\'s always broke,\nbut he knows how to shake a Martini.',
                timeout: 1000,
            },
            TOUCH : {
                text: 'No, thanks, I\'m gonna keep my hands here.',
                timeout: 1000,
            }
        }
    },
    '#44891a' : {
        key: 'LORA',
        name: 'Lora',
        actions: {
            LOOK : {
                text: 'God put some effort on those cheeckbones.\n I think he cut the budget later\nand forgot to use a the human heart, but oh well.',
                timeout: 4000,
            },
            TOUCH : {
                text: 'Not my type.',
                timeout: 1000,
            }
        }
    },
    '#c2c879' : {
        name: 'the bar',
        actions: {
            LOOK : {
                text: 'I could really use a drink.',
                timeout: 1000,
            },
            TOUCH : {
                text: 'I need to focus in solving this mess.',
                timeout: 1000,
            }
        }
    },
    '#4dd030' : {
        name: 'the large sofa',
        actions: {
            LOOK : {
                text: 'If that big sofa could talk...',
                timeout: 1000,
            },
            TOUCH : {
                text: 'I wish a could just sit down and forget about all this.',
                timeout: 3000,
            }
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
                timeout: 1000,
            }
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
            }
        }
    },
    '#005784' : {
        name: 'the curtains',
        actions: {
            LOOK : {
                text: 'My mother use to hate that type of curtains.\nThey accumulate so much dust...',
                timeout: 3500,
            },
            TOUCH : {
                text: 'No way, I\'m allergic to the dust.',
                timeout: 2000,
            }
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
            }
        }
    },
    '#2f8cb0' : {
        name: 'wineglass',
        actions: {
            LOOK : {
                text: 'There is still some wine on it.',
                timeout: 2000,
            },
            TOUCH : {
                text: 'It is not the right time for that.',
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
        }
    },
}

export default entities;
