/* const numbers=[1,2,3,4,5]
const [a,b,c,d,e]=numbers;
console.log(a,b,c,d,e);
 */
/* const numbers = [1, 2, 3, 4, 5];

// Using rest syntax to capture remaining elements
const [first, second, ...rest] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5] */

/* basic object destructuring */
/* const person = { name: 'Alice', age: 30 }; */
/* console.log(person.age) */
/* console.log(person['age']) */

// Extracting values from the object
/* const { name, age } = person;

console.log(name); // 'Alice'
console.log(age);  // 30 */

/* const person = { name: 'Alice', age: 30 };

// Aliasing properties while destructuring
const { name: personName, age: personAge } = person;

console.log(personName); // 'Alice'
console.log(personAge);  // 30 */

/* const user = { name: 'Alice', age: 30, country: 'Wonderland' };

// Using rest syntax to capture remaining properties
const { name, ...details } = user;

console.log(name);    // 'Alice'
console.log(details); // { age: 30, country: 'Wonderland' } */

/* function adding(one,two){
    result=one+two
    return result
}

console.log(adding(5,4));

const resulttwo=(one,two)=>{
    return one,two
}

/* Syncronous js in nature*/
/* console.log('first')
console.log('second')
console.log('third') */

/* Asyncronous js */
/* console.log('first');
setTimeout(() => {
    console.log('This is executed after 3 seconds.');
  }, 3000);
console.log('third'); */
