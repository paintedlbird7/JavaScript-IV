// CODE here for your Lambda Classes
// === GameObject ===
// Step 1: Declare the class keyword

`name` `age` `location` `gender`

class Person {
    // Step 2: Create a new constructor
constructor(attributes) {
this.name = attributes.name;
this.age = attributes.age;
this.location = attributes.location;  
this.gender = attributes.gender;  
}    // Step 3: Methods
speak() {
return (`Hello my name is ${this.name} Fred, I am from ${this.location}`);
}  // end of class


// Step 1: Declare the class keyword
class Instructor extends Person  {
    // Step 2: Create a new constructor
    constructor(statsAttributes) {
    super(statsAttributes);  
    this.healthPoints = statsAttributes.healthPoints;
    GameObject.call(this.statsAttributes);
    } // Step 3: Methods
    takeDamage() {
    return (`${this.name} took damage`) 
    }  // end of class
    
    
    
    


// === CharacterStats ===

// Step 1: Declare the class keyword
class Students extends Instructor  {
// Step 2: Create a new constructor
constructor(statsAttributes) {
super(statsAttributes);  
this.healthPoints = statsAttributes.healthPoints;
GameObject.call(this.statsAttributes);
} // Step 3: Methods
takeDamage() {
return (`${this.name} took damage`) 
}  // end of class




// Step 1: Declare the class keyword
class Project Managers extends Instructor {
     // Step 2: Create a new constructor
constructor(humanoidAttributes){
this.team = humanoidAttributes.team;
this.weapons = humanoidAttributes.weapons;
this.language = humanoidAttributes.language;
CharacterStats.call(this.humanoidAttributes);
} // Step 3: Methods
//* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
greet() {
return ('${this.name} offers a greeting in ${this.language}.');
} // end of class
//methods for this constructor 
//Must place new method AFTER the Object.create();
//* should inherit takeDamage() from CharacterStats
takeDamage() {
return (`${this.name} took damage`) 
}


// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   gender: 'male',
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
```
