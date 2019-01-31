/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() 
//statements should still return what is expected of them.

*/


/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: '{this.name} was removed from the game.'
*/
// Build constructor 
function GameObject(attributes) {
    this.name = attributes.name;
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;  
  }
  
  // Method for this constructor
  GameObject.prototype.destroy = function() {
    return (`${this.name} was removed from the game`);
  }
  
  // function Child(childAttributes) {
  //   //bind the this keyword to the Parent constructor
  //   GameObject.call(this.childAttributes);
  //   this.destroy = childAttributes.destroy;
  // }
  
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  function CharacterStats(statsAttributes) {
    this.healthPoints = statsAttributes.healthPoints;
      GameObject.call(this.statsAttributes);
  };
  
  // Inheritance
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  //methods for this constructor 
  //Must place new method AFTER the Object.create();
  CharacterStats.prototype.takeDamage = function() {
    return (`${this.name} took damage`) 
  }
  
  
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  function Humanoid (humanoidAttributes){
  this.team = humanoidAttributes.team;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
  CharacterStats.call(this.humanoidAttributes);
  }
  
  //Humanoid methods
  //* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  Humanoid.prototype.greet = function() {
        return ('${this.name} offers a greeting in ${this.language}.');
      }
  
  // Inheritance
  // * should inherit destroy() from GameObject through CharacterStats
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  //methods for this constructor 
  //Must place new method AFTER the Object.create();
  //* should inherit takeDamage() from CharacterStats
  Humanoid.prototype.takeDamage = function() {
    return (`${this.name} took damage`) 
  }
  
  
  // const Humanoid = {
  //   name: "Humanoid",
  //   weapons: knife,
  //   team: CharacterStats,
  //   language: English,
  //   healthPoints: 0,
  //   greet () {
  //     return '${this.name} offers a greeting in ${language}.';
  //   },
  //   takeDamage() {
  //     return `${name} took damage.`;
  //   },
  // };
  
  
  
  // const mage = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 1,
  //     height: 1,
  //   },
  //   healthPoints: 5,
  //   name: 'Bruce',
  //   team: 'Mage Guild',
  //   weapons: [
  //     'Staff of Shamalama',
  //   ],
  //   language: 'Common Tongue',
  // });
  
  
  
  
  //   const swordsman = new Humanoid({
  //     createdAt: new Date(),
  //     dimensions: {
  //       length: 2,
  //       width: 2,
  //       height: 2,
  //     },
  //     healthPoints: 15,
  //     name: 'Sir Mustachio',
  //     team: 'The Round Table',
  //     weapons: [
  //       'Giant Sword',
  //       'Shield',
  //     ],
  //     language: 'Common Tongue',
  //   });
  
  
  
  
  //   const archer = new Humanoid({
  //     createdAt: new Date(),
  //     dimensions: {
  //       length: 1,
  //       width: 2,
  //       height: 4,
  //     },
  //     healthPoints: 10,
  //     name: 'Lilith',
  //     team: 'Forest Kingdom',
  //     weapons: [
  //       'Bow',
  //       'Dagger',
  //     ],
  //     language: 'Elvish',
  //   });
  
  
  
  //   console.log(mage.createdAt); // Today's date
    // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    // console.log(swordsman.healthPoints); // 15
    // console.log(mage.name); // Bruce
    // console.log(swordsman.team); // The Round Table
    // console.log(mage.weapons); // Staff of Shamalama
    // console.log(archer.language); // Elvish
    // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    // console.log(mage.takeDamage()); // Bruce took damage.
    // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
  
