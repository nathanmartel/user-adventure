const magicLounge = {
    id: 'magicLounge',
    name: 'Chicago Magic Lounge',
    image: '../assets/magiclounge.jpg',
    description: `See a swanky magic show!`,
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
    image: '../assets/hopleaf.jpg',
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

const laColombe = {
    id: 'laColombe',
    name: 'La Colombe',
    description: `But first, coffee.`,
    image: '../assets/lacolombe.jpg',
    choices: [{
        id: 'pourOver',
        description: `Single-origin pour over`,
        result: `Your mouth is filled with an array of flavors, the likes of which you've never known.`,
        happiness: 5,
        money: -4,
    }, {
        id: 'decaf',
        description: `Decaf`,
        result: `The barista rings an enormous gong. The place grows quiet. Wait staff begin chanting, "shame!... shame!... shame!..." as you retreat out the door.`,
        happiness: -15,
        money: 0,
    }, {
        id: 'latte',
        description: `Enormous latte with an extra shot`,
        result: `That is darn delicous! But the jitters take over and you spill coffee down your pants while the hipsters on their laptops smirk behind their oversized glasses.`,
        happiness: -3,
        money: -8,
    }]
};


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

const quests = [magicLounge, hopLeaf, laColombe];

export { quests };