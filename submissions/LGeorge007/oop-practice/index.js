class Inhabitant {
   constructor(name, species, gender, greeting, friends) {
       this.species = species;
       this.name = name;
       this.gender = gender;
       this.greeting = greeting;
       this.friends = friends;
   }

   say() {
       let haveFriend = (this.friends !== undefined)
         ? (this.friends.length === 1)
            ? "I have a friend. This is " + this.friends[0]
            : "I have friends. These are "+ this.friends.join(", ")
         : "I'm alone. I have no friends";
         return `${this.greeting} I'm ${this.name}. I'm a ${this.species} and I have a ${this.gender} gender. ${haveFriend}.`;
   }
}

class Animal extends Inhabitant {
   constructor( name, species, gender, greeting, friends) {
      super( name, species, gender, greeting, friends)
      this.paws = 4;
   }

   say() {
       return super.say() + ` I have ${this.paws} paws.`
   }
}

class Human extends Inhabitant {
   constructor(name, species, gender,  greeting, friends) {
      super(name, species, gender, greeting, friends);
      this.legs = 2;
      this.hands = 2;
   }

   say() {
      return super.say() + ` I have ${this.legs} legs and ${this.hands} hands.`
   }
}

class Dog extends Animal {
   constructor(name, species, gender, greeting, friends) {
       super(name, species, gender, greeting, friends)
   }
}

class Cat extends Animal {
   constructor(name, species, gender, greeting, friends) {
       super(name, species, gender, greeting, friends);
   }
}

class CatWoman extends Human {
   constructor(name, species, gender, greeting, friends) {
       super(name, species, gender, greeting, friends);
   }
}

let catVoice = "Meow-meow!"

const inhabitantsList = [ new Human("Boris", "human", "male", "HI!", ["Vladimir", "Innokentiy", "Fedor"]),
                       new Human("Larisa", "human", "female", "Hello!", ["Diana","Laura","Svetlana"]),
                       new Dog("Sharikk", "dog", "male", "Woof-woof!", ["Bublik"]),
                       new Cat("Murzik", "cat", "male",  catVoice, ["Sonya", "Garfild", "Carapka"]),
                       new CatWoman ("Selina Kyle", "humicat", "female", catVoice, )
                     ];

inhabitantsList.forEach(unit => print(unit.say()));