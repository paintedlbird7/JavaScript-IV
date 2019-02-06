// CODE here for your Lambda Classes
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
}

// Step 1: Declare the class keyword
class Instructor extends Person  {
    // Step 2: Create a new constructor
    constructor(teacherAttributes) {
    super(teacherAttributes);  
    this.specialty = teacherAttributes.specialty;
    this.favLanguage = teacherAttributes.favLanguage;
    this.catchPhrase = teacherAttributes.catchPhrase;
     } // Step 3: Methods
    demo() {
        console.log(demo);
    return (`Today we are learning about ${this.subject}' where subject is the param passed in.`) 
    }  
    
    grade() {
        return (`${this.student.name} receives a perfect score on ${this.subject}`) 
        } 
    }
    // end of class
    
    
    
    


// === Students ===

// Step 1: Declare the class keyword
class Students extends Person  {
// Step 2: Create a new constructor
constructor(studentAttributes) {
super(studentAttributes);  
this.previousBackground = studentAttributes.previousBackground;
this.className = studentAttributes.className;
this.favSubjects = studentAttributes.favSubjects;
} // Step 3: Methods
listsSubjects() {
console.log (`${this.favSubjects} is the list of the student's ${this.favoriteSubjects}`) 
} 
 
PRAssignment(subject) {
return (`${this.student.name} has submitted a PR for ${this.subject}`); 
}  // end of class

sprintChallenge() {
    return (`${this.student.name} has begun sprint challenge on ${this.subject}`);
    }
}


// === Project Managers ===

// Step 1: Declare the class keyword
class ProjectManagers extends Instructor {
     // Step 2: Create a new constructor
constructor(pmAttributes){
this.gradClassName = pmAttributes.gradClassName;
this.favInstructor = pmAttributes.favInstructor;
Person.call(this.pmAttributes);
} // Step 3: Methods
//* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
standUp() {
return (`${this.name} announces to ${this.channel}, @channel standy times!​​​​​`);
} // end of class
//methods for this constructor 
//Must place new method AFTER the Object.create();
//* should inherit takeDamage() from CharacterStats
debugsCode() {
return (`${this.name} debugs ${this.student.name}'s code on ${this.subject}`) 
}
}




// ```js
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
})

const student = new Student({
    name: 'Bam Bam',
    location: 'Bedrock',
    age: 46,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Bam Bam Bam`
  })

  const pm = new ProjectManagers({
    name: 'Pebbles',
    location: 'Bedrock',
    age: 36,
    gender: 'female',
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `Pebbles and Rocks`
  })

  console.log(fred.speak());
