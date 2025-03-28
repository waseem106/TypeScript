// Return Type
//the type number after the function will ensure that the function will return the number type
//if no type is defined the typescript will attemtp to infer it through the types of varibles or expressions returned

function sum(a:number,b:number):number{
    return a+b
}



// void return type is used to indicate that the function doesnot return anything

function display():void{
    console.log("This function will not return anything")
}

// optional parameters  by default typescript will assume all parameters are required but they can be explicitly defined as optional

function multiply(x:number,y?:number):number{
    return x*x
}

// multiply(234) it will give error that 2 arguments are required
multiply(234) // now i set the parameter optional so it doesnot create error
multiply(23,434)



// default parameters  we can set the paramters values as default
function myFunction(x:number,y:number=234):number
{
    return  (x+y)
}



//rest paramters can also be typed like normal paramters but their type would be array
function add(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
  }