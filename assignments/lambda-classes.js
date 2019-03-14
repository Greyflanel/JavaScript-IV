// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    return `Hello my name is ${this.name} and I am from ${this.location}.`;
  }
}

class Instructor {
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

class Student {
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

class ProjectManager {
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
