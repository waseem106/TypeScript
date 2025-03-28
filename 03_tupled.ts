// * A tupple is typed array with predefined length  and types for each index
// to define a tuple, specify the type of each  element in the array
// Tuples only have strongly defined types for the initial values:
let myTuple:[number,string,boolean]
myTuple=[4,"Tuple",true]
// myTuple=[true,"tuple",4]  //!if we try to initialize them in wrong order it will give error 
myTuple.push("Hamza")
myTuple.push(23)




// ? ReadOnly Tuple

let myTuple2: readonly [string,number,boolean]
myTuple2=["waseem",324,false]




//? Named Tuples allow us to provide the context for our values at each index

const graph:[x:number,y:number]=[234234,234234]



//? Destructuring the Tuples
//? as tuples are also arrays we can destructure them

const graph2: readonly[number,number]=[123,456]
const [x,y]=graph2