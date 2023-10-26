class Animal {
	constructor(species, noise) {
		this.species = species;
		this.noise = noise;
	}
	makesNoise() {
		return `This is a ${this.species} makes a ${this.noise}`;
	}
}

class Domestic extends Animal {
	constructor(species, noise, breed) {
		super(species, noise);
		this._breed = breed;
	}
	get breed() {
		return this._breed;
	}
}

class WildAnimal extends Animal {
	constructor(species, noise) {
		super(species, noise);
		this.isDomestic = false;
	}
}

class Weasel extends WildAnimal {
	constructor(species, noise, color, name) {
		super(species, noise);
		this._name = name;
		this._color = color;
	}
	get name() {
		return this._name;
	}
	get color() {
		return this._color;
	}
	makeNoise() {
		return `${super(makeNoise)} \n And can speak like a human`;
	}
}

class Dog extends Domestic {
	constructor(species, noise, breed, color) {
		super(species, noise, breed);
		this.color = color;
		this.isDomestic = true;
	}
	makesNoise() {
		return `This ${this.color} dog makes the noise: ${this.noise}`;
	}
}

class Cat extends Domestic {
	constructor(species, noise, breed) {
		this.species = species;
		this.noise = noise;
		this.breed = breed;
	}
	get breed() {
		return this.breed;
	}
	makeNoise() {
		super(makeNoise);
	}
}
