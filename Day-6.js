// Day-6 tasks

// Task 1
/*
The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
*/

// Solution:
class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getPG(movies) {
    return movies.filter((movie) => {
      return movie.rating.startsWith("PG");
    });
  }
}

let film1 = new Movie("Avatar", "20th Century Fox", "PG13");
let film2 = new Movie("The Dark Knight", "Warner Bros. Pictures", "PG13");
let film3 = new Movie("Joker", "Warner Bros. Pictures", "R");
let film4 = new Movie("The Martian", "Scott Free Productions", "PG13");
let film5 = new Movie("Catch Me If You Can", "Amblin Entertainment", "PG13");
let film6 = new Movie("IT", "New Line Cinema", "R");
let film7 = new Movie("Avatar", "20th Century Fox", "PG13");
let film8 = new Movie("Casino Royale", "Eon Productions", "PG13");

console.log(
  film1.getPG([film1, film2, film3, film4, film5, film6, film7, film8])
);
/* Output:
[
  {title: 'Avatar', studio: '20th Century Fox', rating: 'PG13'}
  {title: 'The Dark Knight', studio: 'Warner Bros. Pictures', rating: 'PG13'}
  {title: 'The Martian', studio: 'Scott Free Productions', rating: 'PG13'}
  {title: 'Catch Me If You Can', studio: 'Amblin Entertainment', rating: 'PG13'}
  {title: 'Avatar', studio: '20th Century Fox', rating: 'PG13'}
  {title: 'Casino Royale', studio: 'Eon Productions', rating: 'PG13'}
]
*/

console.log(film8);
// Output: {title: 'Casino Royale', studio: 'Eon Productions', rating: 'PG13'}

////////////////////////////////////////////////////////////////////////
// Task 2
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  get getRadius() {
    return this.radius;
  }

  set setRadius(radius) {
    this.radius = radius;
  }

  get getColor() {
    return this.color;
  }

  set setColor(color) {
    this.color = color;
  }

  toString() {
    return `Circle[radius=${this.getRadius}, color=${this.getColor}]`;
  }

  get getArea() {
    return Math.PI * Math.pow(this.getRadius, 2);
  }

  get getCircumference() {
    return 2 * Math.PI * this.getRadius;
  }
}

let circle1 = new Circle(4.2, "magenta");

circle1.setRadius = 5.7;
console.log(circle1.getRadius);
// Output: 5.7
circle1.setColor = "olive";
console.log(circle1.getColor);
// Output: 'olive'
console.log(circle1.toString());
// 'Circle[radius=5.7, color=olive]'
console.log(circle1.getArea);
// Output: 102.07034531513239
console.log(circle1.getCircumference);
// Output: 35.814156250923645

////////////////////////////////////////////////////////////////////////
// Task 3
// Write a “person” class to hold all the details.
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set setCollege(collegeName) {
    this.college = collegeName;
  }

  get getCollege() {
    return this.college;
  }

  set setOccupation(work) {
    this.occupation = work;
  }

  get getOccupation() {
    return this.occupation;
  }

  set setLocation(city) {
    this.location = city;
  }

  get getLocation() {
    return this.setLocation;
  }
}

const person1 = new Person("Dhananjay", "Puppala", 30);
person1.setCollege = "PES University";
person1.setOccupation = "Google";
person1.setLocation = "Bengaluru";
console.log(person1);

// Output: Person {firstName: 'Dhananjay', lastName: 'Puppala', age: 30, college: 'PES University', occupation: 'Google', …}

///////////////////////////////////////////////////////////////////////
// Task 4
// write a class to calculate the uber price.

class UberPrice {
  constructor(fixCharge = 50, perKm, tollCharges = false) {
    this.fixCharge = fixCharge;
    this.perKm = perKm;
    this.tollCharges = tollCharges;
  }

  set setDistanceTravelled(distance) {
    this.distance = distance;
  }

  get getDistanceTravelled() {
    return this.distance;
  }

  totalBillGenerated() {
    return (
      this.getDistanceTravelled * this.perKm +
      this.fixCharge +
      (this.tollCharges === true ? 200 : 0)
    );
  }
}

// ur is short form of uberRide
// using undefined simulates the default value for optional parameters
let ur1 = new UberPrice(undefined, 12);
let ur2 = new UberPrice(undefined, 14, true);

ur1.setDistanceTravelled = 10;
console.log(ur1.totalBillGenerated());
// Output: 170

ur2.setDistanceTravelled = 26;
console.log(ur2.totalBillGenerated());
// Output: 614
