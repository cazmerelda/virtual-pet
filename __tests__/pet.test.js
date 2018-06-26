const Pet = require('../src/pet');

describe('constructor', () => {
    it ('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});

describe('constructor', () => {
   // ...
    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });
});

describe('constructor', () => {
    //...
    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });
});

describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
});


describe('growUp', () => {
    it('increases hunger by 5' , () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });
});

describe('growUp', () => {
    it('decreases fitness by 3' , () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
});

describe('walk' , () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('Fido');
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
    });
});

describe('walk', () => {
    //...
    it('increases fitness to a maximum of 10', () => {
        const pet = new Pet('Fido');
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
});

describe('feed', () => {
    // ...
    it('decreases hunger by 3', () => {
        const pet = new Pet('Fido');
        pet.hunger = 3;
        pet.feed();
        expect(pet.hunger).toEqual(0);
    });
});

describe('checkUp', () => {
    it('tells us pet needs a walk', () => {
        const pet = new Pet('Fido');
        pet.fitness = 2
        pet.checkUp();
        expect(pet.checkUp()).toEqual('I need a walk')
    });
});


describe('checkUp', () => {
    it('tells us pet is hungry' , () => {
        const pet = new Pet('Fido');
        pet.hunger = 6
        pet.checkUp();
        expect(pet.checkUp()).toEqual('I am hungry')
    });
});

describe('checkUp', () => {
    it('tells us if pet is both hungry AND needs a walk' , () => {
        const pet = new Pet('Fido');
        pet.hunger = 6
        pet.fitness = 2
        pet.checkUp();
        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk')
    });
});

describe('checkUp', () => {
    it('tells us if pet is neither hungry NOR needs a walk' , () => {
        const pet = new Pet('Fido');
        pet.hunger = 2
        pet.fitness = 6
        pet.checkUp();
        expect(pet.checkUp()).toEqual('I feel great!')
    });
});
