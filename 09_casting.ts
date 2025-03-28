//? TypeScript type casting allows you to tell the compiler to treat a variable as a different type.

//* Type Casting Using (as)
let value: unknown = "Hello, TypeScript!";
let length1: number = (value as string).length;

console.log(length1); // Output: 17



//* Type Casting Using Angle Brackets < >
//  works same like as but canot be used jsx and tsx    
let value1: any = "1234";
let num1: number = (value1 as unknown) as number; 

console.log(num1); // No error, but incorrect

