/* const heading=document.getElementById("heading");
heading.innerHTML="Hi Guys how are you";
const para=document.getElementsByTagName("p");
para[0].innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing eli neque quia modi repellendus hic iste vero magnam ullam ";
const linking=document.getElementsByClassName("linking");
linking[0].innerHTML="next";
linking[0].href="practice2.html";

var gonext=()=>{
    window.history.forward();
}
console.log(window.innerWidth); */
// Creating an object using object literal notation
/* let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    start: function() {
      console.log("Engine started");
    }
  };
  
  // Accessing properties and methods
  console.log(car.brand);  // Output: Toyota
  car.start();  */            // Output: Engine started

  // Class declaration
/* class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    start() {
      console.log("Engine started");
    }
  }
  
  // Creating an object using the class
  let myCar = new Car("Toyota", "Camry", 2022);
  
  // Accessing properties and methods
  console.log(myCar.brand);  
  myCar.start();  */ 
  
//Encapsulation


// Abstraction example
/* function person(fname, lname) {
	let firstname = fname;
	let lastname = lname;

	let getDetails_noaccess = function () {
		return (`First name is: ${firstname} Last 
			name is: ${lastname}`);
	}

	this.getDetails_access = function () {
		return (`First name is: ${firstname}, Last 
			name is: ${lastname}`);
	}
}
let person1 = new person('Mukul', 'Latiyan');
console.log(person1.firstname);
console.log(person1.getDetails_noaccess);
console.log(person1.getDetails_access()); */

  

  // Inheritance example
/* class person {
	constructor(name) {
		this.name = name;
	}
	// method to return the string
	toString() {
		return (`Name of person: ${this.name}`);
	}
}
class student extends person {
	constructor(name, id) {
		// super keyword for calling the above 
		// class constructor
		super(name);
		this.id = id;
	}
	toString() {
		return (`${super.toString()},
		Student ID: ${this.id}`);
	}
}
let student1 = new student('Mukul', 22);
console.log(student1.toString());
 */

//polymorphism

/* class firstClass {
	add() {
		console.log("First Method")
	}
}
class secondClass extends firstClass {
	add() {
		console.log(30 + 40);
	}
}
class thirdClass extends secondClass {
	add() {
		console.log("Last Method")
	}
}
let ob = new firstClass();
let ob2 = new secondClass();
let ob3 = new thirdClass();
ob.add();
ob2.add();
ob3.add(); */



  
