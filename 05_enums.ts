// ? what is enum?
//? Enum is the one of the feature of typescript which is not a type-level extension of JavaScript
// Enum allow developers to define set of named constants

//* Numeric Enum
//enum can be defined using enum keyword

enum Direction{
    Up=1,
    Down,
    Right,
    Left
}
// console.log(Direction.Up)    //1
// console.log(Direction.Down); //2
// console.log(Direction.Right);//3
// console.log(Direction.Left); //4


// here up is initialized as 1 so the following members are auto incremented from the point on down would be 2 ,right would be 3 , left would be 4
//if the first is not assigned typescript will start form 0

//*String Enum
// ? String Enum are not auto incremented behavior
enum StringDirection {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }