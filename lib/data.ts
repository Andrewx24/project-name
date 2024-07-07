let a:number =1;

a=32;

console.log(a);

interface Person {
    name : string;
    age : number;
}

const person:Person = {
    name : "abc",
    age : 23

}

type PersonType = { name : string, age : number};

const person2:PersonType = {
    name : "abc",
    age : 23 
}


 export default a;