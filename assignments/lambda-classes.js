// CODE here for your Lambda Classes
// === GameObject ===
// Step 1: Declare the class keyword


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
    constructor(teacherAttributes) {
    super(teacherAttributes);  
    this.specialty = teacherAttributes.specialty;
    this.favLanguage = teacherAttributes.favLanguage;
    this.catchPhrase = teacherAttributes.catchPhrase;
 
    GameObject.call(this.teacherAttributes);
    } // Step 3: Methods
    demo() {
    return (`Today we are learning about ${subject}' where subject is the param passed in.`) 
    }  
    grade() {
        return (`${student.name} receives a perfect score on ${subject}`) 
        } 
    // end of class
    
    
    
    


// === Students ===

// Step 1: Declare the class keyword
class Students extends Instructor  {
// Step 2: Create a new constructor
constructor(studentAttributes) {
super(studentAttributes);  
this.previousBackground = studentAttributes.previousBackground;
this.className = studentAttributes.className;
this.favSubjects = studentAttributes.favSubjects;

GameObject.call(this.studentAttributes);
} // Step 3: Methods
listsSubjects() {
console.log (`${this.favSubjects} is the list of the student's favoriteSubjects`) 
} 
} 
PRAssignment() {
return (`${student.name} has submitted a PR for ${subject}`) 
}  // end of class
sprintChallenge() {
    return (`${student.name} has begun sprint challenge on ${subject}`) 
    }



// === Project Managers ===

// Step 1: Declare the class keyword
class ProjectManagers extends Instructor {
     // Step 2: Create a new constructor
constructor(pmAttributes){
this.gradClassName = pmAttributes.gradClassName;
this.favInstructor = pmAttributes.favInstructor;
CharacterStats.call(this.pmAttributes);
} // Step 3: Methods
//* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
standUp() {
return ('${this.name} announces to ${this.channel}, @channel standy times!​​​​​');
} // end of class
//methods for this constructor 
//Must place new method AFTER the Object.create();
//* should inherit takeDamage() from CharacterStats
debugsCode() {
return (`${this.name} debugs ${this.student.name}'s code on ${this.subject}`) 
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
