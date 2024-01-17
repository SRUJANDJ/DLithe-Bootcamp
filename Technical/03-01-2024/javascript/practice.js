/* 
output methods
*console.log
*document.write
*alert
*confirm
*prompt
 */


/* let i=0;
while (i<5){
    console.log(i)
    i=i+1;
} */
/* arr=[1,2,3,4,5]
mid=parseInt(arr.length/2)
console.log(arr[mid]); */

/* arr=[1,2,3,4,5]
console.log(arr.pop(),arr);
console.log(arr.push(5),arr);
console.log(arr.shift(),arr);
console.log(arr.unshift(1),arr);
console.log(arr.splice(0,2,45,55,65),arr);
console.log(arr.find(i=>i>55)); */


//creating arry
/* let arr=new Array(1,2,3,4)
console.log(arr);
let arrone=Array.of(1,2,3,4,5)
console.log(arrone); */

//array traversing
/* arr=[1,2,3,4,5]
arr.forEach(element => {
    console.log(element*2);
});
 */
/* var arr=["hii",2.4,56,true]
for(let i of arr){
console.log(i);
}
// iterate index - for in loop
var arr=["hii",2.4,56,true]
for(let i in arr){
console.log(i);
}
 */

//strings
/* let str="aaaabbbb"
let res=str.replaceAll('a','c')
console.log(res) */


/* let a=function(x,y){
    return x+y
}
console.log(a(10,2)); */

/* function mathOperation(a,b,callback)
{
return callback(a,b)
}
let result=mathOperation(10,20,(a,b)=>{
return a+b;
})
console.log(result); // 30
let result1=mathOperation(10,20,(a,b)=>{
return a*b;
})
console.log(result1); // 200 */

//objects
/* let employee={
    name:"shridhar",
    age:26,
    skills:["html","css"]
    }
console.log(employee.skills[1]);     */

/* let student={
    name:"John",
    rollno:1001,
    age:23,
    address:{
    streetname:"Ashoknagar",
    city:"Bangalore",
    pincode:581350
    }
    }
console.log(student.address.streetname);
 */
/* let x=parseInt(Math.random()*100)
console.log(x); */

/* let obj4=new Object("ram3",23,20000,"tcs")
console.log(obj4); */
/* let obj5=new object("ram3",23,20000,"tcs")
console.log(obj5);  */

const originalObject={
    name:"shridhar",
    address:{
    city:"murdeshwar"
    }
    }
    const ShallowCopy={...originalObject}
console.log(ShallowCopy);