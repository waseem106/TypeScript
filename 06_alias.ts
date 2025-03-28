// ? ALias allows you to defined custom name to the types

//Syntax   type  AliasName=TypeDefination
type UserId=number
type UserName=string

const userId:UserId=12312
const userName:UserName="waseem"



//usage of alias in objects

type post={
    title:string;
    content?:string;
    author?:string;
    id?:number;
}

const newPost:post={
    title:"waseem",
    content:"this is my first post",
    author:"waseemaziz",
    id:1
}

// we just defined a alias type and used it in our new object to save time and can u use it another objects when needed
