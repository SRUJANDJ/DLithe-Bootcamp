/* let r=(a:number)=>{    console.log(a)}
r(10) */

/* let x=10
x=20
console.log(x); */

/* let x=[]
x=[1,2,"s"]
console.log(x); */

/* let a:any=true
a="sru"
console.log(a);
 */

/* let anyVariable: any = 10;
let stringValue: string = anyVariable; // No error, even though it's not a string

let anotherVariable: any = "Hello";
let lengt: number = anotherVariable; // No error, even though it might fail at runtime

console.log(typeof(stringValue));
console.log(typeof(lengt)); */

/* let unknownVariable: unknown = 10;
// Error: Type 'unknown' is not assignable to type 'string'.
console.log(typeof(unknownVariable));
if (typeof(unknownVariable)==='number'){
    var safelyAssigned: number = unknownVariable; 
    console.log(safelyAssigned);
    
}
 */


/* enum direction{
    north="north",
    east="east",
    south="south",
    west="west"
}

console.log(direction.north);

let details:{name?:string,age?:number,alive?:boolean}={};
details.name="srujan";
details.age=22;
details.alive=true;
console.log(details); */


/* type fname=string
type age=number
type alive=boolean

type details={
    fname:fname,
    age:age,
    alive:alive
}

const fname:fname="srujan"
const age:age=22
const alive:alive=true

const detail:details={
    fname:fname,
    age:age,
    alive:alive
}
console.log(detail); */


/* let x:string|number=10
console.log(x);

x="srujan"
console.log(x); */

/* let x=(value:number|string):number=>{
    if (typeof(value)=='number'){
        console.log('number');
        
    }
    else{
        console.log("string");
        
    }
    return 10
}
x("srujan") */

/* class rectange{
    public constructor(width:number,height:number){
    }
    
    public getarea=()=>{
        return this.width* this.height;
    }
} */
/* class Rectangle {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
        
  class Square extends Rectangle {
    public constructor(width: number) {
      super(width,width);
    }
    // getArea gets inherited from Rectangle
  }
  
  const mySq = new Square(20);
  
  console.log(mySq.getArea()); */

/*  interface details{
    name:string,
    age:number,
    alive:boolean
 }
let partialdetails:Partial<details>={name:"man"};
console.log(partialdetails);
let reqdetails:Required<details>={name:"man",age:22,alive:true};
console.log(reqdetails);
let recdetails:Record<string,number>={
    "name":22,
    "sm":33
}
console.log(recdetails);
let omitdetails:Omit<details,'name'|'age'>={alive:true};
console.log(omitdetails);
let pickdetails:Pick<details,'name'|'age'>={name:"srujan",age:22};
console.log(pickdetails); */

/* function trial<s,t>(name:s,age:t):[s,t]{
    return [name,age]
}

console.log(trial<string,number>("srujan",22)); */

/* function first<s>(arr:s[]){
    return arr[0]
}

const numbers=[1,2,3]
const strings=["ss",'sr']
console.log(first<number>(numbers)); */

/* class users{
    public constructor(readonly name:string,readonly age:number,public salary:number){
        this.name=name;
        this.age=age;
        this.salary=salary
        
    }
    public salaryincre=()=>{
        this.salary=this.salary+(this.salary*.1)
    }

    protected getdetails =()=>{
        this.salaryincre()
        console.log(this.name,this.age,this.salary);
        
    }
}
class manager extends users{
    public constructor( name:string,age:number,salary:number,public desgn:string){
        super(name,age,salary)
        this.desgn=desgn
    }
    public getfulldetail =()=>{
        this.getdetails()
        console.log(this.desgn)
    }
}

const user=new manager("srujan",22,100000,"manager")
user.getfulldetail()
 */
/* const userone=new users("srujan",22,100000);
console.log(userone.salary);

userone.getdetails()
console.log(userone.salary);
userone.salaryincre()
console.log(userone.salary); */


/* let x:[number,string]=[1,"srujan"]
x.push(2,"s")
console.log(x);
 */


//Conditional statements 
/* let a=10
let b=20
let c=30
if (a>=b && a>=c)
    console.log(`${a} is greater than ${b} and ${c}`);
else if(b>=c)
    console.log(`${b} is greater than ${a} and ${c}`);
else    
    console.log(`${c} is greater than ${a} and ${b}`); */

 

//Loops
/* let i=0
while(i<20){
    if(i%2==0)
        console.log(i);
    i++
}
i=0

do{
    console.log(i," from do while");
    i++
    
}while(i<0);

for(let i=0;i<10;i++){
    console.log(i);
} */



//switch
/* let day : number = 4;

switch (day) {
    case 0:
        console.log("It is a Sunday.");
        break;
    case 1:
        console.log("It is a Monday.");
        break;
    case 2:
        console.log("It is a Tuesday.");
        break;
    case 3:
        console.log("It is a Wednesday.");
        break;
    case 4:
        console.log("It is a Thursday.");
        break;
    case 5:
        console.log("It is a Friday.");
        break;
    case 6:
        console.log("It is a Saturday.");
        break;
    default:
        console.log("No such day exists!");
        break;
}
 */

/* class sru{
    nma:string;
    constructor(nma:string){
        this.nma=nma
    }
}
interface man extends sru{
    nn:number
}
class men implements man{
    nma:string;
    nn:number
    constructor(nma:string,nn:number){
        this.nma=nma
        this.nn=nn
    }
}
const ob=new men("s",1)
console.log(ob.nma,ob.nn); */


//interface
/* interface emp_interface{
    name:string,
    age:number,
    dept:string,
    details():void
}
interface emp_sal extends emp_interface{
    salary:number
    increment():void
}
class employee implements emp_sal{ */
interface emp_interface{
    name:string,
    age:number,
    dept:string,
    details():void
}
interface emp_sal {
    salary:number
    increment():void
}
class employee implements emp_sal,emp_interface{
    name:string
    age:number
    dept:string
    salary: number

    constructor(name:string,age:number,dept:string,salary:number){
        this.name=name
        this.age=age
        this.dept=dept
        this.salary=salary
    }

    details(): void {
        console.log(`user details: name ${this.name} age ${this.age} dept ${this.dept}
        and salary of the employee is ${this.salary}`);
        console.log("\n");
    }

    increment(): void {
        this.salary=this.salary+(this.salary*.1)
    }

}
const emp_one=new employee("srujan",22,"dev",100000)
emp_one.details()
emp_one.increment()
emp_one.details()








 
 






