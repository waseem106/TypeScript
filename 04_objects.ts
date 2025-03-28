
let car:{
    name:string,
    model:number,
    color:string,
    isNew?:boolean
    
}

car={
    name:"honda",
    model:2025,
    color:"gray",
   
}
car.isNew=true   



// we can define that the object keys would be string and their values should also be the string

//? Index Signatures
const myNewObject:{[index:string]:string}={}

myNewObject.name="waseem"
myNewObject.class="aziz"
// myNewObject.city=2334  it will give an error 
myNewObject.age="18"
