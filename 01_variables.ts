
//? In TypeScript data can be typed in two main ways

//* static typing:(explicit)
//explicitly defining the data type 
var num:string="Waseem"

//* dynamic typing(explicit) special type
//any disables the type checking 
let num2 :any
num2="waseem"


//unkown is used where we are not familiar what type of data is going to be stored
let data:unknown
data={name:"ali"}


//? :Never  it is a special type that says the variable can never hold a value
//  question arises if never never assigns a value to the variable then why do we need it this is beacuse in some senarios like payment methods we want to strict that other than defined payement methods no other method can be define
let data2:never
// data2="waeem" it will give error







//* Type Inference(implicit) and Union Types

//?Type inference is a powerful TypeScript feature that allows the compiler to automatically deduce the type of a variable based on the value assigned to it during initialization. 
let username="Waseem"
// username=234234   gives error 



//?Union Types
// Union types allow a variable to hold values of multiple types. They are defined by placing a pipe (|) between the types. This feature is particularly useful when a variable may legitimately have more than one type during its lifecycle.
let num3:number|string|boolean
num3="waseem"
num3=234234
num3=true 
console.log(num3)



 let user:{
    name:string;
    city:string;
    present:boolean;
    absent:boolean;
}

user={
    name:"waseem",
    city:"guj",
    present:true,
    absent:false
}