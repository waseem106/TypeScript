
const names:string[]=[]

names.push("waseem")
names.push("ali")
// names.push(1223) gives error 
// names.push(true) gives error 






// ? readonly keyword can prevent arrays from being changed

const names2:readonly string[]=["waseem"]
// names2.push("ahmed") gives error 



//? Typescript can inffer the type of array values if it has values

const numbers=[12,23,45,23,5]
numbers.push(34)
// numbers.push("234") gives error because the type of array is now number 
