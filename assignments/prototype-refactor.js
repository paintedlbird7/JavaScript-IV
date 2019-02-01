/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() 
//statements should still return what is expected of them.

*/



//   === GameObject ===
// * createdAt
//   * name
//   * dimensions (These represent the character's size in the video game)
//   * destroy() // prototype method that returns: '{this.name} was removed from the game.'

// Build class 

 // Step 1: Declare the class keyword
class GameObject {
         // Step 2: Create a new constructor
    constructor(attributes) {
    this.name = attributes.name;
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;  
  }    // Step 3: Methods
  destroy() {
    return `${this.name} was removed from the game`;
  }  // end of class
}

  
  
  /*
    === CharacterStats ===
      * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
  */
   // Step 1: Declare the class keyword
  class CharacterStats extends GameObject  {
    // Step 2: Create a new constructor
    constructor(statsAttributes) {
    super(statsAttributes);  
    this.healthPoints = statsAttributes.healthPoints;
    this.name = statsAttributes.name;
  } // Step 3: Methods
  takeDamage() {
    return `${this.name} took damage`; 
  }  // end of class
}
  
  /*
    === Humanoid ===
    * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
  */
    // Step 1: Declare the class keyword
  class Humanoid extends CharacterStats {
          // Step 2: Create a new constructor
  constructor(humanoidAttributes){
    super(humanoidAttributes);  
  this.faction = humanoidAttributes.faction;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
  } // Step 3: Methods
    //* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  } // end of class
    //methods for this constructor 
  //Must place new method AFTER the Object.create();
  //* should inherit takeDamage() from CharacterStats
  takeDamage() {
    return `${this.name} took damage`;
  }
  }
  
//   // Inheritance
//   // * should inherit destroy() from GameObject through CharacterStats
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  


  
  
  

//   Uncomment to test
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  
  
  
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
  
  
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
  
    console.log(archer.name); // Today's date
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
  
