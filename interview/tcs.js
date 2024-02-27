// hoisting in java
console.log("Welcome to Programiz!");
const  a=50;
if(a){
    const a =20;
    console.log(a)
}
 console.log(a)
 
 greet();
 function greet(){
     console.log("greet")
 }
