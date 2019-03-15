// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.location = attributes.location;
    this.age = attributes.age;
    this.gender = attributes.gender;
  }
  speak() {
    return `Hello my name is ${this.name} and I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
  listsSubjects() {
    console.log(`${this.favSubjects}`);
  }
  PRAssignment(subject) {
    console.log(`${student.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${student.name} had begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(PMAttributes) {
    super(PMAttributes);
    this.gradClassName = PMAttributes.gradClassName;
    this.favInstructor = PMAttributes.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} says, "Hey, Everybody in ${channel}, It's StandUp Time!"`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies`
  });

  const wilma = new Instructor({
    name: 'Wilma',
    location: 'Bedrock',
    age: 32,
    gender: 'female',
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `Ride or Die`
  });

  const barney = new Instructor({
    name: 'Barney',
    location: 'Bedrock',
    age: 35,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Don't hate the playa, hate the game.`
  });

  const pebbles = new Student({
      name: 'Pebbles',
      location: 'Bedrock',
      age: 2,
      gender: 'female',
      previousBackground: 'Baby',
      className: 'Web32',
      favSubjects: [' ABCs', ' Numbers', ' Stickers'] 
  })

  const bamBam = new Student({
    name: 'BamBam',
    location: 'Bedrock',
    age: 3,
    gender: 'male',
    previousBackground: 'Baby',
    className: 'Web39',
    favSubjects: [' Girls', ' Rock-Ball', ' Lunch'] 
})

const betty = new Student({
    name: 'Betty',
    location: 'Bedrock',
    age: 32,
    gender: 'female',
    previousBackground: 'Cave-wife',
    className: 'Web18',
    favSubjects: [' HTML', ' CSS', ' JavaScript'] 
})

const dino = new ProjectManager({
    name: 'Dino',
    location: 'Bedrock',
    age: 10,
    gender: 'male',
    gradClassName: 'Self-taught',
    faveInstructor: 'Sean'
})

const saurus = new ProjectManager({
    name: 'Saurus',
    location: 'Bedrock',
    age: 15,
    gender: 'male',
    gradClassName: 'CS1',
    faveInstructor: 'Josh'
})

const mammalia = new ProjectManager({
    name: 'Mammalia',
    location: 'Under-Bedrock',
    age: 20,
    gender: 'female',
    gradClassName: 'N/A',
    faveInstructor: 'Sean'
})
bamBam.listsSubjects();