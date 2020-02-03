const magicLounge = {
    id: 'magicLounge',
    name: 'Chicago Magic Lounge',
    image: '../assets/magiclounge.jpg',
    description: `See a magic show.`,
    choiceDescription: `Tickets, please...`,
    choices: [{
        id: 'vip',
        description: `Get the VIP package`,
        result: `You have an undeniably great time. But at what cost?`,
        happiness: 15,
        money: -75,
    }, {
        id: 'cheapSeats',
        description: `Go for the discount balcony seats`,
        result: `Turns out those cheap seats are legit, and the show was better than expected!`,
        happiness: 20,
        money: -35,
    }, {
        id: 'sneakIn',
        description: `Sneak in via the old laundry chute`,
        result: `You think that's going to work? This place has trap doors that contain trap doors! You get lost and spend the next 3 hours finding your way out.`,
        happiness: -50,
        money: 0,
    }]
};

const hopLeaf = {
    id: 'hopLeaf',
    name: 'Hop Leaf',
    description: `Time for a beer!`,
    image: '../assets/hopleaf2.jpg',
    choiceDescription: `What're you having?`,
    choices: [{
        id: 'oldStyle',
        description: `Old Style`,
        result: `This ain't no watering hole! The surly bartender stares you down and charges triple.`,
        happiness: -5,
        money: -12,
    }, {
        id: 'boon',
        description: `Boon Oude Kriek`,
        result: `You can taste the naturally fermented Belgian authenticity!`,
        happiness: 5,
        money: -8,
    }, {
        id: 'zombieDust',
        description: `3 Floyds Zombie Dust`,
        result: `A Midwest classic. Everything is right in this world.`,
        happiness: 8,
        money: -6,
    }]
};

const laColombe = {
    id: 'laColombe',
    name: 'La Colombe',
    description: `But first, coffee.`,
    image: '../assets/lacolombe.jpg',
    choiceDescription: `Choose your brew.`,
    choices: [{
        id: 'pourOver',
        description: `Single-origin pour over`,
        result: `Your mouth is filled with an array of flavors, the likes of which you've never known.`,
        happiness: 5,
        money: -4,
    }, {
        id: 'decaf',
        description: `Decaf`,
        result: `From deep within the coffee shop, a gong rings out. The place grows quiet. Baristas begin chanting, "shame!... shame!... shame!..." as you retreat out the door.`,
        happiness: -15,
        money: 0,
    }, {
        id: 'latte',
        description: `Enormous latte with an extra shot`,
        result: `Delicous! But the jitters take over and you spill coffee down your pants. The hipsters smirk at you behind their oversized glasses.`,
        happiness: -3,
        money: -9,
    }]
};

const bookstore = {
    id: 'bookstore',
    name: 'Women & Children First',
    description: `Browse the bookstore.`,
    image: '../assets/bookstore.jpg',
    choiceDescription: `It's one of the country's oldest feminist bookstores. What are you reading next?`,
    choices: [{
        id: 'pourOver',
        description: `"The Witches Are Coming" by Lindey West`,
        result: `This wickedly funny cultural critique is exactly what you needed!`,
        happiness: 7,
        money: -18,
    }, {
        id: 'leanIn',
        description: `"Lean In" by Sheryl Sandberg`,
        result: `The clerk persuades you to buy three more books. See, you can have it all!`,
        happiness: -3,
        money: -45,
    }, {
        id: 'latte',
        description: `"The Testaments" by Margaret Atwood`,
        result: `Ah, the long-awaited sequel to The Handmaid's Tale... Sadly, it hits too close to home and so you will put off reading it!`,
        happiness: -5,
        money: -18,
    }]
};

const quests = [laColombe, bookstore, magicLounge, hopLeaf];

export { quests };