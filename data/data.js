const magicLounge = {
    id: 'magicLounge',
    name: 'Chicago Magic Lounge',
    description: `It's a swanky, intimate venue that performs magic shows? Seriously? You enter through a secret door in a former laundromat? Seriously!`,
    choices: [{
        id: 'vip',
        description: `Get the VIP package`,
        result: `You have an undeniably great time. But at what cost?`,
        happiness: 15,
        money: -50,
    }, {
        id: 'cheapSeats',
        description: `Go for the discount balcony seats`,
        result: `Turns out those cheap seats are legit, and the show was better than expected!`,
        happiness: 20,
        money: -25,
    }, {
        id: 'sneakIn',
        description: `Sneak in via the old laundry chute`,
        result: `You think that's going to work? This place has trap doors that contain trap doors! You get lost and spend the next 3 hours finding your way out.`,
        happiness: -20,
        money: 0,
    }]
};

const hopLeaf = {
    id: 'hopLeaf',
    name: 'Hop Leaf',
    description: `Time for a beer! What're you having?`,
    choices: [{
        id: 'oldStyle',
        description: `Old Style`,
        result: `This ain't no watering hole! The surly bartender stares you down and charges triple.`,
        happiness: -5,
        money: -10,
    }, {
        id: 'boon',
        description: `Boon Oude Kriek`,
        result: `You can taste the naturally fermented Belgian authenticity!`,
        happiness: 5,
        money: -7,
    }, {
        id: 'zombieDust',
        description: `3 Floyds Zombie Dust (and, heck, the Mussels and frites, too...)`,
        result: `Utterly classic. Everything is suddenly right in this world.`,
        happiness: 20,
        money: -18,
    }]
};


// #### La Colombe
// You're thirsty...
// 1. Single-origin pour over
//     - Your mouth is filled with an array of flavors, the likes of which you've never known.
//     - Happiness: 5
//     - Money: -4
// 1. Decaf
//     - The barista rings an enormous gong. The place grows quiet. Everyone starts chanting, "shame... shame... shame..." as you retreat out the door.
//     - Happiness: -15
//     - Money: 0
// 1. Enormous latte with an extra shot
//     - That is darn delicous! But the jitters take over and you spill coffee down your pants while the hipsters on their laptops smirk behind their oversized glasses. 
//     - Happiness: -3
//     - Money: -8

// #### Therapy
// You're overdue to talk about a few things...
// 1. Disclose a deep, dark secret
//     - Now you just feel ashamed. That didn't help at all!
//     - Happiness: -10
//     - Money: -100
// 1. Process the state of your relationship 
//     - You learn that your eagerness to fix your partner's car — an expression of love via an act of service — doesn't negate your avoidant personality type. Hmm...
//     - Happiness: 0
//     - Money: -100
// 1. Talk about your childhood
//     - It's all Mom's fault?... Oh! A breakthrough!
//     - Happiness: 30
//     - Money: -100

const adventures = [magicLounge, hopLeaf];

export default adventures;