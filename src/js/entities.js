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
            },
            TALK : {
                text: 'As therapeutic as it could be, I am not sure\nif it would gain me much respect from the others.',
                timeout: 5000,
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
            }
        }
    },
    '#2fb068' : {
        name: 'bottle of tequila',
        actions: {
            LOOK : {
                text: 'Jose Cuervo Special Gold.',
                timeout: 1000,
            }
        }
    },
    '#b32633' : {
        name: 'coat',
        actions: {
            LOOK : {
                text: 'It\'s a coat.',
                timeout: 1000,
            }
        }
    },
    '#9d9d9d' : {
        name: 'coat',
        actions: {
            LOOK : {
                text: 'It\'s a coat.',
                timeout: 1000,
            }
        }
    },
    '#a46422' : {
        name: 'the door',
        actions: {
            LOOK : {
                text: 'That\'s the door. Ronnie is holding it.',
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
            }
        }
    },
    '#493c2b' : {
        name: 'the shelves',
        actions: {
            LOOK : {
                text: 'I think I haven\'t read any of these books.',
                timeout: 3000,
            }
        }
    },
    '#ea6112' : {
        name: 'the lamp',
        actions: {
            LOOK : {
                text: 'It\'s a pretty cool lamp.',
                timeout: 2000,
            }
        }
    },
    '#694fc9' : {
        name: 'the tiny table',
        actions: {
            LOOK : {
                text: 'It just holds the phone.',
                timeout: 1000,
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
            }
        }
    },
    '#c2c879' : {
        name: 'the bar',
        actions: {
            LOOK : {
                text: 'I could really use a drink.',
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
            }
        }
    },
    '#eb8931' : {
        name: 'the clock',
        actions: {
            LOOK : {
                text: 'It is not stopped at the time of the murder, how disappointing.',
                timeout: 2000,
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
                timeout: 1500,
            }
        }
    },
    '#005784' : {
        name: 'the curtains',
        actions: {
            LOOK : {
                text: 'Those are beautiful curtains.',
                timeout: 1500,
            }
        }
    },
    '#31a2f2' : {
        name: 'chest with drawers',
        actions: {
            LOOK : {
                text: 'It has three drawers.',
                timeout: 1000,
            }
        }
    },
    '#2f8cb0' : {
        name: 'wineglass',
        actions: {
            LOOK : {
                text: 'There is still some wine on it.',
                timeout: 1000,
            }
        }
    },
    '#2f484e' : {
        key: 'FLYNN',
        name: 'Flynn',
        actions: {
            LOOK : {
                text: 'It is said that everyone has a gift.\nWe haven\'t found his yet.',
                timeout: 3000,
            }
        }
    },
    '#e06f8b' : {
        key: 'MATT',
        name: 'Matt',
        actions: {
            LOOK : {
                text: 'That\'s Matt. A sensible man. He could bet his mother in a poker hand,\nbut we all have our issues...',
                timeout: 4000,
            }
        }
    },
    '#b2dcef' : {
        name: 'the table',
        actions: {
            LOOK : {
                text: 'There are some bottles and glasses.',
                timeout: 1000,
            }
        }
    },
}

export default entities;
