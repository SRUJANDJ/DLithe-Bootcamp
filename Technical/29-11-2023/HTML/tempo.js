/* var a=10,b=20,c="30";
sum=a+b
console.log(b+" + "+a+' is ',(a+b));
console.log(b+" - "+a+' is ',(b-a));
console.log(b+" * "+a+' is ',(b*a));
console.log(b+" / "+a+' is ',(b/a));
console.log(b+" % "+a+' is ',(b%a));

console.log(a,b,c)

console.log("a+=b is ",a+=b)
a-=b
console.log("a=a+b is",a=a+b)

console.log(a,b,c)
console.log("a-=b is ",a-=b)
a+=b
console.log("a=a-b is",a=a-b)

console.log(a,b,c)
console.log("a*=b is ",a*=b)
a/=b
console.log("a=a*b is",a=a*b)

console.log(a,b,c)
console.log("a/=b is ",a/=b)
a*=b
console.log("a=a/b is",a=a/b)

console.log(a,b,c)
console.log("a < b ",a<b)
console.log("a <= b ",a<=b)
console.log("a >= b ",a>=b)
console.log("a > b ",a>b)

console.log(a,b,c)
console.log("a+b == c ",(a+b)==c)
console.log("a+b === c ",(a+b)===c)

console.log("true or false",true || false);
console.log("true and false",true && false);
console.log("not true",!true)
 */







/* 
 function add(num1,num2){
    console.log("named function")
    console.log(num1+num2)
}


anonymous function
var comparision=function(num1,num2){
    console.log("anonymous function")
    console.log(num1+" < "+num2,num1<num2)
}


arrow function
var logic_al=(num1,num2)=>{
    console.log("arrow function")
    console.log(num1 +" and "+num2,num1&&num2)
    console.log(num1 +" or "+num2,num1||num2)
}
add(5,9);
comparision(10,20);
logic_al(true,false);

IIFE
(()=>{
    console.log("IIFE function")
    console.log("THE END")
})();*/

/* var arr=[1,2,3,4,5,6,7,8,9]
console.log(arr)
console.log(arr.length)
arr.push(10)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift(0,1)
arr.splice(5,4,11,12,13,14)
console.log(arr)
var array=arr.concat();
console.log(array)
console.log(arr.indexOf(2))
var greater_than_12=(item)=>{
    if (item>12)
        return item;
}
console.log(arr.find(greater_than_12))
console.log(arr.includes(14))
console.log(arr.findIndex(greater_than_12))
let total=0
var trial=(item)=>{
    total+=item;
    
}
arr.forEach(trial)
console.log(total) */
var paragraph=document.getElementById("para");
paragraph.innerHTML="Hello man"
paragraph.innerHTML=window.innerWidth;
function gonext(){
    window.history.forward();
}
